import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Object3DPool } from '../core/Pool.js';
import { Palette, cylGeo, torusGeo, boxGeo, sphereGeo, metal, emissive, mat } from '../core/Materials.js';
import { glowTexture, sparkleTexture } from '../core/ProceduralTextures.js';
import { POWERUPS } from '../core/GameConfig.js';

// ---------------------------------------------------------------------------
// Quid token — the currency. Original design: an octagonal transit token
// with a raised rim and an embossed arrow/chevron mark, no denomination text.
// ---------------------------------------------------------------------------

let quidFace = null;
function quidTexture() {
  if (quidFace) return quidFace;
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');

  // Brushed gold radial.
  const grad = ctx.createRadialGradient(size * 0.4, size * 0.35, 4, size / 2, size / 2, size / 2);
  grad.addColorStop(0, '#ffe9a8');
  grad.addColorStop(0.55, '#ffc94d');
  grad.addColorStop(1, '#c98a1e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // Concentric guilloche rings.
  ctx.strokeStyle = 'rgba(255,255,255,0.22)';
  for (let r = 16; r < size / 2; r += 7) {
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Embossed double-chevron mark (a "fast forward" glyph, our own icon).
  ctx.strokeStyle = 'rgba(120,72,10,0.85)';
  ctx.lineWidth = 9;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (let i = 0; i < 2; i++) {
    const ox = size / 2 - 12 + i * 20;
    ctx.beginPath();
    ctx.moveTo(ox - 14, size / 2 - 20);
    ctx.lineTo(ox + 8, size / 2);
    ctx.lineTo(ox - 14, size / 2 + 20);
    ctx.stroke();
  }
  // Highlight pass on the same path, offset up-left, for relief.
  ctx.strokeStyle = 'rgba(255,246,214,0.75)';
  ctx.lineWidth = 4;
  for (let i = 0; i < 2; i++) {
    const ox = size / 2 - 12 + i * 20 - 2;
    ctx.beginPath();
    ctx.moveTo(ox - 14, size / 2 - 22);
    ctx.lineTo(ox + 6, size / 2 - 2);
    ctx.lineTo(ox - 14, size / 2 + 18);
    ctx.stroke();
  }

  quidFace = new THREE.CanvasTexture(canvas);
  quidFace.colorSpace = THREE.SRGBColorSpace;
  quidFace.anisotropy = 4;
  return quidFace;
}

let quidGeometry = null;
function buildQuidGeometry() {
  if (quidGeometry) return quidGeometry;
  // Octagonal body with a raised rim, merged into a single geometry so the
  // whole token costs one instanced draw. Slightly oversized: at 30 m/s the
  // player has well under a second to register a coin, so readability beats
  // physical accuracy.
  const body = new THREE.CylinderGeometry(0.36, 0.36, 0.08, 8, 1);
  body.rotateX(Math.PI / 2); // face the camera (facing +Z/-Z)
  const rim = new THREE.TorusGeometry(0.36, 0.045, 6, 8);
  const rimA = rim.clone();
  rimA.translate(0, 0, 0.042);
  const rimB = rim.clone();
  rimB.translate(0, 0, -0.042);
  const parts = [body, rimA, rimB];
  for (const p of parts) {
    p.clearGroups();
    if (!p.attributes.uv) {
      const count = p.attributes.position.count;
      p.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(count * 2), 2));
    }
  }
  quidGeometry = mergeGeometries(parts, false);
  for (const p of parts) p.dispose();
  return quidGeometry;
}

const quidMaterial = () =>
  mat('quid', () =>
    new THREE.MeshStandardMaterial({
      color: 0xffd27a,
      map: quidTexture(),
      roughness: 0.28,
      metalness: 0.85,
      // Lifted so the token reads against dark wet concrete at distance, and
      // comfortably above the bloom threshold so it sparkles.
      emissive: 0xffa521,
      emissiveIntensity: 0.85,
    })
  );

/**
 * CoinField — every quid on screen, drawn as two InstancedMeshes.
 *
 * Instancing matters here: a busy stretch can show 120+ quids. As individual
 * meshes that would be 120 draw calls before any other geometry. As
 * instances it's exactly 2, regardless of count.
 */
export class CoinField {
  /**
   * @param {THREE.Object3D} parent
   * @param {number} capacity
   */
  constructor(parent, capacity = 180) {
    this.capacity = capacity;
    /** @type {{x:number,y:number,z:number,spin:number,phase:number,magnet:number}[]} */
    this.slots = [];
    this.count = 0;

    this.geometry = buildQuidGeometry();
    this.mesh = new THREE.InstancedMesh(this.geometry, quidMaterial(), capacity);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    this.mesh.receiveShadow = false;
    parent.add(this.mesh);

    // Additive halo behind each token.
    this.glowMaterial = new THREE.MeshBasicMaterial({
      map: glowTexture(),
      color: 0xffc061,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.7,
      toneMapped: false,
    });
    this.glow = new THREE.InstancedMesh(
      new THREE.PlaneGeometry(1.35, 1.35),
      this.glowMaterial,
      capacity
    );
    this.glow.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.glow.frustumCulled = false;
    this.glow.renderOrder = 2;
    parent.add(this.glow);

    this._matrix = new THREE.Matrix4();
    this._pos = new THREE.Vector3();
    this._quat = new THREE.Quaternion();
    this._scale = new THREE.Vector3(1, 1, 1);
    this._euler = new THREE.Euler();
    this._billboard = new THREE.Quaternion();

    this.collectedTotal = 0;
  }

  /** @returns {boolean} false when the field is full */
  add(x, y, z) {
    if (this.count >= this.capacity) return false;
    this.slots.push({
      x,
      y,
      z,
      spin: Math.random() * Math.PI * 2,
      spinSpeed: 1.6 + Math.random() * 1.1,
      phase: Math.random() * Math.PI * 2,
      bobAmp: 0.09 + Math.random() * 0.07,
      bobRate: 1.6 + Math.random() * 0.9,
      pull: 0,
    });
    this.count++;
    return true;
  }

  /**
   * Remove the slot at `index` by swapping in the last one. O(1), and the
   * caller must not hold indices across frames.
   */
  removeAt(index) {
    const last = this.count - 1;
    if (index !== last) this.slots[index] = this.slots[last];
    this.slots.pop();
    this.count--;
  }

  /**
   * Remove coins that have scrolled past the camera.
   *
   * This is not an optimisation, it's a correctness requirement. The instanced
   * buffer has a fixed capacity, and `add()` silently refuses once it's full.
   * Without culling, coins that pass behind the player occupy slots forever,
   * the buffer locks at capacity early in the run, and every subsequent spawn
   * is rejected — leaving the road bare for the rest of the session.
   *
   * Coin positions are absolute world z, so this needs no scroll delta.
   *
   * @param {number} zLimit anything past this is behind the camera
   */
  cullBehind(zLimit = 16) {
    for (let i = this.count - 1; i >= 0; i--) {
      if (this.slots[i].z > zLimit) this.removeAt(i);
    }
  }

  /**
   * @param {number} dt
   * @param {number} time
   * @param {THREE.Camera} camera used to billboard the halos
   * @param {{x:number,y:number,z:number}|null} magnetPos when the Lodestone
   *   is active, coins within range are pulled toward this point
   * @param {number} magnetRadius
   * @param {number} scroll metres the world moved toward the camera this frame
   */
  update(dt, time, camera, magnetPos, magnetRadius, scroll = 0) {
    this.cullBehind();
    this._billboard.copy(camera.quaternion);

    for (let i = 0; i < this.count; i++) {
      const s = this.slots[i];

      // The world scrolls toward the camera; coins must travel with it.
      // Without this they stay frozen at their spawn distance and are never
      // actually reachable.
      s.z += scroll;

      if (magnetPos) {
        const dx = magnetPos.x - s.x;
        const dy = magnetPos.y - s.y;
        const dz = magnetPos.z - s.z;
        const distSq = dx * dx + dy * dy + dz * dz;
        if (distSq < magnetRadius * magnetRadius) {
          // Accelerating pull so coins feel magnetised, not lerped.
          const dist = Math.sqrt(distSq) || 0.0001;
          const strength = 1 - dist / magnetRadius;
          const speed = 9 * strength * strength + 2.5;
          s.x += (dx / dist) * speed * dt;
          s.y += (dy / dist) * speed * dt;
          s.z += (dz / dist) * speed * dt;
          s.pull = Math.min(1, s.pull + dt * 4);
        }
      } else if (s.pull > 0) {
        s.pull = Math.max(0, s.pull - dt * 2.5);
      }

      s.spin += s.spinSpeed * dt;
      const bob = Math.sin(time * s.bobRate + s.phase) * s.bobAmp;

      this._pos.set(s.x, s.y + bob, s.z);
      this._euler.set(0, 0, s.spin);
      this._quat.setFromEuler(this._euler);
      const scale = 1 + s.pull * 0.18;
      this._scale.set(scale, scale, scale);
      this._matrix.compose(this._pos, this._quat, this._scale);
      this.mesh.setMatrixAt(i, this._matrix);

      // Halo: same position, camera-facing, swelling while magnetised.
      const halo = (0.9 + s.pull * 0.5) * scale;
      this._scale.set(halo, halo, halo);
      this._matrix.compose(this._pos, this._billboard, this._scale);
      this.glow.setMatrixAt(i, this._matrix);
    }

    this.mesh.count = this.count;
    this.glow.count = this.count;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.glow.instanceMatrix.needsUpdate = true;
  }

  /** Hide every instance not in the active range. */
  clear() {
    this.slots.length = 0;
    this.count = 0;
    this.mesh.count = 0;
    this.glow.count = 0;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.glow.instanceMatrix.needsUpdate = true;
  }

  dispose() {
    this.mesh.removeFromParent();
    this.glow.removeFromParent();
    this.mesh.dispose();
    this.glow.dispose();
    this.glowMaterial.dispose();
  }
}

// ---------------------------------------------------------------------------
// Overdrive Cells — power-up pickups.
// ---------------------------------------------------------------------------

/**
 * A salvaged power core in a containment cage: a glowing octahedron inside a
 * counter-rotating wireframe shell, wrapped by two orbital rings. Each type
 * gets its own colour so the player can read it at a glance.
 */
function buildCell(powerId) {
  const def = POWERUPS[powerId];
  const g = new THREE.Group();
  const color = def.color;

  // Solid core.
  const core = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.3, 0),
    emissive(color, 2.8)
  );
  core.userData.dynamic = true;
  core.userData.spinRate = 1.6;
  g.add(core);

  // Wireframe cage.
  const cage = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.44, 0),
    new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      transparent: true,
      opacity: 0.72,
      toneMapped: false,
    })
  );
  cage.userData.dynamic = true;
  cage.userData.spinRate = -1.1;
  g.add(cage);

  // Two orbital rings on different axes — catches the eye while rotating.
  const ringMat = metal(Palette.steel, 0.3, 0.9);
  for (const axis of ['x', 'y']) {
    const ring = new THREE.Mesh(torusGeo(0.52, 0.028, 6, 18), ringMat);
    if (axis === 'x') ring.rotation.y = Math.PI / 2;
    else ring.rotation.x = Math.PI / 2;
    ring.userData.dynamic = true;
    ring.userData.spinRate = axis === 'x' ? 2.4 : -1.8;
    g.add(ring);
  }

  // Additive halo.
  const halo = new THREE.Mesh(
    new THREE.PlaneGeometry(2.1, 2.1),
    new THREE.MeshBasicMaterial({
      map: glowTexture(),
      color,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.5,
      toneMapped: false,
    })
  );
  halo.userData.dynamic = true;
  halo.userData.billboard = true;
  g.add(halo);

  g.userData.powerId = powerId;
  g.userData.radius = 0.72;
  g.userData.parts = g.children;
  return g;
}

export class PickupFactory {
  constructor(parent) {
    this.parent = parent;
    /** @type {Map<string, Object3DPool>} */
    this.pools = new Map();
    for (const id of Object.keys(POWERUPS)) {
      this.pools.set(id, new Object3DPool(() => buildCell(id), { prewarm: 2, max: 8 }));
    }
    /** @type {{obj: THREE.Group, powerId: string}[]} */
    this.live = [];
  }

  spawn(powerId, x, y, z) {
    const pool = this.pools.get(powerId);
    if (!pool) return null;
    const obj = pool.acquireInto(this.parent);
    obj.position.set(x, y, z);
    this.live.push({ obj, powerId });
    return obj;
  }

  /**
   * Animate spinners and billboarding.
   * @param {number} dt
   */
  update(dt, camera) {
    for (const entry of this.live) {
      const { obj } = entry;
      obj.rotation.y += dt * 0.9;
      obj.position.y += Math.sin(performance.now() * 0.002 + obj.id) * dt * 0.25;
      for (const part of obj.userData.parts) {
        if (part.userData.billboard) {
          part.quaternion.copy(camera.quaternion);
          // Counter-rotate so the halo stays level while the group spins.
          part.quaternion.premultiply(obj.quaternion.clone().invert());
        } else if (part.userData.spinRate) {
          part.rotation.y += dt * part.userData.spinRate;
          part.rotation.x += dt * part.userData.spinRate * 0.4;
        }
      }
    }
  }

  releaseAt(index) {
    const entry = this.live[index];
    if (!entry) return;
    const last = this.live.length - 1;
    if (index !== last) this.live[index] = this.live[last];
    this.live.pop();
    this.pools.get(entry.powerId)?.release(entry.obj);
  }

  clear() {
    for (let i = this.live.length - 1; i >= 0; i--) this.releaseAt(i);
  }
}

/** Shared sparkle sprite material for pickup bursts. */
export function sparkleMaterial(color = 0xffd166) {
  return new THREE.SpriteMaterial({
    map: sparkleTexture(),
    color,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
}
