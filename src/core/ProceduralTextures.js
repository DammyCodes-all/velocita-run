import * as THREE from 'three';

/**
 * ProceduralTextures — canvas-generated surface detail.
 *
 * A flat-coloured low-poly scene reads as "unfinished". Giving every surface
 * a subtle map (concrete speckle, rust streaks, wet streaks, painted stripes)
 * is what makes it read as a *place*. Generating them procedurally means no
 * binary assets to ship or load, and they can be tinted per-sector.
 *
 * Every texture is generated once and cached by key.
 */

const cache = new Map();

function makeCanvas(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  return canvas;
}

function finish(canvas, { repeat = [1, 1], srgb = true, aniso = 4 } = {}) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat[0], repeat[1]);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = aniso;
  return tex;
}

/** Deterministic value noise so textures are stable between reloads. */
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Fill with base colour, then add value noise as soft blobs.
 * Cheap approximation of a cloudy/wet surface.
 */
function noiseFill(ctx, w, h, base, rand, { density = 2200, minA = 0.02, maxA = 0.09, tint = 0xffffff } = {}) {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < density; i++) {
    const x = rand() * w;
    const y = rand() * h;
    const r = 6 + rand() * 52;
    const alpha = minA + rand() * (maxA - minA);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = `#${tint.toString(16).padStart(6, '0')}`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

/** Fine per-pixel grain, the thing that kills the "plastic CG" look. */
function grain(ctx, w, h, rand, strength = 14) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rand() - 0.5) * strength;
    d[i] = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
}

/**
 * Concrete deck: aggregate speckle, expansion joints, damp patches and a
 * centre wear strip where the traffic runs.
 */
export function concreteDeck(tint = '#3b4149', seed = 7, size = 512) {
  const key = `deck-${tint}-${seed}`;
  if (cache.has(key)) return cache.get(key);
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const rand = mulberry32(seed);

  noiseFill(ctx, size, size, tint, rand, { density: 260, minA: 0.03, maxA: 0.11 });

  // Aggregate: tiny bright/dark chips.
  for (let i = 0; i < 5200; i++) {
    const x = rand() * size;
    const y = rand() * size;
    const r = 0.4 + rand() * 1.7;
    const light = rand() > 0.5;
    ctx.globalAlpha = 0.05 + rand() * 0.16;
    ctx.fillStyle = light ? '#ffffff' : '#000000';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Expansion joints — a grid of darker recessed lines.
  ctx.strokeStyle = 'rgba(0,0,0,0.30)';
  ctx.lineWidth = 3;
  for (let i = 0; i <= 2; i++) {
    const p = (i * size) / 2;
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, size);
    ctx.moveTo(0, p);
    ctx.lineTo(size, p);
    ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 2; i++) {
    const p = (i * size) / 2 + 2;
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, size);
    ctx.moveTo(0, p);
    ctx.lineTo(size, p);
    ctx.stroke();
  }

  // Damp patches — the bay drizzle never fully dries.
  for (let i = 0; i < 26; i++) {
    const x = rand() * size;
    const y = rand() * size;
    const r = 24 + rand() * 90;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(10,20,30,0.30)');
    g.addColorStop(1, 'rgba(10,20,30,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  grain(ctx, size, size, rand, 12);
  const tex = finish(canvas, { repeat: [1, 1] });
  cache.set(key, tex);
  return tex;
}

/** Wet sheen streaks — painted over concrete to suggest standing water. */
export function wetStreaks(tint = '#2a3038', seed = 11, size = 512) {
  const key = `wet-${tint}-${seed}`;
  if (cache.has(key)) return cache.get(key);
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const rand = mulberry32(seed);

  ctx.fillStyle = tint;
  ctx.fillRect(0, 0, size, size);

  // Vertical run-off streaks.
  for (let i = 0; i < 90; i++) {
    const x = rand() * size;
    const w = 3 + rand() * 26;
    const y0 = rand() * size;
    const len = 40 + rand() * 300;
    const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
    g.addColorStop(0, 'rgba(20,40,55,0.0)');
    g.addColorStop(0.3, `rgba(20,45,62,${0.10 + rand() * 0.18})`);
    g.addColorStop(1, 'rgba(20,40,55,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x, y0, w, len);
  }

  // Puddles: bright rims where light catches the surface tension.
  for (let i = 0; i < 16; i++) {
    const x = rand() * size;
    const y = rand() * size;
    const rx = 20 + rand() * 70;
    const ry = rx * (0.3 + rand() * 0.4);
    const g = ctx.createRadialGradient(x, y, 0, x, y, rx);
    g.addColorStop(0, 'rgba(120,190,215,0.20)');
    g.addColorStop(0.7, 'rgba(60,110,140,0.10)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, ry / rx);
    ctx.translate(-x, -y);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, rx, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  grain(ctx, size, size, rand, 9);
  const tex = finish(canvas, { repeat: [1, 1] });
  cache.set(key, tex);
  return tex;
}

/** Painted hazard chevrons for barriers and warning panels. */
export function hazardStripes(a = '#ff9f45', b = '#20252b', seed = 3, size = 256) {
  const key = `hazard-${a}-${b}`;
  if (cache.has(key)) return cache.get(key);
  const canvas = makeCanvas(size, size / 4);
  const ctx = canvas.getContext('2d');
  const h = size / 4;

  ctx.fillStyle = b;
  ctx.fillRect(0, 0, size, h);

  ctx.fillStyle = a;
  const stripe = size / 8;
  for (let x = -h; x < size + h; x += stripe * 2) {
    ctx.beginPath();
    ctx.moveTo(x, h);
    ctx.lineTo(x + stripe, h);
    ctx.lineTo(x + stripe + h, 0);
    ctx.lineTo(x + h, 0);
    ctx.closePath();
    ctx.fill();
  }

  // Scuffs so it doesn't look freshly printed.
  const rand = mulberry32(seed);
  ctx.globalAlpha = 0.25;
  for (let i = 0; i < 160; i++) {
    ctx.fillStyle = rand() > 0.5 ? '#000' : '#fff';
    const x = rand() * size;
    const y = rand() * h;
    ctx.fillRect(x, y, 1 + rand() * 12, 1 + rand() * 2);
  }
  ctx.globalAlpha = 1;

  const tex = finish(canvas, { repeat: [1, 1] });
  cache.set(key, tex);
  return tex;
}

/**
 * Building facade with a window grid. Windows are lit stochastically so the
 * skyline reads as inhabited. This is what gives the background depth.
 */
export function facade(tint = '#2b3138', seed = 5, cols = 10, rows = 18, size = 512) {
  const key = `facade-${tint}-${seed}-${cols}-${rows}`;
  if (cache.has(key)) return cache.get(key);
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const rand = mulberry32(seed);

  noiseFill(ctx, size, size, tint, rand, { density: 180, minA: 0.03, maxA: 0.09 });

  const cw = size / cols;
  const ch = size / rows;
  const pad = cw * 0.22;
  const winW = cw - pad * 2;
  const winH = ch * 0.52;

  // Warm/cool lit windows. Most dark — a fully lit grid looks like a cartoon.
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * cw + pad;
      const y = r * ch + ch * 0.2;
      const roll = rand();
      ctx.fillStyle = 'rgba(6,10,14,0.92)';
      ctx.fillRect(x, y, winW, winH);

      if (roll > 0.62) {
        const warm = rand() > 0.35;
        const a = 0.35 + rand() * 0.65;
        ctx.fillStyle = warm
          ? `rgba(255,206,140,${a})`
          : `rgba(150,220,255,${a * 0.8})`;
        ctx.fillRect(x, y, winW, winH);
        // Glow spill onto the facade.
        ctx.globalAlpha = a * 0.25;
        ctx.fillRect(x - pad * 0.6, y - pad * 0.6, winW + pad * 1.2, winH + pad * 1.2);
        ctx.globalAlpha = 1;
      }
      // Mullion.
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      ctx.fillRect(x, y + winH * 0.5 - 1, winW, 2);
    }
  }

  grain(ctx, size, size, rand, 8);
  const tex = finish(canvas, { repeat: [1, 1] });
  cache.set(key, tex);
  return tex;
}

/** Corrugated metal siding for containers and shutters. */
export function corrugated(tint = '#3a5a6b', seed = 9, size = 256) {
  const key = `corr-${tint}-${seed}`;
  if (cache.has(key)) return cache.get(key);
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const rand = mulberry32(seed);

  ctx.fillStyle = tint;
  ctx.fillRect(0, 0, size, size);

  // Vertical ribs via paired light/dark gradients.
  const ribs = 16;
  const rw = size / ribs;
  for (let i = 0; i < ribs; i++) {
    const x = i * rw;
    const g = ctx.createLinearGradient(x, 0, x + rw, 0);
    g.addColorStop(0, 'rgba(0,0,0,0.34)');
    g.addColorStop(0.35, 'rgba(255,255,255,0.14)');
    g.addColorStop(0.6, 'rgba(255,255,255,0.05)');
    g.addColorStop(1, 'rgba(0,0,0,0.30)');
    ctx.fillStyle = g;
    ctx.fillRect(x, 0, rw, size);
  }

  // Rust blooms at the bottom edge — containers always rust from the floor up.
  for (let i = 0; i < 34; i++) {
    const x = rand() * size;
    const y = size * (0.62 + rand() * 0.38);
    const r = 4 + rand() * 26;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(150,80,40,${0.14 + rand() * 0.24})`);
    g.addColorStop(1, 'rgba(150,80,40,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  grain(ctx, size, size, rand, 10);
  const tex = finish(canvas, { repeat: [1, 1] });
  cache.set(key, tex);
  return tex;
}

/** A soft radial glow sprite for lights, sparks and coin sparkle. */
let glow = null;
export function glowTexture() {
  if (glow) return glow;
  const size = 128;
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.28, 'rgba(255,255,255,0.60)');
  g.addColorStop(0.62, 'rgba(255,255,255,0.16)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  glow = new THREE.CanvasTexture(canvas);
  glow.colorSpace = THREE.SRGBColorSpace;
  return glow;
}

/** Elongated streak used for speed lines and boost trails. */
let streak = null;
export function streakTexture() {
  if (streak) return streak;
  const w = 128;
  const h = 32;
  const canvas = makeCanvas(w, h);
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, w, 0);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(0.45, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.6, 'rgba(255,255,255,1)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, h * 0.35, w, h * 0.3);
  // Taper vertically.
  ctx.globalCompositeOperation = 'destination-in';
  const vg = ctx.createLinearGradient(0, 0, 0, h);
  vg.addColorStop(0, 'rgba(0,0,0,0)');
  vg.addColorStop(0.5, 'rgba(0,0,0,1)');
  vg.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  streak = tex;
  return tex;
}

/** Four-pointed sparkle for coin pickup burst. */
let spark = null;
export function sparkleTexture() {
  if (spark) return spark;
  const size = 64;
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const c = size / 2;
  const g = ctx.createRadialGradient(c, c, 0, c, c, c);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.2, 'rgba(255,240,190,0.6)');
  g.addColorStop(1, 'rgba(255,200,80,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  // Cross flare.
  ctx.globalCompositeOperation = 'lighter';
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.fillRect(c - 1, 2, 2, size - 4);
  ctx.fillRect(2, c - 1, size - 4, 2);
  spark = new THREE.CanvasTexture(canvas);
  spark.colorSpace = THREE.SRGBColorSpace;
  return spark;
}

/** Rain droplet streak for the storm sectors. */
let drop = null;
export function rainTexture() {
  if (drop) return drop;
  const w = 16;
  const h = 64;
  const canvas = makeCanvas(w, h);
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(200,230,255,0)');
  g.addColorStop(0.5, 'rgba(210,235,255,0.85)');
  g.addColorStop(1, 'rgba(200,230,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(w * 0.35, 0, w * 0.3, h);
  drop = new THREE.CanvasTexture(canvas);
  drop.colorSpace = THREE.SRGBColorSpace;
  return drop;
}

/** Apply anisotropy to everything cached once the renderer exists. */
export function tuneTextures(renderer) {
  const max = renderer.capabilities.getMaxAnisotropy();
  for (const tex of cache.values()) {
    if (tex.isCanvasTexture) {
      tex.anisotropy = Math.min(8, max);
      tex.needsUpdate = true;
    }
  }
}

export function disposeTextures() {
  for (const tex of cache.values()) tex.dispose();
  cache.clear();
  glow?.dispose();
  streak?.dispose();
  spark?.dispose();
  drop?.dispose();
  glow = streak = spark = drop = null;
}
