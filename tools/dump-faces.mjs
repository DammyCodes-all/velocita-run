/**
 * Debug: dump per-face atlas colours for chosen pieces so the glass classifier
 * can be tuned against real data rather than intuition.
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { inflateSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, '..');
const SRC = join(REPO, 'assets', 'kenney-modular-buildings');
const ATLAS = join(SRC, 'Textures', 'colormap.png');

function readPNG(path) {
  const buf = readFileSync(path);
  let pos = 8, width = 0, height = 0, bitDepth = 0, colorType = 0;
  const idat = []; let plte = null;
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === 'IHDR') { width = data.readUInt32BE(0); height = data.readUInt32BE(4); bitDepth = data[8]; colorType = data[9]; }
    else if (type === 'PLTE') plte = Buffer.from(data);
    else if (type === 'IDAT') idat.push(Buffer.from(data));
    else if (type === 'IEND') break;
    pos += 12 + len;
  }
  const channels = { 0:1, 2:3, 3:1, 4:2, 6:4 }[colorType];
  const raw = inflateSync(Buffer.concat(idat));
  const stride = width * channels;
  const out = Buffer.alloc(height * stride);
  let prev = Buffer.alloc(stride), rp = 0;
  for (let y = 0; y < height; y++) {
    const f = raw[rp++];
    const line = Buffer.from(raw.subarray(rp, rp + stride)); rp += stride;
    const cur = out.subarray(y*stride, (y+1)*stride);
    for (let x = 0; x < stride; x++) {
      const a = x >= channels ? cur[x-channels] : 0;
      const b = prev[x];
      const c = x >= channels ? prev[x-channels] : 0;
      let v = line[x];
      if (f===1) v+=a; else if (f===2) v+=b; else if (f===3) v+=(a+b)>>1;
      else if (f===4){const p=a+b-c,pa=Math.abs(p-a),pb=Math.abs(p-b),pc=Math.abs(p-c);v+=pa<=pb&&pa<=pc?a:pb<=pc?b:c;}
      cur[x]=v&0xff;
    }
    prev = cur;
  }
  const rgb = new Uint8Array(width*height*3);
  for (let i=0;i<width*height;i++){
    let r,g,b;
    if (colorType===3){const idx=out[i];r=plte[idx*3];g=plte[idx*3+1];b=plte[idx*3+2];}
    else if(colorType===0||colorType===4){r=g=b=out[i*channels];}
    else {r=out[i*channels];g=out[i*channels+1];b=out[i*channels+2];}
    rgb[i*3]=r;rgb[i*3+1]=g;rgb[i*3+2]=b;
  }
  return { width, height, rgb };
}

function readGLB(path) {
  const buf = readFileSync(path);
  const total = buf.readUInt32LE(8);
  let pos = 12, json = null, bin = null;
  while (pos + 8 <= Math.min(12 + total, buf.length)) {
    const len = buf.readUInt32LE(pos);
    const type = buf.toString('ascii', pos+4, pos+8);
    const data = buf.subarray(pos+8, pos+8+len);
    if (type==='JSON') json = JSON.parse(data.toString('utf8'));
    else if (type==='BIN\0') bin = data;
    pos += 8 + len;
  }
  return { json, bin };
}

const COMPONENT = { 5120:1, 5121:1, 5122:2, 5123:2, 5125:4, 5126:4 };
const TC = { SCALAR:1, VEC2:2, VEC3:3, VEC4:4 };
function readAccessor(gltf, bin, index) {
  const acc = gltf.accessors[index];
  const view = gltf.bufferViews[acc.bufferView];
  const cs = COMPONENT[acc.componentType];
  const n = TC[acc.type];
  const base = (view.byteOffset ?? 0) + (acc.byteOffset ?? 0);
  const stride = view.byteStride ?? 0;
  const out = new Float32Array(acc.count * n);
  for (let i=0;i<acc.count;i++){
    const off = base + (stride ? i*stride : i*cs*n);
    for (let k=0;k<n;k++){
      const at = off + k*cs;
      switch(acc.componentType){
        case 5120: out[i*n+k]=bin.readInt8(at); break;
        case 5121: out[i*n+k]=bin.readUInt8(at); break;
        case 5122: out[i*n+k]=bin.readInt16LE(at); break;
        case 5123: out[i*n+k]=bin.readUInt16LE(at); break;
        case 5125: out[i*n+k]=bin.readUInt32LE(at); break;
        case 5126: out[i*n+k]=bin.readFloatLE(at); break;
      }
    }
  }
  return out;
}

const atlas = readPNG(ATLAS);
const sample = (u,v) => {
  const x = Math.min(atlas.width-1, Math.max(0, Math.round(u*atlas.width)));
  const y = Math.min(atlas.height-1, Math.max(0, Math.round(v*atlas.height)));
  const i = (y*atlas.width+x)*3;
  return [atlas.rgb[i], atlas.rgb[i+1], atlas.rgb[i+2]];
};

function resolve(name) {
  for (const c of [`${name}.glb`, `building-${name}.glb`]) {
    try { readFileSync(join(SRC,c)); return join(SRC,c); } catch {}
  }
  return null;
}

for (const name of process.argv.slice(2)) {
  const file = resolve(name);
  if (!file) { console.log(name, 'MISSING'); continue; }
  const { json, bin } = readGLB(file);
  console.log(`\n=== ${name} ===`);
  for (const nd of (json.nodes ?? [])) {
    if (nd.mesh === undefined) continue;
    for (const prim of json.meshes[nd.mesh].primitives) {
      const pos = readAccessor(json, bin, prim.attributes.POSITION);
      const nrm = prim.attributes.NORMAL !== undefined ? readAccessor(json, bin, prim.attributes.NORMAL) : null;
      const uv = prim.attributes.TEXCOORD_0 !== undefined ? readAccessor(json, bin, prim.attributes.TEXCOORD_0) : null;
      const idx = prim.indices !== undefined ? readAccessor(json, bin, prim.indices) : null;
      const triCount = idx ? idx.length/3 : pos.length/9;
      const faces = [];
      for (let t=0;t<triCount;t++){
        const i0 = idx?idx[t*3]:t*3, i1 = idx?idx[t*3+1]:t*3+1, i2 = idx?idx[t*3+2]:t*3+2;
        let r=0,g=0,b=0;
        for (const vi of [i0,i1,i2]) { const [sr,sg,sb]=sample(uv[vi*2],uv[vi*2+1]); r+=sr;g+=sg;b+=sb; }
        r/=3;g/=3;b/=3;
        // face normal from first vertex
        const n = nrm ? [nrm[i0*3],nrm[i0*3+1],nrm[i0*3+2]] : [0,1,0];
        const lum = (0.2126*r+0.7152*g+0.0722*b)/255;
        faces.push({ r,g,b,lum,n,area: faceArea(pos,i0,i1,i2) });
      }
      faces.sort((a,b)=>b.area-a.area);
      const seen = new Set();
      let shown = 0;
      for (const f of faces) {
        const key = `${f.r>>3},${f.g>>3},${f.b>>3},${f.n.map(x=>Math.round(x)).join(',')}`;
        if (seen.has(key)) continue;
        seen.add(key);
        console.log(`  rgb(${String(f.r).padStart(3)},${String(f.g).padStart(3)},${String(f.b).padStart(3)}) lum=${f.lum.toFixed(3)} n=[${f.n.map(x=>x.toFixed(1)).join(',')}] area=${f.area.toFixed(3)}`);
        if (++shown >= 14) break;
      }
    }
  }
}

function faceArea(pos, i0, i1, i2) {
  const ax=pos[i0*3],ay=pos[i0*3+1],az=pos[i0*3+2];
  const bx=pos[i1*3],by=pos[i1*3+1],bz=pos[i1*3+2];
  const cx=pos[i2*3],cy=pos[i2*3+1],cz=pos[i2*3+2];
  const ux=bx-ax,uy=by-ay,uz=bz-az, vx=cx-ax,vy=cy-ay,vz=cz-az;
  const nx=uy*vz-uz*vy, ny=uz*vx-ux*vz, nz=ux*vy-uy*vx;
  return 0.5*Math.hypot(nx,ny,nz);
}