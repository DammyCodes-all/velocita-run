/**
 * Pool — a generic object pool.
 *
 * Endless runners create and destroy the *same* handful of meshes thousands
 * of times per run. Allocating a new geometry/material each time causes GC
 * hitches, so every spawnable object is constructed once and recycled.
 *
 * The pool hands back either a bare object or, via `attach`, the object's
 * own `THREE.Object3D` when it happens to be a 3D entity.
 */
export class Pool {
  /**
   * @param {() => any} factory creates a fresh instance
   * @param {(item: any) => void} [reset] called before reusing an item
   * @param {number} [prewarm] how many to construct up front
   * @param {number} [max] hard cap on live items; extra releases are dropped
   */
  constructor(factory, reset = null, prewarm = 0, max = Infinity) {
    this.factory = factory;
    this.reset = reset;
    this.max = max;
    /** @type {any[]} available items */
    this.available = [];
    /** @type {Set<any>} currently checked-out items */
    this.active = new Set();
    this.created = 0;
    for (let i = 0; i < prewarm; i++) this.available.push(this._make());
  }

  _make() {
    this.created++;
    return this.factory();
  }

  get() {
    const item = this.available.pop() ?? this._make();
    this.active.add(item);
    if (this.reset) this.reset(item);
    return item;
  }

  release(item) {
    if (!this.active.delete(item)) return; // double-release guard
    if (this.active.size < 0) return;
    if (this.active.size + this.available.size >= this.max) {
      // Over cap: let this instance be garbage collected rather than grow.
      return;
    }
    this.available.push(item);
  }

  releaseAll() {
    for (const item of this.active) {
      if (this.reset) this.reset(item);
      this.available.push(item);
    }
    this.active.clear();
  }

  get activeCount() {
    return this.active.size;
  }

  get availableCount() {
    return this.available.length;
  }
}

/**
 * A pool specialised for THREE.Object3D children.
 *
 * On release it removes the object from its parent (which is what actually
 * stops it rendering) rather than setting `visible = false`, because a hidden
 * object still costs traversal.
 */
export class Object3DPool extends Pool {
  /**
   * @param {() => import('three').Object3D} factory
   * @param {object} [opts]
   */
  constructor(factory, opts = {}) {
    const reset = (obj) => {
      obj.visible = true;
      obj.position.set(0, 0, 0);
      obj.rotation.set(0, 0, 0);
      obj.scale.set(1, 1, 1);
      obj.userData.pooled = true;
      if (obj.parent) obj.parent.remove(obj);
    };
    super(factory, reset, opts.prewarm ?? 0, opts.max ?? Infinity);
  }

  /** Acquire and attach to a parent in one call. */
  acquireInto(parent) {
    const obj = this.get();
    parent.add(obj);
    return obj;
  }

  release(obj) {
    if (obj.parent) obj.parent.remove(obj);
    super.release(obj);
  }
}

/**
 * Tracks live Object3Ds against a fixed budget and releases the ones that
 * fall behind the camera. Used for props (lamps, signs, debris) that are
 * decorative and can be dropped without gameplay consequences.
 */
export class BudgetTracker {
  constructor(budget) {
    this.budget = budget;
    /** @type {any[]} */
    this.items = [];
  }

  add(item) {
    this.items.push(item);
    return item;
  }

  /**
   * Release items whose position is further than `distance` behind the camera.
   * @param {(item: any) => boolean} shouldRelease
   */
  cull(shouldRelease) {
    let write = 0;
    for (let read = 0; read < this.items.length; read++) {
      const item = this.items[read];
      if (shouldRelease(item)) continue;
      this.items[write++] = item;
    }
    this.items.length = write;
  }

  releaseAll() {
    this.items.length = 0;
  }
}
