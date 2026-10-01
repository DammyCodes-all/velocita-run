import { clamp, clamp01, lerp } from "../util/MathUtils.js";
import { Settings } from "../core/Storage.js";

/**
 * AudioManager — the entire soundtrack and every sound effect, synthesised.
 *
 * Nothing is loaded from disk: coins, impacts, the wind bed and the music are
 * all generated with oscillators, filters and noise buffers. That keeps the
 * game a single JS bundle with no asset fetches, and means every sound can be
 * parameterised (e.g. coin pitch rises with the combo) rather than being a
 * fixed sample.
 *
 * Browsers block audio until a user gesture, so the context is resumed lazily
 * on the first interaction.
 */

/** Scale used by the music loop — D natural minor-ish, feels "urban chase". */
const ROOT = 146.83; // D3
const SCALE = [0, 3, 5, 7, 10, 12, 15, 14]; // degrees incl. a tense major 7

export class AudioManager {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.enabled = true;
    this.musicVolume = Settings.get("music");
    this.sfxVolume = Settings.get("sfx");

    this.coinStreak = 0;
    this.lastCoinTime = 0;
    this.musicTimer = null;
    this.nextNoteTime = 0;
    this.step = 0;
    this.musicIntensity = 0;

    this._noiseBuffer = null;
  }

  /** Called on the first user gesture. Safe to call repeatedly. */
  init() {
    if (this.ctx) {
      if (this.ctx.state === "suspended") this.ctx.resume();
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      this.enabled = false;
      return;
    }
    try {
      this.ctx = new AudioCtx();
    } catch (err) {
      console.warn("[Audio] could not create AudioContext", err);
      this.enabled = false;
      return;
    }

    // -- master chain: bus -> compressor -> destination ------------------
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.9;

    this.compressor = this.ctx.createDynamicsCompressor();
    this.compressor.threshold.value = -14;
    this.compressor.knee.value = 22;
    this.compressor.ratio.value = 8;
    this.compressor.attack.value = 0.003;
    this.compressor.release.value = 0.22;

    this.master.connect(this.compressor);
    this.compressor.connect(this.ctx.destination);

    this.sfxBus = this.ctx.createGain();
    this.sfxBus.gain.value = this.sfxVolume;
    this.sfxBus.connect(this.master);

    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = 0;
    this.musicBus.connect(this.master);

    // A short reverb makes the tunnel sectors feel enclosed.
    this.reverb = this.ctx.createConvolver();
    this.reverb.buffer = this._makeImpulse(1.6, 2.6);
    this.reverbGain = this.ctx.createGain();
    this.reverbGain.gain.value = 0.16;
    this.reverb.connect(this.reverbGain);
    this.reverbGain.connect(this.master);

    this._buildNoise();
    this.ready = true;
    this._syncVolumes();
  }

  _makeImpulse(duration, decay) {
    const rate = this.ctx.sampleRate;
    const length = Math.floor(rate * duration);
    const impulse = this.ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
      }
    }
    return impulse;
  }

  _buildNoise() {
    const rate = this.ctx.sampleRate;
    const length = rate * 2;
    const buffer = this.ctx.createBuffer(1, length, rate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    this._noiseBuffer = buffer;
  }

  _syncVolumes() {
    if (!this.ready) return;
    const sfx = Settings.get("sfx");
    const music = Settings.get("music");
    this.sfxVolume = sfx;
    this.musicVolume = music;
    this.sfxBus.gain.value = sfx;
    if (this.musicBus) {
      // Duck music while SFX are loud is overkill; just scale it.
      this.musicBus.gain.value = this._musicOn ? music * 0.5 : 0;
    }
  }

  setVolumes() {
    this._syncVolumes();
  }

  get time() {
    return this.ctx ? this.ctx.currentTime : 0;
  }

  // -------------------------------------------------------------------------
  // Primitives
  // -------------------------------------------------------------------------

  /**
   * A single enveloped oscillator voice.
   */
  tone({
    freq = 440,
    type = "sine",
    duration = 0.2,
    attack = 0.005,
    gain = 0.3,
    detune = 0,
    slideTo = null,
    slideTime = null,
    destination = null,
    reverb = false,
  }) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const env = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    osc.detune.value = detune;
    if (slideTo !== null) {
      osc.frequency.exponentialRampToValueAtTime(
        Math.max(1, slideTo),
        now + (slideTime ?? duration),
      );
    }

    env.gain.setValueAtTime(0, now);
    env.gain.linearRampToValueAtTime(gain, now + attack);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(env);
    env.connect(destination ?? this.sfxBus);
    if (reverb) env.connect(this.reverb);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  /**
   * A filtered noise burst — impacts, slides, wind, footsteps.
   */
  noise({
    duration = 0.2,
    gain = 0.3,
    filterType = "bandpass",
    frequency = 1200,
    q = 1,
    sweepTo = null,
    attack = 0.004,
    destination = null,
  }) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    source.buffer = this._noiseBuffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(frequency, now);
    filter.Q.value = q;
    if (sweepTo !== null) {
      filter.frequency.exponentialRampToValueAtTime(
        Math.max(20, sweepTo),
        now + duration,
      );
    }

    const env = this.ctx.createGain();
    env.gain.setValueAtTime(0, now);
    env.gain.linearRampToValueAtTime(gain, now + attack);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    source.connect(filter);
    filter.connect(env);
    env.connect(destination ?? this.sfxBus);

    source.start(now);
    source.stop(now + duration + 0.02);
  }

  // -------------------------------------------------------------------------
  // Game events
  // -------------------------------------------------------------------------

  /** Pitch climbs across a streak, then resets after a short gap. */
  playCoin(streak = 0) {
    if (!this.ready) return;
    const now = this.time;
    if (now - this.lastCoinTime > 1.1) this.coinStreak = 0;
    this.lastCoinTime = now;
    this.coinStreak = Math.min(this.coinStreak + 1, 14);

    const semitones = [0, 2, 4, 7, 9, 12, 14, 16][
      Math.min(this.coinStreak - 1, 7)
    ];
    const freq = 880 * Math.pow(2, semitones / 12);

    this.tone({
      freq,
      type: "triangle",
      duration: 0.16,
      gain: 0.18,
      attack: 0.002,
    });
    this.tone({
      freq: freq * 2,
      type: "sine",
      duration: 0.1,
      gain: 0.09,
      attack: 0.001,
      reverb: true,
    });
    if (this.coinStreak >= 6) {
      this.tone({ freq: freq * 3, type: "sine", duration: 0.08, gain: 0.05 });
    }
  }

  playJump() {
    this.tone({
      freq: 260,
      slideTo: 620,
      type: "sawtooth",
      duration: 0.16,
      gain: 0.1,
    });
    this.noise({
      duration: 0.14,
      gain: 0.06,
      frequency: 900,
      sweepTo: 2600,
      q: 0.7,
    });
  }

  playLand() {
    this.noise({
      duration: 0.16,
      gain: 0.14,
      filterType: "lowpass",
      frequency: 700,
      sweepTo: 140,
    });
    this.tone({
      freq: 130,
      slideTo: 70,
      type: "sine",
      duration: 0.14,
      gain: 0.16,
    });
  }

  playSlide() {
    this.noise({
      duration: 0.55,
      gain: 0.09,
      frequency: 3200,
      sweepTo: 900,
      q: 2.2,
    });
  }

  playLaneChange() {
    this.noise({
      duration: 0.12,
      gain: 0.055,
      frequency: 1500,
      sweepTo: 3400,
      q: 1.4,
    });
  }

  playPowerup() {
    if (!this.ready) return;
    // Rising arpeggio — unmistakably a reward.
    const base = 523.25;
    [0, 4, 7, 12, 16].forEach((semi, i) => {
      setTimeout(() => {
        this.tone({
          freq: base * Math.pow(2, semi / 12),
          type: "triangle",
          duration: 0.3,
          gain: 0.14,
          reverb: true,
        });
      }, i * 55);
    });
  }

  playCrash() {
    this.noise({
      duration: 0.5,
      gain: 0.4,
      filterType: "lowpass",
      frequency: 2400,
      sweepTo: 90,
      q: 0.6,
    });
    this.tone({
      freq: 180,
      slideTo: 42,
      type: "square",
      duration: 0.42,
      gain: 0.22,
    });
    this.tone({
      freq: 90,
      slideTo: 30,
      type: "sawtooth",
      duration: 0.6,
      gain: 0.14,
    });
  }

  playShieldBreak() {
    this.noise({
      duration: 0.34,
      gain: 0.26,
      frequency: 4200,
      sweepTo: 700,
      q: 1.6,
    });
    this.tone({
      freq: 900,
      slideTo: 260,
      type: "triangle",
      duration: 0.3,
      gain: 0.16,
    });
  }

  playNearMiss() {
    // Quick doppler-ish whoosh. Panned by direction would need StereoPanner;
    // the pitch sweep alone reads as "something went past".
    this.noise({
      duration: 0.22,
      gain: 0.075,
      frequency: 600,
      sweepTo: 2800,
      q: 3,
    });
  }

  playFootstep(speed = 10) {
    this.noise({
      duration: 0.07,
      gain: 0.05,
      filterType: "lowpass",
      frequency: 500 + Math.random() * 300,
      q: 1,
    });
  }

  playUiHover() {
    this.tone({ freq: 620, type: "sine", duration: 0.05, gain: 0.05 });
  }

  playUiClick() {
    this.tone({
      freq: 480,
      slideTo: 720,
      type: "triangle",
      duration: 0.09,
      gain: 0.1,
    });
  }

  playUiBack() {
    this.tone({
      freq: 420,
      slideTo: 260,
      type: "triangle",
      duration: 0.1,
      gain: 0.08,
    });
  }

  playCountdown(final = false) {
    this.tone({
      freq: final ? 880 : 520,
      type: "square",
      duration: final ? 0.3 : 0.14,
      gain: 0.14,
    });
  }

  playMission() {
    const base = 659.25;
    [0, 5, 9, 12].forEach((semi, i) => {
      setTimeout(() => {
        this.tone({
          freq: base * Math.pow(2, semi / 12),
          type: "sine",
          duration: 0.4,
          gain: 0.12,
          reverb: true,
        });
      }, i * 90);
    });
  }

  playRevive() {
    const base = 392;
    [0, 7, 12, 19].forEach((semi, i) => {
      setTimeout(() => {
        this.tone({
          freq: base * Math.pow(2, semi / 12),
          type: "triangle",
          duration: 0.5,
          gain: 0.13,
          reverb: true,
        });
      }, i * 80);
    });
  }

  // -------------------------------------------------------------------------
  // Music
  // -------------------------------------------------------------------------

  startMusic() {
    if (!this.ready || this.musicTimer) return;
    this._musicOn = true;
    this.nextNoteTime = this.ctx.currentTime + 0.1;
    this.step = 0;
    this.musicBus.gain.cancelScheduledValues(this.ctx.currentTime);
    this.musicBus.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    this.musicBus.gain.linearRampToValueAtTime(
      this.musicVolume * 0.5,
      this.ctx.currentTime + 1.5,
    );
    // Lookahead scheduler: a coarse interval that schedules notes slightly
    // ahead of the audio clock, which is the only reliable way to get
    // stable timing in WebAudio.
    this.musicTimer = setInterval(() => this._scheduleMusic(), 40);
  }

  stopMusic(fade = 0.6) {
    if (!this.ready) return;
    this._musicOn = false;
    if (this.musicBus) {
      const now = this.ctx.currentTime;
      this.musicBus.gain.cancelScheduledValues(now);
      this.musicBus.gain.setValueAtTime(this.musicBus.gain.value, now);
      this.musicBus.gain.linearRampToValueAtTime(0.0001, now + fade);
    }
    if (this.musicTimer) {
      clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
  }

  /**
   * Drive intensity from gameplay: 0 = menu calm, 1 = full speed.
   * @param {number} v 0..1
   */
  setMusicIntensity(v) {
    this.musicIntensity = clamp01(v);
  }

  _scheduleMusic() {
    if (!this.ready || !this._musicOn) return;
    const bpm = 128 + this.musicIntensity * 34;
    const stepDuration = 60 / bpm / 4; // 16th notes
    const lookahead = 0.12;

    while (this.nextNoteTime < this.ctx.currentTime + lookahead) {
      this._playStep(this.step, this.nextNoteTime, stepDuration);
      this.nextNoteTime += stepDuration;
      this.step++;
    }
  }

  _playStep(step, time, dur) {
    const bus = this.musicBus;
    const bar = step % 16;
    const intensity = this.musicIntensity;

    // --- kick on 1 and 11 --------------------------------------------
    if (bar === 0 || bar === 6 || bar === 10) {
      const osc = this.ctx.createOscillator();
      const env = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, time);
      osc.frequency.exponentialRampToValueAtTime(42, time + 0.12);
      env.gain.setValueAtTime(0.9, time);
      env.gain.exponentialRampToValueAtTime(0.001, time + 0.18);
      osc.connect(env);
      env.connect(bus);
      osc.start(time);
      osc.stop(time + 0.2);
    }

    // --- hats -------------------------------------------------------
    if (bar % 2 === 1) {
      const src = this.ctx.createBufferSource();
      src.buffer = this._noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 7000;
      const env = this.ctx.createGain();
      env.gain.setValueAtTime(0.11 + intensity * 0.06, time);
      env.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
      src.connect(filter);
      filter.connect(env);
      env.connect(bus);
      src.start(time);
      src.stop(time + 0.06);
    }

    // --- bass line --------------------------------------------------
    if (
      bar === 0 ||
      bar === 3 ||
      bar === 6 ||
      bar === 8 ||
      bar === 11 ||
      bar === 14
    ) {
      const degree = SCALE[[0, 0, 4, 2, 0, 3][Math.floor(bar / 3)] ?? 0];
      const freq = ROOT * Math.pow(2, degree / 12);
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(320 + intensity * 900, time);
      filter.Q.value = 6;
      const env = this.ctx.createGain();
      env.gain.setValueAtTime(0.0001, time);
      env.gain.linearRampToValueAtTime(0.32, time + 0.012);
      env.gain.exponentialRampToValueAtTime(0.001, time + dur * 1.8);
      osc.type = "sawtooth";
      osc.frequency.value = freq;
      osc.connect(filter);
      filter.connect(env);
      env.connect(bus);
      osc.start(time);
      osc.stop(time + dur * 2);
    }

    // --- arpeggio: only once things get moving ----------------------
    if (intensity > 0.12 && bar % 2 === 0) {
      const idx = (step / 2) % SCALE.length;
      const degree = SCALE[idx];
      const freq = ROOT * 4 * Math.pow(2, degree / 12);
      const osc = this.ctx.createOscillator();
      const env = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      env.gain.setValueAtTime(0.0001, time);
      env.gain.linearRampToValueAtTime(0.055 + intensity * 0.05, time + 0.01);
      env.gain.exponentialRampToValueAtTime(0.001, time + dur * 1.4);
      osc.connect(env);
      env.connect(bus);
      env.connect(this.reverb);
      osc.start(time);
      osc.stop(time + dur * 1.5);
    }

    // --- pad chord every two bars -----------------------------------
    if (bar === 0 && step % 32 === 0) {
      [0, 3, 7].forEach((semi, i) => {
        const osc = this.ctx.createOscillator();
        const env = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.value = ROOT * 2 * Math.pow(2, semi / 12);
        osc.detune.value = (i - 1) * 6;
        const filter = this.ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(500 + intensity * 1400, time);
        env.gain.setValueAtTime(0.0001, time);
        env.gain.linearRampToValueAtTime(0.05, time + 0.4);
        env.gain.exponentialRampToValueAtTime(0.001, time + dur * 14);
        osc.connect(filter);
        filter.connect(env);
        env.connect(bus);
        env.connect(this.reverb);
        osc.start(time);
        osc.stop(time + dur * 15);
      });
    }
  }

  /** Wind bed whose intensity tracks speed. */
  startWind() {
    if (!this.ready || this._windSource) return;
    const source = this.ctx.createBufferSource();
    source.buffer = this._noiseBuffer;
    source.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 500;
    filter.Q.value = 0.6;
    const env = this.ctx.createGain();
    env.gain.value = 0;
    source.connect(filter);
    filter.connect(env);
    env.connect(this.sfxBus);
    source.start();
    this._windSource = source;
    this._windGain = env;
    this._windFilter = filter;
  }

  setWind(intensity01) {
    if (!this._windGain) return;
    const now = this.ctx.currentTime;
    this._windGain.gain.setTargetAtTime(intensity01 * 0.09, now, 0.15);
    this._windFilter.frequency.setTargetAtTime(
      340 + intensity01 * 900,
      now,
      0.2,
    );
  }

  stopWind() {
    if (this._windSource) {
      try {
        this._windSource.stop();
      } catch {
        /* already stopped */
      }
      this._windSource = null;
      this._windGain = null;
      this._windFilter = null;
    }
  }

  dispose() {
    this.stopMusic(0.1);
    this.stopWind();
    this.ctx?.close();
    this.ctx = null;
    this.ready = false;
  }
}

export const audio = new AudioManager();
