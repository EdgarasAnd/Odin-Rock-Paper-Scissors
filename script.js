const array = ["rock", "paper", "scissors"];
const computerSelection = array[Math.floor(Math.random() * array.length)];

var playerSelection = prompt("Rock, paper, scissors");
var playerSelection = playerSelection.toLowerCase()

function game() {
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
// function playRound(playerSelection, computerSelection) {

//   return (`Player choise: ${playerSelection} ` + `PCU chose: ${computerSelection}`)
// }

// function game() {
//     for (let i = 1; i <= 5; i++) {
//       if ()
//       }
// }

console.log(game());
