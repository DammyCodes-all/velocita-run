import * as THREE from 'three';
import { PlayerRig, characterById } from './PlayerRig.js';
import { TRACK, PLAYER, SPEED } from '../core/GameConfig.js';
import { Events } from '../core/EventBus.js';
import { Settings } from '../core/Storage.js';
import { clamp, clamp01, lerp, damp, easeOutCubic } from '../util/MathUtils.js';

/**
 * Player — movement, collision and power-up state.
 *
 * Two design decisions carry most of the "feel":
 *
 *  1. Lane changes are *rate-limited tweens*, not teleports, and the model
 *     banks into them. Tweens (rather than spring physics) are deliberate:
 *     they are perfectly repeatable and can never be interrupted into a state
 *     the player can't escape.
 *
 *  2. Collision uses a forgiving box — 84% of the visual width and with a
 *     near-miss grace band. Combined with coyote time and input buffering,
 *     a run rarely ends on something the player couldn't reasonably see.
 */
export class Player {
  /**
   * @param {object} deps
   * @param {THREE.Scene} deps.scene
   * @param {import('../core/EventBus.js').EventBus} deps.bus
   * @param {import('../world/World.js').World} deps.world
   * @param {import('../core/Input.js').InputManager} deps.input
   */
  constructor({ scene, bus, world, input }) {
    this.scene = scene;
    this.bus = bus;
    this.world = world;
    this.input = input;

    this.root = new THREE.Group();
    scene.add(this.root);

    this.rig = new PlayerRig(characterById('vela'));
    this.root.add(this.rig.root);

    // -- lane state ------------------------------------------------------
    this.lane = 1;
    this.targetLane = 1;
    this.laneX = 0;
    this.laneT = 1; // 0..1 progress of the current lane change
    this.laneFromX = 0;
    this.laneToX = 0;
    this.lateralVelocity = 0;

    // -- vertical state --------------------------------------------------
    this.y = 0;
    this.vy = 0;
    this.grounded = true;
    this.airborneTime = 0;
    this.lastGroundedTime = 0;

    // -- slide state -----------------------------------------------------
    this.sliding = false;
    this.slideTime = 0;
    this.slideBlend = 0;

    // -- run state -------------------------------------------------------
    this.speed = SPEED.START;
    this.baseSpeed = SPEED.START;
    this.alive = true;
    this.invulnerable = 0;
    this.boostActive = false;

    // -- collection ------------------------------------------------------
    this.coinCombo = 0;
    this.nearMissCooldown = 0;

    /** Visual FX hooks, assigned by the game shell. */
    this.onCoin = null;
    this.onPowerup = null;

    this._box = new THREE.Vector3();
    this._footstepTimer = 0;
    this.lastFoot = 0;
  }

  setCharacter(id) {
    const def = characterById(id);
    if (this.rig.character.id === def.id) return;
    this.root.remove(this.rig.root);
    this.rig.dispose();
    this.rig = new PlayerRig(def);
    this.root.add(this.rig.root);
    this.applyPowerupVisuals();
  }

  /** Full reset for a new run. */
  reset(speed = SPEED.START) {
    this.lane = 1;
    this.targetLane = 1;
    this.laneX = 0;
    this.laneT = 1;
    this.laneFromX = 0;
    this.laneToX = 0;
    this.lateralVelocity = 0;
    this.y = 0;
    this.vy = 0;
    this.grounded = true;
    this.airborneTime = 0;
    this.lastGroundedTime = 0;
    this.sliding = false;
    this.slideTime = 0;
    this.slideBlend = 0;
    this.speed = speed;
    this.baseSpeed = speed;
    this.alive = true;
    this.invulnerable = PLAYER.SPAWN_INVULNERABILITY;
    this.boostActive = false;
    this.coinCombo = 0;
    this.nearMissCooldown = 0;
    this.root.visible = true;
    this.root.position.set(0, 0, 0);
    this.root.rotation.set(0, 0, 0);
    // Undo any crash animation: the fallen character has to stand back up.
    this.rig.resetPose();
    this.applyPowerupVisuals();
  }

  /** Keep the character visible but frozen (menu / pause). */
  setIdle(idle) {
    this.idle = idle;
    this.speed = idle ? 0 : this.speed;
  }

  // -------------------------------------------------------------------------
  // Intent
  // -------------------------------------------------------------------------

  /**
   * Translate input into player actions.
   *
   * Keyboard is consumed first so it always wins the frame. Mouse steering is
   * polled afterwards and only acts on the single frame the pointer crosses a
   * lane boundary, so the two input methods can be used interchangeably
   * mid-run without fighting each other.
   *
   * @param {boolean} enabled false when the game isn't accepting gameplay input
   */
  handleInput(enabled) {
    if (!enabled || !this.alive) return;

    const inverted = Settings.get('invertLane');
    if (this.input.consume('left')) this.moveLane(inverted ? 1 : -1);
    if (this.input.consume('right')) this.moveLane(inverted ? -1 : 1);
    if (this.input.consume('jump')) this.jump();
    if (this.input.consume('slide')) this.slide();

    // Mouse steering. `updateSteering` always yields a discrete lane index
    // (0, 1 or 2); `steerChanged` is only true on boundary crossings.
    const wanted = this.input.updateSteering(TRACK.LANE_COUNT);
    if (this.input.steerChanged && wanted !== this.targetLane) {
      this.moveLane(wanted - this.targetLane);
    }
  }

  moveLane(dir) {
    const next = clamp(this.targetLane + dir, 0, TRACK.LANE_COUNT - 1);
    if (next === this.targetLane) return;
    this.targetLane = next;
    this.laneFromX = this.laneX;
    this.laneToX = (next - 1) * TRACK.LANE_WIDTH;
    this.laneT = 0;
    this.bus.emit(Events.LANE_CHANGE, { lane: next, dir });
  }

  jump() {
    // Coyote time lets a jump still fire just after walking off an edge.
    const canCoyote = this.grounded || this.lastGroundedTime < PLAYER.COYOTE_TIME;
    if (!canCoyote) return;
    this.vy = PLAYER.JUMP_VELOCITY;
    this.grounded = false;
    this.airborneTime = 0;
    // Jump cancels a slide — the player asked to stand up, so let them.
    if (this.sliding) this.endSlide();
    this.bus.emit(Events.JUMP, {});
  }

  slide() {
    if (this.sliding) {
      // Pressing again mid-slide extends it slightly. Forgiving by design.
      if (this.slideTime < PLAYER.SLIDE_DURATION) this.slideTime = PLAYER.SLIDE_DURATION * 0.75;
      return;
    }
    if (!this.grounded) {
      // Air-slide: fast-fall into a slide. Keeps the control feeling total.
      this.vy = Math.min(this.vy, -6);
      this.pendingSlide = true;
      return;
    }
    this.startSlide();
  }

  startSlide() {
    this.sliding = true;
    this.slideTime = PLAYER.SLIDE_DURATION;
    this.pendingSlide = false;
    this.bus.emit(Events.SLIDE_START, {});
  }

  endSlide() {
    if (!this.sliding) return;
    this.sliding = false;
    this.slideTime = 0;
    this.bus.emit(Events.SLIDE_END, {});
  }

  // -------------------------------------------------------------------------
  // Simulation
  // -------------------------------------------------------------------------

  /**
   * @param {number} dt
   * @param {number} targetSpeed metres/second for this run
   */
  update(dt, targetSpeed) {
    if (this.invulnerable > 0) this.invulnerable -= dt;
    if (this.nearMissCooldown > 0) this.nearMissCooldown -= dt;

    // -- speed ----------------------------------------------------------
    this.baseSpeed = damp(this.baseSpeed, targetSpeed, 0.4, dt);
    this.speed = this.baseSpeed * (this.boostActive ? SPEED.BOOST_MULTIPLIER : 1);

    // -- lane tween ------------------------------------------------------
    if (this.laneT < 1) {
      const prevX = this.laneX;
      this.laneT = Math.min(1, this.laneT + dt / PLAYER.LANE_CHANGE_TIME);
      // easeOutCubic: leaves fast, arrives slow. Reads as weight transfer.
      this.laneX = lerp(this.laneFromX, this.laneToX, easeOutCubic(this.laneT));
      if (this.laneT >= 1) this.lane = this.targetLane;
      // Lateral velocity drives the bank in the rig.
      this.lateralVelocity = dt > 0 ? (this.laneX - prevX) / dt : 0;
    } else {
      this.lateralVelocity = damp(this.lateralVelocity, 0, 0.001, dt);
    }

    // -- vertical --------------------------------------------------------
    if (!this.grounded) {
      this.vy += PLAYER.GRAVITY * dt;
      this.y += this.vy * dt;
      this.airborneTime += dt;
      if (this.y <= 0) {
        this.y = 0;
        this.vy = 0;
        this.grounded = true;
        this.lastGroundedTime = 0;
        this.bus.emit(Events.LAND, { hard: this.airborneTime > 0.4 });
        if (this.pendingSlide) {
          this.startSlide();
        }
      }
    } else {
      this.lastGroundedTime += dt;
    }

    // -- slide -----------------------------------------------------------
    if (this.sliding) {
      this.slideTime -= dt;
      if (this.slideTime <= 0) this.endSlide();
    }
    this.slideBlend = damp(this.slideBlend, this.sliding ? 1 : 0, 0.0002, dt);

    // -- transform -------------------------------------------------------
    this.root.position.set(this.laneX, this.y, 0);

    // -- rig pose --------------------------------------------------------
    this.rig.update(dt, {
      speed: this.speed,
      airborne: this.grounded ? 0 : clamp01(Math.abs(this.vy) / 9 + 0.35),
      sliding: this.slideBlend,
      laneChange: clamp(this.lateralVelocity * 0.42, -1.4, 1.4),
      boost: this.boostActive ? 1 : 0,
    });
    this.rig.updateContactShadow(this.y, this.y);

    // -- footstep events (for audio) -------------------------------------
    if (this.grounded && !this.sliding && this.speed > 1) {
      const foot = Math.sin(this.rig.phase) > 0 ? 1 : 0;
      if (foot !== this.lastFoot) {
        this.lastFoot = foot;
        this.bus.emit('player:footstep', { speed: this.speed });
      }
    }
  }

  /** Current collision box in world space, shrunk for forgiveness. */
  get collider() {
    const height = this.slideBlend > 0.5 ? PLAYER.SLIDE_HEIGHT : PLAYER.STAND_HEIGHT;
    const half = PLAYER.HITBOX_HALF_WIDTH * lerp(1, 1.12, this.slideBlend);
    this._box.set(this.laneX, this.y + height / 2, 0);
    return {
      x: this.laneX,
      y: this.y,
      height,
      halfWidth: half,
      halfDepth: PLAYER.HITBOX_DEPTH,
      sliding: this.slideBlend > 0.5,
      airborne: !this.grounded,
    };
  }

  /**
   * Test against nearby obstacles. Returns the record that was hit, or null.
   *
   * The two "action" obstacle types are resolved by comparing the player's
   * actual vertical extent against the obstacle's opening, rather than by
   * checking for a specific state. That means jumping over a rail and
   * sliding under a gantry fall out of the same maths, and an unprompted
   * state (standing under a low gantry) correctly registers as a hit.
   */
  checkCollisions(records) {
    if (this.invulnerable > 0) return null;
    const c = this.collider;
    const playerTop = c.y + c.height;
    const playerBottom = c.y;

    for (const record of records) {
      const box = record.collide;
      if (!box) continue;

      const laneX = (record.lane - 1) * TRACK.LANE_WIDTH;
      const halfW = box.halfW * 0.86; // forgiving on the lane axis
      const halfD = box.halfD;

      // Depth overlap along the running axis.
      if (Math.abs(record.z - 0) >= halfD + c.halfDepth) continue;

      // Lateral overlap.
      if (Math.abs(laneX - c.x) >= halfW + c.halfWidth) continue;

      const userData = record.obj.userData;

      // --- overhead: the opening is `clearance` metres above the deck -----
      if (userData.requireSlide) {
        const underside = userData.clearance ?? 1.0;
        if (playerBottom >= underside - 0.04) {
          // Feet already above the opening — clear of it.
          continue;
        }
        if (playerTop > underside) return record; // too tall: must slide
        continue;
      }

      // --- ground obstacle: cleared by getting your feet above it ---------
      if (userData.requireJump) {
        if (playerBottom >= box.top - 0.04) continue; // safely over the top
        return record;
      }

      // --- solid blocker: only the feet matter, since you can't go over ---
      if (playerBottom < box.top - 0.04 && playerTop > 0.04) return record;
    }

    return null;
  }

  /**
   * Award a near miss for passing an obstacle closely.
   * Called once per obstacle as it passes the player.
   */
  checkNearMiss(record) {
    if (this.nearMissCooldown > 0) return false;
    if (!record.collide || record.passed) return false;
    if (record.z < -1.5) return false; // must actually be beside the player

    const laneX = (record.lane - 1) * TRACK.LANE_WIDTH;
    const dx = Math.abs(laneX - this.laneX);
    const threshold = record.collide.halfW + PLAYER.HITBOX_HALF_WIDTH + 0.45;
    if (dx < threshold && dx > 0.01) {
      this.nearMissCooldown = 0.35;
      return true;
    }
    return false;
  }

  // -------------------------------------------------------------------------
  // Power-up visuals
  // -------------------------------------------------------------------------

  /** @param {object} powerups state from the PowerUpManager */
  applyPowerupVisuals(powerups) {
    if (powerups === undefined) return;
    const m = this.rig.materials;
    // Shield tints the trim and adds a faint rim.
    m.trim.emissiveIntensity = powerups.shield ? 2.2 : 0;
    m.jacket.emissiveIntensity = powerups.boost ? 0.5 : 0;
  }

  setBoost(active) {
    this.boostActive = active;
  }

  /** Hide the player (crash animation takes over). */
  setVisible(v) {
    this.root.visible = v;
  }

  dispose() {
    this.rig.dispose();
    this.root.removeFromParent();
  }
}
