import gameState from './game-state.js';
import displayElements from '../display/display.js';

class GameManager {

  static gm = new this();

  constructor() {
    this.gameState = null;
  }

  setGameState(state) {
    this.gameState = state;
  }

  updateDisplay() {
    if (this.gameState === gameState.START) {

      Object.keys(displayElements).forEach(element => {
        if (element === 'heroHeader' || element === 'startGame') {
          displayElements[element].classList.remove('none');
        } else {
          displayElements[element].classList.add('none');
        }
      });
      
    } else if (this.gameState === gameState.INGAME) {
      // ...
    } else  {
      // ...
    }
  }
}

export default GameManager;
