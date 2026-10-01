import * as THREE from 'three';
import { Loop, FIXED_DT } from './core/Loop.js';
import { EventBus, Events } from './core/EventBus.js';
import { StateMachine, GameState, stateFlags } from './core/StateMachine.js';
import { InputManager } from './core/Input.js';
import { Storage, Settings } from './core/Storage.js';
import { QUALITY, GAME, SECTORS, SPEED, PLAYER, POWERUPS, TRACK } from './core/GameConfig.js';
import { PostFX } from './core/PostFX.js';
import { tuneTextures } from './core/ProceduralTextures.js';

import { World } from './world/World.js';
import { Player } from './player/Player.js';
import { CameraRig } from './player/CameraRig.js';
import { ParticleSystem } from './fx/ParticleSystem.js';
import { ParticleEffects } from './fx/Effects.js';

import { ScoreSystem } from './game/ScoreSystem.js';
import { PowerUpManager } from './game/PowerUpManager.js';
import { MissionSystem } from './game/MissionSystem.js';
import { UIManager } from './ui/UIManager.js';
import { audio } from './audio/AudioManager.js';

import { clamp, clamp01, lerp, damp, formatNumber } from './util/MathUtils.js';

/**
 * Game — the top-level orchestrator.
 *
 * Owns the renderer, scene, loop and every subsystem, and mediates between
 * them through the EventBus and the StateMachine. Subsystems never reach into
 * each other; the Game wires the connections. This is the only file that needs
 * to change when a new system is added.
 */

const REVIVE_WINDOW = 5.0;
const REVIVE_COST = 250;
const COUNTDOWN_TIME = 2.6;

export class Game {
  constructor() {
    this.bus = new EventBus();
    this.state = new StateMachine(this.bus);

    this.quality = this.detectQuality();
    this.clock = { elapsed: 0 };
    this.hitstop = 0;
    this.timeScale = 1;
    this.topSpeed = SPEED.START;
    this.completedMissions = [];

    this._running = false;
    this._rafHandle = null;
  }

  // =========================================================================
  // Boot
  // =========================================================================

  async boot() {
    this.setupRenderer();
    this.setupScene();

    this.input = new InputManager(document.body);
    this.score = new ScoreSystem(this.bus);
    this.powerups = new PowerUpManager(this.bus);
    this.missions = new MissionSystem(this.bus);

    this.ui = new UIManager({
      bus: this.bus,
      powerups: this.powerups,
      missions: this.missions,
      getCharacter: () => Storage.data.lastCharacter,
    });

    await this.pretendLoad();

    this.world = new World({
      scene: this.scene,
      renderer: this.renderer,
      camera: this.camera,
      bus: this.bus,
      quality: this.quality,
    });

    this.particles = new ParticleSystem(this.scene, this.quality.particleBudget);
    this.effects = new ParticleEffects(this.particles, this.scene);

    this.player = new Player({
      scene: this.scene,
      bus: this.bus,
      world: this.world,
      input: this.input,
    });
    this.player.setCharacter(Storage.data.lastCharacter);

    this.cameraRig = new CameraRig(this.camera, this.bus);
    this.cameraRig.setShakeScale(Settings.get('screenShake'));

    tuneTextures(this.renderer);

    this.bindGameplayEvents();
    this.bindUICallbacks();
    this.bindStateChanges();

    this.setupMenuScene();
    this.loop = new Loop(
      (dt) => this.update(dt),
      (alpha, frameDt) => this.render(alpha, frameDt)
    );

    this.ui.showScreen('loading');
    this.loop.start();

    // Give the browser one frame to paint the loading screen before the
    // start gate appears, otherwise the first paint is a white flash.
    await nextFrame();
    this.ui.showStartGate();

    return this;
  }

  /** Staged loading so the progress bar reflects real work. */
  async pretendLoad() {
    const stages = [
      [0.15, 'Pouring the deck…'],
      [0.4, 'Lighting the skyline…'],
      [0.65, 'Loading freight…'],
      [0.85, 'Waking the couriers…'],
      [1.0, 'Ready'],
    ];
    for (const [fraction, label] of stages) {
      this.ui.setLoadingProgress(fraction, label);
      await nextFrame();
      await sleep(90);
    }
  }

  setupRenderer() {
    const canvas = document.getElementById('stage');
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: this.quality.particleBudget > 150,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.quality.pixelRatioCap));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = this.quality.shadows;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);
    window.addEventListener('orientationchange', this._onResize);
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      62,
      window.innerWidth / window.innerHeight,
      0.1,
      420
    );
    this.camera.position.set(0, 3.4, 7.4);

    this.postfx = new PostFX(this.renderer, this.scene, this.camera, this.quality);
  }

  /**
   * Choose a quality preset. `auto` starts at medium and adapts at runtime.
   */
  detectQuality() {
    const pref = Settings.get('quality');
    if (pref !== 'auto') return QUALITY[pref] ?? QUALITY.medium;

    // Heuristic: cores and device memory are a decent proxy for GPU class.
    const cores = navigator.hardwareConcurrency ?? 4;
    const memory = navigator.deviceMemory ?? 4;
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (mobile || cores <= 4 || memory <= 4) return QUALITY.medium;
    if (cores >= 8 && memory >= 8) return QUALITY.high;
    return QUALITY.medium;
  }

  /** Runtime downgrade if we're consistently missing frames. */
  monitorPerformance(fps) {
    if (Settings.get('quality') !== 'auto') return;
    if (this._qualityLocked) return;
    this._fpsSamples = (this._fpsSamples ?? []);
    this._fpsSamples.push(fps);
    if (this._fpsSamples.length > 90) this._fpsSamples.shift();
    if (this._fpsSamples.length < 60) return;

    const avg = this._fpsSamples.reduce((a, b) => a + b, 0) / this._fpsSamples.length;
    if (avg < 42 && this.quality !== QUALITY.low) {
      this.setQuality('low');
      this._qualityLocked = true;
      this.ui.toast('Graphics stepped down to keep it smooth', '⚙');
    }
  }

  setQuality(name) {
    const preset = QUALITY[name] ?? QUALITY.medium;
    this.quality = preset;
    this.renderer.shadowMap.enabled = preset.shadows;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, preset.pixelRatioCap));
    this.world.atmosphere.setShadowQuality(preset.shadows, preset.shadowMapSize);
    this.postfx.applyQuality(preset);
    if (this.particles) this.particles.setBudget(preset.particleBudget);
    this.resize();
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.postfx.setSize(w, h);
  }

  // =========================================================================
  // Wiring
  // =========================================================================

  bindGameplayEvents() {
    const bus = this.bus;

    bus.on(Events.LANE_CHANGE, () => audio.playLaneChange());

    bus.on(Events.JUMP, () => {
      audio.playJump();
      this.effects.dustPuff(this.player.laneX, 0.05, 0, 6);
    });

    bus.on(Events.LAND, ({ hard }) => {
      audio.playLand();
      this.effects.dustPuff(this.player.laneX, 0.04, 0, hard ? 12 : 6);
      this.cameraRig.addDip(hard ? 0.34 : 0.18);
      if (hard) this.cameraRig.shake(0.1, 7);
    });

    bus.on(Events.SLIDE_START, () => {
      audio.playSlide();
      this.effects.dustPuff(this.player.laneX, 0.08, 0.4, 10);
    });

    bus.on(Events.NEAR_MISS, () => {
      const bonus = this.score.addNearMiss();
      audio.playNearMiss();
      this.ui.showStreak('NEAR MISS');
      this.cameraRig.shake(0.06, 9);
      this.postfx.punchAberration(0.0025);
      this.effects.speedLines();
    });

    bus.on(Events.CRASH, () => this.handleCrash());
    bus.on(Events.SHIELD_BREAK, ({ record }) => this.handleShieldBreak(record));
    bus.on(Events.MULTIPLIER_CHANGE, () => {
      this.ui.pulseMultiplier();
      audio.playUiClick();
    });
  }

  bindUICallbacks() {
    const bus = this.bus;

    bus.on('ui:startGame', () => {
      audio.init();
      audio.startMusic();
      audio.startWind();
      this.startRun();
    });

    bus.on('ui:pause', () => this.pause());
    bus.on('ui:resume', () => this.resume());
    bus.on('ui:restart', () => this.startRun());
    bus.on('ui:quit', () => this.toMenu());
    bus.on('ui:endRun', () => this.endRun());

    bus.on('ui:revive', () => this.attemptRevive());
    bus.on('ui:openUpgrades', (from) => {
      this.ui.refreshUpgrades();
      this.ui.showScreen('upgrades');
      this._upgradesReturn = from;
    });
    bus.on('ui:closeUpgrades', () => {
      const from = this._upgradesReturn ?? 'menu';
      if (from === 'paused') this.ui.showScreen('paused');
      else if (from === 'gameOver') this.ui.showScreen('gameOver');
      else this.ui.showScreen('menu');
    });

    bus.on('ui:selectCharacter', (id) => {
      Storage.update((d) => {
        d.lastCharacter = id;
      });
      this.player.setCharacter(id);
      audio.playUiClick();
    });

    bus.on('ui:qualityChange', (value) => {
      if (value === 'auto') {
        this._qualityLocked = false;
        this._fpsSamples = [];
        this.setQuality('medium');
      } else {
        this.setQuality(value);
      }
    });

    bus.on('ui:audioChange', () => {
      audio.init();
      audio.setVolumes();
    });

    bus.on('ui:steeringChange', (enabled) => {
      this.input.mouseSteering = enabled;
      if (!enabled) this.input.resetSteering();
      this.ui.toast(enabled ? 'Mouse steering on' : 'Mouse steering off', '🖱');
    });

    bus.on('ui:dataReset', () => {
      this.missions.roll(3);
      Storage.update((d) => {
        d.missions = this.missions.roll(3);
      });
      this.ui.buildStaticUI();
      this.player.setCharacter(Storage.data.lastCharacter);
      this.toMenu();
    });
  }

  bindStateChanges() {
    this.state.subscribe((next, from) => {
      const flags = stateFlags(next);
      this.ui.showHud(flags.hud);

      if (next === GameState.MENU) {
        this.world?.setPaused(true);
        this.particles?.clear();
        this.setupMenuScene();
      }
      if (next === GameState.PAUSED) {
        this.world?.setPaused(true);
        this.ui.showPauseStats(this.score);
        audio.setWind(0);
      }
      if (next === GameState.PLAYING) {
        this.world?.setPaused(false);
        this.loop.resync();
      }
    });
  }

  // =========================================================================
  // Run lifecycle
  // =========================================================================

  setupMenuScene() {
    // A live, slowly rotating character behind the menu, lit like a diorama.
    this.world.setSector(SECTORS[1], true);
    this.world.generator.reset();
    // A short run of scenery so the menu isn't an empty void. The generator
    // culls past the camera, so this settles at a steady density rather than
    // accumulating.
    for (let i = 0; i < 14; i++) {
      this.world.generator._generateRow(12, SECTORS[1]);
    }
    this.player.setIdle(true);
    this.player.root.position.set(0, 0, 0);
    this.cameraRig.snap();
  }

  startRun() {
    audio.init();
    audio.startMusic();

    this.completedMissions = [];
    this.score.reset();
    this.powerups.reset();
    this.world.reset(0);
    // The previous run ended with the world frozen; unfreeze it or the
    // countdown would run against a stationary track.
    this.world.setPaused(false);
    this.particles.clear();
    this.effects.reset();

    this.player.reset(SPEED.START);
    this.player.setIdle(false);
    this.topSpeed = SPEED.START;

    // A crash leaves slow-motion and hitstop engaged. Both must be cleared
    // or the next run begins in slow motion.
    this.timeScale = 1;
    this.hitstop = 0;
    this._crashHandled = false;
    this._canRevive = false;
    this._reviveCountdown = 0;
    this.reviveTime = 0;

    this.cameraRig.reset();
    this.postfx.setDesaturate(0);
    this.postfx.setScanline(0);
    this.ui.setVignette(0);
    this.ui.cache = {}; // force HUD to re-sync

    // Warm the generator so the first second isn't an empty road. Kept short on
    // purpose: the generator tops up to its own window (`cursor > -260`) on the
    // first update anyway, so pre-warming beyond that only fills the pooled
    // buffers with content that has to be culled again.
    for (let i = 0; i < 10; i++) {
      this.world.generator._generateRow(SPEED.START, this.world.sector);
    }

    this.countdown = COUNTDOWN_TIME;
    this.state.transitionTo(GameState.COUNTDOWN);
    // Countdown and gameplay have no screen of their own, so anything still
    // up (menu, pause, last run's game-over) has to be dismissed explicitly.
    this.ui.hideAllScreens();
    this.ui.showCountdown(true);
    // Disarm mouse steering: control belongs to the keyboard until the
    // player actually moves the pointer.
    this.input.mouseSteering = Settings.get('mouseSteering');
    this.input.resetSteering();
    this.input.clear();
    this.loop.resync();
  }

  pause() {
    if (!this.state.canPause) return;
    this.state.transitionTo(GameState.PAUSED);
    this.ui.showScreen('paused');
    audio.playUiBack();
  }

  resume() {
    if (!this.state.is(GameState.PAUSED)) return;
    this.state.transitionTo(GameState.PLAYING);
    this.ui.showScreen('playing');
    this.loop.resync();
    audio.playUiClick();
  }

  toMenu() {
    audio.stopMusic();
    audio.stopWind();
    this.state.transitionTo(GameState.MENU);
    this.ui.showScreen('menu');
    this.ui.refreshMenuStats();
    this.ui.buildRoster();
    this.setupMenuScene();
  }

  endRun() {
    const summary = this.score.finalize();
    summary.topSpeed = this.topSpeed;
    this.missions.onRunComplete();

    // Collect missions completed during this run for the results screen.
    this.completedMissions = this.missions.missions.filter((m) => m.completed);

    this.ui.showGameOver(summary, this.completedMissions);
    this.state.transitionTo(GameState.GAME_OVER);
    this.ui.showScreen('gameOver');
    this.world.setPaused(true);
    audio.stopMusic();
    audio.setWind(0);
    this.postfx.setDesaturate(0.5);
  }

  /** Start the revive window after a crash. */
  offerRevive() {
    this.reviveTime = REVIVE_WINDOW;
    this.state.transitionTo(GameState.REVIVE);
    this.ui.showScreen('revive');
    this.ui.updateReviveTimer(REVIVE_WINDOW, REVIVE_COST);
  }

  attemptRevive() {
    if (Storage.data.coinsBank < REVIVE_COST) {
      this.ui.toast(`Need ${REVIVE_COST} quid bank to recover`, '✕', '#ff5b5b');
      audio.playUiBack();
      return;
    }
    Storage.update((d) => {
      d.coinsBank -= REVIVE_COST;
    });

    // Clear the deck immediately ahead so the player isn't re-killed.
    this.clearPathAhead();
    this.player.reset(this.player.baseSpeed * 0.85);
    this.player.invulnerable = 2.2;
    this.cameraRig.reset();
    this.postfx.setDesaturate(0);
    this.state.transitionTo(GameState.PLAYING);
    this.ui.showScreen('playing');
    this.loop.resync();
    audio.playRevive();
    this.ui.toast('Recovered — go!', '↺', '#7dff9b');
  }

  /** Destroy obstacles/coins near the player so a revive is survivable. */
  clearPathAhead() {
    for (let i = this.world.generator.live.length - 1; i >= 0; i--) {
      const record = this.world.generator.live[i];
      if (record.z > -18) {
        this.world.obstacles.release(record.obj);
        this.world.generator.live.splice(i, 1);
        this.effects.burst(record.obj.position.x, 1.2, record.z, POWERUPS.shield.color, 10);
      }
    }
    for (let i = this.world.generator.livePowerups.length - 1; i >= 0; i--) {
      if (this.world.generator.livePowerups[i].z > -18) {
        this.world.pickups.releaseAt(i);
        this.world.generator.livePowerups.splice(i, 1);
      }
    }
  }

  // =========================================================================
  // Crash handling
  // =========================================================================

  handleCrash() {
    const record = this._crashRecord;

    // 1. Shield absorbs and breaks.
    if (this.powerups.has('shield')) {
      this.powerups.consumeShield();
      this.bus.emit(Events.SHIELD_BREAK, { record });
      this.handleShieldBreak(record);
      return;
    }

    // 2. Boost smashes straight through.
    if (this.powerups.has('boost')) {
      this.powerups.consumeBoost();
      this.player.setBoost(false);
      this.smashThrough(record);
      return;
    }

    // 3. Otherwise the run ends.
    this.endCrash(record);
  }

  handleShieldBreak(record) {
    const x = this.player.laneX;
    this.effects.shieldBreak(x, 1.0, 0);
    this.cameraRig.shake(0.5, 4.5);
    this.cameraRig.addKick(0.6);
    this.postfx.flash(POWERUPS.shield.color, 0.4);
    this.postfx.punchAberration(0.008);
    audio.playShieldBreak();
    this.ui.flashDamage();
    this.score.breakStreak();
    this.player.invulnerable = 1.0;

    // Also destroy the obstacle that was hit, so it doesn't immediately re-hit.
    if (record) {
      this.destroyRecord(record);
    }
  }

  smashThrough(record) {
    const x = this.player.laneX;
    this.effects.crashBurst(x, 1.1, 0);
    this.cameraRig.shake(0.62, 3.6);
    this.cameraRig.addKick(1.1);
    this.cameraRig.addDip(0.3);
    this.postfx.flash(POWERUPS.boost.color, 0.55);
    this.postfx.punchAberration(0.012);
    audio.playCrash();
    this.ui.flashDamage();
    this.score.breakStreak();
    this.player.invulnerable = 0.8;

    // Boost clears a swath of obstacles — that's what makes it feel powerful.
    let smashed = 0;
    for (let i = this.world.generator.live.length - 1; i >= 0; i--) {
      const rec = this.world.generator.live[i];
      if (Math.abs(rec.lane - this.player.lane) <= 0 && rec.z > -14 && smashed < 6) {
        this.effects.burst(rec.obj.position.x, 1.2, rec.z, 0x7dff9b, 14);
        this.destroyRecord(rec, i);
        smashed++;
      }
    }
    this.ui.showStreak('SMASH!');
    this.score.addNearMiss(); // reward the risk
  }

  endCrash(record) {
    this.player.alive = false;
    this.score.breakStreak();

    const x = this.player.laneX;
    this.effects.crashBurst(x, 1.0, 0);
    this.cameraRig.shake(0.85, 3.2);
    this.cameraRig.addDip(0.55);
    this.cameraRig.addKick(1.4);
    this.postfx.flash(0xff5b5b, 0.55, 2.2);
    this.postfx.punchAberration(0.02);
    this.postfx.setDesaturate(0.8);
    this.postfx.setScanline(0);
    this.ui.flashDamage();
    this.ui.setVignette(0.5);
    audio.playCrash();
    audio.stopMusic();
    audio.setWind(0);

    // Brief slow-motion tumble before the result screen.
    this.hitstop = 0.65;
    this.timeScale = 0.28;
    this.state.transitionTo(GameState.CRASHED);

    if (record) {
      this.destroyRecord(record);
    }

    // Offer a revive if the player has the bank for it.
    const canRevive = Storage.data.coinsBank >= REVIVE_COST;
    this._reviveCountdown = 0;
    this._canRevive = canRevive;
    this._crashHandled = true;
  }

  destroyRecord(record, index = -1) {
    const idx = index >= 0 ? index : this.world.generator.live.indexOf(record);
    if (idx < 0) return;
    this.world.obstacles.release(this.world.generator.live[idx].obj);
    this.world.generator.live.splice(idx, 1);
  }

  // =========================================================================
  // Simulation
  // =========================================================================

  update(rawDt) {
    this.input.update(rawDt, this.clock.elapsed);

    // Hitstop / slow-motion.
    let dt = rawDt;
    if (this.hitstop > 0) {
      this.hitstop -= rawDt;
      dt = rawDt * this.timeScale;
    }
    this.clock.elapsed += dt;

    // Pause / menu input.
    if (this.input.consume('pause')) {
      if (this.state.is(GameState.PAUSED)) this.resume();
      else this.pause();
    }
    if (this.state.is(GameState.PLAYING) && this.input.consume('confirm')) {
      // Nothing on confirm during play; keeps it clean.
    }

    const flags = stateFlags(this.state.current);

    switch (this.state.current) {
      case GameState.MENU:
      case GameState.CHARACTER_SELECT:
      case GameState.MISSIONS:
      case GameState.SETTINGS:
      case GameState.UPGRADES:
        this.updateMenu(dt);
        break;

      case GameState.COUNTDOWN:
        this.updateCountdown(rawDt, dt);
        break;

      case GameState.PLAYING:
        this.updatePlaying(dt);
        break;

      case GameState.CRASHED:
        this.updateCrashed(dt);
        break;

      case GameState.REVIVE:
        this.updateRevive(dt);
        break;

      default:
        break;
    }
  }

  updateMenu(dt) {
    // World keeps drifting slowly so the background is alive.
    this.world.setPaused(false);
    this.world.update(dt * 0.22, 6, this.camera);
    this.player.rig.update(dt, {
      speed: 0,
      airborne: 0,
      sliding: 0,
      laneChange: 0,
      boost: 0,
    });
    this.particles.update(dt, 0);
    audio.setMusicIntensity(0.05);
  }

  updateCountdown(rawDt, dt) {
    this.countdown -= rawDt;
    const n = Math.ceil(this.countdown);
    if (n > 0) {
      this.ui.setCountdownText(String(n), false);
      if (n !== this._lastCount) {
        this._lastCount = n;
        audio.playCountdown(false);
      }
    } else if (this.countdown > -0.5) {
      this.ui.setCountdownText('RUN', true);
      if (this._lastCount !== 0) {
        this._lastCount = 0;
        audio.playCountdown(true);
      }
    }

    // World holds at a slow crawl during the countdown.
    this.world.update(dt * 0.15, SPEED.START, this.camera);
    this.player.update(dt, SPEED.START * 0.15);
    this.updateCamera(dt, 0);
    this.particles.update(dt, 0);

    if (this.countdown <= -0.35) {
      this.ui.showCountdown(false);
      this._lastCount = null;
      this.state.transitionTo(GameState.PLAYING);
      this.ui.showScreen('playing');
    }
  }

  updatePlaying(dt) {
    this.player.handleInput(true);

    const targetSpeed = this.currentTargetSpeed();
    this.player.update(dt, targetSpeed);
    // Let the atmosphere's hero rim light track the runner across lanes.
    this.world.playerX = this.player.laneX;
    this.world.update(dt, this.player.speed, this.camera);

    // Powers.
    this.powerups.update(dt);
    this.player.setBoost(this.powerups.has('boost'));
    this.world.setMagnet(
      this.powerups.has('magnet'),
      { x: this.player.laneX, y: this.player.y + 0.9, z: 0 },
      this.powerups.magnetRadius
    );

    // Score.
    const metres = this.player.speed * dt;
    this.score.update(dt, metres, this.powerups);
    // The HUD reads `displayScore`, which eases toward the real value so the
    // counter rolls instead of snapping.
    this.score.updateDisplay(dt);
    this.missions.sync(this.score);
    this.topSpeed = Math.max(this.topSpeed, this.player.speed);

    // Collectibles + collisions.
    this.collectCoins(dt);
    this.checkPowerups();
    this.checkCollisions(dt);

    // Audio.
    const speed01 = this.speed01();
    audio.setMusicIntensity(speed01);
    audio.setWind(speed01 * (this.powerups.has('boost') ? 1.4 : 1));

    // FX tied to continuous state.
    if (this.player.grounded && this.player.speed > 6 && Math.random() < dt * 14) {
      this.effects.dustPuff(this.player.laneX, 0.03, 0.4, 2);
    }
    if (this.powerups.has('boost')) {
      this.effects.boostTrail(this.player.laneX, 1.0, 0.5);
    }
    if (this.player.sliding && this.player.grounded) {
      this.effects.dustPuff(this.player.laneX, 0.08, 0.6, 1);
    }

    this.updateCamera(dt, speed01);
    this.particles.update(dt, this.player.speed * dt);

    // Vignette rises slightly at top speed for pressure.
    this.ui.setVignette(this.speed01() * 0.22);
  }

  updateCrashed(dt) {
    // Slow tumble then results.
    this._reviveCountdown += dt;
    this.world.update(dt * 0.3, this.player.speed * 0.3, this.camera);
    this.player.rig.update(dt, {
      speed: 0,
      airborne: 1,
      sliding: 0,
      laneChange: 0,
      boost: 0,
    });
    this.player.root.rotation.z = Math.min(Math.PI / 2, this.player.root.rotation.z + dt * 4);
    this.player.root.position.y = Math.max(-0.4, this.player.root.position.y - dt * 1.5);
    this.particles.update(dt, 0);
    this.updateCamera(dt, 0);

    if (this._reviveCountdown > 1.4) {
      this._reviveCountdown = -100;
      if (this._canRevive) {
        this.offerRevive();
      } else {
        this.timeScale = 1;
        this.endRun();
      }
    }
  }

  updateRevive(dt) {
    this.reviveTime -= dt;
    this.ui.updateReviveTimer(Math.max(0, this.reviveTime), REVIVE_COST);
    if (Math.random() < dt * 30) {
      this.effects.burst(
        this.player.laneX + (Math.random() - 0.5) * 4,
        Math.random() * 3,
        -Math.random() * 12,
        POWERUPS.shield.color,
        2
      );
    }
    this.world.update(dt * 0.1, 2, this.camera);
    this.particles.update(dt, 0);
    this.updateCamera(dt, 0);

    if (this.reviveTime <= 0) {
      this.timeScale = 1;
      this.bus.emit(Events.REVIVE_FAILED);
      this.endRun();
    }
  }

  // =========================================================================
  // Per-frame systems
  // =========================================================================

  collectCoins(dt) {
    const coins = this.world.coins;
    const px = this.player.laneX;
    const py = this.player.y + 0.85;
    const grabRadius = 1.0;

    for (let i = coins.count - 1; i >= 0; i--) {
      const c = coins.slots[i];
      const dz = c.z - 0;
      if (dz < -2.5 || dz > 2.5) continue;
      const dx = c.x - px;
      const dy = c.y - py;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < grabRadius * grabRadius) {
        const value = this.score.addCoins(1);
        this.effects.coinBurst(c.x, c.y, c.z);
        audio.playCoin();
        this.bus.emit(Events.COIN_COLLECTED, { value, streak: this.score._coinStreak });
        coins.removeAt(i);
        // Subtle score bump.
        this.ui.bump(this.ui.el.hudCoins.parentElement, 'hud-coins--bump');
      }
    }
  }

  checkPowerups() {
    const list = this.world.generator.livePowerups;
    const px = this.player.laneX;
    const py = this.player.y + 0.9;

    for (let i = list.length - 1; i >= 0; i--) {
      const p = list[i];
      const dz = p.z - 0;
      if (dz < -1.5 || dz > 1.5) continue;
      const dx = p.x - px;
      const dy = p.y - py;
      if (dx * dx + dy * dy + dz * dz < 1.6) {
        this.powerups.activate(p.powerId);
        this.score.addPowerup();
        const def = POWERUPS[p.powerId];
        this.effects.powerupBurst(p.x, p.y, p.z, def.color);
        audio.playPowerup();
        this.ui.toast(`${def.name} — ${def.blurb}`, POWERUP_ICONS[p.powerId] ?? '✦', def.cssColor);
        this.cameraRig.shake(0.12, 7);
        this.postfx.flash(def.color, 0.28);
        this.world.pickups.releaseAt(i);
        list.splice(i, 1);
      }
    }
  }

  checkCollisions(dt) {
    const nearby = this.world.obstaclesNear(-14, 6);
    const hit = this.player.checkCollisions(nearby);

    if (hit) {
      this._crashRecord = hit;
      this.bus.emit(Events.CRASH, { record: hit });
      this._crashRecord = null;
      return;
    }

    // Near miss detection for obstacles that have just passed.
    for (const record of nearby) {
      if (record.passed || record.decorative) continue;
      if (record.z > 0.4) {
        record.passed = true;
        this.score.addDodge();
        if (this.player.checkNearMiss(record)) {
          this.bus.emit(Events.NEAR_MISS, { record });
        }
      }
    }
  }

  updateCamera(dt, speed01) {
    const p = this.player;
    this.cameraRig.update(dt, {
      laneX: p.laneX,
      laneVelocity: p.lateralVelocity,
      playerY: p.y,
      speed: p.speed,
      speed01,
      boost: this.powerups.has('boost') ? 1 : 0,
      slideBlend: p.slideBlend,
      airborne: p.grounded ? 0 : 1,
    });
  }

  currentTargetSpeed() {
    // Speed ramps with distance travelled, not score, so power-ups don't
    // accidentally accelerate the player.
    const t = clamp01(this.score.distance / SPEED.RAMP_DISTANCE);
    return lerp(SPEED.START, SPEED.MAX, t);
  }

  speed01() {
    return clamp01((this.player.speed - SPEED.START) / (SPEED.MAX - SPEED.START));
  }

  // =========================================================================
  // Render
  // =========================================================================

  render(alpha, frameDt) {
    const speed01 = this.state.is(GameState.PLAYING) ? this.speed01() : 0;

    if (this.postfx.enabled) {
      this.postfx.update(speed01, frameDt, this.clock.elapsed);
      this.postfx.render(frameDt);
    } else {
      this.renderer.render(this.scene, this.camera);
    }

    // HUD (DOM) update — only when a screen shows it.
    if (stateFlags(this.state.current).hud) {
      this.ui.updateHud(this.score, this.powerups, this.world.generator.difficulty01);
    }

    if (Settings.get('showFps')) {
      const info = this.renderer.info;
      this.ui.setPerf(
        `${this.loop.fps.toFixed(0)} fps  q:${Settings.get('quality')}\n` +
          `draws:${info.render.calls}  tris:${(info.render.triangles / 1000).toFixed(0)}k\n` +
          `geo:${info.memory.geometries}  tex:${info.memory.textures}`
      );
    }
    this.monitorPerformance(this.loop.fps);
  }

  dispose() {
    this.loop?.stop();
    window.removeEventListener('resize', this._onResize);
    window.removeEventListener('orientationchange', this._onResize);
    this.input?.dispose();
    this.player?.dispose();
    this.particles?.dispose();
    this.world?.dispose();
    this.postfx?.dispose();
    audio.dispose();
    this.renderer?.dispose();
  }
}

const POWERUP_ICONS = { magnet: '🧲', shield: '🛡', multiply: '✕', boost: '⚡' };

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
