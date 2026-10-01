/**
 * Input — keyboard + touch, normalised into a small set of intents.
 *
 * Design notes:
 * - Actions are *intents* ("laneLeft", "jump"), not raw keys, so rebinding
 *   or adding touch controls never reaches gameplay code.
 * - Input is **buffered**: a jump pressed a few frames before landing still
 *   fires. This is the single biggest contributor to a runner feeling
 *   "responsive and forgiving" rather than strict.
 */

const DEFAULT_BINDINGS = {
  left: ['ArrowLeft', 'KeyA'],
  right: ['ArrowRight', 'KeyD'],
  jump: ['ArrowUp', 'Space', 'KeyW'],
  slide: ['ArrowDown', 'KeyS'],
  pause: ['Escape', 'KeyP'],
  confirm: ['Enter', 'Space'],
};

/** How long a buffered action stays valid, in seconds. */
const BUFFER_WINDOW = 0.16;

/**
 * Mouse steering thresholds, in normalised screen space (-1..1).
 *
 * Steering needs hysteresis. Without it, a mouse resting near a lane boundary
 * fires `laneLeft`/`laneRight` every frame as the pointer jitters by a
 * fraction of a pixel — the player appears to stutter between lanes. So
 * leaving a lane needs a *wider* excursion than returning to it.
 */
const STEER = {
  /** Fraction of the half-width you must cross to leave the centre lane. */
  OUT: 0.3,
  /** Extra travel required in the same direction to cross another boundary. */
  EXTRA: 0.1,
  /** Mouse X below this counts as "not steering" — no lane changes at all. */
  DEADZONE: 0.06,
};

export class InputManager {
  /**
   * @param {HTMLElement} target element that receives touch gestures
   */
  constructor(target = document.body) {
    this.bindings = { ...DEFAULT_BINDINGS };
    this.target = target;
    this.enabled = true;

    /** @type {Set<string>} raw codes currently held */
    this.held = new Set();
    /** @type {Map<string, number>} action -> timestamp of last press */
    this.buffer = new Map();
    /** @type {Map<string, number>} action -> timestamp of last release */
    this.released = new Map();
    /** @type {Set<string>} actions consumed this frame */
    this.consumed = new Set();

    this.pointer = { active: false, startX: 0, startY: 0, x: 0, y: 0, time: 0 };
    this.touchEnabled = false;
    this.now = 0;

    // --- mouse steering -------------------------------------------------
    /** Normalised pointer X across the viewport, -1 (left) .. 1 (right). */
    this.pointerX = 0;
    this.pointerInside = false;
    /** Set from settings; false restores keyboard/touch-only control. */
    this.mouseSteering = true;
    /**
     * Steering stays disarmed until the pointer is actually moved. Without
     * this, a keyboard player who clicked "Play" on the right-hand side of
     * the window would be yanked into the right lane on the first frame of
     * the run, because the cursor already sits over that boundary.
     */
    this.steerArmed = false;
    /** Lane the mouse currently "wants". Always 0, 1 or 2 — never a fraction. */
    this.steerLane = 1;
    /** True on the frames where the mouse asks for a different lane. */
    this.steerChanged = false;

    this._bindKeyboard();
    this._bindTouch();
    this._bindMouse();
  }

  _bindKeyboard() {
    this._onKeyDown = (e) => {
      // Never swallow browser chrome shortcuts.
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const action = this._actionForCode(e.code);
      if (!action) return;
      // Space/arrows scroll the page by default — stop that.
      if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
      if (this.held.has(e.code)) return; // ignore auto-repeat
      this.held.add(e.code);
      this._press(action);
    };

    this._onKeyUp = (e) => {
      const action = this._actionForCode(e.code);
      this.held.delete(e.code);
      if (action) this.released.set(action, this.now);
    };

    // A dropped keyup (alt-tab, focus loss) would otherwise stick the player
    // in a permanent "held" state.
    this._onBlur = () => this.clear();

    window.addEventListener('keydown', this._onKeyDown, { passive: false });
    window.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('blur', this._onBlur);
  }

  _bindTouch() {
    const opts = { passive: false };
    this._onPointerDown = (e) => {
      if (e.pointerType === 'mouse') return;
      this.touchEnabled = true;
      document.body.classList.add('has-touch');
      this.pointer = {
        active: true,
        startX: e.clientX,
        startY: e.clientY,
        x: e.clientX,
        y: e.clientY,
        time: performance.now(),
      };
    };

    this._onPointerUp = (e) => {
      if (!this.pointer.active) return;
      const dx = e.clientX - this.pointer.startX;
      const dy = e.clientY - this.pointer.startY;
      const dt = performance.now() - this.pointer.time;
      const threshold = 28;
      this.pointer.active = false;

      // A quick tap (little movement, short duration) = jump.
      if (Math.hypot(dx, dy) < threshold && dt < 300) {
        this._press('jump');
        this.released.set('jump', this.now);
        return;
      }
      if (Math.abs(dx) > Math.abs(dy)) {
        this._press(dx > 0 ? 'right' : 'left');
        this.released.set(dx > 0 ? 'right' : 'left', this.now);
      } else {
        this._press(dy < 0 ? 'jump' : 'slide');
        this.released.set(dy < 0 ? 'jump' : 'slide', this.now);
      }
    };

    this.target.addEventListener('pointerdown', this._onPointerDown, opts);
    this.target.addEventListener('pointerup', this._onPointerUp, opts);
    this.target.addEventListener('pointercancel', () => {
      this.pointer.active = false;
    });
  }

  _actionForCode(code) {
    for (const [action, codes] of Object.entries(this.bindings)) {
      if (codes.includes(code)) return action;
    }
    return null;
  }

  _press(action) {
    if (!this.enabled) return;
    this.buffer.set(action, this.now);
  }

  /**
   * Call once per frame BEFORE reading intents.
   * @param {number} dt seconds
   * @param {number} elapsed total elapsed seconds
   */
  update(dt, elapsed) {
    this.now = elapsed;
    // Expire stale buffered inputs so they don't fire much later and feel wrong.
    for (const [action, time] of this.buffer) {
      if (elapsed - time > BUFFER_WINDOW) this.buffer.delete(action);
    }
    this.consumed.clear();
  }

  /**
   * True once per press if `action` was pressed within the buffer window.
   * Consuming prevents a single press from triggering twice.
   * @param {string} action
   */
  consume(action) {
    if (this.buffer.has(action)) {
      this.buffer.delete(action);
      return true;
    }
    return false;
  }

  /** Peek without consuming — used by UI hover/selection. */
  pressed(action) {
    return this.buffer.has(action);
  }

  isHeld(action) {
    for (const code of this.bindings[action] || []) {
      if (this.held.has(code)) return true;
    }
    return false;
  }

  _bindMouse() {
    this._onMouseMove = (e) => {
      // Normalise to -1..1 across the viewport. Using clientX against the
      // window width (not the element) keeps the mapping stable even if the
      // canvas doesn't fill the screen.
      this.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      this.pointerInside = true;
      // Actual movement is what hands control to the mouse.
      if (this.mouseSteering) this.steerArmed = true;
    };

    this._onMouseLeave = () => {
      this.pointerInside = false;
    };

    // Clicking the left or right third of the screen is a fast lane change
    // for players who prefer discrete clicks to continuous steering.
    this._onMouseDown = (e) => {
      if (e.pointerType === 'touch') return;
      if (!this.enabled || !this.mouseSteering) return;
      // Don't hijack clicks that land on UI controls.
      if (e.target.closest('button, input, a, label, .panel, .menu, .overlay')) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      if (x < -0.35) {
        this._press('left');
        this.released.set('left', this.now);
      } else if (x > 0.35) {
        this._press('right');
        this.released.set('right', this.now);
      } else {
        this._press('jump');
        this.released.set('jump', this.now);
      }
    };

    window.addEventListener('mousemove', this._onMouseMove);
    window.addEventListener('mouseleave', this._onMouseLeave);
    this.target.addEventListener('mousedown', this._onMouseDown);
  }

  /**
   * Resolve the lane the mouse is asking for.
   *
   * The result is always a discrete lane index — 0, 1 or 2 — never a
   * fractional position. The pointer is only ever used as a *switch*: it
   * answers "which lane", not "how far". Lane positions themselves are still
   * owned by the player controller's tween, so steering and keyboard input
   * animate identically.
   *
   * Hysteresis is essential. Without it, a pointer resting on a boundary
   * emits a lane change on every frame it jitters by a fraction of a pixel,
   * and the player appears to stutter. So each boundary sits midway between
   * two lane centres: leaving a lane means crossing past the *next* lane's
   * centre, and returning means crossing back past the one you left.
   *
   * @param {number} laneCount always 3 in this game
   * @returns {number} desired lane index
   */
  updateSteering(laneCount = 3) {
    this.steerChanged = false;
    // Unarmed (no real mouse movement yet) or disabled: keyboard owns the run.
    if (!this.mouseSteering || !this.steerArmed || !this.pointerInside) {
      return this.steerLane;
    }

    const x = this.pointerX;
    if (Math.abs(x) < STEER.DEADZONE) return this.steerLane;

    // Lane centres in normalised pointer space, for laneCount === 3.
    const centre = (lane) => lane - (laneCount - 1) / 2;
    const current = centre(this.steerLane);

    let next = this.steerLane;
    if (x > current + STEER.OUT && this.steerLane < laneCount - 1) {
      next = this.steerLane + 1;
    } else if (x < current - STEER.OUT && this.steerLane > 0) {
      next = this.steerLane - 1;
    }

    if (next !== this.steerLane) {
      this.steerLane = next;
      this.steerChanged = true;
    }
    return this.steerLane;
  }

  /**
   * Disarm steering and re-centre the target. Called at run start so the
   * cursor's resting position can't fling the player sideways.
   */
  resetSteering() {
    this.steerLane = 1;
    this.steerChanged = false;
    this.steerArmed = false;
  }

  /** True while the mouse is actively steering this frame. */
  get steeringActive() {
    return this.mouseSteering && this.pointerInside;
  }

  /** Test-only / accessibility hook: inject an action as if pressed. */
  inject(action) {
    this._press(action);
  }

  clear() {
    this.held.clear();
    this.buffer.clear();
    this.released.clear();
    this.pointer.active = false;
    this.resetSteering();
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('blur', this._onBlur);
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseleave', this._onMouseLeave);
    this.target.removeEventListener('pointerdown', this._onPointerDown);
    this.target.removeEventListener('pointerup', this._onPointerUp);
    this.target.removeEventListener('mousedown', this._onMouseDown);
  }
}
