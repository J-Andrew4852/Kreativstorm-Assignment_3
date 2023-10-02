import GameManager from './game-manager.js';
import gameState from './game-state.js';
import displayElements from '../display/display.js';
import Round from '../round/round.js';

class Game {
  static start() {
    Game.#registerEvents();
    GameManager.gm.setGameState(gameState.START);
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
    GameManager.gm.updateCurrentRound();
    GameManager.gm.setGameState(gameState.CHOICE);
  }

  static #onClickRockCard() {
    if(GameManager.gm.getPreviousGameState() !== gameState.START) GameManager.gm.updateCurrentRound();
    GameManager.gm.setPlayerChoice('rock');
    new Round().start();
  }

  static #onClickPaperCard() {
    if(GameManager.gm.getPreviousGameState() !== gameState.START) GameManager.gm.updateCurrentRound();
    GameManager.gm.setPlayerChoice('paper');
    new Round().start();
  }

  static #onClickScissorsCard() {
    if(GameManager.gm.getPreviousGameState() !== gameState.START) GameManager.gm.updateCurrentRound();
    GameManager.gm.setPlayerChoice('scissors');
    new Round().start();
  }

}

export default Game;