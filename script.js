const array = ["rock", "paper", "scissors"];



function playRound() {
  var computerSelection = array[Math.floor(Math.random() * array.length)];

  var playerSelection = prompt("Rock, paper, scissors");
var playerSelection = playerSelection.toLowerCase()
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log(`You both choise ${playerSelection} Result: Tie`);
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: Tie`
    );
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: Tie`
    );
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    );
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    );
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    );
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    );
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You LOOSE`
    );
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You LOOSE`
    );
  } else console.log("Error");
}


function game() {
    for (let i = 1; i <= 5; i++) {
      playRound(i)
}}

console.log(game());
