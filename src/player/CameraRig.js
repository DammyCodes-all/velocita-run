import * as THREE from 'three';
import { CAMERA, SPEED } from '../core/GameConfig.js';
import { damp, lerp, clamp, clamp01, easeOutCubic, easeOutBack } from '../util/MathUtils.js';
import { rand } from '../util/MathUtils.js';

/**
 * CameraRig — third-person chase camera.
 *
 * The camera is where "juice" actually lives. Each effect below is small on
 * its own, but together they're the difference between a functional runner
 * and one that feels alive:
 *
 *  • FOV widens with speed (cheap, extremely effective sense of velocity)
 *  • The camera trails laterally, so lane changes read as a whip
 *  • Landing dips the camera and springs it back
 *  • Impacts shake with decaying noise, scaled by the player's settings
 *  • Boost pulls the camera back and pushes FOV further
 *  • A slight roll on lane change sells the bank
 */
export class CameraRig {
  /**
   * @param {THREE.PerspectiveCamera} camera
   * @param {import('../core/EventBus.js').EventBus} bus
   */
  constructor(camera, bus) {
    this.camera = camera;
    this.bus = bus;

    this.baseFov = CAMERA.FOV;
    this.fov = CAMERA.FOV;
    this.targetFov = CAMERA.FOV;

    this.position = new THREE.Vector3(0, CAMERA.OFFSET_Y, CAMERA.OFFSET_Z);
    this.lookTarget = new THREE.Vector3(0, CAMERA.LOOK_HEIGHT, -CAMERA.LOOK_AHEAD);
    this.currentLook = this.lookTarget.clone();

    this.shakeAmount = 0;
    this.shakeDecay = 5.5;
    this.shakeScale = 1;
    this.shakeTime = 0;

    this.dip = 0;
    this.dipVelocity = 0;
    this.roll = 0;
    this.kickZ = 0;
    this.kickVelocity = 0;

    this._offset = new THREE.Vector3();
    this._desired = new THREE.Vector3();
    this._noise = new THREE.Vector3();
    this._tmp = new THREE.Vector3();

    this.snapNextFrame = true;
  }

  /** Immediately place the camera (used on run start / revive). */
  snap() {
    this.snapNextFrame = true;
  }

  /**
   * @param {number} amount 0..1
   * @param {number} [decay]
   */
  shake(amount, decay = 5.5) {
    this.shakeAmount = Math.max(this.shakeAmount, amount * this.shakeScale);
    this.shakeDecay = decay;
  }

  /** A short downward dip that springs back — landings, hard hits. */
  addDip(amount) {
    this.dipVelocity -= amount;
  }

  /** A quick push along Z — hits push the camera back. */
  addKick(amount) {
    this.kickVelocity += amount;
  }

  setShakeScale(scale) {
    this.shakeScale = scale;
  }

  /**
   * @param {number} dt
   * @param {object} state
   * @param {number} state.laneX
   * @param {number} state.laneVelocity
   * @param {number} state.playerY
   * @param {number} state.speed
   * @param {number} state.speed01
   * @param {number} state.boost
   * @param {number} state.slideBlend
   * @param {number} state.airborne
   */
  update(dt, state) {
    const {
      laneX,
      laneVelocity,
      playerY,
      speed,
      speed01,
      boost = 0,
      slideBlend = 0,
      airborne = 0,
    } = state;

    // ---- FOV: speed + boost -------------------------------------------
    const speedFov = lerp(0, 13, clamp01(speed01));
    this.targetFov = this.baseFov + speedFov + boost * 9;
    // Punching FOV on a hit makes the impact feel physical.
    this.fov = damp(this.fov, this.targetFov, 0.02, dt);
    if (Math.abs(this.camera.fov - this.fov) > 0.01) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }

    // ---- desired position ---------------------------------------------
    // Lateral follow lags the player, which turns a lane change into a whip.
    const followX = laneX * CAMERA.LANE_FOLLOW;
    const height = CAMERA.OFFSET_Y + playerY * 0.42 - slideBlend * 0.5 - boost * 0.15;
    const depth = CAMERA.OFFSET_Z + speed01 * 0.9 + boost * 1.5;

    this._desired.set(
      followX + CAMERA.OFFSET_X,
      height,
      depth
    );

    if (this.snapNextFrame) {
      this.position.copy(this._desired);
      this.snapNextFrame = false;
    } else {
      // Critically-damped-ish follow. Higher damping values = snappier.
      const posLerp = 1 - Math.pow(CAMERA.POSITION_DAMPING, dt * 60);
      this.position.x = lerp(this.position.x, this._desired.x, posLerp);
      this.position.y = lerp(this.position.y, this._desired.y, posLerp);
      this.position.z = lerp(this.position.z, this._desired.z, posLerp);
    }

    // ---- dip spring ----------------------------------------------------
    // Damped harmonic oscillator: accel = -k*x - c*v. Feels like a suspension.
    const stiffness = 62;
    const damping = 13;
    this.dipVelocity += (-this.dip * stiffness - this.dipVelocity * damping) * dt;
    this.dip += this.dipVelocity * dt;
    this.dip = clamp(this.dip, -1.2, 0.6);

    // ---- Z kick spring --------------------------------------------------
    this.kickVelocity += (-this.kickZ * 70 - this.kickVelocity * 15) * dt;
    this.kickZ += this.kickVelocity * dt;

    // ---- roll ----------------------------------------------------------
    const targetRoll = clamp(-laneVelocity * 0.05, -0.09, 0.09);
    this.roll = damp(this.roll, targetRoll, 0.0008, dt);

    // ---- shake ----------------------------------------------------------
    this.shakeAmount = Math.max(0, this.shakeAmount - this.shakeDecay * this.shakeAmount * dt - 0.02 * dt);
    this.shakeTime += dt * 34;
    const s = this.shakeAmount * this.shakeAmount;
    this._noise.set(
      Math.sin(this.shakeTime * 1.13) * s * 0.42,
      Math.sin(this.shakeTime * 1.61 + 1.3) * s * 0.36,
      Math.sin(this.shakeTime * 0.91 + 2.1) * s * 0.2
    );

    // ---- compose -------------------------------------------------------
    this.camera.position.set(
      this.position.x + this._noise.x,
      this.position.y + this.dip + this._noise.y,
      this.position.z + this.kickZ + this._noise.z
    );

    // ---- look target ---------------------------------------------------
    // Look ahead of the player and lead the turn slightly.
    this.lookTarget.set(
      laneX * 0.75,
      CAMERA.LOOK_HEIGHT + playerY * 0.75 + slideBlend * -0.35,
      -CAMERA.LOOK_AHEAD - speed01 * 2.5
    );

    if (this.snapNextFrame === false) {
      const lookLerp = 1 - Math.pow(CAMERA.LOOK_DAMPING, dt * 60);
      this.currentLook.x = lerp(this.currentLook.x, this.lookTarget.x, lookLerp);
      this.currentLook.y = lerp(this.currentLook.y, this.lookTarget.y, lookLerp);
      this.currentLook.z = lerp(this.currentLook.z, this.lookTarget.z, lookLerp);
    }

    this.camera.lookAt(this.currentLook);
    if (Math.abs(this.roll) > 0.0005) {
      this.camera.rotation.z += this.roll;
    }
  }

  /** Cinematic orbit used by the main menu. */
  menuOrbit(dt, elapsed, playerX = 0) {
    const radius = 6.2;
    const angle = elapsed * 0.22;
    this.camera.position.set(
      playerX + Math.sin(angle) * radius,
      2.4 + Math.sin(elapsed * 0.4) * 0.35,
      Math.cos(angle) * radius
    );
    this.camera.lookAt(playerX, 1.0, 0);
    if (Math.abs(this.camera.fov - 52) > 0.05) {
      this.camera.fov = damp(this.camera.fov, 52, 0.02, dt);
      this.camera.updateProjectionMatrix();
    }
    this.currentLook.set(playerX, 1.0, 0);
  }

  reset() {
    this.shakeAmount = 0;
    this.dip = 0;
    this.dipVelocity = 0;
    this.kickZ = 0;
    this.kickVelocity = 0;
    this.roll = 0;
    this.fov = this.baseFov;
    this.camera.fov = this.baseFov;
    this.camera.updateProjectionMatrix();
    this.snapNextFrame = true;
  }
}
