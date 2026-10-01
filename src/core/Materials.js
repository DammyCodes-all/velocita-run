import * as THREE from 'three';

/**
 * Materials — every material in the game is created once and reused.
 *
 * Materials are the single biggest source of shader recompiles in three.js.
 * Creating a `new MeshStandardMaterial` per mesh (even 100 identical ones)
 * causes a distinct program compile and destroys the frame budget. So all
 * geometry and materials live here as singletons.
 */

const cache = new Map();

/** Build-or-fetch a material. Any combination of params returns one instance. */
export function mat(key, factory) {
  if (!cache.has(key)) cache.set(key, factory());
  return cache.get(key);
}

// ---------------------------------------------------------------------------
// Surface palette. These are deliberately desaturated/industrial so that the
// accent colours (amber, teal, hot pink) read as signage against the concrete.
// ---------------------------------------------------------------------------

export const Palette = {
  concrete: 0x3b4149,
  concreteDark: 0x2a2f36,
  concreteLight: 0x565f6a,
  deck: 0x424a54,
  steel: 0x6b7784,
  steelDark: 0x454e59,
  rail: 0x8d9aa8,
  railRust: 0x7a5540,
  rubber: 0x22262b,
  glass: 0x9fd8e8,
  amber: 0xff9f45,
  amberDeep: 0xe8762a,
  teal: 0x4fd6c8,
  mint: 0x7dff9b,
  hotPink: 0xff5fa2,
  sky: 0x8be9ff,
  gold: 0xffd166,
  danger: 0xff4d4d,
  white: 0xe8eef2,
  black: 0x0d1013,
  tarpBlue: 0x2f6f9e,
  tarpGreen: 0x2e7d5b,
  tarpRust: 0x9e5f3a,
  wood: 0x8a6a44,
};

export function concrete(color = Palette.concrete, roughness = 0.92) {
  return mat(`concrete-${color}-${roughness}`, () =>
    new THREE.MeshStandardMaterial({ color, roughness, metalness: 0.05 })
  );
}

export function metal(color = Palette.steel, roughness = 0.42, metalness = 0.75) {
  return mat(`metal-${color}-${roughness}-${metalness}`, () =>
    new THREE.MeshStandardMaterial({ color, roughness, metalness })
  );
}

export function emissive(color, intensity = 1.6, opacity = 1) {
  return mat(`emissive-${color}-${intensity}-${opacity}`, () =>
    new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: color,
      emissiveIntensity: intensity,
      roughness: 1,
      metalness: 0,
      transparent: opacity < 1,
      opacity,
      toneMapped: false,
    })
  );
}

export function glassMat(color = Palette.glass, opacity = 0.32) {
  return mat(`glass-${color}-${opacity}`, () =>
    new THREE.MeshStandardMaterial({
      color,
      transparent: true,
      opacity,
      roughness: 0.12,
      metalness: 0.35,
      depthWrite: false,
    })
  );
}

export function flat(color, opts = {}) {
  const key = `flat-${color}-${JSON.stringify(opts)}`;
  return mat(key, () =>
    new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.8,
      metalness: opts.metalness ?? 0,
      transparent: opts.opacity !== undefined,
      opacity: opts.opacity ?? 1,
      side: opts.side ?? THREE.FrontSide,
      emissive: opts.emissive ?? 0x000000,
      emissiveIntensity: opts.emissiveIntensity ?? 1,
    })
  );
}

// ---------------------------------------------------------------------------
// Geometries. Box/cylinder geometry is cheap; sharing one instance of each
// size keeps the GPU buffer count low and draw calls batchable.
// ---------------------------------------------------------------------------

const geoCache = new Map();

export function boxGeo(w, h, d) {
  const key = `box-${w}-${h}-${d}`;
  if (!geoCache.has(key)) geoCache.set(key, new THREE.BoxGeometry(w, h, d));
  return geoCache.get(key);
}

export function cylGeo(rt, rb, h, seg = 10) {
  const key = `cyl-${rt}-${rb}-${h}-${seg}`;
  if (!geoCache.has(key)) {
    geoCache.set(key, new THREE.CylinderGeometry(rt, rb, h, seg));
  }
  return geoCache.get(key);
}

export function sphereGeo(r, seg = 10) {
  const key = `sph-${r}-${seg}`;
  if (!geoCache.has(key)) geoCache.set(key, new THREE.SphereGeometry(r, seg, Math.max(6, seg >> 1)));
  return geoCache.get(key);
}

export function planeGeo(w, h) {
  const key = `plane-${w}-${h}`;
  if (!geoCache.has(key)) geoCache.set(key, new THREE.PlaneGeometry(w, h));
  return geoCache.get(key);
}

export function torusGeo(r, tube, seg = 8, rings = 14) {
  const key = `torus-${r}-${tube}-${seg}-${rings}`;
  if (!geoCache.has(key)) geoCache.set(key, new THREE.TorusGeometry(r, tube, seg, rings));
  return geoCache.get(key);
}

// ---------------------------------------------------------------------------
// Text/labels on signs. Canvas textures are cached by their content so we
// never rasterise the same glyph run twice.
// ---------------------------------------------------------------------------

const signCache = new Map();

/**
 * @param {string} text
 * @param {object} opts
 * @returns {THREE.CanvasTexture}
 */
export function signTexture(text, opts = {}) {
  const {
    bg = '#12161c',
    fg = '#ff9f45',
    width = 512,
    height = 128,
    font = '700 74px "Rajdhani", "Segoe UI", system-ui, sans-serif',
    accentBar = true,
    letterSpacing = '6px',
  } = opts;
  const key = `${text}|${bg}|${fg}|${width}|${height}|${font}|${accentBar}`;
  if (signCache.has(key)) return signCache.get(key);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  if (accentBar) {
    ctx.fillStyle = fg;
    ctx.globalAlpha = 0.18;
    ctx.fillRect(0, height - 10, width, 10);
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, 6, height);
  }

  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = fg;
  ctx.letterSpacing = letterSpacing;
  // Shrink to fit rather than overflow the plate.
  let size = parseInt(font.match(/(\d+)px/)?.[1] ?? '74', 10);
  while (ctx.measureText(text).width > width - 60 && size > 12) {
    size -= 4;
    ctx.font = font.replace(/\d+px/, `${size}px`);
  }
  ctx.shadowColor = fg;
  ctx.shadowBlur = 18;
  ctx.fillText(text, width / 2, height / 2);
  ctx.shadowBlur = 0;

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  signCache.set(key, texture);
  return texture;
}

/**
 * A soft radial glow sprite, used for lights, coin sparkles and boost trails.
 */
let glowTex = null;
export function glowTexture() {
  if (glowTex) return glowTex;
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  glowTex = new THREE.CanvasTexture(canvas);
  glowTex.colorSpace = THREE.SRGBColorSpace;
  return glowTex;
}

/** Apply an anisotropy value to cached textures after the renderer exists. */
export function tuneTextures(renderer) {
  const max = renderer.capabilities.getMaxAnisotropy();
  for (const tex of signCache.values()) {
    tex.anisotropy = Math.min(4, max);
    tex.needsUpdate = true;
  }
}

/** Free every cached GPU resource — called on teardown. */
export function disposeAssets() {
  for (const g of geoCache.values()) g.dispose();
  for (const m of cache.values()) m.dispose();
  for (const t of signCache.values()) t.dispose();
  geoCache.clear();
  cache.clear();
  signCache.clear();
  glowTex?.dispose();
  glowTex = null;
}
