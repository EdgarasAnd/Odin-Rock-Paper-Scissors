const array = ["Rock", "Paper", "Scissors"];
const computerSelection = array[Math.floor(Math.random() * array.length)];

const playerSelection = prompt("Rock, paper, scissors");

function game() {
  if (playerSelection === "Rock" && computerSelection === "Rock") {
    console.log(`You both choise ${playerSelection} Result: Tie`);
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: Tie`
    );
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: Tie`
    );
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    );
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    );
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    );
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    );
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    console.log(
      `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You LOOSE`
    );
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
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
