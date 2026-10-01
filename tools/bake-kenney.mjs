/**
 * Bake the Kenney "Modular Buildings" pack into a compact runtime payload.
 *
 * WHY BAKE INSTEAD OF LOADING GLB AT RUNTIME
 * ------------------------------------------
 * 1. The pack is 108 separate files. GLTFLoader would issue 108 requests (or
 *    one big merge) for what is ultimately ~7k triangles.
 * 2. The source material is a *flat palette atlas*: 16 colour swatches with
 *    baked light/dark gradients, no texture detail. Sampling it once here
 *    lets us bake the colour into a vertex attribute and drop the texture
 *    entirely — no atlas, no UV clamping, no mip artefacts at distance.
 * 3. The atlas is authored in glTF UV space (v=0 at the TOP of the image).
 *    three.js TextureLoader defaults to flipY=true, which would flip it and
 *    sample every texel from the empty black half. Baking removes the whole
 *    class of bug.
 * 4. Colouring glass separately from solid walls is what makes a night city
 *    read. The atlas makes this trivial to detect (glass texels are blue and
 *    bright), and a vertex attribute is cheaper than a second material.
 *
 * OUTPUT
 * ------
 *   src/world/buildingKit.json  — base64 typed arrays + manifest.
 *
 * Positions are Int16-quantised against the pack's native bounds; normals are
 * Int8. That is well past the precision a 60-140m-distant parallax layer can
 * resolve, and it keeps the payload small enough to inline.
 *
 * Usage:  node tools/bake-kenney.mjs [--src <dir>] [--out <file>]
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { inflateSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, '..');

const argv = process.argv.slice(2);
const argOf = (name, fallback) => {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};

const SRC = argOf('--src', join(REPO, 'assets', 'kenney-modular-buildings'));
const OUT = argOf('--out', join(REPO, 'src', 'world', 'buildingKit.json'));
const ATLAS = join(SRC, 'Textures', 'colormap.png');

// ---------------------------------------------------------------------------
// Minimal PNG reader (palette + RGB, 8-bit, non-interlaced).
// Kenney's colormap.png is 8-bit indexed colour; we need real pixel access to
// classify faces, so we decode it rather than trusting the palette indices.
// ---------------------------------------------------------------------------

function readPNG(path) {
  const buf = readFileSync(path);
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error('not a PNG');

  let pos = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  const idat = [];
  let plte = null;
  let trns = null;

  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      if (data[12] !== 0) throw new Error('interlaced PNG unsupported');
    } else if (type === 'PLTE') {
      plte = Buffer.from(data);
    } else if (type === 'tRNS') {
      trns = Buffer.from(data);
    } else if (type === 'IDAT') {
      idat.push(Buffer.from(data));
    } else if (type === 'IEND') {
      break;
    }
    pos += 12 + len;
  }

  if (bitDepth !== 8) throw new Error(`unsupported bit depth ${bitDepth}`);
  const channels = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[colorType];
  if (!channels) throw new Error(`unsupported colour type ${colorType}`);

  const raw = inflateSync(Buffer.concat(idat));
  const stride = width * channels;
  const out = Buffer.alloc(height * stride);
  let prev = Buffer.alloc(stride);
  let rp = 0;

  for (let y = 0; y < height; y++) {
    const filter = raw[rp++];
    const line = Buffer.from(raw.subarray(rp, rp + stride));
    rp += stride;
    const cur = out.subarray(y * stride, (y + 1) * stride);

    for (let x = 0; x < stride; x++) {
      const a = x >= channels ? cur[x - channels] : 0;
      const b = prev[x];
      const c = x >= channels ? prev[x - channels] : 0;
      let v = line[x];
      switch (filter) {
        case 0: break;
        case 1: v += a; break;
        case 2: v += b; break;
        case 3: v += (a + b) >> 1; break;
        case 4: {
          const p = a + b - c;
          const pa = Math.abs(p - a);
          const pb = Math.abs(p - b);
          const pc = Math.abs(p - c);
          v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
          break;
        }
        default: throw new Error(`bad filter ${filter}`);
      }
      cur[x] = v & 0xff;
    }
    prev = cur;
  }

  // Normalise to RGB triplets.
  const rgb = new Uint8Array(width * height * 3);
  for (let i = 0; i < width * height; i++) {
    let r;
    let g;
    let b;
    if (colorType === 3) {
      const idx = out[i];
      r = plte[idx * 3];
      g = plte[idx * 3 + 1];
      b = plte[idx * 3 + 2];
      if (trns && idx < trns.length && trns[idx] === 0) { r = g = b = 0; }
    } else if (colorType === 0 || colorType === 4) {
      r = g = b = out[i * channels];
    } else {
      r = out[i * channels];
      g = out[i * channels + 1];
      b = out[i * channels + 2];
    }
    rgb[i * 3] = r;
    rgb[i * 3 + 1] = g;
    rgb[i * 3 + 2] = b;
  }
  return { width, height, rgb };
}

// ---------------------------------------------------------------------------
// Minimal GLB reader.
// ---------------------------------------------------------------------------

function readGLB(path) {
  const buf = readFileSync(path);
  if (buf.toString('ascii', 0, 4) !== 'glTF') throw new Error('not a GLB');
  const total = buf.readUInt32LE(8);

  let pos = 12;
  let json = null;
  let bin = null;
  while (pos + 8 <= Math.min(12 + total, buf.length)) {
    const len = buf.readUInt32LE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === 'JSON') json = JSON.parse(data.toString('utf8'));
    else if (type === 'BIN\0') bin = data;
    pos += 8 + len;
  }
  return { json, bin };
}

const COMPONENT = {
  5120: { array: Int8Array, size: 1 },
  5121: { array: Uint8Array, size: 1 },
  5122: { array: Int16Array, size: 2 },
  5123: { array: Uint16Array, size: 2 },
  5125: { array: Uint32Array, size: 4 },
  5126: { array: Float32Array, size: 4 },
};
const TYPE_COUNT = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 };

function readAccessor(gltf, bin, index) {
  const acc = gltf.accessors[index];
  const view = gltf.bufferViews[acc.bufferView];
  const comp = COMPONENT[acc.componentType];
  const n = TYPE_COUNT[acc.type];
  const base = (view.byteOffset ?? 0) + (acc.byteOffset ?? 0);
  const stride = view.byteStride ?? 0;

  const out = new Float32Array(acc.count * n);
  for (let i = 0; i < acc.count; i++) {
    const off = base + (stride ? i * stride : i * comp.size * n);
    for (let k = 0; k < n; k++) {
      const at = off + k * comp.size;
      switch (acc.componentType) {
        case 5120: out[i * n + k] = bin.readInt8(at); break;
        case 5121: out[i * n + k] = bin.readUInt8(at); break;
        case 5122: out[i * n + k] = bin.readInt16LE(at); break;
        case 5123: out[i * n + k] = bin.readUInt16LE(at); break;
        case 5125: out[i * n + k] = bin.readUInt32LE(at); break;
        case 5126: out[i * n + k] = bin.readFloatLE(at); break;
        default: throw new Error(`bad componentType ${acc.componentType}`);
      }
    }
  }
  return out;
}

/** Apply a glTF node transform (TRS or 4x4) to a vec3. */
function xformNode(node, x, y, z) {
  let r = [x, y, z];
  if (node.matrix) {
    const m = node.matrix;
    const tx = m[0] * r[0] + m[4] * r[1] + m[8] * r[2] + m[12];
    const ty = m[1] * r[0] + m[5] * r[1] + m[9] * r[2] + m[13];
    const tz = m[2] * r[0] + m[6] * r[1] + m[10] * r[2] + m[14];
    r = [tx, ty, tz];
  }
  if (node.scale) r = [r[0] * node.scale[0], r[1] * node.scale[1], r[2] * node.scale[2]];
  if (node.rotation) {
    const [qx, qy, qz, qw] = node.rotation;
    const [cx, cy, cz] = r;
    // v' = v + 2 * cross(q.xyz, cross(q.xyz, v) + q.w * v)
    const ix = qw * cx + qy * cz - qz * cy;
    const iy = qw * cy + qz * cx - qx * cz;
    const iz = qw * cz + qx * cy - qy * cx;
    const iw = -qx * cx - qy * cy - qz * cz;
    r = [
      cx + 2 * (qy * iz - qz * iy),
      cy + 2 * (qz * ix - qx * iz),
      cz + 2 * (qx * iy - qy * ix),
    ];
    void iw;
  }
  if (node.translation) {
    r = [r[0] + node.translation[0], r[1] + node.translation[1], r[2] + node.translation[2]];
  }
  return r;
}

// ---------------------------------------------------------------------------
// Face classification — splits window glass from walls, trim and metal.
//
// The atlas is a flat swatch sheet, so colour is the only available signal.
// Measuring every face in the pack (see tools/dump-separation.mjs) shows a
// cleanly bimodal distribution on `b - r`:
//
//   walls, trim, terracotta   b-r in [-130, -57]   warm; the bulk of the pack
//   grey metal, AC housings   b-r in [  2,  22]   near-neutral, cool-light
//   window glazing            b-r in [ 46,  98]   strongly blue
//
// The 22..46 band is empty, so one threshold at 38 separates glass from
// everything else with no overlap. A "bright and slightly cool" rule is not
// good enough: it also catches the rooftop AC housings (rgb 195,195,217),
// which would light up every plant room in the city.
// ---------------------------------------------------------------------------

const GLASS_MIN_B_MINUS_R = 38;

function classifyGlass(r, g, b) {
  void g;
  return b - r >= GLASS_MIN_B_MINUS_R;
}

// ---------------------------------------------------------------------------

if (!existsSync(SRC)) {
  console.error(
    `Missing asset directory: ${SRC}\n` +
    `Download "Kenney Modular Buildings" (CC0) from:\n` +
    `  https://kenney.nl/assets/modular-buildings\n` +
    `and unzip the "Models/GLB format" folder there.`
  );
  process.exit(1);
}

const atlas = readPNG(ATLAS);

/** Sample the atlas. glTF UV space: v=0 is the TOP row of the image. */
function sample(u, v) {
  const x = Math.min(atlas.width - 1, Math.max(0, Math.round(u * atlas.width)));
  const y = Math.min(atlas.height - 1, Math.max(0, Math.round(v * atlas.height)));
  const i = (y * atlas.width + x) * 3;
  return [atlas.rgb[i], atlas.rgb[i + 1], atlas.rgb[i + 2]];
}

/**
 * The pieces actually used by the composer. Kept explicit rather than
 * "everything" so the payload stays lean and each entry is a deliberate
 * choice — an unused 40-triangle piece is 40 triangles of instanced draw.
 */
const WANTED = [
  // --- structure ---
  'block',
  'corner', 'corner-bottom', 'corner-top',
  'corner-window', 'corner-window-middle', 'corner-window-narrow',
  'corner-window-sill', 'corner-window-top-round', 'corner-window-top-square',
  // --- fenestration ---
  'window', 'window-wide', 'window-sill', 'window-wide-sill',
  'window-left', 'window-right', 'window-left-sill', 'window-right-sill',
  'windows', 'windows-sills', 'windows-round', 'windows-sills-round',
  'windows-high-middle', 'windows-high-top-round', 'windows-high-top-square',
  'window-large', 'window-large-left', 'window-large-middle', 'window-large-right',
  'window-balcony', 'window-awnings',
  'window-door-window', 'window-door-window-round',
  // --- doors (ground floor) ---
  'door', 'door-window', 'door-window-narrow', 'edges-door',
  // --- roof caps ---
  // Only flat roofs are baked. The kit's pitched roofs (roof-gable*,
  // roof-slanted*) sample the dark part of the atlas — measured mean luminance
  // 0.05-0.18 linear, up to 67% near-black vertices — because their upward
  // slopes UV into texels the pack never authored for a night scene. They are
  // unusable on a distant skyline and cost payload to carry.
  'roof-flat-top', 'roof-flat-center', 'roof-flat-corner', 'roof-flat-corner-high',
  'roof-flat-border-straight', 'roof-flat-border-side', 'roof-flat-border-end',
  'roof-flat-border-corner', 'roof-flat-border-center',
  'roof-flat-detail-a', 'roof-flat-detail-b', 'roof-flat-detail-c', 'roof-flat-detail-d',
  'roof-flat-awning-a', 'roof-flat-awning-b', 'roof-flat-awning-c',
  // --- rooftop clutter ---
  'detail-ac-a', 'detail-ac-b',
  // --- massing extras ---
  'steps-narrow', 'steps-wide', 'steps-narrow-windows', 'steps-narrow-windows-round',
];

// Quantisation bounds. The pack is authored on a 1x1x0.625 grid; a couple of
// pieces (roofs, details) poke slightly outside. Int16 over a symmetric range
// of +/-1.2 units gives ~3.7e-5 resolution, far below what a 60m+ parallax
// layer can show.
const QUANT_RANGE = 1.2;
const QUANT_SCALE = 32767 / QUANT_RANGE;

const pieces = {};
let totalTris = 0;
let totalGlassTris = 0;

/**
 * The pack is inconsistent about prefixes: wall/window/door pieces are named
 * `building-<name>.glb`, but roofs, details and steps are bare `<name>.glb`.
 * Resolve both rather than hard-coding one convention.
 */
function resolve(name) {
  for (const candidate of [`${name}.glb`, `building-${name}.glb`]) {
    const file = join(SRC, candidate);
    if (existsSync(file)) return file;
  }
  return null;
}

for (const name of WANTED) {
  const file = resolve(name);
  if (!file) {
    console.warn(`  ! missing ${name}.glb — skipped`);
    continue;
  }

  const { json, bin } = readGLB(file);

  const outPos = [];
  const outNrm = [];
  const outCol = [];
  const solidIdx = [];
  const glassIdx = [];

  const nodes = json.nodes ?? [];
  const meshes = json.meshes ?? [];

  for (const nd of nodes) {
    if (nd.mesh === undefined) continue;
    const mesh = meshes[nd.mesh];
    for (const prim of mesh.primitives) {
      if (prim.material === undefined && prim.attributes.POSITION === undefined) continue;
      const pos = readAccessor(json, bin, prim.attributes.POSITION);
      const nrm = prim.attributes.NORMAL !== undefined
        ? readAccessor(json, bin, prim.attributes.NORMAL)
        : null;
      const uv = prim.attributes.TEXCOORD_0 !== undefined
        ? readAccessor(json, bin, prim.attributes.TEXCOORD_0)
        : null;
      // `readAccessor` returns a flat typed array of componentCount-sized
      // groups, so indices arrive as consecutive scalars, not tuples.
      const idxRaw = prim.indices !== undefined
        ? readAccessor(json, bin, prim.indices)
        : null;

      const vertexCount = pos.length / 3;

      // Dedup: glTF meshes share vertices, but a vertex belongs to exactly one
      // face orientation here, so a straightforward copy is both correct and
      // lets us classify per-face without seams.
      const map = new Map();
      const emit = (vi) => {
        const p = xformNode(nd, pos[vi * 3], pos[vi * 3 + 1], pos[vi * 3 + 2]);
        const key = `${p[0].toFixed(4)},${p[1].toFixed(4)},${p[2].toFixed(4)}`;
        let at = map.get(key);
        if (at !== undefined) return at;
        at = outPos.length / 3;
        outPos.push(p[0], p[1], p[2]);
        if (nrm) {
          const n = xformNode(nd, nrm[vi * 3], nrm[vi * 3 + 1], nrm[vi * 3 + 2]);
          const len = Math.hypot(n[0], n[1], n[2]) || 1;
          outNrm.push(n[0] / len, n[1] / len, n[2] / len);
        } else {
          outNrm.push(0, 1, 0);
        }
        if (uv) {
          const [r, g, b] = sample(uv[vi * 2], uv[vi * 2 + 1]);
          outCol.push(r, g, b);
        } else {
          outCol.push(200, 200, 200);
        }
        map.set(key, at);
        return at;
      };

      const triCount = idxRaw ? idxRaw.length / 3 : vertexCount / 3;
      for (let t = 0; t < triCount; t++) {
        const i0 = idxRaw ? idxRaw[t * 3] : t * 3;
        const i1 = idxRaw ? idxRaw[t * 3 + 1] : t * 3 + 1;
        const i2 = idxRaw ? idxRaw[t * 3 + 2] : t * 3 + 2;
        const a = emit(i0);
        const b = emit(i1);
        const c = emit(i2);
        // Face colour: mean of the three atlas samples, so a window pane with a
        // lighter frame resolves as glass rather than as whichever corner won.
        let r = 0;
        let g = 0;
        let bl = 0;
        for (const vi of [i0, i1, i2]) {
          const [sr, sg, sb] = sample(uv[vi * 2], uv[vi * 2 + 1]);
          r += sr; g += sg; bl += sb;
        }
        const glass = classifyGlass(r / 3, g / 3, bl / 3);
        if (glass) {
          glassIdx.push(a, b, c);
          totalGlassTris++;
        } else {
          solidIdx.push(a, b, c);
        }
        totalTris++;
      }
    }
  }

  if (outPos.length === 0) {
    console.warn(`  ! ${name} produced no geometry — skipped`);
    continue;
  }

  const posF = new Float32Array(outPos);
  const nrmF = new Float32Array(outNrm);
  const colU = new Uint8Array(outCol);
  const posQ = new Int16Array(posF.length);
  for (let i = 0; i < posF.length; i++) {
    posQ[i] = Math.max(-32767, Math.min(32767, Math.round(posF[i] * QUANT_SCALE)));
  }
  const nrmQ = new Int8Array(nrmF.length);
  for (let i = 0; i < nrmF.length; i++) {
    nrmQ[i] = Math.max(-127, Math.min(127, Math.round(nrmF[i] * 127)));
  }

  // Bounds, for the composer to centre pieces on the grid origin.
  const bb = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity];
  for (let i = 0; i < posF.length; i += 3) {
    for (let k = 0; k < 3; k++) {
      bb[k] = Math.min(bb[k], posF[i + k]);
      bb[3 + k] = Math.max(bb[3 + k], posF[i + k]);
    }
  }

  pieces[name] = {
    pos: Buffer.from(posQ.buffer).toString('base64'),
    nrm: Buffer.from(nrmQ.buffer).toString('base64'),
    col: Buffer.from(colU.buffer).toString('base64'),
    idx: Buffer.from(new Uint32Array(solidIdx).buffer).toString('base64'),
    gidx: Buffer.from(new Uint32Array(glassIdx).buffer).toString('base64'),
    v: posF.length / 3,
    bb: bb.map((n) => +n.toFixed(4)),
  };
}

const payload = {
  format: 1,
  source: 'Kenney — Modular Buildings',
  license: 'CC0 1.0 Universal (public domain)',
  url: 'https://kenney.nl/assets/modular-buildings',
  quant: { range: QUANT_RANGE },
  atlas: { w: atlas.width, h: atlas.height },
  stats: {
    pieces: Object.keys(pieces).length,
    tris: totalTris,
    glassTris: totalGlassTris,
  },
  pieces,
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(payload));

const bytes = Buffer.byteLength(JSON.stringify(payload));
console.log(
  `baked ${Object.keys(pieces).length} pieces · ${totalTris} tris ` +
  `(${totalGlassTris} glass) · ${(bytes / 1024).toFixed(1)} KB\n-> ${OUT}`
);