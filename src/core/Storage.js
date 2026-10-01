import { clamp } from '../util/MathUtils.js';

const STORAGE_KEY = 'velocita-run:v1';

/** A safe, schema-versioned wrapper around localStorage. */
class StorageService {
  constructor() {
    this.available = this.probe();
    this.data = this.load();
  }

  probe() {
    try {
      const k = '__velocita_probe__';
      window.localStorage.setItem(k, '1');
      window.localStorage.removeItem(k);
      return true;
    } catch {
      // Private browsing / disabled storage: fall back to in-memory only.
      return false;
    }
  }

  defaults() {
    return {
      version: 1,
      bestScore: 0,
      bestDistance: 0,
      totalRuns: 0,
      totalCoins: 0,
      coinsBank: 0,
      lastCharacter: 'nova',
      unlockedCharacters: ['nova'],
      unlockedPowerUps: ['magnet', 'shield', 'multiply', 'boost'],
      upgrades: { magnet: 0, shield: 0, multiply: 0, boost: 0 },
      missions: null, // populated by Missions module
      settings: {
        quality: 'auto',
        music: 0.6,
        sfx: 0.8,
        screenShake: 1,
        fogOfWar: true,
        showFps: false,
        invertLane: false,
        mouseSteering: true,
      },
      seenTutorial: false,
    };
  }

  load() {
    const base = this.defaults();
    if (!this.available) return base;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const parsed = JSON.parse(raw);
      // Merge shallowly, and settings one level deeper, so newly added
      // keys get sensible defaults instead of undefined.
      return {
        ...base,
        ...parsed,
        settings: { ...base.settings, ...(parsed.settings || {}) },
        upgrades: { ...base.upgrades, ...(parsed.upgrades || {}) },
      };
    } catch (err) {
      console.warn('[Storage] could not read save data, starting fresh.', err);
      return base;
    }
  }

  save() {
    if (!this.available) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (err) {
      // Quota exceeded or similar — the run continues, progress just won't persist.
      console.warn('[Storage] save failed.', err);
    }
  }

  /** @param {Function} mutator receives the data object */
  update(mutator) {
    mutator(this.data);
    this.save();
    return this.data;
  }

  reset() {
    this.data = this.defaults();
    this.save();
  }
}

export const Storage = new StorageService();

/** Runtime-adjustable settings with persistence + change notification. */
class SettingsService {
  constructor() {
    this.values = { ...Storage.data.settings };
  }

  get(key) {
    return this.values[key];
  }

  set(key, value) {
    this.values[key] = value;
    Storage.update((d) => {
      d.settings[key] = value;
    });
    return value;
  }

  /** Volume values are clamped to a sane 0..1 range. */
  setVolume(key, value) {
    return this.set(key, clamp(value, 0, 1));
  }

  reset() {
    this.values = { ...Storage.defaults().settings };
    Storage.update((d) => {
      d.settings = { ...this.values };
    });
  }
}

export const Settings = new SettingsService();
