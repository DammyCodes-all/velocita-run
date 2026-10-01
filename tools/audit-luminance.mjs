/**
 * Report the facade luminance distribution of composed towers.
 *
 * Colour space is the easy thing to get wrong when swapping in a palette-baked
 * asset: decoding sRGB -> linear roughly halves mid-tone values, so a wall
 * that looked correct in the atlas can render too dark to read through fog.
 * This prints the distribution so that regression is visible as a number
 * rather than as "the skyline looks a bit murky".
 *
 * Output columns are share of facade vertices per luminance band.
 *
 * Run: node tools/audit-luminance.mjs
 */
import { composeTowers } from '../src/world/BuildingKit.js';

const towers = composeTowers(12);

console.log('tower  verts   veryDark(<0.05)  dark(<0.15)  mid(0.15-0.5)  bright(>0.5)   mean');
let worst = 0;

for (const [i, t] of towers.entries()) {
  const arr = t.solid.attributes.color.array;
  let vdark = 0;
  let dark = 0;
  let mid = 0;
  let bright = 0;
  let sum = 0;
  // Luminance per vertex, so a vertex counts once rather than three times.
  for (let v = 0; v < arr.length; v += 3) {
    const l = 0.2126 * arr[v] + 0.7152 * arr[v + 1] + 0.0722 * arr[v + 2];
    sum += l;
    if (l < 0.05) vdark++;
    else if (l < 0.15) dark++;
    else if (l < 0.5) mid++;
    else bright++;
  }
  const n = arr.length / 3;
  const frac = vdark / n;
  if (frac > worst) worst = frac;
  console.log(
    String(i).padStart(4) +
    String(n).padStart(8) +
    ((vdark / n) * 100).toFixed(1).padStart(16) + '%' +
    ((dark / n) * 100).toFixed(1).padStart(13) + '%' +
    ((mid / n) * 100).toFixed(1).padStart(14) + '%' +
    ((bright / n) * 100).toFixed(1).padStart(15) + '%' +
    (sum / n).toFixed(3).padStart(9)
  );
}

const means = towers.map((t) => {
  const arr = t.solid.attributes.color.array;
  let sum = 0;
  for (let v = 0; v < arr.length; v += 3) {
    sum += 0.2126 * arr[v] + 0.7152 * arr[v + 1] + 0.0722 * arr[v + 2];
  }
  return sum / (arr.length / 3);
});

console.log(
  `\nmean luminance: avg ${(means.reduce((a, b) => a + b, 0) / means.length).toFixed(3)}, ` +
    `min ${Math.min(...means).toFixed(3)}, max ${Math.max(...means).toFixed(3)}`
);
console.log(`worst very-dark share: ${(worst * 100).toFixed(1)}%`);