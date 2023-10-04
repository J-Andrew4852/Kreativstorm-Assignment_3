import GameManager from '../game/game-manager.js';
import gameState from '../game/game-state.js';

class Round {

  #botChoice;
  #roundResult;

  constructor() {
    this.#botChoice = '';
    this.#roundResult = '';
  
    GameManager.gm.pushRound(this);
  }

  start() {
    this.#generateBotChoice();
    GameManager.gm.setGameState(gameState.ANIMATION);
    let aiCard = document.getElementById('aiCard')
    let youCard = document.getElementById('youCard')
    aiCard.classList.remove('aiCardAni');
    youCard.classList.remove('youCardAni');
    aiCard.style.opacity = '1';
    aiCard.classList.remove('none')
    youCard.style.opacity = '1';
    youCard.classList.remove('none')
    setTimeout(() => {
      aiCard.classList.add('aiCardAni')
      youCard.classList.add('youCardAni')
    }, 250);
    
    setTimeout(() => {
      this.#calculateResult();
      if (this.#roundResult === 'win') {
        setTimeout(() => {
          aiCard.style.opacity = '0';
        }, 100)
        setTimeout(() => {
          aiCard.classList.add('none')
        }, 1500)
        setTimeout(() => {
          GameManager.gm.setGameState(gameState.RESULT);
        }, 2500)
        return
      }
      if (this.#roundResult === 'lose') {
        setTimeout(() => {
          youCard.style.opacity = '0';
        }, 100)
        setTimeout(() => {
          youCard.classList.add('none')
        }, 1500)
        setTimeout(() => {
          GameManager.gm.setGameState(gameState.RESULT);
        }, 2500)
        return
      }
      setTimeout(() => {
        GameManager.gm.setGameState(gameState.RESULT);
      }, 500)
    }, 3000);
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
