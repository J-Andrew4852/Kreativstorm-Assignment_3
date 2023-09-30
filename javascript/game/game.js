import GameManager from './game-manager.js';
import gameState from './game-state.js';

class Game {
  static start() {
    GameManager.gm.setGameState(gameState.START);
    GameManager.gm.updateDisplay();
  }
}

export default Game;