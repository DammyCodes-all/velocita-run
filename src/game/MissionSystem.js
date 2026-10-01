import { Storage } from '../core/Storage.js';
import { Events } from '../core/EventBus.js';
import { clamp01 } from '../util/MathUtils.js';

/**
 * Missions — a rotating set of three objectives, rerolled on completion or
 * expiry. Missions are the reason to keep playing: each one is a different
 * verb (collect, survive, evade, power up), so they push the player into
 * different play styles rather than "do more of the same".
 */

const TEMPLATES = [
  {
    id: 'coins',
    name: 'Toll Take',
    blurb: 'Collect {target} quids',
    metric: 'coins',
    targets: [40, 75, 120, 180],
    reward: 90,
  },
  {
    id: 'distance',
    name: 'Long Haul',
    blurb: 'Run {target} metres',
    metric: 'distance',
    targets: [800, 1400, 2200, 3200],
    reward: 110,
  },
  {
    id: 'dodges',
    name: 'Clean Sweep',
    blurb: 'Pass {target} obstacles without hitting one',
    metric: 'dodges',
    targets: [30, 60, 100, 160],
    reward: 100,
  },
  {
    id: 'powerups',
    name: 'Salvage Run',
    blurb: 'Collect {target} overdrive cells',
    metric: 'powerups',
    targets: [3, 6, 10, 16],
    reward: 130,
  },
  {
    id: 'nearmiss',
    name: 'Close Shave',
    blurb: 'Near-miss {target} obstacles',
    metric: 'nearMisses',
    targets: [8, 18, 32, 55],
    reward: 120,
  },
  {
    id: 'combo',
    name: 'Streak Keeper',
    blurb: 'Reach a x{multiplier} multiplier',
    metric: 'multiplier',
    targets: [4, 5, 6, 7],
    reward: 150,
  },
];

/** Missions expire so the list never becomes a stale checklist. */
const LIFETIME_RUNS = 6;

export class MissionSystem {
  /** @param {import('../core/EventBus.js').EventBus} bus */
  constructor(bus) {
    this.bus = bus;
    if (!Storage.data.missions) {
      Storage.update((d) => {
        d.missions = this.roll(3);
      });
    }
  }

  get missions() {
    return Storage.data.missions;
  }

  /** Pick `count` distinct templates with staggered difficulty. */
  roll(count = 3) {
    const pool = [...TEMPLATES];
    const picked = [];
    // Shuffle so the same template isn't repeated across the three cards.
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    for (let i = 0; i < count; i++) {
      const t = pool[i % pool.length];
      // Target tier rises with how many times the player has completed
      // missions overall, so the goals keep pace.
      const tier = Math.min(t.targets.length - 1, Storage.data.totalRuns % t.targets.length);
      picked.push({
        templateId: t.id,
        name: t.name,
        blurb: t.blurb,
        metric: t.metric,
        target: t.targets[tier],
        progress: 0,
        reward: t.reward + tier * 40,
        runsLeft: LIFETIME_RUNS,
        completed: false,
      });
    }
    return picked;
  }

  /** Current value of a metric for HUD/mission updates. */
  static metricValue(metric, scoring) {
    switch (metric) {
      case 'coins':
        return scoring.coins;
      case 'distance':
        return Math.floor(scoring.distance);
      case 'dodges':
        return scoring.obstaclesDodged;
      case 'powerups':
        return scoring.powerupsCollected;
      case 'nearMisses':
        return scoring.nearMisses;
      case 'multiplier':
        return scoring.multiplier;
      default:
        return 0;
    }
  }

  /**
   * Sync live metrics against the mission list. Called each frame (cheap — it
   * only writes when a value actually changes).
   * @param {import('./ScoreSystem.js').ScoreSystem} scoring
   */
  sync(scoring) {
    const list = this.missions;
    let dirty = false;
    for (const mission of list) {
      if (mission.completed) continue;
      const value = MissionSystem.metricValue(mission.metric, scoring);
      if (value > mission.progress) {
        mission.progress = value;
        dirty = true;
      }
      if (mission.progress >= mission.target) {
        mission.completed = true;
        dirty = true;
        Storage.update((d) => {
          d.coinsBank += mission.reward;
        });
        this.bus.emit(Events.MISSION_COMPLETE, { mission });
      }
    }
    // Only persist when something actually changed. Writing to localStorage
    // every frame would stall the main thread and is the easiest way to
    // quietly destroy frame times in a game like this.
    if (dirty) Storage.save();
  }

  /** Called at the end of a run: decrement lifetimes, reroll finished ones. */
  onRunComplete() {
    const list = this.missions;
    let changed = false;
    for (let i = 0; i < list.length; i++) {
      if (list[i].completed || list[i].runsLeft <= 1) {
        const fresh = this.roll(1)[0];
        list[i] = fresh;
        changed = true;
      } else {
        list[i].runsLeft -= 1;
      }
    }
    if (changed) this.bus.emit(Events.TOAST, { text: 'New missions available', icon: 'target' });
    Storage.update((d) => {
      d.missions = list;
    });
  }

  /** Fraction complete, for the progress bars in the HUD/menu. */
  static progressOf(mission) {
    return clamp01(mission.progress / mission.target);
  }

  static allComplete() {
    return this.missions.every((m) => m.completed);
  }
}
