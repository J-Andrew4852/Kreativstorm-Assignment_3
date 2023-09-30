import gameManager from './game-manager.js';
import gameState from './game-state.js';

class Game {
  static start() {
    gameManager.setGameState(gameState.START);
    gameManager.updateDisplay();
  }
}

export default Game;