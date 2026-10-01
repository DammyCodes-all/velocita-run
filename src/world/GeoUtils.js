import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * GeoUtils — draw-call reduction.
 *
 * A naive obstacle built from 10 boxes is 10 draw calls, and with ~25
 * obstacles plus scenery on screen that easily reaches 400+ calls, which
 * stalls integrated GPUs. These helpers bake static sub-meshes down to a
 * single mesh per material, typically cutting an obstacle from 10 calls to 3.
 *
 * The rule: only merge meshes that never move relative to each other.
 * Anything animated (blinking beacons, water jets) is excluded and stays
 * its own object.
 */

const _m4 = new THREE.Matrix4();
const _inv = new THREE.Matrix4();

/**
 * Walk a group and merge all static meshes that share a material.
 *
 * @param {THREE.Group} group
 * @param {object} [opts]
 * @param {(child: THREE.Mesh) => boolean} [opts.isDynamic] skip these
 * @param {boolean} [opts.keepShadowFlags]
 * @returns {THREE.Group} the same group, mutated
 */
export function mergeByMaterial(group, opts = {}) {
  const isDynamic = opts.isDynamic ?? (() => false);

  group.updateMatrixWorld(true);
  _inv.copy(group.matrixWorld).invert();

  /** @type {Map<string, {material: THREE.Material, geos: THREE.BufferGeometry[]}>} */
  const buckets = new Map();
  const toRemove = [];

  group.traverse((child) => {
    if (!child.isMesh) return;
    if (isDynamic(child)) return;
    // Meshes with children or non-standard attributes can't merge cleanly.
    if (child.children.length > 0) return;

    const geo = child.geometry.clone();
    // Bring the geometry into the group's local space.
    _m4.multiplyMatrices(_inv, child.matrixWorld);
    geo.applyMatrix4(_m4);
    // Merging requires a consistent attribute set across the batch.
    for (const name of Object.keys(geo.attributes)) {
      if (name !== 'position' && name !== 'normal' && name !== 'uv') {
        geo.deleteAttribute(name);
      }
    }
    if (!geo.attributes.uv) {
      const count = geo.attributes.position.count;
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(count * 2), 2));
    }
    if (geo.index === null) {
      // Index everything so mixed indexed/non-indexed sources still merge.
      const count = geo.attributes.position.count;
      const indices = new Uint32Array(count);
      for (let i = 0; i < count; i++) indices[i] = i;
      geo.setIndex(new THREE.BufferAttribute(indices, 1));
    }
    geo.clearGroups();

    const key = materialKey(child.material);
    if (!buckets.has(key)) buckets.set(key, { material: child.material, geos: [] });
    buckets.get(key).geos.push(geo);
    toRemove.push(child);
  });

  for (const child of toRemove) {
    if (child.parent) child.parent.remove(child);
  }

  for (const { material, geos } of buckets.values()) {
    if (geos.length === 0) continue;
    let merged = null;
    try {
      merged = geos.length === 1 ? geos[0] : mergeGeometries(geos, false);
    } catch (err) {
      console.warn('[GeoUtils] merge failed, falling back to separate meshes.', err);
      merged = null;
    }
    if (merged) {
      if (geos.length > 1) for (const g of geos) g.dispose();
      const mesh = new THREE.Mesh(merged, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
    } else {
      // Merge failed: re-add originals rather than losing the geometry.
      for (const g of geos) group.add(new THREE.Mesh(g, material));
    }
  }

  return group;
}

/** Stable key for one or many materials. */
function materialKey(material) {
  if (Array.isArray(material)) return material.map((m) => m.uuid).join('|');
  return material.uuid;
}

/**
 * Merge an array of already-positioned meshes that share a single material
 * into one mesh. Used to bake entire scenery rows into a single draw call.
 *
 * @param {THREE.Mesh[]} meshes
 * @param {THREE.Material} material
 * @returns {THREE.Mesh|null}
 */
export function mergeMeshes(meshes, material) {
  const geos = [];
  for (const mesh of meshes) {
    mesh.updateMatrixWorld(true);
    const geo = mesh.geometry.clone();
    geo.applyMatrix4(mesh.matrixWorld);
    for (const name of Object.keys(geo.attributes)) {
      if (name !== 'position' && name !== 'normal' && name !== 'uv') geo.deleteAttribute(name);
    }
    if (!geo.attributes.uv) {
      const count = geo.attributes.position.count;
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(count * 2), 2));
    }
    if (geo.index === null) {
      const count = geo.attributes.position.count;
      const indices = new Uint32Array(count);
      for (let i = 0; i < count; i++) indices[i] = i;
      geo.setIndex(new THREE.BufferAttribute(indices, 1));
    }
    geo.clearGroups();
    geos.push(geo);
  }
  if (geos.length === 0) return null;
  const merged = geos.length === 1 ? geos[0] : mergeGeometries(geos, false);
  if (geos.length > 1) for (const g of geos) g.dispose();
  if (!merged) return null;
  const mesh = new THREE.Mesh(merged, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/** Recursively free geometry owned by a subtree. */
export function disposeTree(root) {
  root.traverse((child) => {
    if (child.isMesh && child.geometry) child.geometry.dispose();
  });
}
