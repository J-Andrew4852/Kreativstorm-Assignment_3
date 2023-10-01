import GameManager from './game-manager.js';
import gameState from './game-state.js';
import displayElements from '../display/display.js';

class Game {
  static start() {
    Game.#registerEvents();
    GameManager.gm.setGameState(gameState.START);
    GameManager.gm.updateDisplay();
  }

  static #registerEvents() {
    displayElements.startGame.addEventListener('click', () => {
      this.#onClickGameStart();
    });

    displayElements.rockCard.addEventListener('click', () => {
      this.#onClickRockCard();
    });

    displayElements.paperCard.addEventListener('click', () => {
      this.#onClickPaperCard();
    });

    displayElements.scissorsCard.addEventListener('click', () => {
      this.#onClickScissorsCard();
    });
  }

  static #onClickGameStart() {
    GameManager.gm.setGameState(gameState.CHOICE);
    GameManager.gm.updateDisplay();
    GameManager.gm.updateCurrentRound();
  }

  static #onClickRockCard() {
    GameManager.gm.setPlayerChoice('rock');
  }

  static #onClickPaperCard() {
    GameManager.gm.setPlayerChoice('paper');
  }

  static #onClickScissorsCard() {
    GameManager.gm.setPlayerChoice('scissors');
  }

}

export default Game;