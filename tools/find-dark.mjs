import { composeTowers } from '../src/world/BuildingKit.js';
// Attribute dark facade vertices back to a cause. Reports the spatial extent
// of each dark colour group so a mast / roof cap / whole-facade problem is
// distinguishable by shape.
const towers = composeTowers(120);
let worst = null;
for (const [i, t] of towers.entries()) {
  const arr = t.solid.attributes.color.array;
  let sum = 0;
  for (let v = 0; v < arr.length; v += 3) sum += 0.2126*arr[v] + 0.7152*arr[v+1] + 0.0722*arr[v+2];
  const m = sum / (arr.length / 3);
  if (!worst || m < worst.m) worst = { i, t, m };
}
const g = worst.t.solid, pos = g.attributes.position.array, col = g.attributes.color.array;
let dark = 0; const total = col.length / 3; const groups = new Map();
let minY = Infinity, maxY = -Infinity;
for (let v = 1; v < pos.length; v += 3) { if (pos[v] < minY) minY = pos[v]; if (pos[v] > maxY) maxY = pos[v]; }
for (let v = 0; v < col.length; v += 3) {
  const l = 0.2126*col[v] + 0.7152*col[v+1] + 0.0722*col[v+2];
  if (l >= 0.05) continue;
  dark++;
  const key = `${col[v].toFixed(4)},${col[v+1].toFixed(4)},${col[v+2].toFixed(4)}`;
  if (!groups.has(key)) groups.set(key, { n: 0, minY: Infinity, maxY: -Infinity, minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity });
  const G = groups.get(key); G.n++;
  const x = pos[v*3], y = pos[v*3+1], z = pos[v*3+2];
  if (y < G.minY) G.minY = y; if (y > G.maxY) G.maxY = y;
  if (x < G.minX) G.minX = x; if (x > G.maxX) G.maxX = x;
  if (z < G.minZ) G.minZ = z; if (z > G.maxZ) G.maxZ = z;
}
console.log(`worst of ${towers.length}: #${worst.i} mean=${worst.m.toFixed(3)}  dark=${dark}/${total} (${(dark/total*100).toFixed(1)}%)`);
console.log(`tower y range [${minY.toFixed(2)}, ${maxY.toFixed(2)}]`);
for (const [k, G] of groups) {
  console.log(`  linear(${k}) n=${G.n}`);
  console.log(`    x[${G.minX.toFixed(2)},${G.maxX.toFixed(2)}] y[${G.minY.toFixed(2)},${G.maxY.toFixed(2)}] z[${G.minZ.toFixed(2)},${G.maxZ.toFixed(2)}]`);
}
