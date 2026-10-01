/**
 * Loop — a fixed-timestep simulation with interpolated rendering.
 *
 * Physics (lane lerps, collision, gravity) runs at a fixed 120 Hz so that
 * behaviour is identical on a 30 Hz laptop and a 240 Hz monitor. Rendering
 * happens once per animation frame, interpolating between the last two
 * simulation states to avoid judder on high-refresh displays.
 */

const FIXED_DT = 1 / 120;
/** Never simulate more than this much time in one frame (tab-switch guard). */
const MAX_FRAME_TIME = 0.25;

export class Loop {
  /**
   * @param {(dt: number) => void} update fixed-step simulation
   * @param {(alpha: number, dt: number) => void} render per-frame draw
   */
  constructor(update, render) {
    this.update = update;
    this.render = render;

    this.running = false;
    this.lastTime = 0;
    this.elapsed = 0;
    this.frameCount = 0;
    this.accumulator = 0;

    this._rafId = null;
    this._tick = this._tick.bind(this);

    // Rolling FPS average for the debug overlay.
    this.fps = 60;
    this._fpsAccum = 0;
    this._fpsFrames = 0;

    this._visibilityHandler = () => {
      // Returning to a backgrounded tab shouldn't produce a giant dt spike.
      if (document.visibilityState === 'visible') this.lastTime = performance.now();
    };
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    document.addEventListener('visibilitychange', this._visibilityHandler);
    this._rafId = requestAnimationFrame(this._tick);
  }

  stop() {
    this.running = false;
    if (this._rafId !== null) cancelAnimationFrame(this._rafId);
    this._rafId = null;
    document.removeEventListener('visibilitychange', this._visibilityHandler);
  }

  _tick(now) {
    if (!this.running) return;
    this._rafId = requestAnimationFrame(this._tick);

    let frameTime = (now - this.lastTime) / 1000;
    this.lastTime = now;
    if (frameTime > MAX_FRAME_TIME) frameTime = FIXED_DT; // recover gracefully
    if (frameTime < 0) frameTime = 0;

    this._fpsAccum += frameTime;
    this._fpsFrames++;
    if (this._fpsAccum >= 0.5) {
      this.fps = this._fpsFrames / this._fpsAccum;
      this._fpsAccum = 0;
      this._fpsFrames = 0;
    }

    this.accumulator += frameTime;
    this.elapsed += frameTime;

    // Cap the number of catch-up steps so a long stall can't freeze the page.
    let steps = 0;
    const MAX_STEPS = 8;
    while (this.accumulator >= FIXED_DT && steps < MAX_STEPS) {
      this.update(FIXED_DT);
      this.accumulator -= FIXED_DT;
      steps++;
    }
    if (steps >= MAX_STEPS) this.accumulator = 0;

    const alpha = this.accumulator / FIXED_DT;
    this.render(alpha, frameTime);
    this.frameCount++;
  }

  /** Zero out timing without touching running state — used on state reset. */
  resync() {
    this.lastTime = performance.now();
    this.accumulator = 0;
  }
}

export { FIXED_DT };
