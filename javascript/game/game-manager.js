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
    this.#playerChoice = ''; // 1 - Rock, 2 - Paper, 3 - Scissors
    this.#roundsResult = [];
  }

  updateDisplay() {
      switch (this.#gameState) {
        case gameState.START:
          this.#visibleElements('heroHeader', 'startGame');
        break;

        case gameState.CHOICE:
          this.#visibleElements('mainHeader', 'subHeader', 'iconContainer', 'rockCard', 'paperCard', 'scissorsCard');
        break;
    }
  }

  #visibleElements(...elements) {
    Object.keys(displayElements).forEach(element => {
      if (elements.includes(element)) displayElements[element].classList.remove('none');
      else displayElements[element].classList.add('none');
    });
  }

  updateCurrentRound() {
    this.#currentRound = this.#currentRound + 1;
  }

  setGameState(state) {
    this.#gameState = state;
  }

  setPlayerChoice(choice) {
    this.#playerChoice = choice;
  }

  getPlayerChoice() {
    return this.#playerChoice;
  }
}

export default GameManager;
