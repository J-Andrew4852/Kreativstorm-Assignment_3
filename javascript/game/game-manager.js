import gameState from './game-state.js';
import displayElements from '../display/display.js';
import Round from '../round/round.js';

class GameManager {

  static gm = new this();

  #gameState;
  #previousGameState;
  #currentRound;
  #playerChoice;
  #rounds;

  constructor() {
    this.#gameState = null;
    this.#previousGameState = null;
    this.#currentRound = 0;
    this.#playerChoice = ''; // 1 - Rock, 2 - Paper, 3 - Scissors
    this.#rounds = [];
  }

  updateDisplay() {
      switch (this.#gameState) {
        case gameState.START:
          this.#visibleElements('heroHeader', 'gameMain', 'startGame');
          break;

        case gameState.CHOICE:
          this.#visibleElements('mainHeader', 'subHeader', 'gameMain', 'iconContainer', 'rockCard', 'paperCard', 'scissorsCard');
          break;

        case gameState.ANIMATION:
          this.#visibleElements('mainHeader', 'splitHeader', 'gameMain');
        
          displayElements.gameMain.innerHTML = 
          `<div class="splitHeader">
            <div class="cardPlayer">
              ${this.#playerChoice === 'rock' 
                ? `<i class="fa-regular fa-hand-back-fist fa-rotate-90 fa-2xl"></i><h4>Rock</h4>`
                : this.#playerChoice === 'paper'
                ? `<i class="fa-regular fa-hand fa-rotate-90 fa-2xl"></i><h4>Paper</h4>`
                : `<i class="fa-regular fa-hand-scissors fa-flip-horizontal fa-2xl"></i><h4>Scissors</h4>`}
            </div>

            <div class="cardAi">
              ${this.#rounds[this.#currentRound-1].getBotChoice() === 'rock' 
              ? `<i class="fa-regular fa-hand-back-fist fa-rotate-90 fa-2xl"></i><h4>Rock</h4>`
              : this.#rounds[this.#currentRound-1].getBotChoice() === 'paper'
              ? `<i class="fa-regular fa-hand fa-rotate-90 fa-2xl"></i><h4>Paper</h4>`
              : `<i class="fa-regular fa-hand-scissors fa-flip-horizontal fa-2xl"></i><h4>Scissors</h4>`}
            </div>
          </div>`
          break;
    }
  }

  #visibleElements(...elements) {
    Object.keys(displayElements).forEach(element => {
      if (elements.includes(element)) displayElements[element].classList.remove('none');
      else displayElements[element].classList.add('none');
    });
  }

  pushRound(round) {
    this.#rounds.push(round);
    console.log(this.#rounds[this.#currentRound-1].getBotChoice() );
  }

  updateCurrentRound() {
    this.#currentRound = this.#currentRound + 1;
  }

  setGameState(state) {
    this.#previousGameState = this.#gameState;
    this.#gameState = state;
    this.updateDisplay();
  }

  setPlayerChoice(choice) {
    this.#playerChoice = choice;
  }

  getPlayerChoice() {
    return this.#playerChoice;
  }

  getPreviousGameState() {
    return this.#previousGameState;
  }
}

export default GameManager;
