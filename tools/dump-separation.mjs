/**
 * Debug: histogram every face's (b - r) across the whole pack, so the glass
 * threshold can be chosen from measured data instead of intuition.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { inflateSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(REPO, 'assets', 'kenney-modular-buildings');

// --- PNG ---
const buf = readFileSync(join(SRC, 'Textures', 'colormap.png'));
let pos = 8, w = 0, h = 0, ct = 0;
const idat = [];
let plte = null;
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const t = buf.toString('ascii', pos + 4, pos + 8);
  const d = buf.subarray(pos + 8, pos + 8 + len);
  if (t === 'IHDR') { w = d.readUInt32BE(0); h = d.readUInt32BE(4); ct = d[9]; }
  else if (t === 'PLTE') plte = Buffer.from(d);
  else if (t === 'IDAT') idat.push(Buffer.from(d));
  else if (t === 'IEND') break;
  pos += 12 + len;
}
const CH = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[ct];
const raw = inflateSync(Buffer.concat(idat));
const stride = w * CH;
const out = Buffer.alloc(h * stride);
let prev = Buffer.alloc(stride), rp = 0;
for (let y = 0; y < h; y++) {
  const f = raw[rp++];
  const line = Buffer.from(raw.subarray(rp, rp + stride));
  rp += stride;
  const cur = out.subarray(y * stride, (y + 1) * stride);
  for (let x = 0; x < stride; x++) {
    const a = x >= CH ? cur[x - CH] : 0;
    const b = prev[x];
    const c = x >= CH ? prev[x - CH] : 0;
    let v = line[x];
    if (f === 1) v += a;
    else if (f === 2) v += b;
    else if (f === 3) v += (a + b) >> 1;
    else if (f === 4) {
      const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
      v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
    }
    cur[x] = v & 0xff;
  }
  prev = cur;
}
const at = (u, v) => {
  const x = Math.min(w - 1, Math.max(0, Math.round(u * w)));
  const y = Math.min(h - 1, Math.max(0, Math.round(v * h)));
  const i = y * w + x;
  if (ct === 3) { const k = out[i]; return [plte[k * 3], plte[k * 3 + 1], plte[k * 3 + 2]]; }
  if (ct === 0 || ct === 4) return [out[i * CH], out[i * CH], out[i * CH]];
  return [out[i * CH], out[i * CH + 1], out[i * CH + 2]];
};

// --- GLB ---
const CS = { 5120: 1, 5121: 1, 5122: 2, 5123: 2, 5125: 4, 5126: 4 };
const TC = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 };
function rd(p) {
  const b = readFileSync(p);
  const tot = b.readUInt32LE(8);
  let q = 12, j = null, bn = null;
  while (q + 8 <= Math.min(12 + tot, b.length)) {
    const l = b.readUInt32LE(q);
    const t = b.toString('ascii', q + 4, q + 8);
    const d = b.subarray(q + 8, q + 8 + l);
    if (t === 'JSON') j = JSON.parse(d.toString('utf8'));
    else if (t === 'BIN\0') bn = d;
    q += 8 + l;
  }
  return { j, bn };
}
function acc(j, bn, i) {
  const a = j.accessors[i], v = j.bufferViews[a.bufferView], cs = CS[a.componentType], n = TC[a.type];
  const base = (v.byteOffset ?? 0) + (a.byteOffset ?? 0);
  const st = v.byteStride ?? 0;
  const o = new Float32Array(a.count * n);
  for (let k = 0; k < a.count; k++) {
    const off = base + (st ? k * st : k * cs * n);
    for (let m = 0; m < n; m++) {
      const at2 = off + m * cs;
      switch (a.componentType) {
        case 5120: o[k * n + m] = bn.readInt8(at2); break;
        case 5121: o[k * n + m] = bn.readUInt8(at2); break;
        case 5122: o[k * n + m] = bn.readInt16LE(at2); break;
        case 5123: o[k * n + m] = bn.readUInt16LE(at2); break;
        case 5125: o[k * n + m] = bn.readUInt32LE(at2); break;
        case 5126: o[k * n + m] = bn.readFloatLE(at2); break;
        default: break;
      }
    }
  }
  return o;
}

const buckets = new Map();
const colourAt = new Map();
for (const f of readdirSync(SRC).filter((x) => x.endsWith('.glb'))) {
  const { j, bn } = rd(join(SRC, f));
  for (const nd of j.nodes ?? []) {
    if (nd.mesh === undefined) continue;
    for (const pr of j.meshes[nd.mesh].primitives) {
      const pos = acc(j, bn, pr.attributes.POSITION);
      if (pr.attributes.TEXCOORD_0 === undefined) continue;
      const uv = acc(j, bn, pr.attributes.TEXCOORD_0);
      const idx = pr.indices !== undefined ? acc(j, bn, pr.indices) : null;
      const tc = idx ? idx.length / 3 : pos.length / 9;
      for (let t = 0; t < tc; t++) {
        const is = [idx ? idx[t * 3] : t * 3, idx ? idx[t * 3 + 1] : t * 3 + 1, idx ? idx[t * 3 + 2] : t * 3 + 2];
        let r = 0, g = 0, b = 0;
        for (const vi of is) { const s = at(uv[vi * 2], uv[vi * 2 + 1]); r += s[0]; g += s[1]; b += s[2]; }
        r /= 3; g /= 3; b /= 3;
        const d = Math.round(b - r);
        buckets.set(d, (buckets.get(d) || 0) + 1);
        const key = `${Math.round(r / 8) * 8},${Math.round(g / 8) * 8},${Math.round(b / 8) * 8}`;
        if (!colourAt.has(key)) colourAt.set(key, { r: Math.round(r), g: Math.round(g), b: Math.round(b), n: 0 });
        colourAt.get(key).n++;
      }
    }
  }
}

const rows = [...buckets.entries()].sort((a, b) => a[0] - b[0]);
const max = Math.max(...rows.map((r) => r[1]));
console.log('b-r  -> face count');
for (const [d, n] of rows) {
  console.log(
    String(d).padStart(5) + '  ' + String(n).padStart(6) + '  ' +
    '#'.repeat(Math.max(1, Math.round((n / max) * 56)))
  );
}

console.log('\ndistinct face colours, sorted by count:');
const cr = [...colourAt.values()].sort((a, b) => b.n - a.n);
console.log('  rgb                 b-r   faces');
for (const c of cr.slice(0, 20)) {
  console.log(
    '  (' + String(c.r).padStart(3) + ',' + String(c.g).padStart(3) + ',' + String(c.b).padStart(3) + ')' +
    String(c.b - c.r).padStart(7) + String(c.n).padStart(8)
  );
}