/**
 * EventBus — a tiny synchronous pub/sub used to decouple systems.
 * Game logic publishes; audio, UI, FX and missions subscribe.
 *
 * Keeping this synchronous is a deliberate choice: gameplay events (coin
 * pickup, crash) must be reflected in the same frame they happen, otherwise
 * the UI lags behind the juice and it feels unsatisfying.
 */
export class EventBus {
  constructor() {
    /** @type {Map<string, Set<Function>>} */
    this.channels = new Map();
    this.muted = false;
  }

  /**
   * Subscribe to a topic. Returns an unsubscribe function.
   * @param {string} topic
   * @param {Function} handler
   * @returns {() => void}
   */
  on(topic, handler) {
    let set = this.channels.get(topic);
    if (!set) {
      set = new Set();
      this.channels.set(topic, set);
    }
    set.add(handler);
    return () => this.off(topic, handler);
  }

  /**
   * Subscribe for a single delivery.
   * @param {string} topic
   * @param {Function} handler
   * @returns {() => void}
   */
  once(topic, handler) {
    const off = this.on(topic, (...args) => {
      off();
      handler(...args);
    });
    return off;
  }

  /** @param {string} topic @param {Function} handler */
  off(topic, handler) {
    const set = this.channels.get(topic);
    if (set) {
      set.delete(handler);
      if (set.size === 0) this.channels.delete(topic);
    }
  }

  /**
   * Publish synchronously. Handler errors are contained so one bad listener
   * can never take down the frame.
   * @param {string} topic
   * @param {*} [payload]
   */
  emit(topic, payload) {
    if (this.muted) return;
    const set = this.channels.get(topic);
    if (!set) return;
    // Copy before iterating: handlers may unsubscribe themselves.
    for (const handler of [...set]) {
      try {
        handler(payload);
      } catch (err) {
        console.error(`[EventBus] handler for "${topic}" threw:`, err);
      }
    }
  }

  /** Temporarily suppress all delivery (used during teardown/reset). */
  mute() {
    this.muted = true;
  }

  unmute() {
    this.muted = false;
  }

  /** Drop every subscription. Used when tearing a run down. */
  clear() {
    this.channels.clear();
  }
}

export const bus = new EventBus();

/**
 * Canonical topic names. Using constants prevents typo-driven silent bugs,
 * which are the most common failure mode in event-driven code.
 */
export const Events = Object.freeze({
  // Run lifecycle
  STATE_CHANGE: 'state:change',
  RUN_START: 'run:start',
  RUN_END: 'run:end',
  RUN_RESET: 'run:reset',
  PAUSE: 'game:pause',
  RESUME: 'game:resume',

  // Player actions
  LANE_CHANGE: 'player:laneChange',
  JUMP: 'player:jump',
  DOUBLE_JUMP: 'player:doubleJump',
  LAND: 'player:land',
  SLIDE_START: 'player:slideStart',
  SLIDE_END: 'player:slideEnd',

  // Interactions
  COIN_COLLECTED: 'coin:collected',
  POWERUP_COLLECTED: 'powerup:collected',
  POWERUP_ENDED: 'powerup:ended',
  NEAR_MISS: 'player:nearMiss',

  // Outcomes
  CRASH: 'player:crash',
  SHIELD_BREAK: 'player:shieldBreak',
  REVIVE: 'game:revive',
  REVIVE_FAILED: 'game:reviveFailed',

  // World
  SECTION_CHANGE: 'world:sectionChange',
  SPEED_CHANGE: 'world:speedChange',
  DIFFICULTY_CHANGE: 'world:difficultyChange',

  // Score & progression
  SCORE_CHANGE: 'score:change',
  MULTIPLIER_CHANGE: 'score:multiplierChange',
  MISSION_COMPLETE: 'mission:complete',
  MISSION_FAILED: 'mission:failed',
  MISSION_PROGRESS: 'mission:progress',
  UNLOCK: 'progression:unlock',

  // UI / meta
  TOAST: 'ui:toast',
  COUNTDOWN: 'ui:countdown',
  SHAKE: 'fx:shake',
  HITSTOP: 'fx:hitstop',
  FLASH: 'fx:flash',
});
