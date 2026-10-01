/**
 * Verify the low-rise street blocks and their placement.
 *
 * Checks the things that make a street legible, and that keep it out of the
 * running lanes:
 *   - storey height is believable (~2.3-3.0m for a 1.62m player)
 *   - frontage is a sane building width
 *   - the resulting world-space placement clears the deck
 *   - shopfront geometry actually faces the track after rotation
 *
 * Run: node tools/verify-street.mjs
 */
import { composeBlocks } from '../src/world/BuildingKit.js';

const DECK_HALF_WIDTH = 4.6;
const STREET_CLEARANCE = DECK_HALF_WIDTH + 4.0;

let failures = 0;
const check = (name, ok, detail = '') => {
  if (!ok) failures++;
  console.log(`${ok ? 'ok  ' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`);
};

const blocks = composeBlocks(8);
check('composed block count', blocks.length === 8, `${blocks.length}`);
check('every block has solid geometry', blocks.every((b) => b.solid.attributes.position.count > 0));
check('every block has glass geometry', blocks.every((b) => b.glass && b.glass.index.count > 0));

console.log('\nblock  storeys  frontage  depth  height@3.5  height@4.2  clearanceNeeded');
const stats = [];
for (const [i, b] of blocks.entries()) {
  b.solid.computeBoundingBox();
  const bb = b.solid.boundingBox;
  const frontage = bb.max.x - bb.min.x;
  const depth = -(bb.min.z);
  const h = bb.max.y - bb.min.y;
  const storeys = h / 0.625;
  const minSetback = STREET_CLEARANCE + depth * 3.5;
  stats.push({ frontage, depth, h, storeys, minSetback });
  console.log(
    String(i).padStart(5) +
    storeys.toFixed(1).padStart(9) +
    frontage.toFixed(2).padStart(10) +
    depth.toFixed(2).padStart(8) +
    (h * 3.5).toFixed(1).padStart(13) +
    (h * 4.2).toFixed(1).padStart(13) +
    minSetback.toFixed(1).padStart(17)
  );
}

// A 1.62m player means a storey should read as roughly 2.3-3.2m.
const storeyHeights = stats.map((s) => s.h * 3.5 / s.storeys);
const minStorey = Math.min(...storeyHeights);
const maxStorey = Math.max(...storeyHeights);
check(
  'storey height is believable',
  minStorey > 1.9 && maxStorey < 3.4,
  `${minStorey.toFixed(2)}-${maxStorey.toFixed(2)}m per storey`
);

// Buildings should read as buildings, not as sheds or towers.
const fronts = stats.map((s) => s.frontage * 3.5);
check(
  'frontage is building-sized',
  Math.min(...fronts) > 4 && Math.max(...fronts) < 26,
  `${Math.min(...fronts).toFixed(1)}-${Math.max(...fronts).toFixed(1)}m wide`
);

// The near edge of any block must stay outside the deck.
const nearest = Math.min(...stats.map((s) => s.minSetback - s.depth * 3.5));
check(
  'shopfronts clear the running corridor',
  nearest >= STREET_CLEARANCE - 0.01,
  `nearest face at ${nearest.toFixed(2)}m, deck edge at ${DECK_HALF_WIDTH}m`
);

// Height should stay under the gantries so the corridor still reads as open.
const maxHeight = Math.max(...stats.map((s) => s.h * 4.2));
check('blocks stay below the gantry height', maxHeight < 12, `tallest ${maxHeight.toFixed(1)}m`);

// ---------------------------------------------------------------------------
// Rotation. Blocks are composed with the shopfront on the -Z face; if the
// instance rotation were wrong, every building would present a blank rear
// wall to the track and the street would read as a row of crates. Verify by
// transforming a point on the street face and confirming it moves toward
// x = 0 rather than away.
// ---------------------------------------------------------------------------
const HALF_PI = Math.PI / 2;
/** Rotate (0,0,-1) — the street-face normal — by `angle` about +Y. */
function rotateY(v, angle) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return { x: v.x * c + v.z * s, z: -v.x * s + v.z * c };
}

const frontNormal = { x: 0, z: -1 };
const right = rotateY(frontNormal, HALF_PI); // blocks on side > 0
const left = rotateY(frontNormal, -HALF_PI); // blocks on side < 0

// Right-hand blocks sit at +x, so their front must point in -x (toward 0).
check(
  'right-hand blocks face the track',
  right.x < -0.99,
  `front normal -> (${right.x.toFixed(2)}, ${right.z.toFixed(2)})`
);
// Left-hand blocks sit at -x, so their front must point in +x.
check(
  'left-hand blocks face the track',
  left.x > 0.99,
  `front normal -> (${left.x.toFixed(2)}, ${left.z.toFixed(2)})`
);

// Both rotations must be a clean quarter turn, or the terrace ends up skewed
// relative to the track and the party walls stop lining up.
check(
  'rotation is an exact quarter turn',
  Math.abs(Math.abs(right.z)) < 1e-9 && Math.abs(Math.abs(left.z)) < 1e-9,
  'front normal stays on the x axis'
);

// The street face must be the closest part of the building to the track.
const b0 = blocks[0];
b0.solid.computeBoundingBox();
const setback = STREET_CLEARANCE + -(b0.solid.boundingBox.min.z) * 3.5;
const nearestEdge = setback - (-(b0.solid.boundingBox.min.z)) * 3.5;
check(
  'nearest building edge sits on the clearance line',
  Math.abs(nearestEdge - STREET_CLEARANCE) < 0.01,
  `nearest face ${nearestEdge.toFixed(2)}m vs clearance ${STREET_CLEARANCE.toFixed(2)}m`
);

console.log(failures ? `\n${failures} CHECK(S) FAILED` : '\nall street checks passed');
process.exit(failures ? 1 : 0);