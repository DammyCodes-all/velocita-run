import { Storage, Settings } from '../core/Storage.js';
import { Events } from '../core/EventBus.js';
import { CHARACTERS } from '../player/PlayerRig.js';
import { POWERUPS, UPGRADES, POWERUP_IDS } from '../core/GameConfig.js';
import { MissionSystem } from '../game/MissionSystem.js';
import { formatNumber, formatDistance, clamp01 } from '../util/MathUtils.js';

const $ = (id) => document.getElementById(id);

/**
 * UIManager — owns the DOM: screens, HUD, toasts, settings and menus.
 *
 * Two rules keep the HUD smooth:
 *  1. Never touch the DOM unless a value actually changed (every setter
 *     compares against a cached last value).
 *  2. Animate with CSS classes, not JS. Layout/paint stay on the compositor,
 *     so the HUD never competes with the 3D scene for frame time.
 */
export class UIManager {
  /**
   * @param {object} deps
   * @param {import('../core/EventBus.js').EventBus} deps.bus
   * @param {import('../game/PowerUpManager.js').PowerUpManager} deps.powerups
   * @param {import('../game/MissionSystem.js').MissionSystem} deps.missions
   * @param {() => string} deps.getCharacter
   */
  constructor({ bus, powerups, missions, getCharacter }) {
    this.bus = bus;
    this.powerups = powerups;
    this.missions = missions;
    this.getCharacter = getCharacter;

    this.currentScreen = 'loading';
    this.cache = {};
    this.pendingRevive = null;
    this._toastTimers = new Set();

    this.collectElements();
    this.bindEvents();
    this.buildStaticUI();
  }

  collectElements() {
    this.el = {
      loadingFill: $('loading-fill'),
      loadingStatus: $('loading-status'),
      startGate: $('btn-start-gate'),

      menuBestScore: $('menu-best-score'),
      menuBestDistance: $('menu-best-distance'),
      menuCoins: $('menu-coins'),
      menuTagline: $('menu-tagline'),

      hud: $('hud'),
      hudScore: $('hud-score'),
      hudDistance: $('hud-distance'),
      hudSector: $('hud-sector'),
      hudCoins: $('hud-coins'),
      hudMultiplier: $('hud-multiplier'),
      hudMultiplierValue: $('hud-multiplier-value'),
      hudMultiplierFill: $('hud-multiplier-fill'),
      hudPowerups: $('hud-powerups'),
      hudMission: $('hud-mission'),
      streakPop: $('streak-pop'),

      countdown: $('countdown'),
      countdownNum: $('countdown-num'),
      countdownHint: $('countdown-hint'),

      pauseStats: $('pause-stats'),
      reviveTimer: $('revive-timer'),
      reviveCost: $('revive-cost'),

      finalScore: $('final-score'),
      finalCoins: $('final-coins'),
      finalDistance: $('final-distance'),
      finalBest: $('final-best'),
      finalSpeed: $('final-speed'),
      finalNearMiss: $('final-nearmiss'),
      finalPowerups: $('final-powerups'),
      gameoverBanner: $('gameover-banner'),
      gameoverMissions: $('gameover-missions'),

      rosterGrid: $('roster-grid'),
      missionList: $('mission-list'),
      upgradeList: $('upgrade-list'),
      upgradesBank: $('upgrades-bank-value'),

      toasts: $('toasts'),
      fxVignette: $('fx-vignette'),
      fxDamage: $('fx-damage'),
      fxSpeedlines: $('fx-speedlines'),
      perf: $('perf'),

      screens: {
        loading: $('screen-loading'),
        menu: $('screen-menu'),
        characterSelect: $('screen-characters'),
        missions: $('screen-missions'),
        settings: $('screen-settings'),
        upgrades: $('screen-upgrades'),
        paused: $('screen-pause'),
        revive: $('screen-revive'),
        gameOver: $('screen-gameover'),
      },
    };
  }

  // =========================================================================
  // Wiring
  // =========================================================================

  bindEvents() {
    const on = (id, event, handler) => {
      const node = $(id);
      if (node) node.addEventListener(event, handler);
    };

    on('btn-start-gate', 'click', () => this.bus.emit('ui:startGame'));
    on('btn-play', 'click', () => this.bus.emit('ui:startGame'));
    on('btn-characters', 'click', () => this.showScreen('characterSelect'));
    on('btn-missions', 'click', () => {
      this.refreshMissions();
      this.showScreen('missions');
    });
    on('btn-settings', 'click', () => this.showScreen('settings'));
    on('btn-characters-back', 'click', () => this.showScreen('menu'));
    on('btn-missions-back', 'click', () => this.showScreen('menu'));
    on('btn-settings-back', 'click', () => this.showScreen('menu'));
    on('btn-upgrades-back', 'click', () => this.bus.emit('ui:closeUpgrades'));

    on('btn-hud-pause', 'click', () => this.bus.emit('ui:pause'));
    on('btn-resume', 'click', () => this.bus.emit('ui:resume'));
    on('btn-pause-restart', 'click', () => this.bus.emit('ui:restart'));
    on('btn-pause-quit', 'click', () => this.bus.emit('ui:quit'));
    on('btn-pause-loadout', 'click', () => this.bus.emit('ui:openUpgrades', 'paused'));
    on('btn-loadout', 'click', () => this.bus.emit('ui:openUpgrades', 'gameOver'));
    on('btn-again', 'click', () => this.bus.emit('ui:restart'));
    on('btn-home', 'click', () => this.bus.emit('ui:quit'));
    on('btn-revive', 'click', () => this.bus.emit('ui:revive'));
    on('btn-revive-giveup', 'click', () => this.bus.emit('ui:endRun'));
    on('btn-reset-data', 'click', () => {
      if (confirm('Reset all progress, unlocks and high scores? This cannot be undone.')) {
        Storage.reset();
        this.bus.emit('ui:dataReset');
      }
    });

    // --- settings -----------------------------------------------------
    this.bindSegmented('set-quality', 'quality', (value) => {
      this.bus.emit('ui:qualityChange', value);
    });

    this.bindSlider('set-music', 'music', (value) => {
      this.bus.emit('ui:audioChange');
      this.setLabel('val-music', `${Math.round(value * 100)}%`);
    });

    this.bindSlider('set-sfx', 'sfx', (value) => {
      this.bus.emit('ui:audioChange');
      this.setLabel('val-sfx', `${Math.round(value * 100)}%`);
    });

    this.bindSlider('set-shake', 'screenShake', (value) => {
      this.setLabel('val-shake', `${Math.round(value * 100)}%`);
    });

    this.bindToggle('set-fps', 'showFps', (value) => {
      this.el.perf.hidden = !value;
    });

    this.bindToggle('set-mouse', 'mouseSteering', (value) => {
      this.bus.emit('ui:steeringChange', value);
    });

    this.bindToggle('set-invert', 'invertLane', () => {});

    // --- bus subscriptions --------------------------------------------
    this.bus.on(Events.TOAST, (payload) => this.toast(payload.text, payload.icon, payload.color));
    this.bus.on(Events.MULTIPLIER_CHANGE, ({ multiplier, lost }) => {
      this.pulseMultiplier(multiplier);
      if (lost) this.toast(`Streak broken — was ×${lost}`, '⚠', '#ff5b5b');
    });
    this.bus.on(Events.MISSION_COMPLETE, ({ mission }) => {
      this.toast(`${mission.name} complete! +${mission.reward} quids`, '◎', '#7dff9b');
      this.refreshMissions();
    });
    this.bus.on(Events.SECTION_CHANGE, ({ sector }) => {
      this.setText(this.el.hudSector, sector.name.toUpperCase());
    });
  }

  bindSegmented(id, settingKey, onChange) {
    const group = $(id);
    if (!group) return;
    group.addEventListener('click', (e) => {
      const option = e.target.closest('.segmented__option');
      if (!option) return;
      const value = option.dataset.value;
      Settings.set(settingKey, value);
      this.syncSegmented(id, value);
      onChange(value);
    });
    this.syncSegmented(id, Settings.get(settingKey));
  }

  syncSegmented(id, value) {
    const group = $(id);
    if (!group) return;
    for (const option of group.querySelectorAll('.segmented__option')) {
      option.classList.toggle('segmented__option--active', option.dataset.value === value);
    }
  }

  bindSlider(id, settingKey, onChange) {
    const input = $(id);
    if (!input) return;
    const value = Settings.get(settingKey);
    input.value = Math.round(value * 100);
    this.syncSliderFill(input);
    input.addEventListener('input', () => {
      const v = Number(input.value) / 100;
      Settings.setVolume(settingKey, v);
      this.syncSliderFill(input);
      onChange(v);
    });
  }

  syncSliderFill(input) {
    const pct = Number(input.value);
    input.style.setProperty('--fill', `${pct}%`);
  }

  bindToggle(id, settingKey, onChange) {
    const node = $(id);
    if (!node) return;
    const sync = () => {
      const value = Settings.get(settingKey);
      node.setAttribute('aria-checked', String(!!value));
    };
    node.addEventListener('click', () => {
      const next = !Settings.get(settingKey);
      Settings.set(settingKey, next);
      sync();
      onChange(next);
    });
    sync();
  }

  // =========================================================================
  // Screen management
  // =========================================================================

  /**
   * Show exactly one full-screen section (or none, for transient states like
   * countdown and gameplay).
   *
   * Note this deliberately does NOT touch the HUD. HUD visibility is owned
   * solely by the state machine via `showHud`; coupling the two here meant
   * hiding the panels also hid the HUD for the whole countdown.
   */
  showScreen(name) {
    this.currentScreen = name;
    for (const [key, node] of Object.entries(this.el.screens)) {
      if (!node) continue;
      node.classList.toggle('screen--active', key === name);
    }
  }

  /**
   * Hide every full-screen overlay. Used when entering a transient state
   * (countdown, gameplay) that has no screen of its own — without this, the
   * previous run's game-over panel stays visible underneath.
   */
  hideAllScreens() {
    this.showScreen(null);
  }

  showCountdown(active) {
    this.el.countdown.classList.toggle('countdown--active', active);
    if (!active) return;
    // Restart the hint animation.
    const hint = this.el.countdownHint;
    hint.style.animation = 'none';
    void hint.offsetHeight;
    hint.style.animation = '';
  }

  /**
   * Update the countdown tick.
   * @param {string} text digit, or 'RUN' for the go signal
   * @param {boolean} isGo
   */
  setCountdownText(text, isGo = false) {
    if (this.cache.countdownText === text) return;
    this.cache.countdownText = text;
    const num = this.el.countdownNum;
    num.textContent = text;
    num.classList.toggle('go', isGo);
    // Restart the per-tick animation.
    num.classList.remove('tick');
    void num.offsetWidth;
    num.classList.add('tick');
  }

  showHud(active) {
    this.el.hud.classList.toggle('hud--active', active);
  }

  // =========================================================================
  // Static / list UI
  // =========================================================================

  buildStaticUI() {
    this.refreshMenuStats();
    this.buildRoster();
    this.refreshMissions();
    this.refreshUpgrades();
    this.setLabel('val-music', `${Math.round(Settings.get('music') * 100)}%`);
    this.setLabel('val-sfx', `${Math.round(Settings.get('sfx') * 100)}%`);
    this.setLabel('val-shake', `${Math.round(Settings.get('screenShake') * 100)}%`);
  }

  refreshMenuStats() {
    this.setText(this.el.menuBestScore, formatNumber(Storage.data.bestScore));
    this.setText(this.el.menuBestDistance, formatDistance(Storage.data.bestDistance));
    this.setText(this.el.menuCoins, formatNumber(Storage.data.coinsBank));
  }

  setSectorName(name) {
    this.setText(this.el.menuTagline, name);
  }

  /** Roster cards. Locked characters are revealed by total coin bank spend. */
  buildRoster() {
    const grid = this.el.rosterGrid;
    if (!grid) return;
    grid.innerHTML = '';
    const selected = this.getCharacter();

    // Unlock thresholds are cumulative lifetime coin thresholds.
    const thresholds = { vela: 0, reyes: 300, sable: 900, brook: 2200 };

    for (const character of CHARACTERS) {
      const threshold = thresholds[character.id] ?? 99999;
      const unlocked = Storage.data.coinsBank >= threshold;

      const card = document.createElement('button');
      card.className = 'charcard';
      card.style.setProperty('--card-accent', `#${character.palette.jacket.toString(16).padStart(6, '0')}`);
      if (character.id === selected) card.classList.add('charcard--selected');
      if (!unlocked) card.classList.add('charcard--locked');

      const avatar = document.createElement('div');
      avatar.className = 'charcard__avatar';
      avatar.innerHTML = this.avatarSvg(character);

      const name = document.createElement('span');
      name.className = 'charcard__name';
      name.textContent = character.name;

      const role = document.createElement('span');
      role.className = 'charcard__role';
      role.textContent = character.role;

      const blurb = document.createElement('span');
      blurb.className = 'charcard__blurb';
      blurb.textContent = unlocked ? character.blurb : `Earn ${formatNumber(threshold - Storage.data.coinsBank)} more quids to unlock`;

      card.append(avatar, name, role, blurb);

      if (!unlocked) {
        const lock = document.createElement('span');
        lock.className = 'charcard__lock';
        lock.textContent = '🔒';
        card.append(lock);
      }

      card.addEventListener('click', () => {
        if (!unlocked) {
          this.toast(`${character.name} is locked`, '🔒');
          return;
        }
        this.bus.emit('ui:selectCharacter', character.id);
        this.buildRoster();
        audioClick();
      });

      grid.append(card);
    }
  }

  /**
   * A compact SVG portrait built from the character's own palette, so the
   * roster reads instantly without needing separate artwork.
   */
  avatarSvg(character) {
    const p = character.palette;
    const hex = (n) => `#${n.toString(16).padStart(6, '0')}`;
    const accent = hex(p.jacket);
    const dark = hex(p.jacketDark);
    const skin = hex(p.skin);
    const hair = hex(p.hair);
    const extra =
      character.accessory === 'goggles'
        ? `<circle cx="78" cy="42" r="8" fill="none" stroke="${hex(p.trim)}" stroke-width="4"/><circle cx="102" cy="42" r="8" fill="none" stroke="${hex(p.trim)}" stroke-width="4"/>`
        : character.accessory === 'hardhat'
          ? `<path d="M62 38 a28 22 0 0 1 56 0 z" fill="#ffc233"/><rect x="58" y="36" width="64" height="6" rx="3" fill="#ffc233"/>`
          : character.accessory === 'mask'
            ? `<rect x="68" y="46" width="44" height="20" rx="6" fill="#2a3038"/>`
            : '';

    return `<svg viewBox="0 0 160 130" width="100%" height="100%" aria-hidden="true">
      <defs>
        <linearGradient id="g-${character.id}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.35"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="160" height="130" fill="url(#g-${character.id})"/>
      <path d="M50 130 v-22 a30 30 0 0 1 60 0 v22 z" fill="${accent}"/>
      <path d="M62 130 v-20 a18 18 0 0 1 36 0 v20 z" fill="${dark}" opacity="0.7"/>
      <rect x="66" y="26" width="28" height="24" rx="9" fill="${skin}"/>
      <circle cx="80" cy="30" r="17" fill="${skin}"/>
      <path d="M63 30 a17 17 0 0 1 34 0 l0 -6 a17 17 0 0 0 -34 0 z" fill="${hair}"/>
      <circle cx="73" cy="42" r="2.6" fill="#1b1f26"/>
      <circle cx="87" cy="42" r="2.6" fill="#1b1f26"/>
      ${extra}
      <rect x="96" y="86" width="26" height="20" rx="5" fill="${hex(p.bag)}"/>
    </svg>`;
  }

  refreshMissions() {
    const list = this.el.missionList;
    if (!list) return;
    list.innerHTML = '';
    for (const mission of this.missions.missions) {
      const pct = MissionSystem.progressOf(mission);
      const card = document.createElement('div');
      card.className = 'mission' + (mission.completed ? ' mission--complete' : '');
      card.innerHTML = `
        <div class="mission__top">
          <span class="mission__name">${mission.name}</span>
          <span class="mission__reward">+${mission.reward} ◈</span>
        </div>
        <div class="mission__blurb">${mission.blurb.replace('{target}', mission.target).replace('{multiplier}', mission.target)}</div>
        <div class="mission__bar"><span style="width:${pct * 100}%"></span></div>
        <div class="mission__foot">
          <span>${formatNumber(Math.min(mission.progress, mission.target))} / ${formatNumber(mission.target)}</span>
          <span>${mission.completed ? 'Complete' : `${mission.runsLeft} runs left`}</span>
        </div>`;
      list.append(card);
    }

    const total = this.missions.missions.filter((m) => m.completed).length;
    const totalEl = $('mission-stat-total');
    if (totalEl) totalEl.textContent = String(total);
    const runsEl = $('mission-stat-runs');
    if (runsEl) runsEl.textContent = String(Storage.data.totalRuns);

    this.refreshHudMissions();
  }

  refreshUpgrades() {
    const list = this.el.upgradeList;
    if (!list) return;
    list.innerHTML = '';
    for (const id of POWERUP_IDS) {
      const def = POWERUPS[id];
      const up = UPGRADES[id];
      const level = this.powerups.level(id);
      const cost = this.powerups.costFor(id);
      const maxed = cost === null;

      const row = document.createElement('div');
      row.className = 'upgrade';
      row.style.setProperty('--up-accent', def.cssColor);

      const pips = Array.from({ length: up.maxLevel }, (_, i) => {
        const on = i < level;
        return `<span class="upgrade__pip ${on ? 'upgrade__pip--on' : ''}"></span>`;
      }).join('');

      row.innerHTML = `
        <div class="upgrade__icon" style="color:${def.cssColor}">${POWERUP_ICONS[id]}</div>
        <div class="upgrade__body">
          <div class="upgrade__name">${up.label}</div>
          <div class="upgrade__desc">${def.blurb} · Level ${level}/${up.maxLevel}</div>
          <div class="upgrade__pips">${pips}</div>
        </div>
        <button class="btn ${maxed ? 'btn--muted' : 'btn--ghost'} btn--small" ${maxed ? 'disabled' : ''}>
          ${maxed ? 'MAX' : `${cost} ◈`}
        </button>`;

      const button = row.querySelector('button');
      button.addEventListener('click', () => {
        const result = this.powerups.purchase(id);
        if (result.ok) {
          audioClick();
          this.toast(`${up.label} upgraded`, '↑', def.cssColor);
          this.refreshUpgrades();
          this.refreshMenuStats();
        } else {
          audioBack();
          this.toast(
            result.reason === 'maxed' ? 'Already at maximum' : 'Not enough quids',
            '✕',
            '#ff5b5b'
          );
        }
      });

      list.append(row);
    }

    const bank = this.el.upgradesBank;
    if (bank) bank.textContent = formatNumber(Storage.data.coinsBank);
  }

  // =========================================================================
  // HUD updates
  // =========================================================================

  updateHud(scoring, powerups, difficulty01) {
    // Score
    const score = Math.floor(scoring.displayScore);
    if (this.cache.score !== score) {
      this.cache.score = score;
      this.el.hudScore.textContent = formatNumber(score);
    }

    // Distance
    const dist = Math.floor(scoring.distance);
    if (this.cache.distance !== dist) {
      this.cache.distance = dist;
      this.el.hudDistance.textContent = String(dist);
    }

    // Coins
    const coins = scoring.coins;
    if (this.cache.coins !== coins) {
      this.cache.coins = coins;
      this.el.hudCoins.textContent = formatNumber(coins);
      this.bump(this.el.hudCoins.parentElement, 'hud-coins--bump');
    }

    // Multiplier
    const mult = scoring.multiplier;
    if (this.cache.multiplier !== mult) {
      this.cache.multiplier = mult;
      this.el.hudMultiplierValue.textContent = String(mult);
      this.el.hudMultiplier.classList.toggle('multiplier--hot', mult >= 4);
    }
    const pct = scoring.multiplierProgress01;
    if (Math.abs((this.cache.multFill ?? -1) - pct) > 0.01) {
      this.cache.multFill = pct;
      this.el.hudMultiplierFill.style.width = `${pct * 100}%`;
    }

    // Power-ups
    this.updateHudPowerups(powerups);
    this.refreshHudMissions(scoring);

    // Speed lines ramp in at high speed.
    const showLines = difficulty01 > 0.55;
    if (this.cache.speedLines !== showLines) {
      this.cache.speedLines = showLines;
      this.el.fxSpeedlines.classList.toggle('fx-speedlines--on', showLines);
    }
  }

  updateHudPowerups(powerups) {
    const snapshot = powerups.snapshot();
    const key = snapshot.map((p) => `${p.id}${Math.round(p.fraction * 20)}`).join('|');
    if (this.cache.powerupsKey === key) return;
    const structureChanged = this.cache.powerupsKey?.split('|').map((s) => s.split(/(?=\d)/)[0]).join('|') !== key.split('|').map((s) => s.split(/(?=\d)/)[0]).join('|');
    this.cache.powerupsKey = key;

    if (structureChanged || !this.el.hudPowerups.childElementCount) {
      this.el.hudPowerups.innerHTML = '';
      for (const entry of snapshot) {
        const def = POWERUPS[entry.id];
        const node = document.createElement('div');
        node.className = 'pu';
        node.style.setProperty('--pu-accent', def.cssColor);
        node.innerHTML = `
          <div class="pu__icon">
            ${POWERUP_ICONS[entry.id]}
            <span class="pu__ring"></span>
          </div>`;
        node.dataset.id = entry.id;
        this.el.hudPowerups.append(node);
      }
    }

    // Update rings in place — cheap, and avoids re-creating nodes each frame.
    [...this.el.hudPowerups.children].forEach((node, i) => {
      const entry = snapshot[i];
      if (!entry) return;
      const ring = node.querySelector('.pu__ring');
      if (ring) ring.style.width = `${entry.fraction * 100}%`;
      // Blink when nearly out.
      node.classList.toggle('pu--expiring', !entry.infinite && entry.fraction < 0.25);
    });
  }

  refreshHudMissions(scoring) {
    const list = this.missions.missions;
    // Only show the first two so the HUD stays uncluttered.
    const visible = list.slice(0, 2);
    const key = visible.map((m) => `${m.templateId}${MissionSystem.progressOf(m)}`).join('|');
    if (this.cache.hudMissionKey === key) return;
    const structureChanged = this.cache.hudMissionKey?.split('|').map((s) => s.slice(0, 4)).join() !== key.split('|').map((s) => s.slice(0, 4)).join();
    this.cache.hudMissionKey = key;

    if (structureChanged || !this.el.hudMission.childElementCount) {
      this.el.hudMission.innerHTML = '';
      for (const mission of visible) {
        const node = document.createElement('div');
        node.className = 'mmini';
        node.innerHTML = `
          <span class="mmini__name"></span>
          <span class="mmini__count"></span>
          <span class="mmini__bar"><span></span></span>`;
        this.el.hudMission.append(node);
      }
    }
    [...this.el.hudMission.children].forEach((node, i) => {
      const mission = visible[i];
      if (!mission) return;
      const pct = MissionSystem.progressOf(mission);
      node.classList.toggle('mmini--complete', mission.completed);
      node.querySelector('.mmini__name').textContent = mission.completed
        ? `${mission.name}`
        : mission.name;
      // The bar carries the progress; the count is a small secondary readout,
      // and it's suppressed once the mission is done.
      node.querySelector('.mmini__count').textContent = mission.completed
        ? '✓'
        : `${Math.floor(Math.min(mission.progress, mission.target))}/${mission.target}`;
      node.querySelector('.mmini__bar span').style.width = `${pct * 100}%`;
    });
  }

  pulseMultiplier() {
    const el = this.el.hudMultiplier;
    el.classList.remove('multiplier--pulse');
    void el.offsetWidth;
    el.classList.add('multiplier--pulse');
  }

  /** Coin streak callout, shown every few coins in a row. */
  showStreak(text) {
    const el = this.el.streakPop;
    if (el.textContent !== text) el.textContent = text;
    el.classList.remove('streak-pop--show');
    void el.offsetWidth;
    el.classList.add('streak-pop--show');
  }

  // =========================================================================
  // Overlays
  // =========================================================================

  showPauseStats(scoring) {
    const stats = [
      { label: 'Score', value: formatNumber(Math.floor(scoring.displayScore)) },
      { label: 'Quids', value: formatNumber(scoring.coins) },
      { label: 'Distance', value: formatDistance(scoring.distance) },
    ];
    this.el.pauseStats.innerHTML = stats
      .map((s) => `<div class="pstat"><span class="pstat__label">${s.label}</span><span class="pstat__value">${s.value}</span></div>`)
      .join('');
  }

  showGameOver(summary, completedMissions) {
    this.setText(this.el.finalScore, formatNumber(summary.score));
    this.setText(this.el.finalCoins, formatNumber(summary.coins));
    this.setText(this.el.finalDistance, formatDistance(summary.distance));
    this.setText(this.el.finalBest, formatNumber(summary.bestScore));
    this.setText(this.el.finalSpeed, `${Math.round(summary.topSpeed * 3.6)} km/h`);
    this.setText(this.el.finalNearMiss, String(summary.nearMisses));
    this.setText(this.el.finalPowerups, String(summary.powerups));

    this.el.gameoverBanner.classList.toggle('gameover__banner--show', !!summary.newBest);

    this.el.gameoverMissions.innerHTML = completedMissions
      .map(
        (m) =>
          `<div class="mres"><span class="mres__icon">◎</span><span>${m.name}</span><span class="mres__reward">+${m.reward} ◈</span></div>`
      )
      .join('');

    this.refreshMenuStats();
    this.buildRoster();
  }

  /** @param {number} seconds remaining */
  updateReviveTimer(seconds, cost) {
    if (this.cache.reviveTimer !== seconds) {
      this.cache.reviveTimer = seconds;
      this.el.reviveTimer.textContent = seconds.toFixed(1);
    }
    if (this.cache.reviveCost !== cost) {
      this.cache.reviveCost = cost;
      this.el.reviveCost.textContent = cost;
    }
  }

  // =========================================================================
  // FX overlays
  // =========================================================================

  /** Red edge flash on damage. */
  flashDamage() {
    const el = this.el.fxDamage;
    el.classList.remove('fx-damage--hit');
    void el.offsetWidth;
    el.classList.add('fx-damage--hit');
    // The class must be removed again, otherwise the overlay stays lit and
    // bleeds into every subsequent run.
    clearTimeout(this._damageTimer);
    this._damageTimer = setTimeout(() => {
      el.classList.remove('fx-damage--hit');
    }, 260);
  }

  /** Persistent vignette, e.g. low health or boost. @param {number} 0..1 */
  setVignette(amount) {
    if (this.cache.vignette === amount) return;
    this.cache.vignette = amount;
    this.el.fxVignette.style.opacity = String(amount);
  }

  // =========================================================================
  // Toasts
  // =========================================================================

  /**
   * @param {string} text
   * @param {string} [icon]
   * @param {string} [color] css colour
   */
  toast(text, icon = '✦', color = null) {
    // Cap the stack so a burst of pickups can't cover the screen.
    while (this.el.toasts.childElementCount >= 3) {
      this.el.toasts.firstElementChild.remove();
    }
    const node = document.createElement('div');
    node.className = 'toast';
    if (color) node.style.setProperty('--toast-accent', color);
    node.innerHTML = `<span class="toast__icon">${icon}</span><span></span>`;
    node.lastElementChild.textContent = text;
    this.el.toasts.append(node);

    const timer = setTimeout(() => {
      node.classList.add('toast--leaving');
      const removeTimer = setTimeout(() => node.remove(), 280);
      this._toastTimers.add(removeTimer);
    }, 2200);
    this._toastTimers.add(timer);
  }

  // =========================================================================
  // Loading
  // =========================================================================

  setLoadingProgress(fraction, status) {
    this.el.loadingFill.style.width = `${clamp01(fraction) * 100}%`;
    if (status) this.el.loadingStatus.textContent = status;
  }

  showStartGate() {
    this.el.startGate.hidden = false;
    this.el.loadingStatus.textContent = 'Ready';
  }

  // =========================================================================
  // Small helpers
  // =========================================================================

  setText(el, value) {
    if (!el) return;
    const next = String(value);
    if (el.textContent !== next) el.textContent = next;
  }

  setLabel(id, value) {
    this.setText($(id), value);
  }

  bump(el, className) {
    if (!el) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
  }

  setPerf(text) {
    if (this.el.perf.hidden) return;
    this.el.perf.textContent = text;
  }
}

const POWERUP_ICONS = {
  magnet: '🧲',
  shield: '🛡',
  multiply: '✕',
  boost: '⚡',
};

// Audio cues for UI are delegated to the singleton to avoid a circular import.
import { audio } from '../audio/AudioManager.js';
const audioClick = () => audio.playUiClick();
const audioBack = () => audio.playUiBack();
