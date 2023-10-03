import gameState from './game-state.js';
import {displayElements, displayElementsHTML} from '../display/display.js';
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
          this.#visibleElements('heroHeader', 'gameMain', 'startGame');
        break;

        case gameState.CHOICE:
          this.#visibleElements('mainHeader', 'subHeader', 'gameMain', 'iconContainer', 'rockCard', 'paperCard', 'scissorsCard');
        break;

        case gameState.ANIMATION:
          this.#visibleElements('mainHeader', 'splitHeader', 'gameMain');

          this.forAnimationCase();

          displayElements.gameCardsContainer = document.getElementById('gameCardsContainer');
          displayElements.cardInGamePlayer = document.getElementById('cardInGamePlayer');
          displayElements.cardInGameAi = document.getElementById('cardInGameAi');

          console.log(displayElements.gameMain.innerHTML);

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

          this.#visibleElements('mainHeader', 'gameMain', 'roundCountContainer', 'gameCardsContainer', ...visibleCards);
          console.log(displayElements.gameMain.innerHTML);
        break;
    }
  }

  #visibleElements(...elements) {
    Object.keys(displayElements).forEach(element => {
      if (elements.includes(element)) {
        displayElements[element].classList.remove('none');
        if(this.#gameState === gameState.RESULT) console.log(element, displayElements[element]);
        if(this.#gameState === gameState.RESULT) console.log(displayElements[element].classList.contains('none'));
      }
      else {
        displayElements[element].classList.add('none');
        if(this.#gameState === gameState.RESULT) console.log(element, displayElements[element]);
        if(this.#gameState === gameState.RESULT) console.log(displayElements[element].classList.contains('none'));
      }
    });
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

  forAnimationCase() {
    // Create gameCardsContainer div
    const gameCardsContainer = document.createElement('div');
    gameCardsContainer.className = 'gameCardsContainer';
    gameCardsContainer.id = 'gameCardsContainer';

    // Create cardInGamePlayer div
    const cardInGamePlayer = document.createElement('div');
    cardInGamePlayer.className = 'cardInGame cardInGamePlayer';
    cardInGamePlayer.id = 'cardInGamePlayer';

    // Add appropriate content to cardInGamePlayer based on player choice
    let playerIcon, playerText;
    switch (this.#playerChoice) {
      case 'rock':
        playerIcon = '<i class="fa-regular fa-hand-back-fist fa-rotate-90 fa-2xl"></i>';
        playerText = 'Rock';
        break;
      case 'paper':
        playerIcon = '<i class="fa-regular fa-hand fa-rotate-90 fa-2xl"></i>';
        playerText = 'Paper';
        break;
      case 'scissors':
        playerIcon = '<i class="fa-regular fa-hand-scissors fa-flip-horizontal fa-2xl"></i>';
        playerText = 'Scissors';
        break;
    }
    cardInGamePlayer.innerHTML = `${playerIcon}<h4>${playerText}</h4>`;

    // Create cardInGameAi div
    const cardInGameAi = document.createElement('div');
    cardInGameAi.className = 'cardInGame cardInGameAi';
    cardInGameAi.id = 'cardInGameAi';

    // Add appropriate content to cardInGameAi based on bot choice
    let botChoice = this.#rounds[this.#currentRound-1].getBotChoice();
    let botIcon, botText;
    switch (botChoice) {
      case 'rock':
        botIcon = '<i class="fa-regular fa-hand-back-fist fa-rotate-90 fa-2xl"></i>';
        botText = 'Rock';
        break;
      case 'paper':
        botIcon = '<i class="fa-regular fa-hand fa-rotate-90 fa-2xl"></i>';
        botText = 'Paper';
        break;
      case 'scissors':
        botIcon = '<i class="fa-regular fa-hand-scissors fa-flip-horizontal fa-2xl"></i>';
        botText = 'Scissors';
        break;
    }
    cardInGameAi.innerHTML = `${botIcon}<h4>${botText}</h4>`;

    // Append the child divs to gameCardsContainer
    gameCardsContainer.appendChild(cardInGamePlayer);
    gameCardsContainer.appendChild(cardInGameAi);

    // Append gameCardsContainer to gameMain
    displayElements.gameMain.appendChild(gameCardsContainer);

    // Update displayElements object
    displayElements.gameCardsContainer = gameCardsContainer;
    displayElements.cardInGamePlayer = cardInGamePlayer;
    displayElements.cardInGameAi = cardInGameAi;

  }
}

export default GameManager;
