import gameState from './game-state.js';
import displayElements from './display.js';

class GameManager {
  constructor() {
    this.gameState = null;
  }

  setGameState(state) {
    this.gameState = state;
  }

  updateDisplay() {
    if (this.gameState === gameState.START) {
      displayElements.heroHeader.classList.remove('none');
      displayElements.startGame.classList.remove('none');
    }
  }
}

export default new GameManager();
