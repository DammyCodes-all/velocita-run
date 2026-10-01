/**
 * GameState — the single source of truth for what the game is doing.
 *
 * Every system reads from here rather than tracking its own boolean flags.
 * That prevents the classic "crashed but still accepting input" class of bug.
 */
export const GameState = Object.freeze({
  LOADING: 'loading',
  MENU: 'menu',
  CHARACTER_SELECT: 'characterSelect',
  MISSIONS: 'missions',
  SETTINGS: 'settings',
  COUNTDOWN: 'countdown',
  PLAYING: 'playing',
  PAUSED: 'paused',
  CRASHED: 'crashed',
  GAME_OVER: 'gameOver',
  REVIVE: 'revive',
});

/**
 * Which states render the 3D scene, and which allow gameplay input.
 * The HUD and pause menu read these rather than duplicating the logic.
 */
export const STATE_FLAGS = Object.freeze({
  [GameState.LOADING]: { world: false, hud: false, input: false, overlay: true },
  [GameState.MENU]: { world: true, hud: false, input: false, overlay: true },
  [GameState.CHARACTER_SELECT]: { world: true, hud: false, input: false, overlay: true },
  [GameState.MISSIONS]: { world: true, hud: false, input: false, overlay: true },
  [GameState.SETTINGS]: { world: true, hud: false, input: false, overlay: true },
  [GameState.COUNTDOWN]: { world: true, hud: true, input: false, overlay: false },
  [GameState.PLAYING]: { world: true, hud: true, input: true, overlay: false },
  [GameState.PAUSED]: { world: true, hud: true, input: false, overlay: true },
  [GameState.CRASHED]: { world: true, hud: true, input: false, overlay: true },
  [GameState.GAME_OVER]: { world: true, hud: false, input: false, overlay: true },
  [GameState.REVIVE]: { world: true, hud: true, input: false, overlay: true },
});

export function stateFlags(state) {
  return STATE_FLAGS[state] ?? { world: false, hud: false, input: false, overlay: true };
}

/** States in which the world should keep simulating (time flows). */
const LIVE_STATES = new Set([GameState.COUNTDOWN, GameState.PLAYING, GameState.REVIVE]);

/** States where the player is mid-run and a pause is legal. */
const PAUSABLE_STATES = new Set([GameState.PLAYING]);

export class StateMachine {
  /** @param {import('./EventBus.js').EventBus} bus */
  constructor(bus) {
    this.bus = bus;
    this.current = GameState.LOADING;
    /** @type {string[]} */
    this.history = [GameState.LOADING];
    this.listeners = new Set();
  }

  get current_() {
    return this.current;
  }

  /**
   * Attempt a transition. Returns false when the move is not allowed, which
   * lets callers keep their current behaviour instead of crashing.
   * @param {string} next
   * @param {object} [meta]
   * @returns {boolean}
   */
  transitionTo(next, meta = {}) {
    if (next === this.current) return false;
    if (!STATE_FLAGS[next]) {
      console.warn(`[StateMachine] unknown state "${next}"`);
      return false;
    }
    const from = this.current;
    this.current = next;
    this.history.push(next);
    if (this.history.length > 24) this.history.shift();

    this.bus.emit('state:change', { from, to: next, meta });
    for (const fn of this.listeners) fn(next, from, meta);
    return true;
  }

  is(...states) {
    return states.includes(this.current);
  }

  /** True when gameplay simulation should advance. */
  get isLive() {
    return LIVE_STATES.has(this.current);
  }

  /** True when gameplay input should be accepted. */
  get acceptsInput() {
    return stateFlags(this.current).input;
  }

  get canPause() {
    return PAUSABLE_STATES.has(this.current);
  }

  /** @param {(next: string, from: string, meta: object) => void} fn */
  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
}
