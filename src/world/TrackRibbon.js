import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TRACK } from '../core/GameConfig.js';
import { concreteDeck, wetStreaks, facade, glowTexture } from '../core/ProceduralTextures.js';

/**
 * TrackRibbon — the running surface, drawn as instanced tiles.
 *
 * The whole track is a handful of InstancedMeshes rather than dozens of
 * Groups, so an 11-tile view costs ~4 draw calls no matter how long the run
 * goes. Geometry is built once per sector at boot and shared by every tile.
 *
 * Tiles scroll toward the camera (+Z) while the player stays near z=0. That
 * keeps world coordinates small forever, so float precision never degrades
 * no matter how many kilometres the player covers.
 */

/** Paint every vertex of a geometry a single colour. */
function tint(geo, color) {
  const count = geo.attributes.position.count;
  const arr = new Float32Array(count * 3);
  const c = new THREE.Color(color);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = c.r;
    arr[i * 3 + 1] = c.g;
    arr[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

/** Scale UVs so a tiling texture keeps a constant world-space density. */
function scaleUv(geo, su, sv) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) {
    uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
  }
  uv.needsUpdate = true;
  return geo;
}

const _m = new THREE.Matrix4();

function addBox(list, w, h, d, x, y, z, color, rotY = 0) {
  const geo = new THREE.BoxGeometry(w, h, d);
  _m.makeRotationY(rotY);
  _m.setPosition(x, y, z);
  geo.applyMatrix4(_m);
  tint(geo, color);
  list.push(geo);
  return geo;
}

function addCyl(list, rt, rb, h, seg, x, y, z, color, rotX = 0, rotZ = 0) {
  const geo = new THREE.CylinderGeometry(rt, rb, h, seg);
  const rot = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rotX, 0, rotZ));
  rot.setPosition(x, y, z);
  geo.applyMatrix4(rot);
  tint(geo, color);
  list.push(geo);
  return geo;
}

/**
 * A flat, horizontal quad lying on the deck. Used for the additive light
 * pools under the kerb strips.
 */
function addGlow(list, w, d, x, y, z) {
  const geo = new THREE.PlaneGeometry(w, d);
  geo.rotateX(-Math.PI / 2);
  geo.translate(x, y, z);
  // No uv scaling needed: the glow sprite is meant to be stretched.
  list.push(geo);
  return geo;
}

/**
 * Build the three geometry batches that make up one tile of a sector.
 * Returns geometries that are shared by every tile of that sector.
 *
 * @param {object} palette sector palette from GameConfig.SECTORS
 * @param {number} seed
 */
export function buildTileGeometries(palette, seed = 1) {
  const L = TRACK.TILE_LENGTH;
  const halfW = TRACK.DECK_HALF_WIDTH;

  // -- 1. Deck surface -----------------------------------------------------
  // Own material: gets the wet-concrete map so the running line reads as
  // genuinely slick rather than flat grey.
  const deck = new THREE.PlaneGeometry(halfW * 2, L, 1, 6);
  deck.rotateX(-Math.PI / 2);
  scaleUv(deck, 2.5, 5);

  // A subtle crown across the width so light rakes across it.
  {
    const pos = deck.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      pos.setZ(i, -Math.pow(x / halfW, 2) * 0.06);
    }
    pos.needsUpdate = true;
    deck.computeVertexNormals();
  }

  // -- 2. Structure: kerbs, guide rails, under-deck beams ------------------
  const structure = [];
  const kerbColor = new THREE.Color(palette.rail).multiplyScalar(0.85);
  const steelColor = palette.rail;
  const darkSteel = new THREE.Color(palette.rail).multiplyScalar(0.55);

  // Side kerbs — the visual boundary of the walkable deck.
  for (const sx of [-1, 1]) {
    addBox(structure, 0.42, 0.38, L, sx * (halfW - 0.1), 0.19, 0, kerbColor);
    // Raised outer lip catches rim light.
    addBox(structure, 0.12, 0.12, L, sx * (halfW - 0.3), 0.42, 0, steelColor);
  }

  // Guide rails on the lane boundaries at ±1.2 and ±3.6.
  for (const x of [-3.6, -1.2, 1.2, 3.6]) {
    addBox(structure, 0.1, 0.09, L, x, 0.045, 0, steelColor);
  }

  // Under-deck beams. These are only visible from the chase camera at speed,
  // but they're what sells the deck as an elevated structure.
  const beamCount = 7;
  for (let i = 0; i < beamCount; i++) {
    const z = -L / 2 + (L / beamCount) * (i + 0.5);
    addBox(structure, halfW * 2 + 0.5, 0.34, 0.34, 0, -0.42, z, darkSteel);
  }
  // Longitudinal stringers.
  for (const sx of [-1, 1]) {
    addBox(structure, 0.26, 0.5, L, sx * (halfW - 0.5), -0.36, 0, darkSteel);
  }
  // Support pylons dropping away below.
  for (let i = 0; i < 2; i++) {
    const z = -L / 2 + (L / 2) * (i + 0.5) - L / 4;
    for (const sx of [-1, 1]) {
      addCyl(structure, 0.3, 0.36, 2.4, 8, sx * (halfW - 0.6), -1.9, z, darkSteel);
    }
  }

  // Drainage grates recessed into the kerb line.
  for (let i = 0; i < 4; i++) {
    const z = -L / 2 + (L / 4) * (i + 0.5);
    for (const sx of [-1, 1]) {
      addBox(structure, 0.3, 0.06, 1.1, sx * (halfW - 0.75), 0.04, z, darkSteel);
    }
  }

  // Lamp posts: an arm reaching in over the deck with a luminaire head.
  // Placed on alternating sides so the road ahead has rhythm.
  for (let i = 0; i < 2; i++) {
    const z = -L / 2 + (L / 2) * i - L / 4 + (seed % 2 ? 2 : -2);
    const sx = i % 2 === 0 ? -1 : 1;
    addCyl(structure, 0.07, 0.1, 3.4, 6, sx * (halfW + 0.35), 1.7, z, steelColor);
    addBox(structure, 1.2, 0.09, 0.09, sx * (halfW - 0.25), 3.35, z, steelColor);
    addBox(structure, 0.62, 0.14, 0.3, sx * (halfW - 0.75), 3.26, z, darkSteel);
  }

  // -- 3. Markings: hazard chevrons along the deck edges -------------------
  const markings = [];
  const hazardColor = new THREE.Color(palette.accent).multiplyScalar(0.9);
  for (const sx of [-1, 1]) {
    // Dashed warning line inset from the kerb.
    for (let i = 0; i < 12; i++) {
      const z = -L / 2 + 1 + i * 2;
      addBox(markings, 0.16, 0.02, 1.1, sx * (halfW - 0.62), 0.012, z, hazardColor);
    }
  }

  // -- 4. Lane edge strips -------------------------------------------------
  // The single most important readability cue in the game: at 30 m/s the three
  // lanes must be legible in peripheral vision. They get their own emissive
  // batch so they clear the bloom threshold and actually glow, instead of
  // reading as thin paint on dark concrete.
  const laneLines = [];
  for (const x of [-3.6, -1.2, 1.2, 3.6]) {
    // Dashed so they read as running lights rather than solid paint, and
    // chunky enough to survive peripheral vision at 30 m/s.
    for (let i = 0; i < 6; i++) {
      const z = -L / 2 + 1.6 + i * 4;
      addBox(laneLines, 0.2, 0.035, 3.1, x, 0.022, z, 0xffffff);
    }
  }
  // Continuous kerb strips: the bright bands that pool light onto the deck.
  for (const sx of [-1, 1]) {
    addBox(laneLines, 0.2, 0.04, L - 1, sx * (halfW - 0.44), 0.018, 0, 0xffffff);
  }

  // Deck light pools: a quad of additive glow lying on the concrete beside
  // each kerb strip, so the strips visibly cast light.
  const glows = [];
  for (const sx of [-1, 1]) {
    for (let i = 0; i < 4; i++) {
      const z = -L / 2 + 3 + i * 6;
      addGlow(glows, 2.6, 6.4, sx * (halfW - 1.1), 0.008, z);
    }
  }
  // A softer wash over the middle of each lane keeps the running surface from
  // reading as a black void between the strips.
  for (const lx of [-2.4, 0, 2.4]) {
    for (let i = 0; i < 3; i++) {
      addGlow(glows, 2.0, 7.0, lx, 0.006, -L / 2 + 4 + i * 8);
    }
  }

  const structureGeo = mergeGeometries(structure, false);
  const markingsGeo = mergeGeometries(markings, false);
  const laneGeo = mergeGeometries(laneLines, false);
  const glowGeo = mergeGeometries(glows, false);
  for (const g of structure) g.dispose();
  for (const g of markings) g.dispose();
  for (const g of laneLines) g.dispose();
  for (const g of glows) g.dispose();

  return {
    deck,
    structure: structureGeo,
    markings: markingsGeo,
    lane: laneGeo,
    glow: glowGeo,
  };
}

/** Materials for the three tile batches, tinted per sector. */
export function buildTileMaterials(palette, seed) {
  const deckTex = concreteDeck(
    `#${palette.ground.toString(16).padStart(6, '0')}`,
    seed
  );
  deckTex.wrapS = deckTex.wrapT = THREE.RepeatWrapping;

  const wetTex = wetStreaks(
    `#${palette.ground.toString(16).padStart(6, '0')}`,
    seed + 3
  );

  const deckMaterial = new THREE.MeshStandardMaterial({
    map: deckTex,
    // Second map multiplied in via aoMap-style trick isn't available on
    // standard material, so wetness is folded into roughness + metalness.
    roughnessMap: null,
    roughness: 0.52,
    metalness: 0.24,
    envMapIntensity: 1.4,
  });
  deckMaterial.userData.wetTexture = wetTex;

  const structureMaterial = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.58,
    metalness: 0.68,
    envMapIntensity: 1.1,
  });

  const markingsMaterial = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.45,
    metalness: 0.1,
    emissive: new THREE.Color(palette.accent),
    emissiveIntensity: 0.5,
  });

  // Lane strips. Pure emissive, tinted to the sector accent.
  //
  // Note: do NOT combine a white emissive with vertexColors here. Vertex
  // colours only modulate the diffuse term — the emissive would stay pure
  // white, blowing the strips out and washing the orange out of them.
  const laneMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000,
    emissive: new THREE.Color(palette.accent),
    // ~1.0 keeps them clearly above the bloom threshold without clipping to
    // white. Higher values smear into thick white bars under bloom.
    emissiveIntensity: 1.05,
    roughness: 1,
    metalness: 0,
  });

  // Soft pools of accent light on the deck either side of each kerb strip.
  // This is what sells the strips as *emitting* rather than painted: the
  // concrete visibly catches their glow.
  const glowMaterial = new THREE.MeshBasicMaterial({
    map: glowTexture(),
    color: new THREE.Color(palette.accent),
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });

  return {
    deck: deckMaterial,
    structure: structureMaterial,
    markings: markingsMaterial,
    lane: laneMaterial,
    glow: glowMaterial,
  };
}

/**
 * A run of tiles for a single sector, drawn with three InstancedMeshes.
 */
class SectorRibbon {
  /**
   * @param {THREE.Object3D} parent
   * @param {object} sector
   * @param {number} seed
   * @param {number} capacity max simultaneous tiles
   */
  constructor(parent, sector, seed, capacity) {
    this.sector = sector;
    this.capacity = capacity;
    const geos = buildTileGeometries(sector.palette, seed);
    const mats = buildTileMaterials(sector.palette, seed);

    this.meshes = [];
    const batches = [
      { geo: geos.deck, mat: mats.deck, shadow: 'receive' },
      { geo: geos.structure, mat: mats.structure, shadow: 'both' },
      { geo: geos.markings, mat: mats.markings, shadow: 'none' },
      { geo: geos.lane, mat: mats.lane, shadow: 'none' },
      { geo: geos.glow, mat: mats.glow, shadow: 'none', additive: true },
    ];

    for (const batch of batches) {
      const mesh = new THREE.InstancedMesh(batch.geo, batch.mat, capacity);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.castShadow = batch.shadow === 'both';
      mesh.receiveShadow = batch.shadow !== 'none';
      if (batch.additive) {
        // Light pools must draw after the deck and be depth-tested against
        // it, or they'd bleed through obstacles standing on the surface.
        mesh.renderOrder = 1;
      }
      parent.add(mesh);
      this.meshes.push(mesh);
    }

    /** @type {number[]} z offset of each live tile */
    this.tileZ = [];
    for (let i = 0; i < capacity; i++) {
      this.tileZ.push(-(i + 0.5) * TRACK.TILE_LENGTH);
    }

    this._matrix = new THREE.Matrix4();
    this.refresh();
  }

  /**
   * Scroll tiles forward and recycle any that pass the camera.
   * @param {number} scroll distance travelled this frame
   */
  advance(scroll) {
    const L = TRACK.TILE_LENGTH;
    const recycleBehind = TRACK.TILES_BEHIND * L;
    // Track the furthest-back tile index so recycled tiles always go furthest
    // ahead, keeping the run contiguous with no gap the player can see.
    let furthestIndex = 0;
    let minZ = Infinity;

    for (let i = 0; i < this.tileZ.length; i++) {
      this.tileZ[i] += scroll;
      if (this.tileZ[i] < minZ) {
        minZ = this.tileZ[i];
        furthestIndex = i;
      }
    }
    for (let i = 0; i < this.tileZ.length; i++) {
      if (this.tileZ[i] > recycleBehind) {
        this.tileZ[i] = minZ - L;
        minZ = this.tileZ[i];
      }
    }

    this.refresh();
  }

  /** Push the tile positions into the instance matrices. */
  refresh() {
    const count = this.tileZ.length;
    this._matrix.makeTranslation(0, 0, 0);
    for (const mesh of this.meshes) {
      for (let i = 0; i < count; i++) {
        this._matrix.elements[14] = this.tileZ[i];
        mesh.setMatrixAt(i, this._matrix);
      }
      mesh.count = count;
      mesh.instanceMatrix.needsUpdate = true;
    }
  }

  dispose() {
    for (const mesh of this.meshes) {
      mesh.removeFromParent();
      mesh.geometry.dispose();
      mesh.material.dispose();
    }
    this.meshes.length = 0;
  }
}

/**
 * World — owns the track ribbons and the environment lighting/fog, and
 * cross-fades between sectors.
 */
export class TrackRibbon {
  /**
   * @param {THREE.Scene} scene
   * @param {object[]} sectors
   */
  constructor(scene, sectors) {
    this.scene = scene;
    this.sectors = sectors;
    this.capacity = TRACK.TILES_AHEAD + TRACK.TILES_BEHIND;

    /** @type {Map<string, SectorRibbon>} */
    this.ribbons = new Map();
    sectors.forEach((sector, i) => {
      const ribbon = new SectorRibbon(scene, sector, i * 13 + 1, this.capacity);
      ribbon.group = ribbon.meshes;
      this.ribbons.set(sector.id, ribbon);
      ribbon.meshes.forEach((m) => (m.visible = false));
    });

    /** @type {string|null} */
    this.activeSector = null;
    this.activeRibbon = null;
    this.totalScrolled = 0;
  }

  /**
   * Activate a sector. Only one ribbon renders at a time, so a mid-run
   * sector change costs no extra draw calls.
   * @param {string} sectorId
   */
  setSector(sectorId) {
    if (this.activeSector === sectorId) return;
    const ribbon = this.ribbons.get(sectorId);
    if (!ribbon) return;

    if (this.activeRibbon) {
      for (const m of this.activeRibbon.meshes) m.visible = false;
    }
    // Snap the incoming ribbon so it starts exactly where the player is.
    ribbon.tileZ.length = 0;
    for (let i = 0; i < this.capacity; i++) {
      ribbon.tileZ.push(-(i + 0.5) * TRACK.TILE_LENGTH);
    }
    ribbon.refresh();
    for (const m of ribbon.meshes) m.visible = true;

    this.activeRibbon = ribbon;
    this.activeSector = sectorId;
  }

  /** @param {number} scroll metres travelled this frame */
  update(scroll) {
    this.totalScrolled += scroll;
    this.activeRibbon?.advance(scroll);
  }

  dispose() {
    for (const ribbon of this.ribbons.values()) ribbon.dispose();
    this.ribbons.clear();
  }
}
