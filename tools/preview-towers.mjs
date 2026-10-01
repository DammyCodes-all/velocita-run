/**
 * Render composed towers to a PNG contact sheet so the silhouettes can be
 * eyeballed without a browser. Orthographic side-on projection, glass drawn
 * bright to stand in for emissive.
 *
 * Output: /tmp/opencode/tower-sheet.png
 */
import { writeFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';
import { composeTowers } from '../src/world/BuildingKit.js';

const W = 1400;
const H = 620;
const img = new Uint8Array(W * H * 3);
// dark background
for (let i = 0; i < W * H; i++) { img[i * 3] = 10; img[i * 3 + 1] = 12; img[i * 3 + 2] = 18; }

const towers = composeTowers(12);
const CELL = Math.floor(W / 6);
const ROWS = Math.ceil(towers.length / 6);

/** Project a world point to pixel: X->x, Y->up, with z as depth only. */
function shade(g, ox, oy, scale, isGlass) {
  const pos = g.attributes.position.array;
  const nrm = g.attributes.normal.array;
  const col = g.attributes.color.array;
  const idx = g.index.array;
  const zbuf = shade.zbuf;
  for (let t = 0; t < idx.length; t += 3) {
    const ids = [idx[t], idx[t + 1], idx[t + 2]];
    const p = ids.map((v) => [pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]]);
    // Painter's algorithm on z; far faces first. Sort positions and vertex ids
    // together so colour/normal lookups still refer to the right vertex.
    const order = [0, 1, 2].sort((i, j) => p[i][2] - p[j][2]);
    const sp = order.map((i) => p[i]);
    const si = order.map((i) => ids[i]);
    for (let k = 1; k < 2; k++) {
      const a = sp[0];
      const b = sp[k];
      const c = sp[k + 1];
      const sx = [ox + (a[0] + 0.5) * scale, ox + (b[0] + 0.5) * scale, ox + (c[0] + 0.5) * scale];
      const sy = [oy - (a[1] + 0.6) * scale, oy - (b[1] + 0.6) * scale, oy - (c[1] + 0.6) * scale];
      const n = [nrm[si[0] * 3], nrm[si[0] * 3 + 1], nrm[si[0] * 3 + 2]];
      // simple lambert against a fixed key light
      const lam = Math.max(0, 0.35 + 0.65 * Math.abs(n[1] * 0.7 + n[0] * 0.4 + n[2] * 0.3));

      // Rasterise only inside the triangle's screen-space bounding box.
      // Scanning the whole framebuffer per triangle is what made this
      // unusably slow.
      const minX = Math.max(0, Math.floor(Math.min(sx[0], sx[1], sx[2])));
      const maxX = Math.min(W - 1, Math.ceil(Math.max(sx[0], sx[1], sx[2])));
      const minY = Math.max(0, Math.floor(Math.min(sy[0], sy[1], sy[2])));
      const maxY = Math.min(H - 1, Math.ceil(Math.max(sy[0], sy[1], sy[2])));
      if (maxX < minX || maxY < minY) continue;

      const d = (sy[1] - sy[2]) * (minX + 0.5 - sx[2]) + (sx[0] - sx[1]) * (minY + 0.5 - sy[2]);
      if (Math.abs(d) < 1e-9) continue;

      for (let yy = minY; yy <= maxY; yy++) {
        const py = yy + 0.5;
        for (let xx = minX; xx <= maxX; xx++) {
          const px = xx + 0.5;
          const l0 = ((sx[1] - px) * (sy[2] - py) - (sx[2] - px) * (sy[1] - py)) / d;
          const l1 = ((sy[0] - px) * (sy[2] - py) - (sx[2] - px) * (sy[0] - py)) / d;
          const l2 = 1 - l0 - l1;
          if (l0 < 0 || l1 < 0 || l2 < 0) continue;
          const depth = l0 * a[2] + l1 * b[2] + l2 * c[2];
          const zAt = (yy * W + xx) * 3;
          if (depth < zbuf[zAt]) continue;
          zbuf[zAt] = depth;
          const ci = si[0] * 3;
          let r = col[ci];
          let g2 = col[ci + 1];
          let bl = col[ci + 2];
          if (isGlass) {
            r = Math.min(255, r * 0.55 + 190);
            g2 = Math.min(255, g2 * 0.5 + 150);
            bl = Math.min(255, bl * 0.4 + 90);
          } else {
            r *= lam; g2 *= lam; bl *= lam;
          }
          img[zAt] = r; img[zAt + 1] = g2; img[zAt + 2] = bl;
        }
      }
    }
  }
}

shade.zbuf = new Float32Array(W * H).fill(-1e9);

towers.forEach((t, i) => {
  const cx = (i % 6) * CELL + CELL / 2;
  const cy = Math.floor(i / 6) * (H / ROWS) + (H / ROWS) - 30;
  if (t.solid) shade(t.solid, cx, cy, 34, false);
  if (t.glass) shade(t.glass, cx, cy, 34, true);
});

// --- write PNG ---
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const t = Buffer.from(type, 'ascii');
  const body = Buffer.concat([t, data]);
  const crcTable = chunk._t || (chunk._t = (() => {
    const t2 = new Int32Array(256);
    for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t2[n] = c; }
    return t2;
  })());
  let c = -1;
  for (let i = 0; i < body.length; i++) c = crcTable[(c ^ body[i]) & 0xff] ^ (c >>> 8);
  const crc = Buffer.alloc(4); crc.writeInt32BE(c ^ -1);
  return Buffer.concat([len, body, crc]);
}
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
const raw = Buffer.alloc(H * (W * 3 + 1));
for (let y = 0; y < H; y++) {
  raw[y * (W * 3 + 1)] = 0;
  Buffer.from(img.buffer, y * W * 3, W * 3).copy(raw, y * (W * 3 + 1) + 1);
}
writeFileSync('/tmp/opencode/tower-sheet.png', Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]));
console.log(`wrote /tmp/opencode/tower-sheet.png (${W}x${H}, ${towers.length} towers)`);