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
          Display.visibleElements('mainHeader', 'splitHeader', 'gameMain');
          break;

        case gameState.RESULT:
          const visibleCards = [];
          switch(this.#rounds[this.#currentRound-1].getRoundResult()) {
            case 'tie':
              visibleCards.push('cardInGamePlayer', 'cardInGameAi');
            break;

            case 'win':
              visibleCards.push('cardInGamePlayer');
            break;

            case 'lose':
              visibleCards.push('cardInGameAi');
            break;
          }

          Display.visibleElements('mainHeader', 'gameMain', 'roundCountContainer', 'gameCardsContainer', ...visibleCards);
        break;
    }
  }
  }

  pushRound(round) {
    this.#rounds.push(round);
    console.log(this.#rounds[this.#currentRound-1].getBotChoice());
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
