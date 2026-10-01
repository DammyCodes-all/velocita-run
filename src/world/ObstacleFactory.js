import * as THREE from 'three';
import { Object3DPool } from '../core/Pool.js';
import { Palette, boxGeo, cylGeo, sphereGeo, metal, concrete, emissive, flat, mat, signTexture } from '../core/Materials.js';
import { hazardStripes, corrugated } from '../core/ProceduralTextures.js';
import { mergeByMaterial } from './GeoUtils.js';
import { TRACK } from '../core/GameConfig.js';

/**
 * Corrugated container siding, cached by colour. Building a fresh
 * CanvasTexture per container would blow past the texture-unit budget and
 * re-upload to the GPU on every spawn.
 */
const containerSkins = new Map();
function containerSkin(colorHex) {
  if (containerSkins.has(colorHex)) return containerSkins.get(colorHex);
  const material = new THREE.MeshStandardMaterial({
    color: colorHex,
    map: corrugated('#ffffff', 41),
    roughness: 0.72,
    metalness: 0.28,
  });
  containerSkins.set(colorHex, material);
  return material;
}

/**
 * Mark a mesh as animated so `mergeByMaterial` leaves it alone, and give it a
 * private copy of its material.
 *
 * The clone matters: beacons blink by writing `material.emissiveIntensity`.
 * Materials are cached and shared across every obstacle, so without cloning,
 * all beacons in the scene would pulse in lockstep — and the loop that
 * updates them would keep overwriting one shared value.
 */
function dynamic(mesh) {
  mesh.userData.dynamic = true;
  mesh.material = mesh.material.clone();
  return mesh;
}

/**
 * Obstacles — every hazard type the generator can place.
 *
 * Each obstacle is a pooled `THREE.Group` with `userData.kind` set. Collision
 * is handled by the player's AABB test against the group's position/extent,
 * so geometry detail never costs physics work.
 */

export const ObstacleKind = Object.freeze({
  CRATE: 'crate',
  CONTAINER: 'container',
  BARRIER: 'barrier',
  STALL: 'stall',
  SLUICE: 'sluice',
  FORKLIFT: 'forklift',
  PALLET: 'pallet',
  SIGN: 'sign',
  SIGNPOST: 'signpost',
});

// ---------------------------------------------------------------------------
// Sub-builders. Each returns a Group sized to fit a lane.
// ---------------------------------------------------------------------------

/** Hazard-warning colour, shared so every obstacle reads the same. */
const HAZARD = 0xffb02e;
/** Secondary hazard colour for the "slide under me" reads. */
const HAZARD_ALT = 0xff5a4a;

/**
 * Emissive edge band.
 *
 * Obstacles start ~200 m out and the player needs to read them long before
 * they're in collision range. Lighting alone can't do this — at that distance
 * the deck, the crates and the dark fog are all similar values. A bright
 * emissive strip gives every hazard a consistent "this will hurt you" signal
 * that survives fog and distance.
 */
function warningBand(group, w, h, d, x, y, z, color = HAZARD, intensity = 1.6) {
  const band = dynamic(new THREE.Mesh(boxGeo(w, h, d), emissive(color, intensity)));
  band.position.set(x, y, z);
  // The beacon animator pulses emissive meshes, so each band records its own
  // resting intensity. Without this every band would be forced to the same
  // value and the deliberate brightness hierarchy between them is lost.
  band.userData.baseEmissive = intensity;
  band.userData.pulse = false;
  group.add(band);
  return band;
}

function buildCrate(palette) {
  const g = new THREE.Group();
  const rand = Math.random;
  const accent = palette?.accent ?? Palette.amber;

  // Main box body.
  const body = new THREE.Mesh(
    boxGeo(1.6, 1.3, 1.6),
    concrete(rand() > 0.5 ? Palette.wood : Palette.tarpRust, 0.9)
  );
  body.position.y = 0.65;
  body.castShadow = body.receiveShadow = true;
  g.add(body);

  // Corner braces for silhouette.
  const braceMat = metal(Palette.steelDark, 0.6, 0.6);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const post = new THREE.Mesh(boxGeo(0.12, 1.3, 0.12), braceMat);
      post.position.set(sx * 0.76, 0.65, sz * 0.76);
      g.add(post);
    }
  }

  // Top lip + warning light.
  const lip = new THREE.Mesh(boxGeo(1.7, 0.1, 1.7), metal(Palette.steel, 0.5, 0.7));
  lip.position.y = 1.3;
  g.add(lip);

  // Readability: a full band around the upper face, visible from any angle.
  warningBand(g, 1.66, 0.1, 1.66, 0, 1.12, 0);
  warningBand(g, 0.1, 1.24, 0.1, -0.79, 0.66, -0.79, HAZARD_ALT, 1.1);
  warningBand(g, 0.1, 1.24, 0.1, 0.79, 0.66, 0.79, HAZARD_ALT, 1.1);

  const lamp = dynamic(new THREE.Mesh(sphereGeo(0.11, 8), emissive(accent, 2.2)));
  lamp.position.y = 1.42;
  g.add(lamp);

  g.userData.collide = { halfW: 0.85, halfH: 1.35, halfD: 0.85, top: 1.35 };
  return g;
}

function buildContainer(palette) {
  const g = new THREE.Group();
  const accent = palette?.accent ?? Palette.teal;
  const colors = [Palette.tarpBlue, Palette.tarpGreen, Palette.tarpRust, Palette.concreteDark];
  const color = colors[Math.floor(Math.random() * colors.length)];

  const body = new THREE.Mesh(
    boxGeo(2.1, 2.3, 4.4),
    containerSkin(color)
  );
  body.position.y = 1.15;
  body.castShadow = body.receiveShadow = true;
  g.add(body);

  // Vertical rib posts.
  const ribMat = metal(Palette.steelDark, 0.5, 0.6);
  for (const sx of [-1, 1]) {
    for (let i = -1; i <= 1; i++) {
      const rib = new THREE.Mesh(boxGeo(0.14, 2.3, 0.14), ribMat);
      rib.position.set(sx * 1.02, 1.15, i * 1.9);
      g.add(rib);
    }
  }

  // Corner castings + hazard stripe plate.
  const capMat = metal(Palette.steel, 0.45, 0.7);
  for (const sx of [-1, 1]) {
    for (const sy of [0, 1]) {
      for (const sz of [-1, 1]) {
        const cap = new THREE.Mesh(boxGeo(0.2, 0.2, 0.2), capMat);
        cap.position.set(sx * 0.98, sy === 0 ? 0.1 : 2.2, sz * 2.12);
        g.add(cap);
      }
    }
  }

  // Reflective stripe + beacon so it's readable at speed.
  const stripe = new THREE.Mesh(
    boxGeo(2.12, 0.24, 0.06),
    new THREE.MeshStandardMaterial({
      map: hazardStripes('#ff9f45', '#14181d'),
      roughness: 0.4,
      metalness: 0.1,
      emissive: accent,
      emissiveIntensity: 0.12,
    })
  );
  stripe.position.set(0, 1.9, -2.22);
  g.add(stripe);

  // Readability bands: a lit rail down both long edges, plus corner markers.
  // Containers are 4.4 m long, so their leading face is what the player sees
  // first — that edge gets the brightest treatment.
  for (const sz of [-1, 1]) {
    warningBand(g, 0.09, 2.2, 0.09, -1.06, 1.15, sz * 2.1, HAZARD, 1.3);
    warningBand(g, 0.09, 2.2, 0.09, 1.06, 1.15, sz * 2.1, HAZARD, 1.3);
  }
  warningBand(g, 1.9, 0.12, 0.1, 0, 2.24, -2.21, HAZARD_ALT, 1.7);
  warningBand(g, 1.9, 0.12, 0.1, 0, 0.12, -2.21, HAZARD_ALT, 1.7);

  const beacon = dynamic(new THREE.Mesh(sphereGeo(0.11, 8), emissive(accent, 2.6)));
  beacon.position.set(0, 2.45, 0);
  g.add(beacon);

  g.userData.collide = { halfW: 1.05, halfH: 1.15, halfD: 2.2, top: 2.3 };
  return g;
}

function buildBarrier(palette) {
  // A low kick-rail you jump over.
  const g = new THREE.Group();
  const accent = palette?.accent ?? Palette.amber;

  const rail = new THREE.Mesh(
    boxGeo(2.1, 0.28, 0.24),
    new THREE.MeshStandardMaterial({
      map: hazardStripes('#f5f0e6', '#20242a'),
      roughness: 0.55,
      metalness: 0.2,
    })
  );
  rail.position.y = 0.72;
  rail.castShadow = true;
  g.add(rail);

  const postMat = metal(Palette.steel, 0.4, 0.8);
  for (const sx of [-0.95, 0.95]) {
    const post = new THREE.Mesh(boxGeo(0.14, 0.75, 0.14), postMat);
    post.position.set(sx, 0.37, 0);
    g.add(post);
    const foot = new THREE.Mesh(boxGeo(0.4, 0.08, 0.4), postMat);
    foot.position.set(sx, 0.04, 0);
    g.add(foot);
  }

  // Amber blinker on top — the read for "jump me".
  const blinker = dynamic(new THREE.Mesh(sphereGeo(0.09, 8), emissive(accent, 2.4)));
  blinker.position.set(0, 0.92, 0);
  g.add(blinker);

  // Readability: the rail itself glows. This is the single most common
  // "jump" cue in the game, so it must be unmissable at distance.
  warningBand(g, 2.1, 0.3, 0.26, 0, 0.72, 0, HAZARD, 1.9);
  for (const sx of [-0.95, 0.95]) {
    warningBand(g, 0.16, 0.7, 0.16, sx, 0.38, 0, HAZARD, 1.4);
  }

  g.userData.collide = { halfW: 1.05, halfH: 0.4, halfD: 0.16, top: 0.9 };
  g.userData.requireJump = true;
  return g;
}

function buildStall(palette) {
  // Market stall / kiosk — tall, blocks a lane fully, slide under the awning.
  const g = new THREE.Group();
  const accent = palette?.accent ?? Palette.hotPink;
  const canopy = mat(`stall-canopy-${accent}`, () =>
    new THREE.MeshStandardMaterial({ color: accent, roughness: 0.8, side: THREE.DoubleSide })
  );

  const base = new THREE.Mesh(boxGeo(2.0, 0.9, 1.4), metal(Palette.steelDark, 0.6, 0.4));
  base.position.y = 0.45;
  base.castShadow = base.receiveShadow = true;
  g.add(base);

  // Striped canopy roof.
  const roof = new THREE.Mesh(boxGeo(2.2, 0.1, 1.7), canopy);
  roof.position.y = 2.1;
  g.add(roof);
  for (const sz of [-0.9, 0.9]) {
    const scallop = new THREE.Mesh(boxGeo(2.2, 0.24, 0.06), canopy);
    scallop.position.set(0, 1.94, sz);
    g.add(scallop);
  }

  // Support poles.
  const poleMat = metal(Palette.steel, 0.4, 0.8);
  for (const sx of [-0.95, 0.95]) {
    for (const sz of [-0.75, 0.75]) {
      const pole = new THREE.Mesh(cylGeo(0.05, 0.05, 2.1, 6), poleMat);
      pole.position.set(sx, 1.05, sz);
      g.add(pole);
    }
  }

  // Neon under-canopy strip (this is the sector's signature look).
  const neon = dynamic(new THREE.Mesh(boxGeo(2.0, 0.06, 0.06), emissive(accent, 2.8)));
  neon.position.set(0, 2.0, -0.8);
  g.add(neon);

  // Readability: bright hazard base band, so the stall's footprint is obvious
  // even when the canopy itself is lost in the fog.
  warningBand(g, 2.02, 0.11, 1.42, 0, 0.9, 0, HAZARD_ALT, 1.7);
  warningBand(g, 2.02, 0.09, 0.09, 0, 0.94, -0.72, HAZARD, 1.6);

  g.userData.collide = { halfW: 1.0, halfH: 1.05, halfD: 0.75, top: 2.1 };
  return g;
}

function buildSluice(palette) {
  // Storm-drain water jet shooting across the deck — slide/evade, tall glow.
  const g = new THREE.Group();
  const accent = palette?.accent ?? Palette.sky;

  // Floor grate.
  const grate = new THREE.Mesh(
    boxGeo(2.2, 0.08, 1.0),
    metal(Palette.steelDark, 0.5, 0.7)
  );
  grate.position.y = 0.04;
  g.add(grate);
  // Grate slots.
  for (let i = -3; i <= 3; i++) {
    const slot = new THREE.Mesh(boxGeo(0.08, 0.02, 0.9), emissive(0x0a1a24, 0.4));
    slot.position.set(i * 0.28, 0.09, 0);
    g.add(slot);
  }

  // Water columns (translucent, animated by scale in update).
  const jetMat = new THREE.MeshStandardMaterial({
    color: accent,
    transparent: true,
    opacity: 0.4,
    emissive: accent,
    emissiveIntensity: 0.8,
    roughness: 0.1,
    depthWrite: false,
  });
  for (let i = -2; i <= 2; i++) {
    const jet = dynamic(new THREE.Mesh(cylGeo(0.06, 0.14, 2.2, 6), jetMat));
    jet.position.set(i * 0.4, 1.1, 0);
    jet.userData.isJet = true;
    g.add(jet);
  }

  // Readability: hazard chevrons on the deck edges framing the jet curtain.
  for (const sx of [-1, 1]) {
    warningBand(g, 0.12, 0.14, 1.02, sx * 1.08, 0.1, 0, HAZARD, 1.7);
  }
  warningBand(g, 2.2, 0.08, 0.1, 0, 0.13, -0.5, HAZARD_ALT, 1.4);

  g.userData.collide = { halfW: 1.1, halfH: 1.1, halfD: 0.5, top: 2.2 };
  return g;
}

function buildForklift(palette) {
  const g = new THREE.Group();
  const accent = palette?.accent ?? Palette.mint;

  // Body.
  const body = new THREE.Mesh(boxGeo(1.5, 0.9, 2.6), mat('fork-body', () =>
    new THREE.MeshStandardMaterial({ color: Palette.amberDeep, roughness: 0.6, metalness: 0.3 })
  ));
  body.position.y = 0.55;
  body.castShadow = body.receiveShadow = true;
  g.add(body);

  // Cabin cage.
  const cageMat = metal(Palette.steel, 0.4, 0.8);
  const roof = new THREE.Mesh(boxGeo(1.4, 0.08, 1.4), cageMat);
  roof.position.set(0, 2.0, -0.3);
  g.add(roof);
  for (const sx of [-0.65, 0.65]) {
    for (const sz of [-0.9, 0.3]) {
      const bar = new THREE.Mesh(boxGeo(0.08, 1.1, 0.08), cageMat);
      bar.position.set(sx, 1.5, sz);
      g.add(bar);
    }
  }

  // Mast + forks (front, -Z direction is forward).
  const mast = new THREE.Mesh(boxGeo(0.9, 1.6, 0.12), cageMat);
  mast.position.set(0, 1.0, -1.35);
  g.add(mast);
  for (const sx of [-0.3, 0.3]) {
    const fork = new THREE.Mesh(boxGeo(0.12, 0.06, 0.9), cageMat);
    fork.position.set(sx, 0.3, -1.75);
    g.add(fork);
  }

  // Beacon.
  const beacon = dynamic(new THREE.Mesh(sphereGeo(0.1, 8), emissive(accent, 2.4)));
  beacon.position.set(0, 2.15, -0.3);
  g.add(beacon);

  // Readability: hazard band across the front, and lit fork tips — the
  // silhouette that tells you to swerve.
  warningBand(g, 1.5, 0.11, 0.09, 0, 1.02, -1.32, HAZARD_ALT, 1.8);
  for (const sx of [-0.3, 0.3]) {
    warningBand(g, 0.13, 0.08, 0.92, sx, 0.32, -1.78, HAZARD, 1.5);
  }

  g.userData.collide = { halfW: 0.8, halfH: 1.05, halfD: 1.4, top: 2.05 };
  return g;
}

function buildPallet(palette) {
  // Flat obstacle on the deck you jump over.
  const g = new THREE.Group();
  const accent = palette?.accent ?? Palette.amber;

  const slat = boxGeo(1.8, 0.1, 0.3);
  const woodMat = concrete(Palette.wood, 0.9);
  for (let i = -2; i <= 2; i++) {
    const plank = new THREE.Mesh(slat, woodMat);
    plank.position.set(0, 0.34, i * 0.42);
    plank.castShadow = true;
    g.add(plank);
  }
  const stringer = boxGeo(0.16, 0.24, 1.7);
  for (const sx of [-0.75, 0.75]) {
    const beam = new THREE.Mesh(stringer, woodMat);
    beam.position.set(sx, 0.16, 0);
    g.add(beam);
  }

  // Tape stripe.
  const tape = new THREE.Mesh(boxGeo(0.4, 0.02, 1.7), emissive(accent, 1.2));
  tape.position.set(0, 0.4, 0);
  g.add(tape);

  // Readability: lit edges along both sides of the pallet, so its low
  // profile is obvious before you're on top of it.
  for (const sx of [-0.92, 0.92]) {
    warningBand(g, 0.09, 0.16, 1.8, sx, 0.3, 0, HAZARD, 1.5);
  }
  warningBand(g, 1.84, 0.1, 0.1, 0, 0.4, -0.88, HAZARD_ALT, 1.6);

  g.userData.collide = { halfW: 0.9, halfH: 0.25, halfD: 0.85, top: 0.45 };
  g.userData.requireJump = true;
  return g;
}

function buildSign(palette) {
  // Overhead gantry you must slide under. The board's underside sits at
  // SIGN_OPENING, which is deliberately below the player's standing height
  // (1.62 m) and above their sliding height (0.72 m) — otherwise the
  // obstacle would be free to walk through.
  const g = new THREE.Group();
  const accent = palette?.accent ?? Palette.amber;
  const OPENING = SIGN_OPENING;

  const label = ['ARTERIAL', 'SECTOR 7', 'MIND GAP', 'CLEAR', 'SLOW', 'BAY 12'][
    Math.floor(Math.random() * 6)
  ];
  const board = new THREE.Mesh(
    boxGeo(2.6, 0.62, 0.08),
    new THREE.MeshStandardMaterial({
      map: signTexture(label, { fg: `#${accent.toString(16).padStart(6, '0')}` }),
      emissive: accent,
      emissiveIntensity: 0.55,
      roughness: 0.6,
    })
  );
  board.position.y = OPENING + 0.31;
  board.castShadow = true;
  g.add(board);

  // Frame.
  const frameMat = metal(Palette.steelDark, 0.5, 0.6);
  for (const sy of [-0.36, 0.36]) {
    const bar = new THREE.Mesh(boxGeo(2.8, 0.08, 0.12), frameMat);
    bar.position.set(0, OPENING + 0.31 + sy, 0);
    g.add(bar);
  }

  // Under-lights washing the board — also the read for "duck".
  for (const sx of [-0.8, 0.8]) {
    const lamp = new THREE.Mesh(boxGeo(0.34, 0.05, 0.16), emissive(0xfff0d0, 2.4));
    lamp.position.set(sx, OPENING - 0.03, -0.12);
    g.add(lamp);
  }

  // Legs straddle the lane: the player runs *between* them, so they must sit
  // outside the lane width.
  const legMat = metal(Palette.steel, 0.4, 0.8);
  for (const sx of [-1.72, 1.72]) {
    const leg = new THREE.Mesh(boxGeo(0.16, OPENING, 0.16), legMat);
    leg.position.set(sx, OPENING / 2, 0);
    g.add(leg);
  }
  // Cross-tie between the legs, above head height.
  const tie = new THREE.Mesh(boxGeo(3.6, 0.14, 0.14), legMat);
  tie.position.set(0, OPENING + 0.95, 0);
  g.add(tie);

  g.userData.collide = { halfW: 1.3, halfH: 0.31, halfD: 0.12, top: OPENING + 0.62 };
  g.userData.requireSlide = true;
  // Height of the opening above the deck. Compared against the player's
  // vertical extent by Player.checkCollisions.
  g.userData.clearance = OPENING;
  return g;
}

function buildSignpost(palette) {
  // Roadside sign — pure decoration, no collision. Adds city texture.
  const g = new THREE.Group();
  const accent = palette?.accent ?? Palette.teal;
  const pole = new THREE.Mesh(cylGeo(0.05, 0.06, 2.6, 6), metal(Palette.steelDark, 0.5, 0.6));
  pole.position.y = 1.3;
  g.add(pole);
  const plate = new THREE.Mesh(
    boxGeo(0.8, 0.5, 0.04),
    new THREE.MeshStandardMaterial({
      map: signTexture('BAY 7', { fg: `#${accent.toString(16).padStart(6, '0')}`, width: 256, height: 160 }),
      emissive: accent,
      emissiveIntensity: 0.4,
      roughness: 0.6,
    })
  );
  plate.position.y = 2.5;
  g.add(plate);
  g.userData.decorative = true;
  g.userData.collide = null;
  return g;
}

const BUILDERS = {
  [ObstacleKind.CRATE]: buildCrate,
  [ObstacleKind.CONTAINER]: buildContainer,
  [ObstacleKind.BARRIER]: buildBarrier,
  [ObstacleKind.STALL]: buildStall,
  [ObstacleKind.SLUICE]: buildSluice,
  [ObstacleKind.FORKLIFT]: buildForklift,
  [ObstacleKind.PALLET]: buildPallet,
  [ObstacleKind.SIGN]: buildSign,
  [ObstacleKind.SIGNPOST]: buildSignpost,
};

/**
 * Height of the gantry opening above the deck.
 * Must be < PLAYER.STAND_HEIGHT (1.62) so a standing player must slide, and
 * > PLAYER.SLIDE_HEIGHT (0.72) so sliding actually clears it. The window is
 * narrow by design — this is the hardest thing in the game to pass.
 */
const SIGN_OPENING = 1.12;

/**
 * Pre-builds one instance of every obstacle kind at boot and recycles it.
 *
 * Randomisation inside builders (crate colour, sign text) is then fixed for
 * the whole session, which is exactly what we want: the city is consistent,
 * not reshuffling on every recycle.
 */
export class ObstacleFactory {
  constructor(parent = null) {
    /** Object3D that spawned obstacles are added to. */
    this.parent = parent;
    /** @type {Map<string, Object3DPool>} */
    this.pools = new Map();
    const kinds = Object.keys(BUILDERS);
    for (const kind of kinds) {
      this.pools.set(
        kind,
        new Object3DPool(
          () =>
            // Bake the static parts down to one mesh per material. An
            // unmerged crate is ~9 draw calls; merged it is 3.
            mergeByMaterial(BUILDERS[kind](null), {
              isDynamic: (child) => child.userData.dynamic === true,
            }),
          { prewarm: 6, max: 40 }
        )
      );
    }
  }

  /**
   * @param {string} kind one of ObstacleKind
   * @param {THREE.Object3D} parent
   * @returns {THREE.Group}
   */
  spawn(kind, parent) {
    const pool = this.pools.get(kind);
    if (!pool) {
      console.warn(`[ObstacleFactory] unknown kind "${kind}"`);
      return null;
    }
    const obj = pool.acquireInto(parent);
    obj.userData.kind = kind;
    obj.userData.collide = obj.userData.collide ?? null;
    return obj;
  }

  release(obj) {
    const pool = this.pools.get(obj.userData.kind);
    pool?.release(obj);
  }

  releaseAll() {
    for (const pool of this.pools.values()) pool.releaseAll();
  }

  get totalCount() {
    let n = 0;
    for (const pool of this.pools.values()) n += pool.created;
    return n;
  }
}
