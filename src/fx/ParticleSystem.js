import * as THREE from 'three';
import { glowTexture, sparkleTexture } from '../core/ProceduralTextures.js';
import { rand, randInt } from '../util/MathUtils.js';

/**
 * Particles — one instanced Points cloud for every spark in the game.
 *
 * Every effect (coin pickups, crash debris, dust, boost trails, shield breaks)
 * draws from this single buffer. That means the entire particle layer is one
 * draw call, and particles cost nothing but a position/alpha update per frame.
 * Effects are declarative: you push a burst description and the system
 * simulates it.
 *
 * Particles are simulated in the player's local frame (z=0 plane) and then
 * offset by the world scroll, since the whole world scrolls rather than the
 * player moving.
 */
export class ParticleSystem {
  /**
   * @param {THREE.Scene} scene
   * @param {number} budget max live particles
   */
  constructor(scene, budget = 420) {
    this.scene = scene;
    this.budget = budget;
    this.count = 0;
    /** Cursor for ring-buffer allocation: oldest gets overwritten at cap. */
    this.cursor = 0;

    this.positions = new Float32Array(budget * 3);
    this.sizes = new Float32Array(budget);
    this.colors = new Float32Array(budget * 3);
    this.alphas = new Float32Array(budget);

    // Simulation state (CPU-side arrays parallel to the render buffer).
    this.velocities = new Float32Array(budget * 3);
    this.life = new Float32Array(budget);
    this.maxLife = new Float32Array(budget);
    this.baseSize = new Float32Array(budget);
    this.gravity = new Float32Array(budget);
    this.drag = new Float32Array(budget);
    this.scrollRate = new Float32Array(budget); // how fast this particle recedes
    this.active = new Uint8Array(budget);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
    geo.setDrawRange(0, budget);
    this.geometry = geo;

    this.material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        map: { value: glowTexture() },
        pixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute vec3 aColor;
        attribute float aAlpha;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float pixelRatio;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * pixelRatio * (280.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D map;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(map, gl_PointCoord);
          gl_FragColor = vec4(vColor, tex.a * vAlpha);
        }
      `,
    });

    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);

    this._color = new THREE.Color();
    // Initialize buffers off-screen.
    for (let i = 0; i < budget; i++) this.positions[i * 3 + 1] = -999;
  }

  setBudget(budget) {
    // Shrinking just stops using the tail; growing is handled at construction.
    this.activeBudget = Math.min(budget, this.budget);
  }

  /**
   * Emit a burst of particles.
   * @param {object} opts
   * @param {number} opts.x @param {number} opts.y @param {number} opts.z
   * @param {number} opts.count
   * @param {number} opts.color
   * @param {object} [opts.velocity] base velocity {x,y,z}
   * @param {number} [opts.spread] random velocity spread
   * @param {number} [opts.speed] velocity magnitude
   * @param {number} [opts.size] particle size
   * @param {number} [opts.life] seconds
   * @param {number} [opts.gravity]
   * @param {number} [opts.drag]
   * @param {number} [opts.scrollRate] metres/sec this particle recedes with world
   */
  emit(opts) {
    const {
      x = 0,
      y = 1,
      z = 0,
      count = 12,
      color = 0xffffff,
      velocity = { x: 0, y: 0, z: 0 },
      speed = 3,
      spread = 1,
      size = 0.3,
      life = 0.6,
      gravity = -9,
      drag = 0.02,
      scrollRate = 0,
    } = opts;

    this._color.set(color);
    const limit = this.activeBudget ?? this.budget;

    for (let i = 0; i < count; i++) {
      if (this.count >= limit && this.count > 0) {
        // At capacity: recycle via ring cursor so we always emit the newest.
        this.cursor = this.cursor % limit;
      }
      const idx = this.cursor;
      this.cursor = (this.cursor + 1) % limit;
      this.count = Math.max(this.count, idx + 1);

      const i3 = idx * 3;
      this.positions[i3] = x;
      this.positions[i3 + 1] = y;
      this.positions[i3 + 2] = z;

      // Random point in a sphere-ish shell.
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const mag = speed * (0.4 + Math.random() * spread);
      this.velocities[i3] = velocity.x + Math.sin(phi) * Math.cos(theta) * mag;
      this.velocities[i3 + 1] = velocity.y + Math.cos(phi) * mag;
      this.velocities[i3 + 2] = velocity.z + Math.sin(phi) * Math.sin(theta) * mag;

      this.colors[i3] = this._color.r;
      this.colors[i3 + 1] = this._color.g;
      this.colors[i3 + 2] = this._color.b;

      const l = life * (0.6 + Math.random() * 0.7);
      this.life[idx] = l;
      this.maxLife[idx] = l;
      this.baseSize[idx] = size * (0.6 + Math.random() * 0.8);
      this.sizes[idx] = this.baseSize[idx];
      this.alphas[idx] = 1;
      this.gravity[idx] = gravity;
      this.drag[idx] = drag;
      this.scrollRate[idx] = scrollRate;
      this.active[idx] = 1;
    }
  }

  /**
   * @param {number} dt
   * @param {number} scroll world scroll this frame (metres)
   */
  update(dt, scroll = 0) {
    let anyActive = false;
    for (let i = 0; i < this.budget; i++) {
      if (!this.active[i]) continue;
      anyActive = true;
      const i3 = i * 3;

      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.active[i] = 0;
        this.positions[i3 + 1] = -999;
        this.alphas[i] = 0;
        continue;
      }

      // Velocity integration with linear drag.
      const d = Math.max(0, 1 - this.drag[i] * dt * 60);
      this.velocities[i3] *= d;
      this.velocities[i3 + 1] = this.velocities[i3 + 1] * d + this.gravity[i] * dt;
      this.velocities[i3 + 2] *= d;

      this.positions[i3] += this.velocities[i3] * dt;
      this.positions[i3 + 1] += this.velocities[i3 + 1] * dt;
      this.positions[i3 + 2] += this.velocities[i3 + 2] * dt + this.scrollRate[i] * dt;

      // Fade: alpha and size both shrink so particles dissipate, not pop.
      const t = this.life[i] / this.maxLife[i];
      this.alphas[i] = t * t;
      this.sizes[i] = this.baseSize[i] * (0.3 + t * 0.7);

      // Bounce off the deck with a little bounce-back.
      if (this.positions[i3 + 1] < 0.05 && this.velocities[i3 + 1] < 0) {
        this.positions[i3 + 1] = 0.05;
        this.velocities[i3 + 1] *= -0.35;
        this.velocities[i3] *= 0.7;
        this.velocities[i3 + 2] *= 0.7;
      }
    }

    this.points.visible = anyActive;
    if (anyActive) {
      this.geometry.attributes.position.needsUpdate = true;
      this.geometry.attributes.aSize.needsUpdate = true;
      this.geometry.attributes.aColor.needsUpdate = true;
      this.geometry.attributes.aAlpha.needsUpdate = true;
    }
  }

  clear() {
    for (let i = 0; i < this.budget; i++) {
      this.active[i] = 0;
      this.positions[i * 3 + 1] = -999;
      this.alphas[i] = 0;
    }
    this.count = 0;
    this.points.visible = false;
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.aAlpha.needsUpdate = true;
  }

  dispose() {
    this.points.removeFromParent();
    this.geometry.dispose();
    this.material.dispose();
  }

  // -------------------------------------------------------------------------
  // Named effects. Keeping them here means tuning "juice" is one file, and
  // every effect is guaranteed consistent across the game.
  // -------------------------------------------------------------------------

  coinBurst(x, y, z) {
    this.emit({
      x,
      y,
      z,
      count: 10,
      color: 0xffd166,
      speed: 3.2,
      spread: 1,
      size: 0.24,
      life: 0.45,
      gravity: -6,
      drag: 0.06,
    });
    this.emit({
      x,
      y,
      z,
      count: 4,
      color: 0xffffff,
      speed: 5,
      size: 0.14,
      life: 0.28,
      gravity: -2,
    });
  }

  powerupBurst(x, y, z, color) {
    this.emit({
      x,
      y,
      z,
      count: 26,
      color,
      speed: 5.5,
      spread: 1.2,
      size: 0.34,
      life: 0.75,
      gravity: -3,
      drag: 0.03,
    });
    this.emit({
      x,
      y,
      z,
      count: 12,
      color: 0xffffff,
      speed: 8,
      size: 0.2,
      life: 0.4,
      gravity: 0,
      drag: 0.02,
    });
  }

  crashBurst(x, y, z) {
    this.emit({
      x,
      y,
      z,
      count: 34,
      color: 0xff6b4a,
      speed: 8,
      spread: 1.5,
      size: 0.4,
      life: 0.8,
      gravity: -14,
      drag: 0.02,
    });
    this.emit({
      x,
      y,
      z,
      count: 16,
      color: 0xffd166,
      speed: 6,
      size: 0.28,
      life: 0.6,
      gravity: -10,
    });
  }

  dustPuff(x, y, z, count = 8) {
    this.emit({
      x,
      y,
      z,
      count,
      color: 0x9aa5b1,
      speed: 1.6,
      spread: 1,
      size: 0.4,
      life: 0.5,
      gravity: 1.2, // rises slightly as it disperses
      drag: 0.08,
      scrollRate: 6,
    });
  }

  boostTrail(x, y, z, color = 0x7dff9b) {
    this.emit({
      x,
      y,
      z,
      count: 3,
      color,
      speed: 1.2,
      spread: 0.6,
      size: 0.35,
      life: 0.35,
      gravity: 1.5,
      drag: 0.05,
      scrollRate: 14,
    });
  }

  magnetPull(x, y, z) {
    this.emit({
      x,
      y,
      z,
      count: 1,
      color: 0x59e0ff,
      speed: 0.6,
      size: 0.18,
      life: 0.3,
      gravity: 0,
      drag: 0.02,
    });
  }

  shieldBreak(x, y, z) {
    this.emit({
      x,
      y,
      z,
      count: 30,
      color: 0xffd166,
      speed: 7,
      size: 0.3,
      life: 0.6,
      gravity: -6,
      drag: 0.03,
    });
  }
}
