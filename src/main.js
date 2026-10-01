import './ui/styles.css';
import { Game } from './Game.js';

/**
 * Entry point — boots the game and surfaces any fatal error to the user
 * instead of leaving a black screen.
 */
async function main() {
  const game = new Game();
  window.__game = game; // handy for debugging in the console
  await game.boot();
}

main().catch((err) => {
  console.error('[VELOCITA] failed to start:', err);
  const status = document.getElementById('loading-status');
  if (status) {
    status.textContent = 'Failed to start — see console for details.';
    status.style.color = '#ff5b5b';
  }
});
