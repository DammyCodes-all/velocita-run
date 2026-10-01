import { POWERUPS, UPGRADES, POWERUP_IDS } from '../core/GameConfig.js';
import { Storage } from '../core/Storage.js';
import { Events } from '../core/EventBus.js';
import { clamp01 } from '../util/MathUtils.js';

/**
 * PowerUpManager — tracks active effects, durations and upgrade levels.
 *
 * Upgrades are deliberately shallow for now (a few levels per power-up that
 * scale duration, radius or charges). The data model in UPGRADES is shaped so
 * new axes can be added without changing this file.
 */
export class PowerUpManager {
  /** @param {import('../core/EventBus.js').EventBus} bus */
  constructor(bus) {
    this.bus = bus;
    /** @type {Map<string, {timeLeft: number, duration: number, stacks: number}>} */
    this.active = new Map();
    this.reset();
  }

  reset() {
    this.active.clear();
    this.shieldCharges = 0;
    this.magnetRadius = 6;
  }

  /** Upgrade level for a power-up, 0-indexed. */
  level(id) {
    return Storage.data.upgrades?.[id] ?? 0;
  }

  /** Duration for a power-up after upgrades. Shield has no duration. */
  durationFor(id) {
    const base = POWERUPS[id].duration;
    if (!base) return 0;
    if (id === 'multiply') return base + this.level(id) * 1.5;
    if (id === 'boost') return base + this.level(id) * 0.6;
    return base;
  }

  /** Cost to buy the next level, or null if maxed. */
  costFor(id) {
    const def = UPGRADES[id];
    const lvl = this.level(id);
    if (lvl >= def.maxLevel) return null;
    return def.baseCost + lvl * def.step;
  }

  /** Apply an upgrade if the player can afford it. Returns success. */
  purchase(id) {
    const cost = this.costFor(id);
    if (cost === null) return { ok: false, reason: 'maxed' };
    if (Storage.data.coinsBank < cost) return { ok: false, reason: 'poor' };
    Storage.update((d) => {
      d.coinsBank -= cost;
      d.upgrades[id] = this.level(id) + 1;
    });
    return { ok: true };
  }

  /**
   * @param {string} id
   * @param {object} [opts]
   */
  activate(id, opts = {}) {
    if (!POWERUPS[id]) return;
    const def = POWERUPS[id];

    if (id === 'shield') {
      // Extra levels buy additional charges rather than longer duration.
      this.shieldCharges = 1 + Math.floor(this.level(id) / 1.5);
      this.active.set('shield', { timeLeft: Infinity, duration: Infinity, stacks: this.shieldCharges });
    } else {
      const duration = this.durationFor(id);
      const existing = this.active.get(id);
      // Stacking refreshes rather than adds, to avoid runaway durations.
      this.active.set(id, {
        timeLeft: duration,
        duration,
        stacks: existing ? existing.stacks + 1 : 1,
      });
    }

    if (id === 'magnet') {
      this.magnetRadius = 5.5 + this.level(id) * 1.4;
    }

    this.bus.emit(Events.POWERUP_COLLECTED, { id, def, duration: this.durationFor(id) });
  }

  has(id) {
    return this.active.has(id);
  }

  /** @returns {number} 0..1 for HUD meters */
  fractionFor(id) {
    const entry = this.active.get(id);
    if (!entry || entry.duration === Infinity) return entry ? 1 : 0;
    return clamp01(entry.timeLeft / entry.duration);
  }

  /**
   * Consume a shield on impact. Returns true if the hit was absorbed.
   * @returns {boolean}
   */
  consumeShield() {
    if (!this.active.has('shield')) return false;
    this.shieldCharges -= 1;
    if (this.shieldCharges <= 0) {
      this.active.delete('shield');
      this.bus.emit(Events.POWERUP_ENDED, { id: 'shield' });
    }
    return true;
  }

  /** Consume boost on impact (boost smashes through obstacles). */
  consumeBoost() {
    if (!this.active.has('boost')) return false;
    this.active.delete('boost');
    this.bus.emit(Events.POWERUP_ENDED, { id: 'boost' });
    return true;
  }

  /**
   * @param {number} dt
   * @param {object} callbacks hook for score on expire (multiply, etc.)
   */
  update(dt) {
    for (const [id, entry] of [...this.active]) {
      if (entry.duration === Infinity) continue;
      entry.timeLeft -= dt;
      if (entry.timeLeft <= 0) {
        this.active.delete(id);
        this.bus.emit(Events.POWERUP_ENDED, { id });
      }
    }
  }

  /** Multiplier from the Overdrive Lens. */
  get scoreMultiplier() {
    if (!this.active.has('multiply')) return 1;
    const stacks = this.active.get('multiply').stacks;
    // Each refresh adds a half step, capped at x4 total.
    return Math.min(4, 2 + (stacks - 1) * 0.5);
  }

  /** Serialisable snapshot for the HUD. */
  snapshot() {
    const out = [];
    for (const [id, entry] of this.active) {
      out.push({
        id,
        fraction: entry.duration === Infinity ? 1 : clamp01(entry.timeLeft / entry.duration),
        stacks: entry.stacks,
        infinite: entry.duration === Infinity,
      });
    }
    return out;
  }
}
