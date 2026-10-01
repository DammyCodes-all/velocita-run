import { composeTowers } from '../src/world/BuildingKit.js';
// Compare attribute and index lengths on every composed geometry. A mismatch
// here explains why iterating colours walks past the end of positions.
const towers = composeTowers(80);
let bad = 0;
for (const [i, t] of towers.entries()) {
  for (const [label, g] of [['solid', t.solid], ['glass', t.glass]]) {
    if (!g) continue;
    const p = g.attributes.position.array.length / 3;
    const n = g.attributes.normal.array.length / 3;
    const c = g.attributes.color.array.length / 3;
    const idx = g.index ? g.index.count : 0;
    const ok = p === n && p === c;
    if (!ok) { bad++; if (bad <= 6) console.log(`  #${i} ${label}: pos=${p} nrm=${n} col=${c} idx=${idx}`); }
  }
}
console.log(`\n${bad} attribute-length mismatches`);
