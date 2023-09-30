import GameManager from './game-manager.js';
import gameState from './game-state.js';
import displayElements from '../display/display.js';

class Game {
  static start() {
    Game.#registerEvents();
    GameManager.gm.updateGameState(gameState.START);
    GameManager.gm.updateDisplay();
  }

  static #registerEvents() {
    displayElements.startGame.addEventListener('click', () => {
      GameManager.gm.updateGameState(gameState.CHOICE);
      GameManager.gm.updateDisplay();
      GameManager.gm.updateCurrentRound();
    });
  }
}

export default Game;