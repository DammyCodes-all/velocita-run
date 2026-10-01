import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { clamp01, damp, lerp } from '../util/MathUtils.js';

/**
 * The grade pass. One fullscreen shader does colour grading, vignette,
 * chromatic aberration, speed-driven radial blur, scanlines and grain.
 *
 * Doing this in a single pass (rather than stacking a dozen fullscreen
 * ShaderPasses) keeps the cost to one fullscreen draw and keeps the
 * post chain to 3 passes total, which is what lets it run on integrated GPUs.
 */
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uVignette: { value: 1.05 },
    uAberration: { value: 0.0012 },
    uSpeedBlur: { value: 0.0 },
    uGrain: { value: 0.035 },
    uScanline: { value: 0.0 },
    uSaturation: { value: 1.12 },
    uContrast: { value: 1.05 },
    uLift: { value: new THREE.Vector3(0.012, 0.02, 0.035) },
    uGain: { value: new THREE.Vector3(1.02, 1.0, 0.98) },
    uFlash: { value: 0.0 },
    uFlashColor: { value: new THREE.Color(1, 1, 1) },
    uDesaturate: { value: 0.0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    precision highp float;

    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uVignette;
    uniform float uAberration;
    uniform float uSpeedBlur;
    uniform float uGrain;
    uniform float uScanline;
    uniform float uSaturation;
    uniform float uContrast;
    uniform vec3  uLift;
    uniform vec3  uGain;
    uniform float uFlash;
    uniform vec3  uFlashColor;
    uniform float uDesaturate;
    varying vec2 vUv;

    float hash(vec2 p) {
      p = fract(p * vec2(443.897, 441.423));
      p += dot(p, p + 19.19);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec2 centered = uv - 0.5;
      float r = length(centered);

      // --- Chromatic aberration, stronger toward the edges -------------
      float ab = uAberration * (1.0 + r * 2.4);
      vec3 color;
      color.r = texture2D(tDiffuse, uv + centered * ab).r;
      color.g = texture2D(tDiffuse, uv).g;
      color.b = texture2D(tDiffuse, uv - centered * ab).b;

      // --- Radial speed blur -------------------------------------------
      // Samples march toward the screen centre, so the world streaks
      // outward from the vanishing point. Scaled by uSpeedBlur so it
      // only appears when the player is genuinely moving fast.
      if (uSpeedBlur > 0.001) {
        vec3 blurred = vec3(0.0);
        float total = 0.0;
        const int SAMPLES = 6;
        for (int i = 0; i < SAMPLES; i++) {
          float t = float(i) / float(SAMPLES - 1);
          float scale = 1.0 - t * uSpeedBlur * 0.06 * smoothstep(0.08, 0.6, r);
          vec2 sampleUv = centered * scale + 0.5;
          float wgt = 1.0 - t * 0.55;
          blurred += texture2D(tDiffuse, sampleUv).rgb * wgt;
          total += wgt;
        }
        color = mix(color, blurred / total, clamp(uSpeedBlur, 0.0, 1.0) * 0.85);
      }

      // --- Lift / gain grade --------------------------------------------
      color = color * uGain + uLift;

      // --- Saturation / contrast ----------------------------------------
      float lum = dot(color, vec3(0.2126, 0.7152, 0.0722));
      color = mix(vec3(lum), color, uSaturation);
      color = (color - 0.5) * uContrast + 0.5;

      // Desaturate on death, driven back to full colour on revive.
      color = mix(color, vec3(lum), uDesaturate);

      // --- Vignette ------------------------------------------------------
      // Gentle by design. The UI already draws a CSS vignette layer, so a
      // strong one here compounds and crushes the deck into black.
      float vig = smoothstep(1.05, 0.28, r * uVignette);
      color *= mix(1.0, vig, 0.42);

      // --- Scanlines (used in the tunnel sector) -------------------------
      if (uScanline > 0.001) {
        float scan = sin(uv.y * 900.0) * 0.5 + 0.5;
        color *= 1.0 - scan * uScanline * 0.12;
      }

      // --- Grain ---------------------------------------------------------
      float g = hash(uv * 900.0 + fract(uTime) * 100.0) - 0.5;
      color += g * uGrain;

      // --- Damage / pickup flash ------------------------------------------
      color = mix(color, uFlashColor, uFlash);

      gl_FragColor = vec4(max(color, 0.0), 1.0);
    }
  `,
};

export class PostFX {
  /**
   * @param {THREE.WebGLRenderer} renderer
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {object} quality preset from GameConfig
   */
  constructor(renderer, scene, camera, quality) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.enabled = true;

    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(scene, camera));

    const size = renderer.getSize(new THREE.Vector2());
    // Threshold is kept moderate. Too high and the lane strips read as flat
    // paint; too low and every bright surface — including the sun and the
    // kerb bands seen edge-on — smears into white bars. 0.68 catches the
    // emissive strips while leaving the sky and sun in the bloom's hands.
    this.bloom = new UnrealBloomPass(size, 0.55, 0.68, 0.68);
    this.composer.addPass(this.bloom);

    this.grade = new ShaderPass(GradeShader);
    this.grade.renderToScreen = true;
    this.composer.addPass(this.grade);

    this.u = this.grade.uniforms;

    // Animated state
    this.flashAmount = 0;
    this.flashDecay = 3.2;
    this.aberrationBase = quality.shadows ? 0.0011 : 0.0006;
    this.speedBlur = 0;
    this.targetSpeedBlur = 0;
    this.desaturate = 0;
    this.targetDesaturate = 0;
    this.scanline = 0;
    this.targetScanline = 0;
    this.shakeAmount = 0;

    this.applyQuality(quality);
  }

  applyQuality(quality) {
    this.quality = quality;
    // Bloom is the most expensive part; disable it at the lowest preset.
    this.bloom.enabled = quality.particleBudget > 150;
    this.bloom.strength = quality.particleBudget > 150 ? 0.55 : 0.0;
    this.u.uGrain.value = quality.particleBudget > 150 ? 0.035 : 0.015;
    this.u.uAberration.value = this.aberrationBase;
    this.fitToRenderer();
  }

  setSize(width, height) {
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.composer.setSize(width, height);
    this.bloom.setSize(width, height);
    this.u.uTime.value = performance.now() * 0.001;
  }

  /** Convenience wrapper: size the composer from the renderer's viewport. */
  fitToRenderer() {
    const size = this.renderer.getSize(new THREE.Vector2());
    this.setSize(size.x, size.y);
  }

  /** Punch the screen with a colour. Used for hits, pickups, boosts. */
  flash(color = 0xffffff, amount = 0.6, decay = 3.2) {
    this.u.uFlashColor.value.setHex(color);
    this.flashAmount = Math.max(this.flashAmount, amount);
    this.flashDecay = decay;
  }

  /** Push aberration outward — reads as impact or a sudden speed change. */
  punchAberration(amount = 0.006) {
    this.u.uAberration.value = Math.min(0.02, this.u.uAberration.value + amount);
  }

  /**
   * @param {number} speed01 normalised run speed, 0..1
   * @param {number} dt
   */
  update(speed01, dt, elapsed) {
    const u = this.u;
    u.uTime.value = elapsed;

    this.flashAmount = Math.max(0, this.flashAmount - this.flashDecay * dt);
    u.uFlash.value = this.flashAmount;

    // Speed blur ramps in past ~55% of max speed so it's a reward, not a tax.
    this.targetSpeedBlur = clamp01((speed01 - 0.45) / 0.55);
    this.speedBlur = damp(this.speedBlur, this.targetSpeedBlur, 0.02, dt);
    u.uSpeedBlur.value = this.speedBlur;

    // Aberration relaxes back to baseline.
    u.uAberration.value = damp(u.uAberration.value, this.aberrationBase, 0.02, dt);

    this.desaturate = damp(this.desaturate, this.targetDesaturate, 0.05, dt);
    u.uDesaturate.value = this.desaturate;

    this.scanline = damp(this.scanline, this.targetScanline, 0.08, dt);
    u.uScanline.value = this.scanline;

    // Bloom pulses with speed to sell acceleration, within a narrow band so it
    // never smears the scene into overexposure at top speed.
    if (this.bloom.enabled) {
      this.bloom.strength = lerp(0.5, 0.68, speed01);
    }
  }

  setDesaturate(amount) {
    this.targetDesaturate = clamp01(amount);
  }

  setScanline(amount) {
    this.targetScanline = clamp01(amount);
  }

  render(dt) {
    this.composer.render(dt);
  }

  dispose() {
    this.composer.dispose();
  }
}
