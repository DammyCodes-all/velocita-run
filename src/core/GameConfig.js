/**
 * GameConfig — every tuning number for VELOCITA RUN in one file.
 *
 * Identity: Halcyon Bay is a rain-slicked coastal transit city. You play
 * Vela, a courier sprinting the Arterial Line: the elevated freight/maintenance
 * deck that rings the bay. Quids are the transit currency; Overdrive Cells are
 * salvaged power cores.
 *
 * Nothing here is Subway Surfers: the setting is a coastal freight artery
 * (not a graffiti-covered railway), the hazards are storm-drain sluices and
 * maglev haulers (not tunnel trains), and the palette is wet-concrete + signal
 * amber + sea-mist teal.
 */

export const GAME = Object.freeze({
  TITLE: 'VELOCITA',
  SUBTITLE: 'RUN',
  TAGLINE: 'Halcyon Bay Transit Authority — Arterial Line, Sector 7',
});

/** Metres. Lane centres sit at -LANE_WIDTH, 0, +LANE_WIDTH. */
export const TRACK = Object.freeze({
  LANE_COUNT: 3,
  LANE_WIDTH: 2.4,
  /** Half-width of the walkable deck. */
  DECK_HALF_WIDTH: 4.6,
  /** Length of one generated tile in metres. */
  TILE_LENGTH: 24,
  /** How many tiles are kept alive ahead of and behind the player. */
  TILES_AHEAD: 9,
  TILES_BEHIND: 2,
  DECK_Y: 0,
});

/** Forward speed, ramped by score. Units: metres/second. */
export const SPEED = Object.freeze({
  START: 9.5,
  MAX: 30,
  /** Score at which MAX speed is reached. */
  RAMP_DISTANCE: 2600,
  /** Boost adds this much on top. */
  BOOST_MULTIPLIER: 1.45,
});

export const PLAYER = Object.freeze({
  LANE_CHANGE_TIME: 0.19,
  JUMP_VELOCITY: 8.1,
  GRAVITY: -22,
  /** Grace period after leaving the ground during which a jump can re-fire. */
  COYOTE_TIME: 0.11,
  SLIDE_DURATION: 0.62,
  SLIDE_HEIGHT: 0.72,
  STAND_HEIGHT: 1.62,
  /** Half-width of the collision box (a touch forgiving vs the visual). */
  HITBOX_HALF_WIDTH: 0.42,
  /** Extra forgiveness granted near-misses in the lane axis. */
  HITBOX_DEPTH: 0.55,
  /** Invulnerable window after a crash or revive. */
  SPAWN_INVULNERABILITY: 2.4,
});

export const SCORE = Object.freeze({
  /**
   * Points per metre travelled. Deliberately well above 1: at 1 the score and
   * the distance readout showed identical numbers in the HUD, which read as a
   * bug rather than as two separate stats. Now score grows roughly 10x faster
   * than metres and picks up coins, near misses and the multiplier on top, so
   * the two values are instantly distinguishable.
   */
  PER_METRE: 10,
  /** Base value of a quid. */
  COIN_VALUE: 10,
  /** Score for passing an obstacle cleanly at close range. */
  NEAR_MISS: 25,
  /** Multiplier increases every this many metres without incident. */
  MULTIPLIER_STEP: 300,
  MULTIPLIER_MAX: 8,
});

export const CAMERA = Object.freeze({
  FOV: 62,
  /** Offset from the player, in the player's local space. */
  OFFSET_X: 0,
  OFFSET_Y: 3.35,
  OFFSET_Z: 7.4,
  /** Higher = snappier follow. */
  POSITION_DAMPING: 0.0016,
  LOOK_DAMPING: 0.0008,
  LOOK_AHEAD: 7.5,
  LOOK_HEIGHT: 1.15,
  /** How much the camera shifts sideways as the player changes lane. */
  LANE_FOLLOW: 0.42,
  NEAR: 0.1,
  FAR: 420,
});

/** Power-up definitions. `id` keys are also used for upgrade levels. */
export const POWERUPS = Object.freeze({
  magnet: {
    id: 'magnet',
    name: 'Lodestone',
    blurb: 'Draws in nearby quids',
    duration: 9,
    color: 0x59e0ff,
    cssColor: '#59e0ff',
    icon: 'magnet',
  },
  shield: {
    id: 'shield',
    name: 'Aegis Shell',
    blurb: 'Absorbs one impact',
    duration: 0, // instant / until consumed
    color: 0xffd166,
    cssColor: '#ffd166',
    icon: 'shield',
  },
  multiply: {
    id: 'multiply',
    name: 'Overdrive Lens',
    blurb: 'Doubles score value',
    duration: 10,
    color: 0xff6fd8,
    cssColor: '#ff6fd8',
    icon: 'multiply',
  },
  boost: {
    id: 'boost',
    name: 'Thruster Cell',
    blurb: 'Surge forward, smash through',
    duration: 4.5,
    color: 0x7dff9b,
    cssColor: '#7dff9b',
    icon: 'boost',
  },
});

export const POWERUP_IDS = Object.freeze(Object.keys(POWERUPS));

/**
 * Upgrade costs are linear in level. Purchases spend the coin bank,
 * which is separate from the per-run quid count.
 */
export const UPGRADES = Object.freeze({
  magnet: { maxLevel: 4, baseCost: 120, step: 140, label: 'Lodestone Radius' },
  shield: { maxLevel: 3, baseCost: 180, step: 200, label: 'Aegis Durability' },
  multiply: { maxLevel: 4, baseCost: 200, step: 220, label: 'Overdrive Duration' },
  boost: { maxLevel: 3, baseCost: 160, step: 190, label: 'Thruster Surge' },
});

/**
 * World sections. The generator cross-fades between these as the run
 * progresses, so the environment never repeats back-to-back.
 *
 * Palette values are deliberately *mid-tone*, not dark. Under ACES tone
 * mapping with fog, anything darker than roughly 0x3a renders as an
 * unreadable black silhouette — the mood comes from the accent colours and
 * the fog, not from crushing the albedos.
 */
export const SECTORS = Object.freeze([
  {
    id: 'harbour',
    name: 'Ferry Basin',
    palette: {
      fog: 0x2c4457,
      sky: 0x14202c,
      accent: 0xff9f45,
      secondary: 0x4fd6c8,
      ground: 0x525c67,
      rail: 0x6d7885,
    },
    fogDensity: 0.011,
    hazard: ['crate', 'pallet', 'crate'],
    width: 1,
  },
  {
    id: 'nightmarket',
    name: 'Kessel Night Market',
    palette: {
      fog: 0x3a2b50,
      sky: 0x1d1528,
      accent: 0xff5fa2,
      secondary: 0x8be9ff,
      ground: 0x584d63,
      rail: 0x77648a,
    },
    fogDensity: 0.014,
    hazard: ['stall', 'sign', 'crate'],
    width: 1,
  },
  {
    id: 'spine',
    name: 'Cargo Spine',
    palette: {
      fog: 0x25394a,
      sky: 0x111d26,
      accent: 0x2fd6a5,
      secondary: 0x9adcff,
      ground: 0x4a5763,
      rail: 0x64727e,
    },
    fogDensity: 0.010,
    hazard: ['container', 'forklift', 'container'],
    width: 2,
  },
  {
    id: 'sluice',
    name: 'Storm Sluice',
    palette: {
      fog: 0x1e3648,
      sky: 0x0e1d27,
      accent: 0x49b7ff,
      secondary: 0xc9f0ff,
      ground: 0x3f4e59,
      rail: 0x586a78,
    },
    fogDensity: 0.021,
    hazard: ['sluice', 'puddle', 'barrier'],
    width: 1,
  },
  {
    id: 'dawn',
    name: 'Dawn Overpass',
    palette: {
      fog: 0x574f75,
      sky: 0x3a3152,
      accent: 0xffc98b,
      secondary: 0xa9b7ff,
      ground: 0x63636f,
      rail: 0x82828f,
    },
    fogDensity: 0.008,
    hazard: ['barrier', 'pallet', 'crate'],
    width: 1,
  },
]);

export const DIFFICULTY = Object.freeze({
  /** Distance (m) at which each difficulty step kicks in. */
  TIERS: [0, 700, 1600, 2800, 4400],
  /** Chance of spawning an extra hazard row as difficulty rises. */
  EXTRA_ROW_CHANCE: [0, 0.05, 0.14, 0.25, 0.36],
  /** Quid density multiplier per tier. */
  COIN_DENSITY: [1, 1.15, 1.35, 1.6, 1.85],
  /** Chance a generated row carries a quid trail. Coins should be the norm. */
  COIN_CHANCE: 0.94,
});

/** Quality presets. `auto` picks by measured frame time. */
export const QUALITY = Object.freeze({
  low: {
    shadows: false,
    shadowMapSize: 512,
    pixelRatioCap: 1,
    fogFar: 180,
    particleBudget: 120,
    propDensity: 0.5,
    buildingLayers: 1,
    anisotropy: 1,
  },
  medium: {
    shadows: true,
    shadowMapSize: 1024,
    pixelRatioCap: 1.5,
    fogFar: 260,
    particleBudget: 260,
    propDensity: 0.75,
    buildingLayers: 2,
    anisotropy: 4,
  },
  high: {
    shadows: true,
    shadowMapSize: 2048,
    pixelRatioCap: 2,
    fogFar: 340,
    particleBudget: 480,
    propDensity: 1,
    buildingLayers: 3,
    anisotropy: 8,
  },
});
