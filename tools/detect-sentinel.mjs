import { composeTowers } from '../src/world/BuildingKit.js';
// A failed mergeGeometries leaves a geometry whose arrays are sized but never
// written, so coordinates read back as huge sentinels / NaN instead of values
// inside the kit's +/-1.2 unit range. Detect that explicitly.
const towers = composeTowers(60);
let bad = 0;
let globalMax = 0;
for (const [i, t] of towers.entries()) {
  const p = t.solid.attributes.position.array;
  let m = 0, huge = false, nan = false;
  for (let k = 0; k < p.length; k++) {
    const v = p[k];
    if (!Number.isFinite(v)) { nan = true; continue; }
    const a = Math.abs(v);
    if (a > m) m = a;
    if (a > 1e6) huge = true;
  }
  if (nan || huge) { bad++; if (bad <= 3) console.log(`  tower ${i}: HUGE=${huge} NAN=${nan} maxAbs=${m.toExponential(2)}`); }
  if (m > globalMax) globalMax = m;
}
console.log(`\n${bad}/60 towers contain huge/NaN coords`);
console.log(`global max abs coord = ${globalMax.toExponential(3)} (kit range is +/-1.2)`);
process.exit(bad ? 1 : 0);
