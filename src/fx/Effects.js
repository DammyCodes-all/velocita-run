import { PowerUpManager } from '../game/PowerUpManager.js';
import { ParticleSystem } from './ParticleSystem.js';

/**
 * ParticleEffects — the "feel" layer.
 *
 * A thin, opinionated façade over ParticleSystem. Every effect the game plays
 * is defined here in one place with tuned constants, so balancing the juice
 * is a single-file job and nothing ad-hoc leaks into gameplay code.
 */
export class ParticleEffects {
  /**
   * @param {ParticleSystem} particles
   * @param {import('three').Scene} scene — reserved for larger one-shot meshes
   */
  constructor(particles, scene) {
    this.particles = particles;
    this.scene = scene;
    this.reset();
  }

  reset() {
    this.particles.clear();
    this._speedLineCooldown = 0;
  }

  coinBurst(x, y, z) {
    this.particles.coinBurst(x, y, z);
  }

  powerupBurst(x, y, z, color) {
    this.particles.powerupBurst(x, y, z, color);
  }

  crashBurst(x, y, z) {
    this.particles.crashBurst(x, y, z);
  }

  shieldBreak(x, y, z) {
    this.particles.shieldBreak(x, y, z);
  }

  boostTrail(x, y, z) {
    this.particles.boostTrail(x, y, z);
  }

  dustPuff(x, y, z, count = 6) {
    this.particles.dustPuff(x, y, z, count);
  }

  burst(x, y, z, color, count) {
    this.particles.emit({
      x,
      y,
      z,
      count,
      color,
      speed: 6,
      size: 0.3,
      life: 0.6,
      gravity: -8,
    });
  }

  /** Occasional ambient sparkle at high speed to reinforce velocity. */
  speedLines() {
    if (this._speedLineCooldown > 0) return;
    this._speedLineCooldown = 0.1;
    for (let i = 0; i < 3; i++) {
      this.particles.emit({
        x: (Math.random() - 0.5) * 8,
        y: 0.5 + Math.random() * 2,
        z: -6,
        count: 1,
        color: 0xffffff,
        speed: 2,
        size: 0.2,
        life: 0.25,
        gravity: 0,
        scrollRate: 26,
      });
    }
  }

  update(dt, scroll) {
    this._speedLineCooldown -= dt;
    this.particles.update(dt, scroll);
  }
}
