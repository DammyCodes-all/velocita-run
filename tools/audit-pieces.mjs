/**
 * Find which baked pieces contribute the darkest facade vertices.
 *
 * The luminance audit showed that some composed towers average ~0.32 linear
 * with ~50% of facade vertices near black, which would read as a murky
 * silhouette rather than a lit building. This attributes dark vertices back to
 * the source piece so the composer can stop using the offenders.
 *
 * Run: node tools/audit-pieces.mjs
 */
import * as THREE from 'three';
import KIT from '../src/world/buildingKit.json' with { type: 'json' };

const QUANT = 32767 / KIT.quant.range;
const decode = (b64, Type) => {
  const s = atob(b64);
  const b = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i);
  return new Type(b.buffer);
};
const S2L = (() => {
  const t = new Float32Array(256);
  for (let i = 0; i < 256; i++) {
    const c = i / 255;
    t[i] = c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  return t;
})();

const rows = [];
for (const [name, rec] of Object.entries(KIT.pieces)) {
  const col = decode(rec.col, Uint8Array);
  let sum = 0;
  let dark = 0;
  const n = col.length / 3;
  for (let v = 0; v < col.length; v += 3) {
    const l = 0.2126 * S2L[col[v]] + 0.7152 * S2L[col[v + 1]] + 0.0722 * S2L[col[v + 2]];
    sum += l;
    if (l < 0.05) dark++;
  }
  const idxLen = rec.idx ? decode(rec.idx, Uint32Array).length / 3 : 0;
  const glassLen = rec.gidx ? decode(rec.gidx, Uint32Array).length / 3 : 0;
  rows.push({ name, n, idxLen, glassLen, mean: sum / n, darkPct: (dark / n) * 100 });
}

rows.sort((a, b) => a.mean - b.mean);
console.log('piece                     verts  solidTris  glassTris   meanLum  %veryDark');
for (const r of rows) {
  console.log(
    r.name.padEnd(26) +
    String(r.n).padStart(6) +
    String(r.idxLen).padStart(10) +
    String(r.glassLen).padStart(10) +
    r.mean.toFixed(3).padStart(10) +
    (r.darkPct.toFixed(1) + '%').padStart(11) +
    (r.mean < 0.2 ? '   <-- very dark' : '')
  );
}

void THREE;
void QUANT;