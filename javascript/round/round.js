import GameManager from '../game/game-manager.js';
import gameState from '../game/game-state.js';

class Round {

  #botChoice;
  #roundResult;

  constructor() {
    this.#botChoice = '';
    this.#roundResult = '';
  }

  start() {
    GameManager.gm.setGameState(gameState.ANIMATION);
    this.#generateBotChoice();
  }

  #generateBotChoice() {
    const generatedChoice = Math.floor(Math.random() * 3) + 1;
    switch (generatedChoice) {
      case 1:
        this.#botChoice = 'rock';
        break;
      
      case 2:
        this.#botChoice = 'paper';
        break;

      case 3:
        this.#botChoice = 'scissors';
        break;
    }
  }

  #calculateResult() {
    if (this.#botChoice === GameManager.gm.getPlayerChoice()) {
      this.#roundResult = 'tie';
      return;
    }

    switch (GameManager.gm.getPlayerChoice()) {
      case 'rock': 
        this.#roundResult = (this.#botChoice === 'scissors' ? 'win' : 'lose');
        break;
  
      case 'paper':
        this.#roundResult = (this.#botChoice === 'rock' ? 'win' : 'lose');
        break;

      case 'scissors':
        this.#roundResult = (this.#botChoice === 'paper' ? 'win' : 'lose');
        break;
    }
  }
}

export default Round;
