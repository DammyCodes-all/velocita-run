import { ObstacleKind } from './ObstacleFactory.js';
import { TRACK, DIFFICULTY, POWERUP_IDS } from '../core/GameConfig.js';
import { clamp01, randInt, rand, pick } from '../util/MathUtils.js';

/**
 * LevelGenerator — builds the endless obstacle/coin stream.
 *
 * The hard part of an endless runner isn't generating content, it's
 * generating *fair* content. Two invariants keep it playable:
 *
 *  1. Never seal all three lanes with something the player can't act on.
 *     Full-height blockers (containers, crates, stalls) may occupy at most
 *     two lanes in any row. Low barriers and overhead signs may span all
 *     three lanes precisely because jumping or sliding clears them — those
 *     rows are the game's core rhythm.
 *
 *  2. Reaction distance scales with speed. A gap that is fair at 30 m/s is
 *     impossible at 9 m/s, so spacing is computed from current speed.
 */

const LANES = [0, 1, 2];

/**
 * How far ahead of the player to keep content generated. Must comfortably
 * exceed the fog distance, or content would visibly pop into existence.
 */
const GEN_AHEAD = 260;

/** Obstacles that block a lane completely and cannot be jumped/slid past. */
const FULL_BLOCKERS = new Set([
  ObstacleKind.CRATE,
  ObstacleKind.CONTAINER,
  ObstacleKind.STALL,
  ObstacleKind.FORKLIFT,
]);

/**
 * Row patterns. Each returns obstacle descriptors in tile-local space.
 * `weight` biases selection; higher difficulty weights are injected at runtime.
 */
const ROW_PATTERNS = [
  {
    id: 'single-blocker',
    weight: 1.0,
    build() {
      return [{ kind: pick([ObstacleKind.CRATE, ObstacleKind.FORKLIFT]), lane: randInt(0, 2) }];
    },
  },
  {
    id: 'double-blocker',
    weight: 0.9,
    build() {
      // Two lanes blocked, one guaranteed open.
      const open = randInt(0, 2);
      const kinds = [ObstacleKind.CRATE, ObstacleKind.FORKLIFT, ObstacleKind.CONTAINER];
      return LANES.filter((l) => l !== open).map((lane) => ({
        kind: pick(kinds),
        lane,
      }));
    },
  },
  {
    id: 'jump-wall',
    weight: 0.85,
    build() {
      // Barrier across all three lanes: the signature "JUMP" read.
      return LANES.map((lane) => ({ kind: ObstacleKind.BARRIER, lane }));
    },
  },
  {
    id: 'slide-gate',
    weight: 0.7,
    build() {
      // Gantry signs across all three lanes: the signature "SLIDE" read.
      return LANES.map((lane) => ({ kind: ObstacleKind.SIGN, lane }));
    },
  },
  {
    id: 'jump-then-slide',
    weight: 0.55,
    build() {
      // Barrier, then a short run, then a gate. Teaches a combo.
      return [
        ...LANES.map((lane) => ({ kind: ObstacleKind.BARRIER, lane, dz: 0 })),
        ...LANES.map((lane) => ({ kind: ObstacleKind.SIGN, lane, dz: 7 })),
      ];
    },
  },
  {
    id: 'slalom',
    weight: 0.6,
    build() {
      // Staggered crates force a weave rather than a single move. Each is
      // placed in a different lane, so the player has to keep re-reading
      // which side is actually open.
      const order = [0, 1, 2].sort(() => Math.random() - 0.5);
      return order.map((lane, i) => ({
        kind: ObstacleKind.CRATE,
        lane,
        dz: i * 3.6,
      }));
    },
  },
  {
    id: 'container-corridor',
    weight: 0.5,
    build() {
      const open = randInt(0, 2);
      return LANES.filter((l) => l !== open).map((lane) => ({
        kind: ObstacleKind.CONTAINER,
        lane,
      }));
    },
  },
  {
    id: 'pallet-hop',
    weight: 0.55,
    build() {
      const lane = randInt(0, 2);
      return [0, 1, 2].map((i) => ({
        kind: ObstacleKind.PALLET,
        lane,
        dz: i * 5.5,
      }));
    },
  },
  {
    id: 'stall-pair',
    weight: 0.45,
    build() {
      const open = randInt(0, 2);
      return LANES.filter((l) => l !== open).map((lane) => ({
        kind: ObstacleKind.STALL,
        lane,
      }));
    },
  },
  {
    id: 'jet-strip',
    weight: 0.4,
    build() {
      // Sluice jets on two lanes: passable by weaving, not by action.
      const open = randInt(0, 2);
      return LANES.filter((l) => l !== open).map((lane) => ({
        kind: ObstacleKind.SLUICE,
        lane,
      }));
    },
  },
];

/** Quid formations. All are trails: long enough to read as a line you can aim along. */
const COIN_PATTERNS = [
  {
    id: 'streak',
    build(lane, z, count) {
      return Array.from({ length: count }, (_, i) => ({ lane, z: z - i * 1.9, y: 0.95 }));
    },
  },
  {
    id: 'arc',
    build(lane, z, count) {
      // Follows the jump parabola, so collecting is a reward for jumping well.
      return Array.from({ length: count }, (_, i) => {
        const t = i / Math.max(1, count - 1);
        return {
          lane,
          z: z - i * 2.2,
          y: 0.95 + Math.sin(t * Math.PI) * 1.5,
        };
      });
    },
  },
  {
    id: 'low-arc',
    build(lane, z, count) {
      return Array.from({ length: count }, (_, i) => {
        const t = i / Math.max(1, count - 1);
        return { lane, z: z - i * 2.2, y: 0.95 + Math.sin(t * Math.PI) * 0.65 };
      });
    },
  },
  {
    id: 'zigzag',
    build(lane, z, count) {
      const seq = [lane, (lane + 1) % 3, (lane + 2) % 3];
      return Array.from({ length: count }, (_, i) => ({
        lane: seq[i % 3],
        z: z - i * 2.2,
        y: 0.95,
      }));
    },
  },
  {
    id: 'tower',
    build(lane, z, count) {
      // Vertical stack: only reachable by jumping into it.
      return Array.from({ length: count }, (_, i) => ({
        lane,
        z,
        y: 1.0 + i * 0.85,
      }));
    },
  },
];

/**
 * Distance (m) between generated rows.
 *
 * The floor matters more than the formula. At the old 16 m minimum the early
 * game was a wall of obstacles — three-lane rows stacked 16 m apart gave the
 * player barely a second to read and answer each one, and it buried the coin
 * trails underneath. 26 m keeps the genre's rhythm while leaving space to see
 * what's coming and to steer through it.
 */
function rowSpacing(speed, difficulty01) {
  // Reaction time the player needs, in seconds. Tightens with difficulty.
  const reactionTime = lerp(0.95, 0.55, difficulty01);
  const base = speed * reactionTime;
  return Math.max(26, base + rand(0, 10));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export class LevelGenerator {
  /**
   * @param {object} opts
   * @param {import('./ObstacleFactory.js').ObstacleFactory} opts.obstacles
   * @param {import('./PickupFactory.js').CoinField} opts.coins
   * @param {import('./PickupFactory.js').PickupFactory} opts.pickups
   * @param {import('../core/EventBus.js').EventBus} opts.bus
   */
  constructor({ obstacles, coins, pickups, bus }) {
    this.obstacles = obstacles;
    this.coins = coins;
    this.pickups = pickups;
    this.bus = bus;

    /** Live obstacle records, in world z (negative = ahead). */
    this.live = [];
    /** @type {{x:number,y:number,z:number,powerId:string}[]} */
    this.livePowerups = [];

    /** z of the next row to be generated (negative, ahead of player). */
    this.cursor = -55;
    /** Distance travelled, drives difficulty. */
    this.distance = 0;
    this.sinceLastPowerup = 0;
    this.lastSectorId = null;
    this.sectorIndex = 0;

    /** @type {object[]} sector rotation state */
    this.sectorHistory = [];
  }

  reset() {
    this.clear();
    this.cursor = -55;
    this.distance = 0;
    this.sinceLastPowerup = 0;
    this.sectorHistory.length = 0;
    this.lastSectorId = null;
    this.sectorIndex = 0;
  }

  clear() {
    for (const record of this.live) {
      this.obstacles.release(record.obj);
    }
    this.live.length = 0;
    this.pickups.clear();
    this.coins.clear();
    this.livePowerups.length = 0;
  }

  /** Difficulty tier index for the current distance. */
  get tier() {
    const d = this.distance;
    let t = 0;
    for (let i = 0; i < DIFFICULTY.TIERS.length; i++) {
      if (d >= DIFFICULTY.TIERS[i]) t = i;
    }
    return t;
  }

  get difficulty01() {
    return clamp01(this.tier / (DIFFICULTY.TIERS.length - 1));
  }

  /**
   * Scroll the world and generate new content as the cursor approaches.
   * @param {number} scroll metres travelled this frame
   * @param {number} speed current m/s
   * @param {object} sector current sector definition
   */
  update(scroll, speed, sector) {
    this.distance += scroll;

    // Scroll everything toward the camera.
    for (const record of this.live) {
      record.z += scroll;
      // Keep the mesh transform authoritative for rendering and raycasts;
      // `record.z` stays the cheap value used for collision tests.
      record.obj.position.z = record.z;
    }
    for (const p of this.livePowerups) {
      p.z += scroll;
      p.obj.position.z = p.z;
    }

    // Recycle anything that has passed behind the camera.
    this._cull(24);

    // `cursor` is an absolute world z marking where the next row will be
    // placed. It has to travel with the world, otherwise it only ever moves
    // further away and generation halts once it passes the window.
    this.cursor += scroll;

    // Keep roughly GEN_AHEAD metres of content ahead of the player.
    while (this.cursor > -GEN_AHEAD) {
      this._generateRow(speed, sector);
    }
  }

  /** @param {number} behind distance behind the player to retain */
  _cull(behind) {
    for (let i = this.live.length - 1; i >= 0; i--) {
      if (this.live[i].z > behind) {
        this.obstacles.release(this.live[i].obj);
        this.live.splice(i, 1);
      }
    }
    for (let i = this.livePowerups.length - 1; i >= 0; i--) {
      if (this.livePowerups[i].z > behind) {
        this.pickups.releaseAt(i);
      }
    }
  }

  /**
   * Validate a row against the fairness invariants.
   * @returns {boolean}
   */
  _isFair(row) {
    // Group by dz so multi-row patterns are checked per actual row.
    const byZ = new Map();
    for (const item of row) {
      const z = item.dz ?? 0;
      if (!byZ.has(z)) byZ.set(z, []);
      byZ.get(z).push(item);
    }
    for (const [, items] of byZ) {
      const fullLanes = new Set(
        items.filter((i) => FULL_BLOCKERS.has(i.kind)).map((i) => i.lane)
      );
      if (fullLanes.size >= TRACK.LANE_COUNT) return false;
    }
    return true;
  }

  _generateRow(speed, sector) {
    const z = this.cursor;
    const tier = this.tier;
    const difficulty = this.difficulty01;

    // Bias toward denser, more advanced patterns as difficulty climbs.
    const weights = ROW_PATTERNS.map((p) => {
      let w = p.weight;
      if (p.id === 'jump-wall' || p.id === 'slide-gate' || p.id === 'jump-then-slide') {
        w *= 0.6 + difficulty * 0.9;
      }
      if (p.id === 'container-corridor' || p.id === 'stall-pair') w *= 0.4 + difficulty;
      if (p.id === 'single-blocker') w *= 1.4 - difficulty * 0.8;
      return Math.max(0.05, w);
    });

    let pattern = weightedPick(ROW_PATTERNS, weights);
    let row = pattern.build();

    // Guarantee fairness — retry a few times, then fall back to something safe.
    let guard = 0;
    while (!this._isFair(row) && guard++ < 6) {
      row = pattern.build();
    }
    if (!this._isFair(row)) {
      row = [{ kind: ObstacleKind.CRATE, lane: randInt(0, 2) }];
    }

    // Occasional extra row at higher tiers.
    if (Math.random() < DIFFICULTY.EXTRA_ROW_CHANCE[tier]) {
      const extra = weightedPick(ROW_PATTERNS, weights).build();
      for (const item of extra) row.push({ ...item, dz: (item.dz ?? 0) + 3.5 });
    }

    // Place the row.
    for (const item of row) {
      const obj = this.obstacles.spawn(item.kind, this.obstacles.parent);
      if (!obj) continue;
      const laneX = (item.lane - 1) * TRACK.LANE_WIDTH;
      const worldZ = z - (item.dz ?? 0);
      obj.position.set(laneX, 0, worldZ);
      this.live.push({
        obj,
        z: worldZ,
        kind: item.kind,
        lane: item.lane,
        collide: obj.userData.collide,
        passed: false,
        bob: Math.random() * Math.PI * 2,
      });
    }

    // Sector-appropriate hazard dressing along the deck edge (decorative).
    if (Math.random() < 0.5) {
      const side = Math.random() < 0.5 ? -1 : 1;
      const post = this.obstacles.spawn(ObstacleKind.SIGNPOST, this.obstacles.parent);
      if (post) {
        post.position.set(
          side * (TRACK.DECK_HALF_WIDTH + 0.6),
          0,
          z - rand(2, 14)
        );
        post.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
        this.live.push({
          obj: post,
          z: post.position.z,
          kind: ObstacleKind.SIGNPOST,
          lane: -1,
          collide: null,
          passed: true,
          decorative: true,
        });
      }
    }

    // Coins: a trail on nearly every row. These double as the visual guide that
    // tells the player which lane is open, so they need to be long enough to
    // form a readable ribbon rather than a scatter of specks.
    const density = DIFFICULTY.COIN_DENSITY[tier];
    if (Math.random() < DIFFICULTY.COIN_CHANCE * density) {
      const coinPattern = pick(COIN_PATTERNS);
      const baseLane = randInt(0, 2);
      const count = Math.min(15, Math.round(8 + difficulty * 5));
      const formation = coinPattern.build(baseLane, z - 3, count);
      for (const c of formation) {
        this.coins.add((c.lane - 1) * TRACK.LANE_WIDTH, c.y, c.z);
      }
    }

    // Powerups appear on a fixed cadence so they're never spammed.
    this.sinceLastPowerup += rowSpacing(speed, difficulty);
    if (this.sinceLastPowerup > 170) {
      this.sinceLastPowerup = 0;
      const powerId = pick(POWERUP_IDS);
      const lane = randInt(0, 2);
      const y = Math.random() < 0.4 ? 1.35 : 1.0;
      const obj = this.pickups.spawn(powerId, (lane - 1) * TRACK.LANE_WIDTH, y, z - 6);
      if (obj) {
        this.livePowerups.push({
          obj,
          z: obj.position.z,
          x: obj.position.x,
          y: obj.position.y,
          powerId,
        });
      }
    }

    // Advance the cursor by a speed-appropriate distance.
    this.cursor -= rowSpacing(speed, difficulty);
  }

  /**
   * Advance the sector rotation. Returns a new sector when it changes.
   * @returns {object|null}
   */
  rollSector(sectors, forceIndex = null) {
    if (forceIndex !== null) {
      this.sectorIndex = forceIndex % sectors.length;
      this.lastSectorId = sectors[this.sectorIndex].id;
      return sectors[this.sectorIndex];
    }
    // Avoid repeating the last two sectors so the world feels varied.
    let index = this.sectorIndex;
    let attempts = 0;
    while (
      attempts++ < 8 &&
      (index === this.sectorIndex ||
        this.sectorHistory[this.sectorHistory.length - 1] === sectors[index].id)
    ) {
      index = randInt(0, sectors.length - 1);
    }
    this.sectorIndex = index;
    const sector = sectors[index];
    this.sectorHistory.push(sector.id);
    if (this.sectorHistory.length > 4) this.sectorHistory.shift();
    this.lastSectorId = sector.id;
    return sector;
  }

  /**
   * Distance at which the next sector change should happen.
   * Longer segments early, shorter later.
   */
  get sectorInterval() {
    const d = this.distance;
    if (d < 500) return 260;
    if (d < 1500) return 320;
    if (d < 3200) return 380;
    return 440;
  }
}

function weightedPick(items, weights) {
  let total = 0;
  for (const w of weights) total += w;
  let roll = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return items[i];
  }
  return items[items.length - 1];
}
