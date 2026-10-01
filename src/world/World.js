import * as THREE from 'three';
import { ObstacleFactory } from './ObstacleFactory.js';
import { CoinField, PickupFactory } from './PickupFactory.js';
import { TrackRibbon } from './TrackRibbon.js';
import { Skyline, SectorProps, StreetFront } from './Scenery.js';
import { Atmosphere } from './Atmosphere.js';
import { LevelGenerator } from './LevelGenerator.js';
import { SECTORS, TRACK, POWERUPS } from '../core/GameConfig.js';
import { Events } from '../core/EventBus.js';

/**
 * World — the single owner of everything in the 3D scene.
 *
 * Coordinate convention (this matters for everything else):
 *   • The player stays at z ≈ 0.
 *   • Forward is -Z. The world scrolls toward +Z, toward the camera.
 *   • Lane centres are x = -2.4, 0, +2.4.
 *
 * Scrolling the world instead of moving the player keeps coordinates small
 * forever, so a 20 km run has the same float precision as the first metre —
 * and recycling becomes trivial.
 */
export class World {
  /**
   * @param {object} deps
   * @param {THREE.Scene} deps.scene
   * @param {THREE.WebGLRenderer} deps.renderer
   * @param {THREE.Camera} deps.camera
   * @param {import('../core/EventBus.js').EventBus} deps.bus
   * @param {object} deps.quality
   */
  constructor({ scene, renderer, camera, bus, quality }) {
    this.scene = scene;
    this.renderer = renderer;
    this.camera = camera;
    this.bus = bus;
    this.quality = quality;

    // Dedicated containers keep the hierarchy readable and make per-layer
    // visibility trivial.
    this.root = new THREE.Group();
    this.obstacleRoot = new THREE.Group();
    this.pickupRoot = new THREE.Group();
    this.effectRoot = new THREE.Group();
    scene.add(this.root);
    this.root.add(this.obstacleRoot, this.pickupRoot, this.effectRoot);

    this.atmosphere = new Atmosphere(scene, renderer);
    this.atmosphere.setShadowQuality(quality.shadows, quality.shadowMapSize);

    this.track = new TrackRibbon(scene, SECTORS);
    // Fewer, more spread-out towers: enough to read as a city, few enough that
    // they frame the corridor instead of walling it in.
    //
    // The skyline sits at 58-145m, which is 70-93% fogged in every sector, so
    // it contributes silhouette only. Five distinct towers is plenty; each one
    // costs a merged geometry plus two instanced draws, and beyond that the
    // variety is invisible anyway. The close-range `street` layer below is
    // where composition detail actually pays off.
    this.skyline = new Skyline(
      scene,
      Math.round(30 * quality.propDensity + 8),
      quality.buildingLayers + 2
    );
    // The close-range layer. Everything readable about the kit — window frames,
    // sills, awnings, shopfront doors — only resolves here, inside the fog.
    this.street = new StreetFront(scene, Math.max(3, Math.round(6 * quality.propDensity)), 5);
    this.props = new SectorProps(scene, SECTORS);

    this.obstacles = new ObstacleFactory(this.obstacleRoot);
    this.coins = new CoinField(this.pickupRoot, 200);
    this.pickups = new PickupFactory(this.pickupRoot);

    this.generator = new LevelGenerator({
      obstacles: this.obstacles,
      coins: this.coins,
      pickups: this.pickups,
      bus,
    });

    /** @type {object} */
    this.sector = SECTORS[0];
    this.distanceSinceSector = 0;
    this.totalDistance = 0;
    this.paused = false;

    this.setSector(SECTORS[0], true);
  }

  /**
   * Switch sector. Atmosphere values are targets, so the transition eases
   * rather than cutting — this is the "seamless" in seamless section change.
   * @param {object} sector
   * @param {boolean} [immediate]
   */
  setSector(sector, immediate = false) {
    if (!sector) return;
    this.sector = sector;
    this.track.setSector(sector.id);
    this.props.setSector(sector.id);
    this.atmosphere.applySector(sector, sector.id === 'sluice' ? 1 : sector.id === 'nightmarket' ? 0.28 : 0.1);
    if (immediate) this.atmosphere.current.exposure = this.atmosphere.targets.exposure;
    this.bus.emit(Events.SECTION_CHANGE, { sector });
  }

  /** Called once per run start. */
  reset(sectorIndex = 0) {
    this.generator.reset();
    this.generator.sectorIndex = sectorIndex;
    this.totalDistance = 0;
    this.distanceSinceSector = 0;
    this.setSector(SECTORS[sectorIndex], true);
  }

  /**
   * Advance the world one step.
   * @param {number} dt
   * @param {number} speed metres/second
   * @param {THREE.Camera} camera
   */
  update(dt, speed, camera) {
    if (this.paused) return;
    const scroll = speed * dt;
    this.totalDistance += scroll;

    // Keep the run anchored at z = 0 and record the lane offset so the
    // atmosphere's hero rim light can follow the runner.
    this.playerX = this.playerX ?? 0;

    // Scroll the visible layers.
    this.track.update(scroll);
    this.skyline.update(scroll);
    this.street.update(scroll);
    this.props.update(scroll);

    // Generate / recycle content.
    this.generator.update(scroll, speed, this.sector);
    this.generator.distance = this.totalDistance;

    // Roll to a new sector when the interval elapses.
    this.distanceSinceSector += scroll;
    if (this.distanceSinceSector >= this.generator.sectorInterval) {
      this.distanceSinceSector = 0;
      this.setSector(this.generator.rollSector(SECTORS));
    }

    // Animate collectibles and hazards.
    const magnetActive = this.magnetActive;
    this.coins.update(
      dt,
      performance.now() * 0.001,
      camera,
      magnetActive ? this.magnetOrigin : null,
      this.magnetRadius ?? 6,
      scroll
    );
    this.pickups.update(dt, camera);
    this._animateObstacles(dt);

    this.atmosphere.update(dt, performance.now() * 0.001, camera, this.playerX ?? 0);
  }

  /** Blink beacons and pulse water jets so hazards read as active. */
  _animateObstacles(dt) {
    const t = performance.now() * 0.001;
    for (const record of this.generator.live) {
      const obj = record.obj;
      if (obj.userData.hasJets) continue;
      for (const child of obj.children) {
        if (!child.userData.dynamic) continue;
        const material = child.material;
        if (material?.emissiveIntensity === undefined) continue;

        if (child.userData.isJet) {
          const s = 0.8 + Math.sin(t * 9 + child.position.x * 3) * 0.22;
          child.scale.y = s;
          child.scale.x = child.scale.z = 0.9 + s * 0.15;
          continue;
        }

        // Warning bands hold a steady emissive — they're the readability
        // signal, so they must not flicker. Beacons pulse around their own
        // recorded resting value.
        const base = child.userData.baseEmissive;
        if (base !== undefined) {
          material.emissiveIntensity = base;
        } else if (child.userData.pulse !== false) {
          material.emissiveIntensity = 1.6 + Math.sin(t * 4 + record.bob) * 0.8;
        }
      }
    }
  }

  /** Set by the power-up manager so the coin field knows where to pull to. */
  setMagnet(active, origin, radius) {
    this.magnetActive = active;
    this.magnetOrigin = origin;
    this.magnetRadius = radius;
  }

  /** Freeze/unfreeze the world (menus, pause). */
  setPaused(paused) {
    this.paused = paused;
  }

  /**
   * All obstacles near a z range, for collision queries.
   * @param {number} zNear
   * @param {number} zFar
   * @returns {object[]}
   */
  obstaclesNear(zNear, zFar) {
    const out = [];
    for (const record of this.generator.live) {
      if (!record.collide) continue;
      if (record.z > zNear && record.z < zFar) out.push(record);
    }
    return out;
  }

  dispose() {
    this.generator.clear();
    this.track.dispose();
    this.skyline.dispose();
    this.street.dispose();
    this.props.dispose();
    this.atmosphere.dispose();
    this.coins.dispose();
    this.root.removeFromParent();
  }
}

export { SECTORS, TRACK, POWERUPS };
