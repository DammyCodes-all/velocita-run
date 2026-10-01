/**
 * Small math + timing helpers used across the game.
 * Kept dependency-free so it can be unit tested in isolation.
 */

export const clamp = (v, min, max) => (v < min ? min : v > max ? max : v);

export const clamp01 = (v) => clamp(v, 0, 1);

export const lerp = (a, b, t) => a + (b - a) * t;

/** Inverse lerp, clamped to 0..1. Returns 0 when a === b. */
export function inverseLerp(a, b, v) {
  if (a === b) return 0;
  return clamp01((v - a) / (b - a));
}

/** Frame-rate independent exponential smoothing. */
export function damp(current, target, smoothing, dt) {
  return lerp(current, target, 1 - Math.pow(smoothing, dt));
}

/** Move `current` toward `target` by at most `maxDelta`. */
export function moveTowards(current, target, maxDelta) {
  const diff = target - current;
  if (Math.abs(diff) <= maxDelta) return target;
  return current + Math.sign(diff) * maxDelta;
}

export const smoothstep = (t) => {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
};

export const easeOutCubic = (t) => 1 - Math.pow(1 - clamp01(t), 3);
export const easeInCubic = (t) => Math.pow(clamp01(t), 3);
export const easeOutQuint = (t) => 1 - Math.pow(1 - clamp01(t), 5);
export const easeInOutCubic = (t) => {
  const x = clamp01(t);
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};

/** Overshooting ease, good for coin pops and UI. */
export function easeOutBack(t, overshoot = 1.7) {
  const c3 = overshoot + 1;
  const x = clamp01(t);
  return 1 + c3 * Math.pow(x - 1, 3) + overshoot * Math.pow(x - 1, 2);
}

export const easeOutElastic = (t) => {
  const x = clamp01(t);
  if (x === 0 || x === 1) return x;
  const c4 = (2 * Math.PI) / 3;
  return Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
};

/** Random float in [min, max). */
export const rand = (min, max) => min + Math.random() * (max - min);

/** Random integer in [min, max]. */
export const randInt = (min, max) => Math.floor(rand(min, max + 1));

export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/** Weighted pick. `weights` must align with `arr`. */
export function pickWeighted(arr, weights) {
  let total = 0;
  for (const w of weights) total += w;
  let roll = Math.random() * total;
  for (let i = 0; i < arr.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return arr[i];
  }
  return arr[arr.length - 1];
}

/** Shortest signed angular difference, radians. */
export function angleDelta(a, b) {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

/** Format a number with thousands separators, e.g. 12345 -> "12,345". */
export function formatNumber(n) {
  return Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/** Format meters into a compact human string. */
export function formatDistance(meters) {
  if (meters >= 1000) return `${(meters / 1000).toFixed(2)} km`;
  return `${Math.floor(meters)} m`;
}

/** Format seconds as m:ss. */
export function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}
