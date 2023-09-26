const momtazText = document.querySelector("#momtazText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const buttonChoice = document.querySelectorAll(".buttonChoice");

let momtaz;
let computer;
let result;

buttonChoice.forEach(button => button.addEventListener("click", () =>{

       momtaz = button.textContent;
       computerTurn();
       momtazText.textContent = `momtaz: ${momtaz}`;
       computerText.textContent = `computer: ${computer}`;
       resultText.textContent = checkWinner();



}));
function computerTurn(){

       const randNum = Math.floor(Math.random() * 3) + 1;
       switch(randNum){
              case 1:
                     computer = "ROCK";
                     break;
              case 2:
                     computer = "PAPER";
                     break;
              case 3:
                     computer = "SCISSORS";
                     break;}}

function checkWinner(){
       if(momtaz == computer){
              return "Draw!";
       }

       else if(computer == "ROCK"){
              return (momtaz == "PAPER") ? "You win!" : "You Lose!"
       }

       else if(computer == "PAPER"){
              return(momtaz == "SCISSORS") ? "You win!" : "You Lose"
       }

       else if(computer == "SCISSORS"){
              return(momtaz == "ROCK") ? "You win!" : "You Lose"
       }
}