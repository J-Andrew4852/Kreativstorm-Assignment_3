import gameState from './game-state.js';
import Display from '../display/display.js';
import Round from '../round/round.js';

class GameManager {

  static gm = new this();

  #gameState;
  #currentRound;
  #currentRoundResult;
  #playerChoice;
  #rounds;

  constructor() {
    this.#gameState = null;
    this.#currentRound = 0;
    this.#currentRoundResult = '';
    this.#playerChoice = '';
    this.#rounds = [];
  }

  updateDisplay() {
      switch (this.#gameState) {
        case gameState.START:
          Display.visibleElements('heroHeader', 'gameMain', 'startGame');
          break;

        case gameState.CHOICE:
          Display.updateMainHeader(this.getCurrentRound());
          Display.visibleElements('mainHeader', 'subHeader', 'gameMain', 'iconContainer', 'rockCard', 'paperCard', 'scissorsCard');
          break;

        case gameState.ANIMATION:
          console.log('Current round: ', this.getCurrentRound());
          console.log(this.#rounds[this.getCurrentRound()-1]);
          Display.updateChosenCards(this.#playerChoice, this.#rounds[this.getCurrentRound()-1].getBotChoice());
          Display.visibleElements('mainHeader', 'splitHeader', 'gameMain', 'iconContainer', 'youCard', 'aiCard');
          break;

        case gameState.RESULT:
          this.setCurrentRoundResult(this.#rounds[this.getCurrentRound()-1].getRoundResult());
          const visibleCards = [];
    
          switch(this.getCurrentRoundResult()) {
            case 'tie':
              visibleCards.push('youCard', 'aiCard');
              break;

            case 'win':
              visibleCards.push('youCard');
              break;

            case 'lose':
              visibleCards.push('aiCard');
              break;
          }

          Display.updateSubHeaderResult(this.getCurrentRoundResult());
          Display.updateTopCircle(this.getCurrentRound(), this.getCurrentRoundResult());
          Display.visibleElements('mainHeader', 'gameMain', 'subHeaderResult', 'roundCountContainerTop', 'iconContainer', ...visibleCards);

          setTimeout(() => {
            this.updateCurrentRound();
            this.setGameState(gameState.CHOICE);
          }, 2000);

          break;
    }
  }

  pushRound(round) {
    this.#rounds.push(round);
    console.log('Rounds: ', this.#rounds);
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

  setCurrentRoundResult(currentRoundResult) {
    this.#currentRoundResult = currentRoundResult;
  }

  getCurrentRoundResult() {
    return this.#currentRoundResult;
  }

  getPlayerChoice() {
    return this.#playerChoice;
  }

  getGameState() {
    return this.#gameState;
  }
}

export default GameManager;
