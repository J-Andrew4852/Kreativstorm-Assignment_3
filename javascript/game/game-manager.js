import gameState from './game-state.js';
import displayElements from '../display/display.js';

class GameManager {

  static gm = new this();

  constructor() {
    this.gameState = null;
    this.currentRound = 0;
    this.roundsResult = [];
  }

  updateGameState(state) {
    this.gameState = state;
  }

  updateCurrentRound() {
    this.currentRound = this.currentRound + 1;
  }

  updateDisplay() {
      switch (this.gameState) {
        case gameState.START:
          Object.keys(displayElements).forEach(element => {
            if (element === 'heroHeader' || element === 'startGame') {
              displayElements[element].classList.remove('none');
            } else {
              displayElements[element].classList.add('none');
            }
          });
        break;

      case gameState.CHOICE:
        Object.keys(displayElements).forEach(element => {
          if (element === 'mainHeader' || element === 'subHeader' || element === 'iconContainer') {
            displayElements[element].classList.remove('none');
          } else {
            displayElements[element].classList.add('none');
          }
        });
      break;
    }
  }
}

export default GameManager;
