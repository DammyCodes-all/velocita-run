import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { corrugated } from '../core/ProceduralTextures.js';
import { TRACK } from '../core/GameConfig.js';
import { composeTowers, composeBlocks, disposeBuildingKit } from './BuildingKit.js';

/**
 * Scenery — everything that isn't the deck, the player, or an obstacle.
 *
 * Two layers with different parallax rates:
 *  - Skyline: distant towers that scroll at 25% speed. This is what sells
 *    speed and depth; without it the world looks like a corridor.
 *  - Midground: sector-specific structures at full scroll speed, flanking the
 *    deck so the play space feels embedded in a city rather than floating.
 *
 * Everything is instanced. The whole background costs ~6 draw calls.
 */

const _m = new THREE.Matrix4();
const _c = new THREE.Color();
const Y_AXIS = { x: 0, y: 1, z: 0 };

function tint(geo, color) {
  const count = geo.attributes.position.count;
  const arr = new Float32Array(count * 3);
  _c.set(color);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = _c.r;
    arr[i * 3 + 1] = _c.g;
    arr[i * 3 + 2] = _c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

function addBox(list, w, h, d, x, y, z, color, rotY = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  _m.makeRotationY(rotY);
  _m.setPosition(x, y, z);
  g.applyMatrix4(_m);
  tint(g, color);
  list.push(g);
  return g;
}

function addCyl(list, rt, rb, h, seg, x, y, z, color, rot = [0, 0, 0]) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg);
  const r = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rot[0], rot[1], rot[2]));
  r.setPosition(x, y, z);
  g.applyMatrix4(r);
  tint(g, color);
  list.push(g);
  return g;
}

function merge(list) {
  const geo = mergeGeometries(list, false);
  for (const g of list) g.dispose();
  return geo;
}

// ---------------------------------------------------------------------------
// Sector-specific midground props, flanking the deck at roughly x = ±9..16.
// ---------------------------------------------------------------------------

const dark = 0x44515d;
const mid = 0x63707d;
const light = 0x8a97a4;

const PROP_BUILDERS = {
  // Ferry Basin: gantry cranes over the container yard.
  gantry: () => {
    const parts = [];
    for (const sx of [-1, 1]) {
      addBox(parts, 1.2, 22, 1.2, sx * 9, 11, 0, mid);
      addBox(parts, 1.0, 16, 1.0, sx * 9, 8, 7, mid);
    }
    addBox(parts, 22, 1.6, 2.2, 0, 22.5, 0, light);
    addBox(parts, 26, 1.0, 1.4, 0, 24.5, 5.5, mid);
    addBox(parts, 2.4, 2.0, 2.4, 0, 21.4, 5.5, dark); // trolley
    return merge(parts);
  },

  // Night Market: stacked shophouse block with awnings.
  shophouse: () => {
    const parts = [];
    addBox(parts, 11, 14, 9, 0, 7, 0, 0x6b5c76);
    addBox(parts, 11.6, 0.7, 9.6, 0, 13.6, 0, 0x53495e);
    for (let i = 0; i < 3; i++) {
      addBox(parts, 11.6, 0.35, 2.2, 0, 3 + i * 3.6, -5.2, light); // awnings
    }
    return merge(parts);
  },

  // Cargo Spine: silos and a conveyor bridge.
  silos: () => {
    const parts = [];
    for (let i = -1; i <= 1; i++) {
      addCyl(parts, 2.4, 2.4, 15, 12, i * 5.4, 7.5, 0, light);
      addCyl(parts, 0.1, 2.5, 2.2, 12, i * 5.4, 16, 0, mid);
    }
    addBox(parts, 16, 1.4, 2.0, 0, 15.5, 3.2, mid);
    for (let i = -1; i <= 1; i++) addBox(parts, 0.5, 5, 0.5, i * 5.4, 17.5, 3.2, dark);
    return merge(parts);
  },

  // Storm Sluice: a bulkhead ring spanning overhead.
  bulkhead: () => {
    const parts = [];
    addBox(parts, 34, 1.8, 2.4, 0, 15, 0, mid);
    addBox(parts, 34, 1.0, 1.2, 0, 13.2, 0, dark);
    for (const sx of [-1, 1]) {
      addBox(parts, 2.4, 15, 2.4, sx * 15.5, 7.5, 0, mid);
      addCyl(parts, 1.6, 1.6, 3.0, 10, sx * 15.5, 2.5, 0, dark); // drain pipe
    }
    return merge(parts);
  },

  // Dawn Overpass: highway pylons and a big roadside billboard.
  pylon: () => {
    const parts = [];
    addBox(parts, 2.0, 20, 2.0, 0, 10, 0, 0x6c6c7c);
    addBox(parts, 18, 1.6, 1.8, 0, 19.5, 0, 0x6c6c7c);
    for (const sx of [-1, 1]) addBox(parts, 1.2, 8, 1.2, sx * 7, 15.5, 0, dark);
    return merge(parts);
  },

  billboard: () => {
    const parts = [];
    addBox(parts, 1.0, 14, 1.0, -5, 7, 0, mid);
    addBox(parts, 1.0, 14, 1.0, 5, 7, 0, mid);
    addBox(parts, 13, 6.5, 0.5, 0, 13, 0, dark);
    return merge(parts);
  },
};

/**
 * Skyline — parallax layer at 0.25x. Buildings drift noticeably slower than
 * the deck, which the eye reads as enormous distance.
 *
 * Towers are composed at load from the Kenney modular building kit rather than
 * being fixed silhouettes (see BuildingKit). Each entry picks one of the
 * composed towers, so the horizon carries many distinct profiles for the cost
 * of one InstancedMesh per tower instead of the three repeated shapes the old
 * skyline used.
 */
export class Skyline {
  /**
   * @param {THREE.Object3D} parent
   * @param {number} count total buildings
   * @param {number} towerCount how many distinct towers to compose
   */
  constructor(parent, count = 42, towerCount = 7) {
    this.count = count;
    this.group = new THREE.Group();
    // Sit the towers on the distant ground plane (see Atmosphere) rather than
    // floating above it.
    this.group.position.y = -9;
    parent.add(this.group);

    // Kit geometry carries its own per-vertex palette colours, so there is no
    // albedo texture to sample. The old facade texture doubled as an
    // emissiveMap to make windows glow; the kit instead separates window glass
    // into its own geometry (below), which is a far cleaner way to light a
    // skyline: only the panes emit, the walls stay concrete.
    const wallMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.88,
      metalness: 0.06,
      // Distant towers should sit back in the fog rather than compete with
      // the deck for attention.
      color: new THREE.Color(0x8c99a6),
    });
    const glassMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      emissive: new THREE.Color(0xffd9a8),
      // Well above the bloom threshold in PostFX so lit windows actually
      // glow, but low enough that a tower doesn't read as a light box.
      emissiveIntensity: 1.15,
      roughness: 0.32,
      metalness: 0.2,
    });
    this.materials = [wallMaterial, glassMaterial];

    const towers = composeTowers(towerCount);

    /**
     * One InstancedMesh per composed tower *per material*. Solid and glass are
     * separate geometries, so each tower needs two meshes sharing a transform;
     * they are kept in pairs so placement only has to write one matrix.
     * @type {{wall: THREE.InstancedMesh, glass: THREE.InstancedMesh|null}[]}
     */
    this.variants = [];
    /** @type {number[]} instance capacity per variant */
    this.capacity = [];
    this.entries = [];

    towers.forEach((tower, i) => {
      // Capacity is per-variant, so divide the building budget across towers.
      const cap = Math.max(2, Math.ceil(count / towers.length));
      const wall = new THREE.InstancedMesh(tower.solid, wallMaterial, cap);
      wall.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      wall.frustumCulled = false;
      wall.castShadow = false;
      wall.receiveShadow = false;
      this.group.add(wall);

      let glass = null;
      if (tower.glass) {
        glass = new THREE.InstancedMesh(tower.glass, glassMaterial, cap);
        glass.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        glass.frustumCulled = false;
        glass.castShadow = false;
        glass.receiveShadow = false;
        this.group.add(glass);
      }

      this.variants.push({ wall, glass });
      this.capacity.push(cap);
    });

    this._matrix = new THREE.Matrix4();
    this._quat = new THREE.Quaternion();
    this._scale = new THREE.Vector3();
    this._pos = new THREE.Vector3();

    // Spread buildings across a wide band and seed them at random depths.
    this._placeCursor = 0;
    for (let i = 0; i < count; i++) {
      this.entries.push(this._makeEntry());
    }
    this.refresh();
  }

  _makeEntry() {
    // Uniform choice across every composed tower. The old code weighted three
    // fixed silhouettes; with procedurally composed towers the variety is
    // already in the geometry, so a uniform pick gives the most even spread
    // of profiles across the horizon.
    const meshIndex = (Math.random() * this.variants.length) | 0;

    // Buildings are placed in *clusters* separated by empty stretches, rather
    // than evenly. An even spread walls the corridor in on both sides and
    // buries the sunset; clusters give the skyline shape and let the sky
    // through the gaps between districts.
    const side = Math.random() < 0.5 ? -1 : 1;
    const cluster = Math.floor(this._placeCursor);
    this._placeCursor += 0.28 + Math.random() * 0.85;
    const gap = cluster % 3 === 2; // every third slot is deliberately empty

    const lateral = side * (58 + Math.random() * 82 + cluster * 5);
    // Kenney's cell is a 1 x 1 x 0.625 module, i.e. already roughly metre
    // scale — one cell is about one bay of facade. So these towers want a
    // scale near 1, not the 7.5-14.5 this used to apply. At 7.5+ a median
    // tower stood 48-94m tall at 58-145m out, which is not a skyline at all:
    // it is a wall that fills the frame and swallows the sunset, and it reads
    // as a flat black slab because there is no detail at that distance to
    // catch light. Measured against the 1.62m player, the intended range is
    // ~10-22m, subtending 6-13 degrees at 100m.
    const scale = gap ? 1.15 + Math.random() * 0.7 : 1.6 + Math.random() * 1.6;

    return {
      meshIndex,
      x: lateral,
      y: 0,
      z: -30 - Math.random() * 420,
      scale,
      rotY: Math.random() * Math.PI * 2,
      tint: 0.6 + Math.random() * 0.55,
    };
  }

  /**
   * @param {number} deltaScroll deck distance travelled this frame
   */
  update(deltaScroll) {
    // Parallax factor: background drifts at a quarter speed.
    const scroll = deltaScroll * 0.25;
    const recycle = 60;
    const span = 460;

    for (const entry of this.entries) {
      entry.z += scroll;
      if (entry.z > recycle) {
        // Respawn far ahead, reusing the same silhouette so the skyline
        // keeps its character instead of shimmering into nothing.
        const replacement = this._makeEntry();
        entry.meshIndex = replacement.meshIndex;
        entry.x = replacement.x;
        entry.scale = replacement.scale;
        entry.rotY = replacement.rotY;
        entry.tint = replacement.tint;
        entry.z = -span - Math.random() * 40;
      }
    }
    this.refresh();
  }

  refresh() {
    // Reset counts and re-pack every frame; the building count is small
    // enough (<50) that packing is far cheaper than bookkeeping.
    const used = this.variants.map(() => 0);
    for (const entry of this.entries) {
      const mi = entry.meshIndex;
      const slot = used[mi];
      if (slot >= this.capacity[mi]) continue;
      used[mi]++;

      this._pos.set(entry.x, entry.y, entry.z);
      this._quat.setFromAxisAngle({ x: 0, y: 1, z: 0 }, entry.rotY);
      this._scale.setScalar(entry.scale);
      this._matrix.compose(this._pos, this._quat, this._scale);
      // Wall and glass are separate meshes over the same instance, so they
      // take an identical transform — write once, apply to both.
      const { wall, glass } = this.variants[mi];
      wall.setMatrixAt(slot, this._matrix);
      if (glass) glass.setMatrixAt(slot, this._matrix);
      // Tint modulates the baked palette colour per building, so two towers
      // sharing a mesh still read as different buildings.
      _c.setScalar(entry.tint);
      wall.setColorAt(slot, _c);
      if (glass) glass.setColorAt(slot, _c);
    }
    for (let i = 0; i < this.variants.length; i++) {
      const { wall, glass } = this.variants[i];
      wall.count = used[i];
      wall.instanceMatrix.needsUpdate = true;
      if (wall.instanceColor) wall.instanceColor.needsUpdate = true;
      if (glass) {
        glass.count = used[i];
        glass.instanceMatrix.needsUpdate = true;
        if (glass.instanceColor) glass.instanceColor.needsUpdate = true;
      }
    }
  }

  setVisible(v) {
    this.group.visible = v;
  }

  dispose() {
    for (const { wall, glass } of this.variants) {
      wall.removeFromParent();
      wall.geometry.dispose();
      if (glass) {
        glass.removeFromParent();
        glass.geometry.dispose();
      }
    }
    for (const m of this.materials) m.dispose();
    this.group.removeFromParent();
    // Release the decoded piece cache; composed towers are disposed above.
    disposeBuildingKit();
  }
}

/**
 * How the street terrace is laid out.
 *
 * `STREET_CLEARANCE` is the distance from the track centreline to the shopfront
 * face. It is deliberately tighter than CORRIDOR_CLEARANCE (which industrial
 * props use): a street should feel hemmed in, and 8.6m still leaves 4m of clear
 * deck either side of the 9.2m-wide track, so nothing can clip the lanes.
 */
const STREET_CLEARANCE = TRACK.DECK_HALF_WIDTH + 4.0;
/** Gap between consecutive blocks along the street, in metres. */
const STREET_SPACING = 15;
/** How far ahead a block is respawned when it passes the camera. */
const STREET_SPAN = 260;
/** World z past which a block is recycled. */
const STREET_RECYCLE = 34;

/**
 * StreetFront — low-rise Kenney blocks flanking the deck at full scroll speed.
 *
 * This is the layer that makes the city legible. The parallax skyline is 60m+
 * out and mostly fog, so its windows never resolve; these sit just outside the
 * corridor at roughly 9-13m, well inside the fog falloff, which is the only
 * distance at which the kit's doorframes, sills, awnings and shopfront glazing
 * are actually visible.
 *
 * Blocks are placed in terraces along each side rather than scattered, because
 * a street reads as a street when the facades form a continuous frontage with
 * party walls between them. The rotation is what makes this work: each block is
 * composed with its shopfront facing -Z (see BuildingKit.composeBlock), so a
 * quarter turn aims it at whichever side of the track it sits on.
 */
export class StreetFront {
  /**
   * @param {THREE.Object3D} parent
   * @param {number} perSide blocks per side
   * @param {number} blockCount distinct block geometries to compose
   */
  constructor(parent, perSide = 6, blockCount = 6) {
    this.group = new THREE.Group();
    parent.add(this.group);

    const wallMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.82,
      metalness: 0.08,
      color: new THREE.Color(0xb4bfc9),
    });
    const glassMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      emissive: new THREE.Color(0xffd2a0),
      emissiveIntensity: 1.35,
      roughness: 0.28,
      metalness: 0.25,
    });
    this.materials = [wallMaterial, glassMaterial];

    const blocks = composeBlocks(blockCount);
    this.variants = [];
    this.entries = [];

    blocks.forEach((block) => {
      block.solid.computeBoundingBox();
      const bb = block.solid.boundingBox;
      // The street face is the block's -Z edge; everything else is behind it.
      const depth = -(bb.min.z);
      const width = bb.max.x - bb.min.x;

      const wall = new THREE.InstancedMesh(block.solid, wallMaterial, perSide * 2);
      wall.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      wall.frustumCulled = false;
      wall.castShadow = false;
      wall.receiveShadow = false;
      this.group.add(wall);

      let glass = null;
      if (block.glass) {
        glass = new THREE.InstancedMesh(block.glass, glassMaterial, perSide * 2);
        glass.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        glass.frustumCulled = false;
        glass.castShadow = false;
        glass.receiveShadow = false;
        this.group.add(glass);
      }
      this.variants.push({ wall, glass, depth, width });
    });

    this.capacity = perSide * 2;

    // Seed the terrace. Both sides are filled up front so the first frame the
    // player sees already has a street around them, not an empty corridor that
    // fills in over the next few seconds.
    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < perSide; i++) {
        this.entries.push({
          variant: (Math.random() * this.variants.length) | 0,
          side,
          z: -(i * STREET_SPACING) - Math.random() * 6,
          // Kenney cells are metre-scale, so a block needs only a small nudge
          // to give a believable ~2.3m storey height. Stored per entry because
          // refresh() runs every frame and must stay deterministic.
          scale: 3.5 + Math.random() * 0.7,
          tint: 0.82 + Math.random() * 0.3,
        });
      }
    }

    this._matrix = new THREE.Matrix4();
    this._quat = new THREE.Quaternion();
    this._pos = new THREE.Vector3();
    this._scale = new THREE.Vector3();
    this.refresh();
  }

  /**
   * @param {number} deltaScroll deck distance travelled this frame
   */
  update(deltaScroll) {
    for (const entry of this.entries) {
      entry.z += deltaScroll;
      if (entry.z > STREET_RECYCLE) {
        entry.variant = (Math.random() * this.variants.length) | 0;
        entry.scale = 3.5 + Math.random() * 0.7;
        entry.tint = 0.82 + Math.random() * 0.3;
        // Respawn ahead of the camera, jittered so the street doesn't step
        // forward in lockstep when a block is recycled.
        entry.z = -STREET_SPAN - Math.random() * 40;
      }
    }
    this.refresh();
  }

  refresh() {
    const used = this.variants.map(() => 0);
    for (const entry of this.entries) {
      const vi = entry.variant;
      const slot = used[vi];
      if (slot >= this.capacity) continue;
      used[vi]++;

      const { wall, glass, depth } = this.variants[vi];
      // Push the block back by its own depth so the *street face* lands on the
      // clearance line, rather than centring the mass on it and burying the
      // shopfronts inside the corridor.
      const setback = STREET_CLEARANCE + depth * entry.scale;
      this._pos.set(entry.side * setback, 0, entry.z);
      // Blocks are composed shopfront-toward -Z. A quarter turn aims that face
      // at the track: +90 deg on the right, -90 deg on the left. Both sides get
      // the same angle so the terraces line up into continuous frontages.
      this._quat.setFromAxisAngle(Y_AXIS, entry.side > 0 ? Math.PI / 2 : -Math.PI / 2);
      this._scale.setScalar(entry.scale);
      this._matrix.compose(this._pos, this._quat, this._scale);

      wall.setMatrixAt(slot, this._matrix);
      if (glass) glass.setMatrixAt(slot, this._matrix);
      _c.setScalar(entry.tint);
      wall.setColorAt(slot, _c);
      if (glass) glass.setColorAt(slot, _c);
    }

    for (let i = 0; i < this.variants.length; i++) {
      const { wall, glass } = this.variants[i];
      wall.count = used[i];
      wall.instanceMatrix.needsUpdate = true;
      if (wall.instanceColor) wall.instanceColor.needsUpdate = true;
      if (glass) {
        glass.count = used[i];
        glass.instanceMatrix.needsUpdate = true;
        if (glass.instanceColor) glass.instanceColor.needsUpdate = true;
      }
    }
  }

  setVisible(v) {
    this.group.visible = v;
  }

  dispose() {
    for (const { wall, glass } of this.variants) {
      wall.removeFromParent();
      wall.geometry.dispose();
      if (glass) {
        glass.removeFromParent();
        glass.geometry.dispose();
      }
    }
    for (const m of this.materials) m.dispose();
    this.group.removeFromParent();
  }
}

/**
 * How each prop is allowed to sit relative to the running corridor.
 *
 * `straddle` props are arch structures built to span the deck (crane gantries,
 * tunnel bulkheads). They MUST be centred on x = 0 — pushing them sideways
 * drops their near legs straight into the running lanes.
 *
 * `side` props are solid buildings and sit outside the deck. Their lateral
 * offset is derived from the geometry's own bounding box at build time, so
 * widening a prop can never quietly push it into the corridor.
 */
const PROP_LAYOUT = {
  gantry: { mode: 'straddle' },
  bulkhead: { mode: 'straddle' },
  silos: { mode: 'side' },
  shophouse: { mode: 'side' },
  pylon: { mode: 'side' },
  billboard: { mode: 'side' },
};

/**
 * Keep clear of this, so scenery never crowds the lanes or the camera.
 * Generous on purpose: foreground mass that fills the sides of the frame eats
 * screen the track needs and adds nothing readable at speed. The city should
 * frame the corridor, not close it in.
 */
const CORRIDOR_CLEARANCE = TRACK.DECK_HALF_WIDTH + 7.5;

/**
 * SectorProps — midground structures at full scroll speed, one prop type per
 * sector, instanced and recycled past the camera.
 */
export class SectorProps {
  /**
   * @param {THREE.Object3D} parent
   * @param {object[]} sectors
   */
  constructor(parent, sectors) {
    this.parent = parent;
    /** @type {Map<string, {mesh: THREE.InstancedMesh, entries: object[]}>} */
    this.props = new Map();
    /** @type {string|null} */
    this.active = null;

    const texture = corrugated('#3a4a55', 23);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    // Build one mesh per distinct prop type used anywhere in the game.
    const allPropKeys = [...new Set(Object.values(SECTOR_PROP_KEYS).flat())];
    {
      for (const key of allPropKeys) {
        const builder = PROP_BUILDERS[key];
        if (!builder) continue;
        const geo = builder();
        const material = new THREE.MeshStandardMaterial({
          vertexColors: true,
          map: texture,
          roughness: 0.8,
          metalness: 0.25,
        });
        const cap = 6;
        const mesh = new THREE.InstancedMesh(geo, material, cap);
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        mesh.frustumCulled = false;
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        mesh.visible = false;
        parent.add(mesh);

        // Measure the real footprint so placement can guarantee it clears the
        // running corridor, rather than trusting a hand-tuned offset.
        geo.computeBoundingBox();
        const bb = geo.boundingBox;
        const layout = PROP_LAYOUT[key] ?? { mode: 'side' };
        const reach = Math.max(Math.abs(bb.min.x), Math.abs(bb.max.x));
        // Nearest edge of a side-placed prop, measured from the deck centre.
        const lateral = CORRIDOR_CLEARANCE + reach;

        const entries = [];
        for (let i = 0; i < cap; i++) {
          entries.push(this._makeEntry(i, cap, layout, lateral, key));
        }
        this.props.set(key, { mesh, entries, capacity: cap, layout });
      }
    }

    this._matrix = new THREE.Matrix4();
    this._quat = new THREE.Quaternion();
    this._scale = new THREE.Vector3(1, 1, 1);
    this._pos = new THREE.Vector3();
    this._axisY = new THREE.Vector3(0, 1, 0);
  }

  /**
   * Build one placement slot for a prop.
   *
   * @param {number} i slot index
   * @param {number} cap total slots
   * @param {{mode: string}} layout
   * @param {number} lateral absolute x for side-placed props
   */
  _makeEntry(i, cap, layout, lateral, key) {
    const entry = { z: 0, rotY: 0, scale: 1, x: 0 };

    if (layout.mode === 'straddle') {
      // Arch structures sit centred over the deck. A small deterministic
      // offset keeps them from looking mechanically aligned without ever
      // letting a leg reach the lanes.
      entry.x = ((i % 3) - 1) * 0.5;
      entry.rotY = 0;
      entry.scale = 0.9 + (i % 2) * 0.12;
    } else {
      // Alternate sides, and verify the bounding box rather than trusting a
      // constant: the inner edge lands at |x| - reach, which by construction
      // is at least CORRIDOR_CLEARANCE from the deck centre.
      const side = i % 2 === 0 ? -1 : 1;
      entry.x = side * (lateral + (i > 1 ? 6 : 0));
      entry.rotY = Math.random() < 0.5 ? 0 : Math.PI * 2;
      entry.scale = 0.85 + Math.random() * 0.4;
    }

    entry.z = -(i * (420 / cap)) - Math.random() * 30;
    return entry;
  }

  /** @param {string} sectorId */
  setSector(sectorId) {
    if (this.active === sectorId) return;
    if (this.active) {
      const prev = this.props.get(this.active);
      if (prev) prev.mesh.visible = false;
    }
    this.active = sectorId;
    const propKeys = SECTOR_PROP_KEYS[sectorId] ?? fallbackProps(sectorId);
    for (const key of propKeys) {
      const prop = this.props.get(key);
      if (!prop) continue;
      // Restart spacing so props don't all enter at once after a switch.
      const bb = prop.mesh.geometry.boundingBox;
      const reach = Math.max(Math.abs(bb.min.x), Math.abs(bb.max.x));
      const lateral = CORRIDOR_CLEARANCE + reach;
      prop.entries.forEach((e, i) => {
        const fresh = this._makeEntry(i, prop.capacity, prop.layout, lateral, key);
        e.x = fresh.x;
        e.rotY = fresh.rotY;
        e.scale = fresh.scale;
        e.z = -(i * (420 / prop.capacity)) - Math.random() * 40;
      });
      prop.mesh.visible = true;
    }
    this.refresh();
  }

  update(deltaScroll) {
    const propKeys = SECTOR_PROP_KEYS[this.active] ?? fallbackProps(this.active);
    for (const key of propKeys) {
      const prop = this.props.get(key);
      if (!prop || !prop.mesh.visible) continue;
      const recycle = 40;
      const span = 420;
      for (const entry of prop.entries) {
        entry.z += deltaScroll;
        if (entry.z > recycle) entry.z = -span - Math.random() * 40;
      }
    }
    this.refresh();
  }

  refresh() {
    const propKeys = SECTOR_PROP_KEYS[this.active] ?? fallbackProps(this.active);
    for (const key of propKeys) {
      const prop = this.props.get(key);
      if (!prop || !prop.mesh.visible) continue;
      prop.entries.forEach((entry, i) => {
        this._pos.set(entry.x, 0, entry.z);
        this._quat.setFromAxisAngle(this._axisY, entry.rotY);
        this._scale.setScalar(entry.scale);
        this._matrix.compose(this._pos, this._quat, this._scale);
        prop.mesh.setMatrixAt(i, this._matrix);
      });
      prop.mesh.count = prop.entries.length;
      prop.mesh.instanceMatrix.needsUpdate = true;
    }
  }

  setVisible(v) {
    // Only the active sector's props are ever shown; this just toggles the
    // whole layer on or off (used by the menu, which freezes the world).
    for (const [key, prop] of this.props) {
      prop.mesh.visible = v && (SECTOR_PROP_KEYS[this.active] ?? []).includes(key);
    }
  }

  dispose() {
    for (const prop of this.props.values()) {
      prop.mesh.removeFromParent();
      prop.mesh.geometry.dispose();
      prop.mesh.material.dispose();
    }
    this.props.clear();
  }
}

// --- sector -> prop mapping ---
/** Which midground structures belong to which sector. */
const SECTOR_PROP_KEYS = {
  harbour: ['gantry'],
  nightmarket: ['shophouse'],
  spine: ['silos'],
  sluice: ['bulkhead'],
  dawn: ['pylon', 'billboard'],
};

/** Every sector has an explicit prop list; this guards against a typo. */
function fallbackProps(sectorId) {
  return SECTOR_PROP_KEYS[sectorId] ?? ['pylon'];
}
