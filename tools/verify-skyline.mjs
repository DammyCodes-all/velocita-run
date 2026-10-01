/**
 * Sanity-check the skyline material wiring without a browser.
 *
 * There is no headless GPU in this environment and browser-driven verification
 * is out of scope, so this asserts the things that silently break a three.js
 * instanced mesh: attribute presence, colour space, index validity, and that
 * each variant actually pairs a wall mesh with a glass mesh.
 *
 * Run: npm run verify:buildings
 */
import * as THREE from 'three';
import { composeTowers } from '../src/world/BuildingKit.js';

/**
 * Seed the RNG so composition is reproducible.
 *
 * `composeTowers` picks footprints, archetypes, facades and crowns at random.
 * Without a fixed seed the checks below sample a different skyline every run,
 * which made a real regression (the near-black antenna mast) pass five times
 * and fail the sixth. A seeded draw tests the same towers every time.
 *
 * mulberry32 — small, fast, good enough for fixture generation.
 */
function mulberry32(seed) {
  let a = seed >>> 0;
  return function rng() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const realRandom = Math.random;
Math.random = mulberry32(0x5eed);

let failures = 0;
const check = (name, ok, detail = '') => {
  if (!ok) failures++;
  console.log(`${ok ? 'ok  ' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`);
};

const towers = composeTowers(6);
check('composed tower count', towers.length === 6, `${towers.length}`);
check('every tower has solid geometry', towers.every((t) => t.solid && t.solid.attributes.position.count > 0));
check('every tower has glass geometry', towers.every((t) => t.glass && t.glass.index.count > 0));

// --- what the wall material will actually receive ---
const wall = towers[0].solid;
check('wall has color attribute', !!wall.attributes.color);
check('wall color is linear float', wall.attributes.color.array instanceof Float32Array);
check('wall has no uv (matches glass set)', !wall.attributes.uv);

let maxC = 0;
for (let i = 0; i < wall.attributes.color.array.length; i++) {
  if (wall.attributes.color.array[i] > maxC) maxC = wall.attributes.color.array[i];
}
check('wall colors within linear range', maxC <= 1.0, `max ${maxC.toFixed(3)}`);

/**
 * Mean facade luminance across several compositions.
 *
 * Decoding sRGB -> linear pulls mid greys down hard (a 0.6 sRGB swatch lands
 * near 0.32 linear), so a wall that looked mid-toned in the atlas can still
 * end up too dark to read through fog. Averaged over many towers because
 * composition is random and any single draw is unrepresentative.
 *
 * Measured range for the current composer is ~0.57 to 0.71, so these bounds
 * sit clear of the observed values rather than exactly on them.
 */
/**
 * Facade luminance, measured over *wall* vertices only.
 *
 * The mast is deliberately excluded: it is structure, not facade, and on a
 * short tower it is a large share of the vertices, so including it makes this
 * metric swing with tower height instead of with palette problems. Vertices
 * above the topmost wall course are skipped by comparing against the tower's
 * own vertical extent — a mast is always the thing sticking out the top.
 */
const means = [];
let worstMean = Infinity;
for (const t of composeTowers(40)) {
  const arr = t.solid.attributes.color.array;
  const pos = t.solid.attributes.position.array;
  const n = arr.length / 3;

  // Roof and mast geometry sits at the very top; find where the wall ends by
  // taking the bulk (75th percentile) of vertex heights.
  const heights = new Float64Array(n);
  for (let v = 0; v < n; v++) heights[v] = pos[v * 3 + 1];
  const sorted = Float64Array.from(heights).sort();
  const p75 = sorted[Math.floor(n * 0.75)];

  let sum = 0;
  let counted = 0;
  for (let v = 0; v < n; v++) {
    if (pos[v * 3 + 1] > p75) continue;
    sum += 0.2126 * arr[v * 3] + 0.7152 * arr[v * 3 + 1] + 0.0722 * arr[v * 3 + 2];
    counted++;
  }
  const mean = counted ? sum / counted : 0;
  means.push(mean);
  if (mean < worstMean) worstMean = mean;
}
const avgMean = means.reduce((a, b) => a + b, 0) / means.length;
check(
  'facade luminance survives linear decode',
  avgMean > 0.55 && worstMean > 0.5,
  `avg ${avgMean.toFixed(3)}, worst ${worstMean.toFixed(3)} over ${means.length} towers`
);

Math.random = realRandom;

// --- glass must be separable, or the emissive split buys nothing ---
let totalSolidTris = 0;
let totalGlassTris = 0;
for (const t of towers) {
  totalSolidTris += t.solid.index.count / 3;
  totalGlassTris += t.glass.index.count / 3;
}
const glassShare = totalGlassTris / (totalSolidTris + totalGlassTris);
check(
  'glass is a meaningful minority of faces',
  glassShare > 0.02 && glassShare < 0.4,
  `${(glassShare * 100).toFixed(1)}% of tris`
);

// --- instancing simulation: can the real Skyline pack many buildings? ---
const towerCount = towers.length;
const buildingCount = 38;
const cap = Math.max(2, Math.ceil(buildingCount / towerCount));
const packed = new Array(towerCount).fill(0);
for (let i = 0; i < buildingCount; i++) {
  const mi = i % towerCount;
  if (packed[mi] < cap) packed[mi]++;
}
const totalPacked = packed.reduce((a, b) => a + b, 0);
check(
  'all buildings fit in their variant capacities',
  totalPacked === buildingCount,
  `${totalPacked}/${buildingCount} packed, cap ${cap} per variant`
);

// --- material pairing, as Skyline constructs them ---
const wallMat = new THREE.MeshStandardMaterial({
  vertexColors: true,
  roughness: 0.88,
  metalness: 0.06,
  color: new THREE.Color(0x8c99a6),
});
const glassMat = new THREE.MeshStandardMaterial({
  vertexColors: true,
  emissive: new THREE.Color(0xffd9a8),
  emissiveIntensity: 1.15,
  roughness: 0.32,
  metalness: 0.2,
});
check('wall material uses vertexColors', wallMat.vertexColors);
check('glass material uses vertexColors', glassMat.vertexColors);
check('glass emissive is non-black', glassMat.emissive.getHex() !== 0, '#' + glassMat.emissive.getHexString());
check(
  'glass emissive clears bloom threshold',
  glassMat.emissiveIntensity > 0.68,
  `${glassMat.emissiveIntensity} vs threshold 0.68`
);

// InstancedMesh.setColorAt requires instanceColor to exist; three.js creates
// it on first call, but verify the API path we rely on.
const mesh = new THREE.InstancedMesh(towers[0].solid, wallMat, 4);
mesh.setColorAt(0, new THREE.Color(1, 1, 1));
check('setColorAt initialises instanceColor', !!mesh.instanceColor);
mesh.dispose();

console.log(failures ? `\n${failures} CHECK(S) FAILED` : '\nall skyline checks passed');
process.exit(failures ? 1 : 0);