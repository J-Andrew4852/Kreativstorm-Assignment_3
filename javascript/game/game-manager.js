import gameState from './game-state.js';
import Display from '../display/display.js';
import Round from '../round/round.js';

class GameManager {

  static gm = new this();

  #gameState;
  #currentRound;
  #playerChoice;
  #rounds;

  constructor() {
    this.#gameState = null;
    this.#currentRound = 0;
    this.#playerChoice = '';
    this.#rounds = [];
  }

  updateDisplay() {
      switch (this.#gameState) {
        case gameState.START:
          Display.visibleElements('heroHeader', 'gameMain', 'startGame');
          break;

        case gameState.CHOICE:
          Display.visibleElements('mainHeader', 'subHeader', 'gameMain', 'iconContainer', 'rockCard', 'paperCard', 'scissorsCard');
          break;

        case gameState.ANIMATION:
          Display.updateChosenCards(this.#playerChoice, this.#rounds[this.#currentRound-1].getBotChoice());
          Display.visibleElements('mainHeader', 'splitHeader', 'gameMain', 'iconContainer', 'youCard', 'aiCard');
          break;

        case gameState.RESULT:
          const visibleCards = [];
          switch(this.#rounds[this.#currentRound-1].getRoundResult()) {
            case 'tie':
              visibleCards.push('youCard', 'aiCard');
              break;

            case 'win':
              visibleCards.push('youCard');
              break;

            case 'lose':
              visibleCards.push('youCard');
              break;
          }

          Display.visibleElements('mainHeader', 'gameMain', 'subHeaderResult', 'roundCountContainerTop', 'iconContainer', ...visibleCards);
        break;
    }
  }

  pushRound(round) {
    this.#rounds.push(round);
  }

  updateCurrentRound() {
    this.#currentRound = this.#currentRound + 1;
  }

  setGameState(state) {
    this.#gameState = state;
    this.updateDisplay();
  }

  setPlayerChoice(choice) {
    this.#playerChoice = choice;
  }

  getCurrentRound() {
    return this.#currentRound;
  }

  getPlayerChoice() {
    return this.#playerChoice;
  }

  getGameState() {
    return this.#gameState;
  }
}

export default GameManager;
