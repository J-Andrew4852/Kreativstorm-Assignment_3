import GameManager from './game-manager.js';
import gameState from './game-state.js';
import displayElements from '../display/display.js';

class Game {
  static start() {
    Game.#registerEvents();
    GameManager.gm.updateGameState(gameState.START);
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
    GameManager.gm.updateGameState(gameState.CHOICE);
    GameManager.gm.updateDisplay();
    GameManager.gm.updateCurrentRound();
  }

  static #onClickRockCard() {
    GameManager.gm.updatePlayerChoice(1);
  }

  static #onClickPaperCard() {
    GameManager.gm.updatePlayerChoice(2);
  }

  static #onClickScissorsCard() {
    GameManager.gm.updatePlayerChoice(3);
  }

}

export default Game;