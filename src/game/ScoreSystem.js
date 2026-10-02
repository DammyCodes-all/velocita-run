import { SCORE } from "../core/GameConfig.js";
import { Storage } from "../core/Storage.js";
import { Events } from "../core/EventBus.js";
import { clamp01 } from "../util/MathUtils.js";

/**
 * ScoreSystem — score, streak multiplier, coins and best-run records.
 *
 * The multiplier is the risk/reward core of the genre: it climbs with
 * distance but *resets on impact*, so the player is always deciding whether
 * a greedy line through a tight gap is worth losing a x5.
 */
export class ScoreSystem {
  /** @param {import('../core/EventBus.js').EventBus} bus */
  constructor(bus) {
    this.bus = bus;
    this.reset();
  }

  reset() {
    this.score = 0;
    this.coins = 0;
    this.distance = 0;
    this.multiplier = 1;
    this.multiplierProgress = 0;
    this.nearMisses = 0;
    this.powerupsCollected = 0;
    this.obstaclesDodged = 0;
    this.displayScore = 0;
    this.newBest = false;
    this._coinStreak = 0;
  }

  /**
   * @param {number} dt
   * @param {number} metres travelled this frame
   * @param {object} powerups
   * @returns {number} score delta this frame
   */
  update(dt, metres, powerups) {
    this.distance += metres;
    const gained =
      metres *
      SCORE.PER_METRE *
      this.multiplier *
      (powerups?.scoreMultiplier ?? 1);
    this.score += gained;

    // Multiplier steps every SCORE.MULTIPLIER_STEP metres.
    this.multiplierProgress += metres;
    if (
      this.multiplierProgress >= SCORE.MULTIPLIER_STEP &&
      this.multiplier < SCORE.MULTIPLIER_MAX
    ) {
      this.multiplierProgress -= SCORE.MULTIPLIER_STEP;
      this.multiplier = Math.min(SCORE.MULTIPLIER_MAX, this.multiplier + 1);
      this.bus.emit(Events.MULTIPLIER_CHANGE, { multiplier: this.multiplier });
    }
    return gained;
  }

  addCoins(count) {
    this.coins += count;
    this._coinStreak += 1;
    return count * SCORE.COIN_VALUE * this.multiplier;
  }

  addNearMiss() {
    this.nearMisses += 1;
    const bonus = SCORE.NEAR_MISS * this.multiplier;
    this.score += bonus;
    return bonus;
  }

  addPowerup() {
    this.powerupsCollected += 1;
  }

  addDodge() {
    this.obstaclesDodged += 1;
  }

  /** Called when the player takes a hit. Losing the multiplier is the sting. */
  breakStreak() {
    if (this.multiplier <= 1) {
      this.multiplierProgress = 0;
      return 0;
    }
    const lost = this.multiplier;
    this.multiplier = 1;
    this.multiplierProgress = 0;
    this.bus.emit(Events.MULTIPLIER_CHANGE, { multiplier: 1, lost });
    return lost;
  }

  /**
   * Smooth the score toward the real value for the HUD, so the counter rolls
   * up rather than snapping — a small detail that makes big numbers feel earned.
   */
  updateDisplay(dt) {
    const diff = this.score - this.displayScore;
    if (Math.abs(diff) < 1) {
      this.displayScore = this.score;
      return;
    }
    // Catch up fast when far behind, ease when close.
    const catchUp = diff > 200 ? 6 : 2.4;
    this.displayScore = Math.min(
      this.score,
      this.displayScore + diff * catchUp * dt,
    );
  }

  /** Finalise a run, writing records. Returns a summary. */
  finalize() {
    const finalScore = Math.floor(this.score);
    const d = Storage.data;
    this.newBest = finalScore > d.bestScore;

    Storage.update((data) => {
      data.bestScore = Math.max(data.bestScore, finalScore);
      data.bestDistance = Math.max(
        data.bestDistance,
        Math.floor(this.distance),
      );
      data.totalRuns += 1;
      data.totalCoins += this.coins;
      data.coinsBank += this.coins;
    });

    return {
      score: finalScore,
      coins: this.coins,
      distance: Math.floor(this.distance),
      bestScore: Storage.data.bestScore,
      bestDistance: Storage.data.bestDistance,
      newBest: this.newBest,
      nearMisses: this.nearMisses,
      powerups: this.powerupsCollected,
    };
  }

  /** Progress toward the next multiplier, 0..1 — drives the HUD bar. */
  get multiplierProgress01() {
    return clamp01(this.multiplierProgress / SCORE.MULTIPLIER_STEP);
  }
}
