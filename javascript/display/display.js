class Display {
  static displayElements = {
    heroHeader: document.getElementById('heroHeader'), // GAME_START
    mainHeader: document.getElementById('mainHeader'), // CHOICE, ANIMATION, RESULT
    subHeader: document.getElementById('subHeader'), // CHOICE
    splitHeader: document.getElementById('splitHeader'), // ANIMATION
    
    gameMain: document.getElementById('gameMain'), //
    startGame: document.getElementById('startGame'), // GAME_START
    
    subHeaderResult: document.getElementById('subHeaderResult'); // RESULT
    roundCountContainerTop: document.getElementById('roundCountContainerTop'), // RESULT
  
    circles: document.getElementsByClassName('circle'); // RESULT, END
  
    iconContainer: document.getElementById('iconContainer'), // CHOICE
    rockCard: document.getElementById('rockCard'), // CHOICE
    paperCard: document.getElementById('paperCard'), // CHOICE
    scissorsCard: document.getElementById('scissorsCard'), // CHOICE
    youCard: document.getElementById('youCard'); // RESULT
    aiCard: document.getElementById('aiCard'); // RESULT
  
    roundCountContainerBottom: document.getElementById('roundCountContainerBottom'), // END
  }

  static visibleElements(...elements) {
    Object.keys(displayElements).forEach(element => {
      if (elements.includes(element)) Display.displayElements[element].classList.remove('none');
      else displayElements[element].classList.add('none');
    });
  }
}

export default Display;
