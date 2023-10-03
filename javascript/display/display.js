class Display {
  static displayElements = {
    heroHeader: document.getElementById('heroHeader'), // GAME_START
    mainHeader: document.getElementById('mainHeader'), // CHOICE, ANIMATION, RESULT
    subHeader: document.getElementById('subHeader'), // CHOICE
    splitHeader: document.getElementById('splitHeader'), // ANIMATION
    
    gameMain: document.getElementById('gameMain'), //
    startGame: document.getElementById('startGame'), // GAME_START
    
    subHeaderResult: document.getElementById('subHeaderResult'), // RESULT
    roundCountContainerTop: document.getElementById('roundCountContainerTop'), // RESULT
  
    iconContainer: document.getElementById('iconContainer'), // CHOICE
    rockCard: document.getElementById('rockCard'), // CHOICE
    paperCard: document.getElementById('paperCard'), // CHOICE
    scissorsCard: document.getElementById('scissorsCard'), // CHOICE
    youCard: document.getElementById('youCard'), // RESULT
    aiCard: document.getElementById('aiCard'), // RESULT
  
    roundCountContainerBottom: document.getElementById('roundCountContainerBottom'), // END
  }

  static visibleElements(...elements) {
    Object.keys(Display.displayElements).forEach(element => {
      if (elements.includes(element)) Display.displayElements[element].classList.remove('none');
      else Display.displayElements[element].classList.add('none');
    });
  }

  static updateChosenCards(playerChoice, botChoice) {
    let youCardHTML = '';
    let aiCardHTML = '';

    let rockHTML = `<i class="fa-regular fa-hand-back-fist fa-rotate-90 fa-2xl"></i><h4>Rock</h4>`;
    let paperHTML = `<i class="fa-regular fa-hand fa-rotate-90 fa-2xl"></i><h4>Paper</h4>`;
    let scissorsHTML = `<i class="fa-regular fa-hand-scissors fa-flip-horizontal fa-2xl"></i><h4>Scissors</h4>`;

    switch (playerChoice) {
      case 'rock':
        youCardHTML = rockHTML;
        break;
      
      case 'paper':
        youCardHTML = paperHTML;
        break;
      
      case 'scissors':
        youCardHTML = scissorsHTML;
        break;
    }

    switch(botChoice) {
      case 'rock':
        aiCardHTML = rockHTML;
        break;
      
      case 'paper':
        aiCardHTML = paperHTML;
        break;
      
      case 'scissors':
        aiCardHTML = scissorsHTML;
        break;
    }

    Display.displayElements['youCard'].innerHTML = youCardHTML;
    Display.displayElements['aiCard'].innerHTML = aiCardHTML;
  }

  static updateSubHeaderResult(currentRoundResult) {
    let text = '';
    let colorClass = '';

    switch (currentRoundResult) {
      case 'tie':
        text = 'You Tied';
        colorClass = 'tieColor';
        break;

      case 'win':
        text = 'You Win';
        colorClass = 'winColor';
        break;
      
      case 'lose':
        text = 'You Lose';
        colorClass = 'loseColor';
        break;
    }

    Display.displayElements['subHeaderResult'].innerText = text;
    Display.displayElements['subHeaderResult'].classList.add(colorClass);
  }

  static updateTopCircle(currentRound, currentRoundResult) {
    const circle = document.getElementById(`${currentRound}.0`);
    circle.classList.add(`${currentRoundResult}Background`);
  }
}

export default Display;
