import gameState from './game-state.js';
import GameManager from './game-manager.js';
import Display from '../display/display.js';
import Round from '../round/round.js';

class Game {
  static start() {
    Game.#registerEvents();
    GameManager.gm.setGameState(gameState.START);
  }

  static #registerEvents() {
    Display.displayElements['startGame'].addEventListener('click', () => {
      this.#onClickGameStart();
    });

    Display.displayElements['rockCard'].addEventListener('click', () => {
      this.#onClickRockCard();
    });

    Display.displayElements['paperCard'].addEventListener('click', () => {
      this.#onClickPaperCard();
    });

    Display.displayElements['scissorsCard'].addEventListener('click', () => {
      this.#onClickScissorsCard();
    });
  }

  static #onClickGameStart() {
    GameManager.gm.updateCurrentRound();
    GameManager.gm.setGameState(gameState.CHOICE);
  }

  static #onClickRockCard() {
    GameManager.gm.setPlayerChoice('rock');
    new Round().start();
  }

  static #onClickPaperCard() {
    GameManager.gm.setPlayerChoice('paper');
    new Round().start();
  }

  static #onClickScissorsCard() {
    GameManager.gm.setPlayerChoice('scissors');
    new Round().start();
  }

}

export default Game;