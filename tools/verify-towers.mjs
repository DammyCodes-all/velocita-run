/**
 * Verify composed towers: geometry validity, bounds, triangle counts.
 * Runs in Node with a DOM-free three.js build.
 */
import * as THREE from 'three';
import { composeTowers, KIT_META } from '../src/world/BuildingKit.js';

console.log('kit:', JSON.stringify(KIT_META, null, 2));

const towers = composeTowers(8);
let bad = 0;
let totalSolid = 0;
let totalGlass = 0;

console.log('\n#   solidTris  glassTris   height   width x depth   status');
towers.forEach((t, i) => {
  if (!t.solid) {
    bad++;
    console.log(String(i).padStart(2) + '  COMPOSE FAILED (merge returned null)');
    return;
  }
  const solidTris = t.solid.index ? t.solid.index.count / 3 : t.solid.attributes.position.count / 3;
  const glassTris = t.glass && t.glass.index ? t.glass.index.count / 3 : 0;
  totalSolid += solidTris;
  totalGlass += glassTris;

  const problems = [];
  for (const [label, g] of [['solid', t.solid], ['glass', t.glass]]) {
    if (!g) continue;
    const pos = g.attributes.position;
    if (!pos || pos.count === 0) problems.push(`${label} empty`);
    if (!g.attributes.normal) problems.push(`${label} no normals`);
    if (!g.attributes.color) problems.push(`${label} no color`);
    if (!g.index) problems.push(`${label} no index`);
    // NaN sweep — the usual failure mode after applyMatrix4.
    const a = pos.array;
    let nan = 0;
    for (let k = 0; k < a.length; k++) if (!Number.isFinite(a[k])) nan++;
    if (nan) problems.push(`${label} ${nan} non-finite`);
    // Index range check.
    const idx = g.index.array;
    for (let k = 0; k < idx.length; k++) {
      if (idx[k] >= pos.count) { problems.push(`${label} index ${idx[k]} >= ${pos.count}`); break; }
    }
    // Colour range check. BuildingKit decodes palette bytes to linear Float32,
    // so values must be finite and within [0,1]; anything above 1 means an
    // sRGB byte leaked through undecoded.
    const ca = g.attributes.color;
    if (ca) {
      if (ca.array instanceof Uint8Array) problems.push(`${label} colour still Uint8 (not decoded to linear)`);
      let over = 0;
      let maxV = 0;
      for (let k = 0; k < ca.array.length; k++) {
        const v = ca.array[k];
        if (!Number.isFinite(v) || v < 0 || v > 1) over++;
        if (v > maxV) maxV = v;
      }
      if (over) problems.push(`${label} ${over} out-of-range colours (max ${maxV.toFixed(3)})`);
      if (g.attributes.uv) problems.push(`${label} has stray uv attribute`);
    }
  }

  t.solid.computeBoundingBox();
  const bb = t.solid.boundingBox;
  const h = bb.max.y - bb.min.y;
  const w = bb.max.x - bb.min.x;
  const d = bb.max.z - bb.min.z;
  if (h <= 0) problems.push('zero height');
  if (h > 40) problems.push(`absurd height ${h.toFixed(1)}`);

  const status = problems.length ? 'FAIL: ' + problems.join('; ') : 'ok';
  if (problems.length) bad++;
  console.log(
    String(i).padStart(2) +
    String(solidTris).padStart(11) + String(glassTris).padStart(10) +
    h.toFixed(2).padStart(9) + (w.toFixed(2) + ' x ' + d.toFixed(2)).padStart(15) + '   ' + status
  );
});

console.log(`\ntotals: ${totalSolid} solid tris, ${totalGlass} glass tris`);
console.log(bad ? `\n${bad} TOWER(S) FAILED` : '\nall towers valid');
process.exit(bad ? 1 : 0);