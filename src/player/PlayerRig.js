import * as THREE from 'three';
import { clamp01, lerp, damp, easeOutCubic, easeOutBack, smoothstep } from '../util/MathUtils.js';

/**
 * PlayerRig — the procedural character.
 *
 * Vela and the rest of the roster are built entirely from primitives and
 * posed by code rather than by skeletal animation clips. That keeps the whole
 * cast under a few KB, lets every character share one animation system, and —
 * most usefully — means the run cycle can be driven directly by *speed*, so
 * the stride visibly quickens as the run gets faster instead of looping at a
 * fixed rate.
 *
 * The rig is a plain Object3D hierarchy. Each joint is a Group whose
 * rotation.x drives a limb; child limbs hang off those groups.
 */

const SEGMENTS = {
  torsoH: 0.62,
  torsoW: 0.42,
  hipH: 0.26,
  thigh: 0.42,
  shin: 0.44,
  armUpper: 0.34,
  armLower: 0.32,
  neck: 0.1,
  headR: 0.19,
};

/** Original cast. Palettes are chosen to read against each sector's fog. */
export const CHARACTERS = [
  {
    id: 'vela',
    name: 'Vela Okonjo',
    role: 'Courier, Arterial Line',
    blurb: 'Runs the deck for a living. Knows every gap in Sector 7 by feel.',
    accessory: 'goggles',
    palette: {
      jacket: 0xff7a2f,
      jacketDark: 0xd4521a,
      trim: 0xffd166,
      trousers: 0x2c3440,
      boots: 0x1b1f26,
      skin: 0x8a5a3b,
      hair: 0x1a1512,
      bag: 0x394656,
    },
  },
  {
    id: 'reyes',
    name: 'Reyes "Tacho" Mora',
    role: 'Transit Engineer',
    blurb: 'Maintains the guideway. Has the clearance, not the patience.',
    accessory: 'hardhat',
    palette: {
      jacket: 0x2fa9a0,
      jacketDark: 0x1d7a74,
      trim: 0xffd166,
      trousers: 0x39424e,
      boots: 0x22262c,
      skin: 0xc98d63,
      hair: 0x2a1f18,
      bag: 0x45525f,
    },
  },
  {
    id: 'sable',
    name: 'Sable',
    role: 'Rooftop Courier',
    blurb: 'Never touches the ground if she can help it. Long coat, bad habit.',
    accessory: 'coat',
    palette: {
      jacket: 0xc44bd6,
      jacketDark: 0x8a2ba0,
      trim: 0xffe08a,
      trousers: 0x241f30,
      boots: 0x171420,
      skin: 0x6f4630,
      hair: 0x2d1f3d,
      bag: 0x3a2f4a,
    },
  },
  {
    id: 'brook',
    name: 'Brook',
    role: 'Salvage Runner',
    blurb: 'Fishes dropped cargo off the deck before the crews do.',
    accessory: 'mask',
    palette: {
      jacket: 0x6b7a8c,
      jacketDark: 0x47535f,
      trim: 0x8be9ff,
      trousers: 0x333b45,
      boots: 0x1e2228,
      skin: 0x5d3b28,
      hair: 0x1f1a16,
      bag: 0x3d4753,
    },
  },
];

export function characterById(id) {
  return CHARACTERS.find((c) => c.id === id) ?? CHARACTERS[0];
}

function mat(color, roughness = 0.72, metalness = 0.04) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function capsule(radius, length, material) {
  const geo = new THREE.CapsuleGeometry(radius, length, 4, 10);
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = true;
  return mesh;
}

export class PlayerRig {
  /**
   * @param {object} character from CHARACTERS
   */
  constructor(character) {
    this.character = character;
    const p = character.palette;

    this.materials = {
      jacket: mat(p.jacket, 0.78),
      jacketDark: mat(p.jacketDark, 0.82),
      trim: mat(p.trim, 0.5, 0.2),
      trousers: mat(p.trousers, 0.85),
      boots: mat(p.boots, 0.7, 0.1),
      skin: mat(p.skin, 0.62),
      hair: mat(p.hair, 0.9),
      bag: mat(p.bag, 0.8),
      visor: new THREE.MeshStandardMaterial({
        color: 0x8be9ff,
        emissive: 0x2a6a80,
        emissiveIntensity: 0.7,
        roughness: 0.15,
        metalness: 0.6,
      }),
    };

    this.root = new THREE.Group();
    this.build();
    this.phase = 0;
    this.bankTarget = 0;
    this.bank = 0;
    this.tailVelocity = new THREE.Vector3();
    this.tailLag = new THREE.Vector3();
    this.blinkTimer = 1.5 + Math.random() * 3;
    this.blink = 0;
    this.footPhase = 0;
    this.lastFootDown = [false, false];
  }

  build() {
    const m = this.materials;

    // -- hips -------------------------------------------------------------
    this.hips = new THREE.Group();
    this.hips.position.y = 0.92;
    this.root.add(this.hips);

    const pelvis = new THREE.Mesh(
      new THREE.BoxGeometry(SEGMENTS.torsoW * 0.92, SEGMENTS.hipH, 0.26),
      m.trousers
    );
    pelvis.castShadow = true;
    this.hips.add(pelvis);

    // Belt + trim band.
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.07, 0.29), m.trim);
    belt.position.y = 0.13;
    this.hips.add(belt);

    // -- torso ------------------------------------------------------------
    this.torso = new THREE.Group();
    this.torso.position.y = SEGMENTS.hipH / 2;
    this.hips.add(this.torso);

    const chest = new THREE.Mesh(
      new THREE.BoxGeometry(SEGMENTS.torsoW, SEGMENTS.torsoH, 0.27),
      m.jacket
    );
    chest.castShadow = true;
    this.torso.add(chest);

    // Jacket hem + collar give the silhouette its shoulders.
    const hem = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.1, 0.3), m.jacketDark);
    hem.position.y = -SEGMENTS.torsoH / 2 + 0.02;
    this.torso.add(hem);

    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.1, 0.24), m.jacketDark);
    collar.position.y = SEGMENTS.torsoH / 2 - 0.02;
    this.torso.add(collar);

    // Chest stripe — a readable accent from the chase camera.
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.5, 0.02), m.trim);
    stripe.position.set(0, 0.02, -0.14);
    this.torso.add(stripe);

    // Shoulder pads.
    for (const sx of [-1, 1]) {
      const pad = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.14, 0.26), m.jacketDark);
      pad.position.set(sx * (SEGMENTS.torsoW / 2 + 0.02), 0.24, 0);
      this.torso.add(pad);
    }

    // -- head -------------------------------------------------------------
    this.neck = new THREE.Group();
    this.neck.position.y = SEGMENTS.torsoH / 2 + 0.05;
    this.torso.add(this.neck);

    this.head = new THREE.Group();
    this.neck.add(this.head);

    const skull = new THREE.Mesh(
      new THREE.SphereGeometry(SEGMENTS.headR, 14, 12),
      m.skin
    );
    skull.scale.set(1, 1.08, 0.95);
    skull.castShadow = true;
    this.head.add(skull);

    // Jaw/chin block.
    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.12, 0.18), m.skin);
    jaw.position.set(0, -0.12, -0.04);
    this.head.add(jaw);

    // Hair cap.
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.198, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), m.hair);
    hair.position.y = 0.02;
    hair.castShadow = true;
    this.head.add(hair);

    // Eyes — two small dark lenses. Kept simple; at this camera distance the
    // silhouette does the work.
    this.eyes = [];
    for (const sx of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.035, 0.02), m.visor);
      eye.position.set(sx * 0.07, 0.01, -0.175);
      this.head.add(eye);
      this.eyes.push(eye);
    }

    this.addAccessory();

    // -- arms -------------------------------------------------------------
    this.armL = this.buildArm(-1);
    this.armR = this.buildArm(1);

    // -- legs -------------------------------------------------------------
    this.legL = this.buildLeg(-1);
    this.legR = this.buildLeg(1);

    // -- messenger satchel -------------------------------------------------
    const bag = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, 0.14), m.bag);
    bag.position.set(0.02, 0.05, 0.22);
    bag.castShadow = true;
    this.torso.add(bag);
    const flap = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.15), m.jacketDark);
    flap.position.set(0.02, 0.16, 0.23);
    this.torso.add(flap);
    // Strap across the chest.
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.02), m.jacketDark);
    strap.position.set(-0.06, 0.02, -0.145);
    strap.rotation.z = 0.42;
    this.torso.add(strap);

    this.buildTail();

    // -- contact shadow ---------------------------------------------------
    // A cheap soft blob under the feet. The directional shadow alone leaves
    // the character feeling unmoored at speed; this grounds them instantly.
    const shadowTex = radialShadowTexture();
    this.contactShadow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.5, 1.5),
      new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        color: 0x000000,
      })
    );
    this.contactShadow.rotation.x = -Math.PI / 2;
    this.contactShadow.renderOrder = 1;
    this.root.add(this.contactShadow);

    // Warm light pool. The kerb strips and gantry lamps throw orange light
    // onto the wet deck; without this the runner looks pasted onto the floor
    // instead of standing in a pool of it.
    this.lightPool = new THREE.Mesh(
      new THREE.PlaneGeometry(2.6, 2.6),
      new THREE.MeshBasicMaterial({
        map: shadowTex,
        color: 0xff9f45,
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      })
    );
    this.lightPool.rotation.x = -Math.PI / 2;
    this.lightPool.renderOrder = 0;
    this.root.add(this.lightPool);
  }

  addAccessory() {
    const m = this.materials;
    switch (this.character.accessory) {
      case 'goggles': {
        // Strap plus two lenses pushed up on the forehead.
        const strapMesh = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.022, 6, 14), m.trim);
        strapMesh.rotation.y = Math.PI / 2;
        strapMesh.position.y = 0.08;
        this.head.add(strapMesh);
        for (const sx of [-1, 1]) {
          const lens = new THREE.Mesh(
            new THREE.CylinderGeometry(0.062, 0.062, 0.05, 10),
            m.visor
          );
          lens.rotation.z = Math.PI / 2;
          lens.position.set(sx * 0.08, 0.09, -0.11);
          this.head.add(lens);
        }
        break;
      }
      case 'hardhat': {
        const shell = new THREE.Mesh(
          new THREE.SphereGeometry(0.215, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5),
          mat(0xffc233, 0.5, 0.1)
        );
        shell.position.y = 0.05;
        shell.castShadow = true;
        this.head.add(shell);
        const brim = new THREE.Mesh(
          new THREE.CylinderGeometry(0.235, 0.235, 0.022, 14),
          mat(0xffc233, 0.5, 0.1)
        );
        brim.position.y = 0.05;
        this.head.add(brim);
        const lamp = new THREE.Mesh(
          new THREE.CylinderGeometry(0.035, 0.035, 0.03, 8),
          new THREE.MeshStandardMaterial({ color: 0xfff2c0, emissive: 0xffd166, emissiveIntensity: 1.4 })
        );
        lamp.rotation.x = Math.PI / 2;
        lamp.position.set(0, 0.06, -0.21);
        this.head.add(lamp);
        break;
      }
      case 'mask': {
        const mask = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.14, 0.06), mat(0x2a3038, 0.8));
        mask.position.set(0, -0.06, -0.15);
        this.head.add(mask);
        const filter = new THREE.Mesh(
          new THREE.CylinderGeometry(0.05, 0.05, 0.06, 8),
          new THREE.MeshStandardMaterial({ color: 0x2a3038, emissive: 0x8be9ff, emissiveIntensity: 0.35 })
        );
        filter.rotation.x = Math.PI / 2;
        filter.position.set(0, -0.09, -0.2);
        this.head.add(filter);
        break;
      }
      case 'coat': {
        // Long back panel that flares with speed — secondary motion.
        const coat = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.62, 0.1), this.materials.jacketDark);
        coat.position.set(0, -0.34, 0.15);
        coat.castShadow = true;
        this.torso.add(coat);
        this.coatPanel = coat;
        break;
      }
      default:
        break;
    }
  }

  /** Wind-whipped strap that lags behind the body. Cheap secondary motion. */
  buildTail() {
    const group = new THREE.Group();
    group.position.set(0.16, 0.34, 0.1);
    this.torso.add(group);

    for (let i = 0; i < 3; i++) {
      const seg = new THREE.Mesh(
        new THREE.BoxGeometry(0.075 - i * 0.012, 0.17, 0.03),
        i % 2 === 0 ? this.materials.trim : this.materials.jacketDark
      );
      seg.position.y = -0.1 - i * 0.16;
      seg.castShadow = true;
      group.add(seg);
    }
    this.tail = group;
  }

  buildArm(side) {
    const m = this.materials;
    const shoulder = new THREE.Group();
    shoulder.position.set(side * (SEGMENTS.torsoW / 2 + 0.04), 0.24, 0);
    this.torso.add(shoulder);

    const upper = capsule(0.058, SEGMENTS.armUpper, m.jacket);
    upper.position.y = -SEGMENTS.armUpper / 2 - 0.03;
    shoulder.add(upper);

    const elbow = new THREE.Group();
    elbow.position.y = -SEGMENTS.armUpper - 0.03;
    shoulder.add(elbow);

    const fore = capsule(0.05, SEGMENTS.armLower, m.jacketDark);
    fore.position.y = -SEGMENTS.armLower / 2 - 0.02;
    elbow.add(fore);

    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.1, 0.07), m.skin);
    hand.position.y = -SEGMENTS.armLower - 0.06;
    elbow.add(hand);

    return { shoulder, elbow };
  }

  buildLeg(side) {
    const m = this.materials;
    const hip = new THREE.Group();
    hip.position.set(side * 0.11, -SEGMENTS.hipH / 2, 0);
    this.hips.add(hip);

    const thigh = capsule(0.072, SEGMENTS.thigh, m.trousers);
    thigh.position.y = -SEGMENTS.thigh / 2 - 0.04;
    hip.add(thigh);

    const knee = new THREE.Group();
    knee.position.y = -SEGMENTS.thigh - 0.06;
    hip.add(knee);

    const shin = capsule(0.062, SEGMENTS.shin, m.trousers);
    shin.position.y = -SEGMENTS.shin / 2 - 0.04;
    knee.add(shin);

    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.09, 0.26), m.boots);
    foot.position.set(0, -SEGMENTS.shin - 0.09, -0.06);
    foot.castShadow = true;
    knee.add(foot);

    return { hip, knee, foot };
  }

  /**
   * Restore every joint to its neutral pose.
   *
   * This exists because the crash animation writes directly to `root`
   * (spinning it flat and sinking it below the deck). Nothing else clears
   * those writes, so without an explicit reset the next run begins with the
   * character already lying face-down in the road.
   */
  resetPose() {
    this.phase = 0;
    this.footPhase = 0;
    this.lastFoot = [false, false];
    this.bank = 0;
    this.bankTarget = 0;
    this.blink = 0;
    this.blinkTimer = 1.5 + Math.random() * 3;
    this.idleTime = 0;

    this.root.rotation.set(0, 0, 0);
    this.root.position.set(0, 0, 0);
    this.root.scale.set(1, 1, 1);

    this.hips.position.set(0, 0.92, 0);
    this.hips.rotation.set(0, 0, 0);

    this.torso.position.set(0, SEGMENTS.hipH / 2, 0);
    this.torso.rotation.set(0, 0, 0);
    this.torso.scale.set(1, 1, 1);

    this.neck.rotation.set(0, 0, 0);
    this.head.rotation.set(0, 0, 0);

    for (const leg of [this.legL, this.legR]) {
      leg.hip.rotation.set(0, 0, 0);
      leg.knee.rotation.set(0, 0, 0);
      leg.foot.rotation.set(0, 0, 0);
    }
    for (const arm of [this.armL, this.armR]) {
      arm.shoulder.rotation.set(0, 0, 0);
      arm.elbow.rotation.set(0, 0, 0);
    }
    for (const eye of this.eyes) eye.scale.y = 1;

    if (this.tail) this.tail.rotation.set(0, 0, 0);
    if (this.coatPanel) {
      this.coatPanel.rotation.set(0, 0, 0);
      this.coatPanel.scale.set(1, 1, 1);
    }

    this.contactShadow.material.opacity = 0.85;
    this.contactShadow.scale.set(1.15, 1.15, 1);
    this.contactShadow.position.set(0, 0.02, 0);
    this.lightPool.material.opacity = 0.22;
    this.lightPool.scale.set(1, 1, 1);
    this.lightPool.position.set(0, 0.015, 0);
  }

  /**
   * Pose the character.
   *
   * @param {number} dt
   * @param {object} state
   * @param {number} state.speed current m/s
   * @param {number} state.airborne 0..1 blend into the jump pose
   * @param {number} state.sliding 0..1 blend into the slide pose
   * @param {number} state.laneChange signed lateral velocity
   * @param {number} state.boost 0..1 (visual flare when boosted)
   */
  update(dt, state) {
    const { speed, airborne, sliding, laneChange } = state;
    const m = this.materials;

    // Stride cadence scales with speed: ~1.55 rad per metre at full tilt,
    // which reads as a sprint rather than a jog.
    const cadence = 1.5 + speed * 0.32;
    this.phase += dt * cadence * 2.6;

    const running = 1 - Math.max(airborne, sliding);
    this.footPhase = this.phase;

    // ---- legs: thigh swings, shin trails the thigh ----------------------
    const swing = 0.85 + clamp01((speed - 10) / 22) * 0.35;
    const legPose = (leg, phaseOffset) => {
      const p = this.phase + phaseOffset;
      const thighAngle = Math.sin(p) * swing;
      leg.hip.rotation.x = thighAngle;

      // The knee only bends one way (heel toward butt), and bends hardest as
      // the leg passes under the body.
      const bend = Math.max(0, -Math.sin(p + 0.85)) * 1.75 + 0.12;
      leg.knee.rotation.x = bend;
      // Slight outward splay so the legs don't read as a single column.
      leg.hip.rotation.z = leg === this.legL ? -0.02 : 0.02;
      leg.foot.rotation.x = -thighAngle * 0.35 - bend * 0.45;
    };

    if (running > 0.01) {
      legPose(this.legL, 0);
      legPose(this.legR, Math.PI);
    }

    // ---- arms: counter-swing against the legs ---------------------------
    const armPose = (arm, phaseOffset) => {
      const p = this.phase + phaseOffset;
      const swingAngle = Math.sin(p) * 0.78;
      arm.shoulder.rotation.x = swingAngle;
      // Elbows stay bent; the bend sharpens as the hand passes forward.
      arm.elbow.rotation.x = -0.55 - Math.max(0, Math.sin(p + 1.2)) * 0.75;
      arm.shoulder.rotation.z = arm === this.armL ? -0.2 : 0.2;
    };

    if (running > 0.01) {
      armPose(this.armL, Math.PI);
      armPose(this.armR, 0);
    }

    // ---- airborne: tuck and reach --------------------------------------
    if (airborne > 0.01) {
      const a = airborne;
      // Leading leg up, trailing leg tucked — a classic jump silhouette.
      this.legL.hip.rotation.x = lerp(this.legL.hip.rotation.x, -1.05, a);
      this.legL.knee.rotation.x = lerp(this.legL.knee.rotation.x, 1.5, a);
      this.legR.hip.rotation.x = lerp(this.legR.hip.rotation.x, 0.45, a);
      this.legR.knee.rotation.x = lerp(this.legR.knee.rotation.x, 0.9, a);
      this.armL.shoulder.rotation.x = lerp(this.armL.shoulder.rotation.x, -1.7, a);
      this.armR.shoulder.rotation.x = lerp(this.armR.shoulder.rotation.x, -1.35, a);
      this.armL.elbow.rotation.x = lerp(this.armL.elbow.rotation.x, -0.5, a);
      this.armR.elbow.rotation.x = lerp(this.armR.elbow.rotation.x, -0.7, a);
      this.armL.shoulder.rotation.z = lerp(this.armL.shoulder.rotation.z, -0.5, a);
      this.armR.shoulder.rotation.z = lerp(this.armR.shoulder.rotation.z, 0.5, a);
    }

    // ---- sliding: flatten out behind the leading leg --------------------
    if (sliding > 0.01) {
      const s = sliding;
      this.legL.hip.rotation.x = lerp(this.legL.hip.rotation.x, -1.35, s);
      this.legL.knee.rotation.x = lerp(this.legL.knee.rotation.x, 0.25, s);
      this.legR.hip.rotation.x = lerp(this.legR.hip.rotation.x, 0.5, s);
      this.legR.knee.rotation.x = lerp(this.legR.knee.rotation.x, 1.9, s);
      this.armL.shoulder.rotation.x = lerp(this.armL.shoulder.rotation.x, 1.4, s);
      this.armR.shoulder.rotation.x = lerp(this.armR.shoulder.rotation.x, 1.1, s);
      this.armL.elbow.rotation.x = lerp(this.armL.elbow.rotation.x, -0.3, s);
      this.armR.elbow.rotation.x = lerp(this.armR.elbow.rotation.x, -0.3, s);
    }

    // ---- torso: bob, forward lean, counter-rotation ---------------------
    const bob = Math.abs(Math.sin(this.phase)) * 0.075 * running;
    const leanBase = -0.16 - clamp01((speed - 10) / 22) * 0.2;
    this.hips.position.y = 0.92 + bob - sliding * 0.52 + airborne * 0.06;

    // Lean into the run, then pitch forward in the air and back in a slide.
    this.hips.rotation.x = lerp(leanBase, -0.1, sliding) + airborne * 0.12;
    this.torso.rotation.y = Math.sin(this.phase) * 0.1 * running;
    this.torso.rotation.x = -0.05 * running + sliding * 0.42;

    // ---- lateral bank on lane change ------------------------------------
    // Bank into the turn: this is most of what sells the weight of a dodge.
    this.bankTarget = -laneChange * 0.55;
    this.bank = damp(this.bank, this.bankTarget, 0.0005, dt);
    this.root.rotation.z = this.bank;
    this.root.rotation.y = this.bank * 0.35;

    // Slide also kicks the character sideways a touch for readability.
    this.hips.rotation.z = sliding * -0.18;

    // ---- head: counter-rotate to stay level, look into turns -------------
    this.neck.rotation.x = -this.hips.rotation.x * 0.6 - this.torso.rotation.x * 0.5;
    this.head.rotation.y = -this.torso.rotation.y * 0.8 + this.bank * 0.3;

    // ---- secondary motion: the strap lags behind ------------------------
    this.updateTail(dt, speed);

    // Long coat flares outward with speed.
    if (this.coatPanel) {
      const flare = clamp01((speed - 12) / 18);
      this.coatPanel.rotation.x = 0.12 + flare * 0.5;
      this.coatPanel.scale.z = 1 + flare * 0.4;
    }

    // ---- idle breathing + blinking (used on the menu) --------------------
    if (speed < 0.5) {
      this.idleTime = (this.idleTime ?? 0) + dt;
      const breathe = Math.sin(this.idleTime * 1.9) * 0.028;
      this.torso.scale.setScalar(1 + breathe * 0.5);
      this.torso.position.y = SEGMENTS.hipH / 2 + breathe * 0.3;
      this.armL.shoulder.rotation.x = Math.sin(this.idleTime * 1.9) * 0.06 - 0.05;
      this.armR.shoulder.rotation.x = -Math.sin(this.idleTime * 1.9) * 0.06 - 0.05;
      this.armL.elbow.rotation.x = -0.3;
      this.armR.elbow.rotation.x = -0.3;
      this.legL.hip.rotation.x = 0;
      this.legR.hip.rotation.x = 0;
      this.legL.knee.rotation.x = 0.06;
      this.legR.knee.rotation.x = 0.06;

      // Occasional blink.
      this.blinkTimer -= dt;
      if (this.blinkTimer <= 0) {
        this.blink = 0.12;
        this.blinkTimer = 1.8 + Math.random() * 3.4;
      }
      if (this.blink > 0) {
        this.blink -= dt;
        for (const eye of this.eyes) eye.scale.y = 0.15;
      } else {
        for (const eye of this.eyes) eye.scale.y = 1;
      }
    } else {
      this.torso.scale.setScalar(1);
      for (const eye of this.eyes) eye.scale.y = 1;
    }

    // ---- boost flare -----------------------------------------------------
    const boost = state.boost ?? 0;
    m.trim.emissive = m.trim.emissive ?? new THREE.Color();
    m.trim.emissiveIntensity = boost * 2.4;
    m.jacket.emissiveIntensity = boost * 0.5;
  }

  /**
   * The strap and coat chase the torso with a spring, so they whip when the
   * player changes direction. Purely cosmetic, but it's the difference between
   * "a model running" and "a person running".
   */
  updateTail(dt, speed) {
    if (!this.tail) return;
    // Target angle from lateral velocity + speed.
    const targetX = -0.35 - clamp01((speed - 12) / 18) * 0.5;
    this.tail.rotation.x = damp(this.tail.rotation.x, targetX, 0.0008, dt);
    this.tail.rotation.z = damp(this.tail.rotation.z, this.bank * 1.6, 0.001, dt);
    const flutter = Math.sin(this.phase * 2) * (0.06 + clamp01((speed - 10) / 20) * 0.16);
    this.tail.rotation.y = flutter;
  }

  /** Fade the contact shadow and light pool as the player leaves the ground. */
  updateContactShadow(height, y) {
    const k = clamp01(1 - height / 2.6);
    // Position in the rig root's local space; the root sits at the player's
    // feet, so offsetting by -y keeps both decals flat on the deck.
    this.contactShadow.position.y = -y + 0.02;
    // Squared falloff keeps a tight core while the edges vanish, so the
    // shadow reads as a soft pool rather than a hard disc.
    this.contactShadow.material.opacity = 0.85 * k * k;
    const s = 1.15 + height * 0.2;
    this.contactShadow.scale.setScalar(s);

    // The pool spreads and dims as she rises, like light from a fixed source.
    this.lightPool.position.y = -y + 0.015;
    this.lightPool.material.opacity = 0.3 * (0.3 + k * 0.7);
    this.lightPool.scale.setScalar(1.1 + height * 0.32);
  }

  dispose() {
    this.root.traverse((child) => {
      if (child.isMesh) child.geometry.dispose();
    });
    for (const material of Object.values(this.materials)) material.dispose();
    this.contactShadow.material.dispose();
    this.contactShadow.geometry.dispose();
    this.lightPool.material.dispose();
    this.lightPool.geometry.dispose();
  }
}

let shadowTexCache = null;
function radialShadowTexture() {
  if (shadowTexCache) return shadowTexCache;
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,0.9)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.4)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  shadowTexCache = new THREE.CanvasTexture(canvas);
  return shadowTexCache;
}
