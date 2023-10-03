import GameManager from '../game/game-manager.js';
import gameState from '../game/game-state.js';

class Round {

  #botChoice;
  #roundResult;

  constructor() {
    this.#botChoice = '';
    this.#roundResult = '';
  
    GameManager.gm.pushRound(this);
    console.log('Round pushed');
  }

  start() {
    this.#generateBotChoice();
    console.log('Bot choice: ', this.getBotChoice());
    GameManager.gm.setGameState(gameState.ANIMATION);
    
    setTimeout(() => {
      this.#calculateResult();
      GameManager.gm.setGameState(gameState.RESULT);
    }, 1400);
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

  getBotChoice() {
    return this.#botChoice;
  }

  getRoundResult() {
    return this.#roundResult;
  }
}

export default Round;
