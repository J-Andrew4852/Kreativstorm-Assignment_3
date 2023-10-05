class Display {
  static displayElements = {
    heroHeader: document.getElementById("heroHeader"), // GAME_START, END
    mainHeader: document.getElementById("mainHeader"), // CHOICE, ANIMATION, RESULT
    subHeader: document.getElementById("subHeader"), // CHOICE
    splitHeader: document.getElementById("splitHeader"), // ANIMATION

    gameMain: document.getElementById("gameMain"), // ANIMATION, CHOICE, RESULT, END
    startGame: document.getElementById("startGame"), // GAME_START

    subHeaderResult: document.getElementById("subHeaderResult"), // RESULT
    roundCountContainerTop: document.getElementById("roundCountContainerTop"), // RESULT

    iconContainer: document.getElementById("iconContainer"), // CHOICE
    rockCard: document.getElementById("rockCard"), // CHOICE
    paperCard: document.getElementById("paperCard"), // CHOICE
    scissorsCard: document.getElementById("scissorsCard"), // CHOICE
    youCard: document.getElementById("youCard"), // RESULT
    aiCard: document.getElementById("aiCard"), // RESULT

    matchResult: document.getElementById("matchResult"), // END
    matchResultInfo: document.getElementById("matchResultInfo"), // END
    roundCountContainerBottom: document.getElementById(
      "roundCountContainerBottom"
    ), // END
    endGame: document.getElementById("endGame"), // END
  };

  static visibleElements(...elements) {
    Object.keys(Display.displayElements).forEach((element) => {
      if (elements.includes(element))
        Display.displayElements[element].classList.remove("none");
      else Display.displayElements[element].classList.add("none");
    });
  }

  static updateHeroHeader() {
    Display.displayElements["heroHeader"].innerText = "Match Results";
  }

  static updateMainHeader(currentRound) {
    Display.displayElements["mainHeader"].innerText = `Round ${currentRound}`;
  }

  static updateChosenCards(playerChoice, botChoice) {
    let youCardHTML = "";
    let aiCardHTML = "";

    let rockHTML = `<i class="fa-regular fa-hand-back-fist fa-rotate-90 fa-2xl"></i><h4>Rock</h4>`;
    let paperHTML = `<i class="fa-regular fa-hand fa-rotate-90 fa-2xl"></i><h4>Paper</h4>`;
    let scissorsHTML = `<i class="fa-regular fa-hand-scissors fa-flip-horizontal fa-2xl"></i><h4>Scissors</h4>`;

    switch (playerChoice) {
      case "rock":
        youCardHTML = rockHTML;
        break;

      case "paper":
        youCardHTML = paperHTML;
        break;

      case "scissors":
        youCardHTML = scissorsHTML;
        break;
    }

    switch (botChoice) {
      case "rock":
        aiCardHTML = rockHTML;
        break;

      case "paper":
        aiCardHTML = paperHTML;
        break;

      case "scissors":
        aiCardHTML = scissorsHTML;
        break;
    }

    Display.displayElements["youCard"].innerHTML = youCardHTML;
    Display.displayElements["aiCard"].innerHTML = aiCardHTML;
  }

  static updateSubHeaderResult(currentRoundResult) {
    let text = "";
    let colorClass = "";

    switch (currentRoundResult) {
      case "tie":
        text = "You Tied";
        colorClass = "tieColor";
        break;

      case "win":
        text = "You Win";
        colorClass = "winColor";
        break;

      case "lose":
        text = "You Lose";
        colorClass = "loseColor";
        break;
    }

    Display.displayElements["subHeaderResult"].innerText = text;
    Display.displayElements["subHeaderResult"].classList.remove(
      "tieColor",
      "winColor",
      "loseColor"
    ); // for text color bug fix
    Display.displayElements["subHeaderResult"].classList.add(colorClass);
  }

  static updateMatchResult(matchResult) {
    let text = "";
    let colorClass = "";

    switch (matchResult) {
      case "tie":
        text = "You Tied";
        colorClass = "tieColor";
        break;

      case "win":
        text = "You Win";
        colorClass = "winColor";
        break;

      case "lose":
        text = "You Lose";
        colorClass = "loseColor";
        break;
    }

    Display.displayElements["matchResult"].innerHTML = `<h1>${text}</h1>`;
    Display.displayElements["matchResult"].classList.add(colorClass);
  }

  static updateMatchResultInfo(matchResultInfo) {
    let matchResultInfoHTML = `<span class="tieColor">${matchResultInfo[0]} ${
      matchResultInfo[0] > 1 || matchResultInfo[0] < 1 ? `Ties` : `Tie`
    } - </span>
    <span class="winColor">${matchResultInfo[1]} ${
      matchResultInfo[1] > 1 || matchResultInfo[1] < 1 ? `Wins` : `Win`
    } - </span>
    <span class="loseColor">${matchResultInfo[2]} ${
      matchResultInfo[2] > 1 || matchResultInfo[2] < 1 ? `Loses` : `Lose`
    }</span>`;

    Display.displayElements["matchResultInfo"].innerHTML = matchResultInfoHTML;
  }

  static updateCircle(currentRound, currentRoundResult) {
    const topCircle = document.getElementById(`${currentRound}.0`);
    const bottomCircle = document.getElementById(`${currentRound}.1`);

    topCircle.classList.add(`${currentRoundResult}Background`);
    bottomCircle.classList.add(`${currentRoundResult}Background`);
  }
}

export default Display;
