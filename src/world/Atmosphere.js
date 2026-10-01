import * as THREE from 'three';
import { rainTexture, glowTexture } from '../core/ProceduralTextures.js';
import { damp, lerp, clamp01 } from '../util/MathUtils.js';

/**
 * Atmosphere — sky, environment lighting and weather.
 *
 * The environment map matters more than anything else here. MeshStandardMaterial
 * metals are almost entirely reflection; without an env map they render as flat
 * grey blobs. Generating a small PMREM cubemap from the sky gradient costs a few
 * milliseconds once at boot and makes every metal surface in the game read
 * correctly.
 */

const SKY_VERT = /* glsl */ `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SKY_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uBottom;
  uniform vec3 uGlowColor;
  uniform float uGlowStrength;
  uniform float uGlowHeight;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec3 uSunEdge;
  uniform float uSunSize;
  uniform float uSunIntensity;
  uniform float uTime;
  varying vec3 vWorldPosition;

  void main() {
    vec3 dir = normalize(vWorldPosition);
    float h = dir.y;

    // Three-stop vertical gradient: ground bounce -> horizon -> zenith.
    vec3 color = mix(uBottom, uHorizon, smoothstep(-0.45, 0.0, h));
    color = mix(color, uTop, smoothstep(0.0, 0.62, h));

    // --- Sun at the vanishing point -------------------------------------
    // Without a discrete light source the eye has nothing to travel toward.
    // The disc sits just above the horizon straight down the track, so the
    // corridor of deck and rails leads the player's eye into the glow.
    //
    // Three soft layers. A hard-edged disc reads as a flat yellow rectangle
    // pasted on the sky; what sells a real sun is the broad scattered halo and
    // the fact that the light gets *redder* as it spreads through atmosphere.
    float sunDist = distance(dir, normalize(uSunDir));

    float halo = exp(-sunDist * 3.1) * 0.42;
    float mid = exp(-sunDist * 8.5) * 0.5;
    vec3 midTint = mix(uSunColor, uSunEdge, smoothstep(0.0, 0.3, sunDist));

    color += uSunEdge * halo * uSunIntensity * 0.55;
    color += midTint * mid * uSunIntensity * 0.75;

    // The disc. Kept modest so bloom carries the glow instead of clipping a
    // white hole in the sky.
    float disc = smoothstep(uSunSize, uSunSize * 0.35, sunDist);
    color += mix(uSunColor, vec3(1.0), 0.35) * disc * uSunIntensity * 1.05;

    // Haze eats the sun near the horizon, softening the terminator.
    float hazeFade = smoothstep(-0.03, 0.06, h);
    color = mix(color, uHorizon, (1.0 - hazeFade) * 0.32);

    // Horizontal light shafts fanning from the sun.
    float azim = atan(dir.x, dir.z);
    float shafts = sin(azim * 14.0 + uTime * 0.15) * 0.5 + 0.5;
    shafts *= exp(-sunDist * 3.0) * smoothstep(0.22, 0.0, abs(h - 0.02));
    color += uSunEdge * shafts * uSunIntensity * 0.2;

    // City glow bloom sitting on the horizon.
    float band = exp(-pow((h - uGlowHeight) * 5.2, 2.0));
    float front = smoothstep(-0.4, 0.9, -dir.z);
    color += uGlowColor * band * uGlowStrength * (0.45 + front * 0.85);

    // Subtle banded haze so the sky isn't a flat ramp.
    float haze = sin(h * 26.0 + uTime * 0.05) * 0.006;
    color += haze;

    gl_FragColor = vec4(color, 1.0);
  }
`;

/** Scale used by the sky shader — see the gradient contract in SKY_FRAG. */
const SKY_RADIUS = 300;

export class Atmosphere {
  /**
   * @param {THREE.Scene} scene
   * @param {THREE.WebGLRenderer} renderer
   */
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;

    // -- Sky dome --------------------------------------------------------
    this.skyMaterial = new THREE.ShaderMaterial({
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        uTop: { value: new THREE.Color(0x0a1018) },
        uHorizon: { value: new THREE.Color(0x1b2b38) },
        uBottom: { value: new THREE.Color(0x070b10) },
        uGlowColor: { value: new THREE.Color(0xff9f45) },
        uGlowStrength: { value: 0.35 },
        uGlowHeight: { value: -0.02 },
        // Sun sits straight down the track (-Z), just above the horizon.
        uSunDir: { value: new THREE.Vector3(0, 0.055, -1).normalize() },
        uSunColor: { value: new THREE.Color(0xffb066) },
        uSunEdge: { value: new THREE.Color(0xd8500f) },
        uSunSize: { value: 0.048 },
        uSunIntensity: { value: 1 },
        uTime: { value: 0 },
      },
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), this.skyMaterial);
    // Must stay inside the camera's far plane or the whole dome is clipped
    // and the sky renders as flat black.
    this.sky.scale.setScalar(SKY_RADIUS);
    this.sky.renderOrder = -1000;
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    // -- Lights ---------------------------------------------------------
    // Three-point rig: cool key from above-front, warm fill from the horizon,
    // and a rim from behind so the player's silhouette separates from the deck
    // even against dark backgrounds.
    //
    // These intensities look high next to typical three.js examples, but they
    // have to carry an ACES tone-mapped, fogged scene where the brightest
    // thing on screen is the sky. Undershooting here reads as a black scene.
    this.hemi = new THREE.HemisphereLight(0xa8c8e8, 0x4a4438, 2.3);
    scene.add(this.hemi);

    this.key = new THREE.DirectionalLight(0xe8f2ff, 2.5);
    this.key.position.set(-6, 14, 8);
    scene.add(this.key);
    scene.add(this.key.target);

    this.fill = new THREE.DirectionalLight(0xffc088, 1.15);
    this.fill.position.set(9, 3, -6);
    scene.add(this.fill);

    this.rim = new THREE.DirectionalLight(0x9fe6ff, 1.5);
    this.rim.position.set(2, 5, -12);
    scene.add(this.rim);

    this.ambient = new THREE.AmbientLight(0x6c7a8c, 0.95);
    scene.add(this.ambient);

    // A short-range bounce light under the camera. Wet asphalt throws a lot
    // of light back up; without this the character's legs and the deck
    // surface directly under them go black.
    this.bounce = new THREE.PointLight(0xffd9b0, 8, 22, 2);
    this.bounce.position.set(0, 1.2, 4);
    scene.add(this.bounce);

    // Hero rim light. Sits *behind* the runner relative to the camera (down
    // the track, off to one side) so it draws a bright edge along her
    // silhouette instead of flatly front-lighting her. Without this she reads
    // as unlit and pasted on top of the world rather than inside it.
    this.heroRim = new THREE.PointLight(0xff9f45, 14, 16, 2);
    this.heroRim.position.set(-2.2, 2.4, -4.2);
    scene.add(this.heroRim);

    // -- Fog -------------------------------------------------------------
    this.fog = new THREE.FogExp2(0x1a2a38, 0.013);
    scene.fog = this.fog;

    // -- Distant ground --------------------------------------------------
    // Without this the skyline appears to float: below the buildings you see
    // straight through to the sky's horizon glow, which reads as a bug rather
    // than a city. A large, flat, heavily-fogged plane gives the horizon a
    // floor for the towers to stand on. It's uniform, so it just tracks the
    // camera.
    this.groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x2c4457,
      roughness: 0.95,
      metalness: 0,
    });
    this.ground = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), this.groundMaterial);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.position.y = -9;
    this.ground.renderOrder = -900;
    this.ground.frustumCulled = false;
    scene.add(this.ground);

    // -- Weather ---------------------------------------------------------
    this.rain = null;
    this.targetRainAmount = 0;
    this.rainAmount = 0;

    // Target values used for smooth cross-fades between sectors.
    this.targets = {
      top: new THREE.Color(0x0a1018),
      horizon: new THREE.Color(0x1b2b38),
      bottom: new THREE.Color(0x070b10),
      fog: new THREE.Color(0x1a2a38),
      key: new THREE.Color(0xdce8f5),
      glow: new THREE.Color(0xff9f45),
      glowStrength: 0.35,
      fogDensity: 0.013,
      exposure: 1.24,
      ground: new THREE.Color(0x2c4457).multiplyScalar(0.62),
      sun: new THREE.Color(0xffb066),
      sunEdge: new THREE.Color(0xd8500f),
      sunIntensity: 0.9,
      sunSize: 0.048,
    };
    this.current = {
      top: this.targets.top.clone(),
      horizon: this.targets.horizon.clone(),
      bottom: this.targets.bottom.clone(),
      fog: this.targets.fog.clone(),
      key: this.targets.key.clone(),
      glow: this.targets.glow.clone(),
      glowStrength: 0.35,
      fogDensity: 0.013,
      exposure: 1.24,
      ground: this.targets.ground.clone(),
      sun: this.targets.sun.clone(),
      sunEdge: this.targets.sunEdge.clone(),
      sunIntensity: 0.9,
      sunSize: 0.048,
    };

    this._buildEnvironment();
  }

  /**
   * Bake a tiny cubemap from the sky shader and run it through PMREM. This is
   * what gives metals their reflections.
   */
  _buildEnvironment() {
    const envScene = new THREE.Scene();
    const envSky = new THREE.Mesh(new THREE.SphereGeometry(50, 16, 12), this.skyMaterial.clone());
    envScene.add(envSky);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    pmrem.compileEquirectangularShader();
    const target = pmrem.fromScene(envScene, 0.04);
    this.envMap = target.texture;
    this.scene.environment = this.envMap;
    this.scene.environmentIntensity = 1.35;

    envSky.geometry.dispose();
    envSky.material.dispose();
    pmrem.dispose();
  }

  /** Rebuild the env map after a big palette change (sector switch). */
  refreshEnvironment() {
    const prev = this.scene.environment;
    this._buildEnvironment();
    if (prev && prev !== this.envMap) prev.dispose();
  }

  /**
   * Apply a sector palette. Values are targets — the update loop eases toward
   * them, which is what makes sector transitions feel seamless.
   * @param {object} sector
   * @param {number} [rainAmount]
   */
  applySector(sector, rainAmount = 0) {
    const p = sector.palette;
    const c = (hex) => new THREE.Color(hex);

    this.targets.top = c(p.sky).multiplyScalar(0.85);
    this.targets.bottom = c(p.sky).multiplyScalar(0.5);
    this.targets.horizon = c(p.fog).multiplyScalar(1.15);
    this.targets.fog = c(p.fog);
    this.targets.glow = c(p.accent);
    this.targets.glowStrength = 0.3 + Math.min(0.45, p.accent === p.secondary ? 0.1 : 0.32);
    this.targets.fogDensity = sector.fogDensity;
    // The ground haze is a darker, slightly desaturated take on the fog, so
    // it always blends into the horizon instead of forming a hard edge.
    this.targets.ground = new THREE.Color(p.fog).multiplyScalar(0.62);

    // The sun takes the sector accent, pushed toward white. Each sector reads
    // as a different time of day: amber dusk, magenta night market, cold blue
    // sluice, pale gold dawn.
    this.targets.sun = new THREE.Color(p.accent).lerp(new THREE.Color(0xffffff), 0.42);
    // Scattered edge colour: the accent pushed toward deep red-orange. This is
    // what gives the glow its falloff instead of a flat wash.
    this.targets.sunEdge = new THREE.Color(p.accent)
      .lerp(new THREE.Color(0xd8500f), 0.55)
      .multiplyScalar(0.85);
    this.targets.sunIntensity = sector.id === 'sluice' ? 0.5 : sector.id === 'nightmarket' ? 0.7 : 0.9;
    // Sectors with a lighter sky push the sun lower and smaller.
    this.targets.sunSize = sector.id === 'dawn' ? 0.068 : 0.048;
    // ACES darkens midtones hard, so exposure has to sit above 1 to keep the
    // deck and obstacles out of the shadows — but pushing it much past 1.3
    // blows the emissive strips and the sun into flat white. This value is
    // the balance point between those two failure modes.
    this.targets.exposure = sector.id === 'sluice' ? 1.14 : 1.24;
    this.targetRainAmount = rainAmount;
  }

  /** Smoothly transition toward the current targets.
   * @param {number} dt
   * @param {number} elapsed
   * @param {THREE.Camera} camera
   * @param {number} [playerX] runner's lane position, for the rim light
   */
  update(dt, elapsed, camera, playerX = 0) {
    const c = this.current;
    const t = this.targets;
    const rate = 0.06; // ease factor

    c.top.lerp(t.top, 1 - Math.pow(rate, dt * 6));
    c.horizon.lerp(t.horizon, 1 - Math.pow(rate, dt * 6));
    c.bottom.lerp(t.bottom, 1 - Math.pow(rate, dt * 6));
    c.fog.lerp(t.fog, 1 - Math.pow(rate, dt * 6));
    c.key.lerp(t.key, 1 - Math.pow(rate, dt * 6));
    c.glow.lerp(t.glow, 1 - Math.pow(rate, dt * 6));
    c.glowStrength = lerp(c.glowStrength, t.glowStrength, 1 - Math.pow(rate, dt * 6));
    c.fogDensity = lerp(c.fogDensity, t.fogDensity, 1 - Math.pow(rate, dt * 6));
    c.exposure = lerp(c.exposure, t.exposure, 1 - Math.pow(rate, dt * 6));
    c.ground.lerp(t.ground, 1 - Math.pow(rate, dt * 6));
    c.sun.lerp(t.sun, 1 - Math.pow(rate, dt * 6));
    c.sunEdge.lerp(t.sunEdge, 1 - Math.pow(rate, dt * 6));
    c.sunIntensity = lerp(c.sunIntensity, t.sunIntensity, 1 - Math.pow(rate, dt * 6));
    c.sunSize = lerp(c.sunSize, t.sunSize, 1 - Math.pow(rate, dt * 6));

    const u = this.skyMaterial.uniforms;
    u.uTop.value.copy(c.top);
    u.uHorizon.value.copy(c.horizon);
    u.uBottom.value.copy(c.bottom);
    u.uGlowColor.value.copy(c.glow);
    u.uGlowStrength.value = c.glowStrength;
    u.uSunColor.value.copy(c.sun);
    u.uSunEdge.value.copy(c.sunEdge);
    u.uSunIntensity.value = c.sunIntensity;
    u.uSunSize.value = c.sunSize;
    u.uTime.value = elapsed;

    this.fog.color.copy(c.fog);
    this.fog.density = c.fogDensity;
    this.groundMaterial.color.copy(c.ground);
    this.renderer.toneMappingExposure = c.exposure;

    // Keep the sky centred on the camera and lights tracking the action.
    this.sky.position.copy(camera.position);
    // The ground plane is uniform, so it can ride along with the camera.
    this.ground.position.x = camera.position.x;
    this.ground.position.z = camera.position.z;
    this.key.position.set(camera.position.x - 6, 16, camera.position.z + 8);
    this.key.target.position.set(camera.position.x, 0, camera.position.z - 10);
    this.fill.position.set(camera.position.x + 9, 4, camera.position.z - 6);
    this.rim.position.set(camera.position.x + 2, 6, camera.position.z - 14);

    // The hero rim tracks the player laterally so the edge highlight stays
    // consistent whichever lane she's in.
    const heroX = playerX ?? 0;
    this.heroRim.position.set(heroX - 2.2, 2.4, -4.2);

    this.updateRain(dt);
  }

  _buildRain() {
    // A single Points cloud, wrapped around the camera. 2500 drops is a lot
    // of atmosphere for one draw call.
    const count = 2500;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 44;
      positions[i * 3 + 1] = Math.random() * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70;
      speeds[i] = 14 + Math.random() * 12;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.rainSpeeds = speeds;
    this.rainPositions = positions;
    this.rainCount = count;

    const material = new THREE.PointsMaterial({
      map: rainTexture(),
      size: 0.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xbcd8f0,
    });
    this.rain = new THREE.Points(geo, material);
    this.rain.frustumCulled = false;
    this.rain.visible = false;
    this.scene.add(this.rain);
  }

  updateRain(dt) {
    this.rainAmount = damp(this.rainAmount, this.targetRainAmount, 0.05, dt);
    if (this.rainAmount < 0.01) {
      if (this.rain) this.rain.visible = false;
      return;
    }
    if (!this.rain) this._buildRain();

    this.rain.visible = true;
    this.rain.material.opacity = this.rainAmount * 0.55;

    const pos = this.rainPositions;
    const speeds = this.rainSpeeds;
    const wind = 4;
    for (let i = 0; i < this.rainCount; i++) {
      const i3 = i * 3;
      pos[i3 + 1] -= speeds[i] * dt;
      pos[i3] += wind * dt;
      // Recycle around the camera: wrap X and Y, and pull Z back when it
      // falls behind so the volume always surrounds the player.
      if (pos[i3 + 1] < -2) {
        pos[i3 + 1] = 22;
        pos[i3] = (Math.random() - 0.5) * 44;
        pos[i3 + 2] = (Math.random() - 0.5) * 70;
      }
      if (pos[i3] > 22) pos[i3] -= 44;
    }
    this.rain.geometry.attributes.position.needsUpdate = true;
  }

  setShadowQuality(enabled, size) {
    this.key.castShadow = enabled;
    if (enabled) {
      this.key.shadow.mapSize.set(size, size);
      // Tight frustum around the player keeps texels dense where they matter.
      const cam = this.key.shadow.camera;
      cam.left = -16;
      cam.right = 16;
      cam.top = 20;
      cam.bottom = -8;
      cam.near = 1;
      cam.far = 60;
      cam.updateProjectionMatrix();
      this.key.shadow.bias = -0.0012;
      this.key.shadow.normalBias = 0.02;
    }
  }

  dispose() {
    this.sky.geometry.dispose();
    this.skyMaterial.dispose();
    this.ground.geometry.dispose();
    this.groundMaterial.dispose();
    this.envMap?.dispose();
    this.rain?.geometry.dispose();
    this.rain?.material.dispose();
  }
}
