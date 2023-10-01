import gameState from './game-state.js';
import displayElements from '../display/display.js';

class GameManager {

  static gm = new this();

  #gameState;
  #currentRound;
  #playerChoice;
  #roundsResult;

  constructor() {
    this.#gameState = null;
    this.#currentRound = 0;
    this.#playerChoice = 0; // 1 - Rock, 2 - Paper, 3 - Scissors
    this.#roundsResult = [];
  }

  updateGameState(state) {
    this.#gameState = state;
  }

  updateCurrentRound() {
    this.#currentRound = this.#currentRound + 1;
  }

  updatePlayerChoice(choice) {
    this.#playerChoice = choice;
  }

  updateDisplay() {
      switch (this.#gameState) {
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
          if (element === 'mainHeader' || element === 'subHeader' 
              || element === 'iconContainer' || element === 'rockCard'
              || element === 'paperCard' || element === 'scissorsCard') {
            displayElements[element].classList.remove('none');
          } else {
            displayElements[element].classList.add('none');
          }
        });
      break;
    }
  }

  getPlayerChoice() {
    return this.#playerChoice;
  }
}

export default GameManager;
