const array = ["rock", "paper", "scissors"];

function playRound() {
  var computerSelection = array[Math.floor(Math.random() * array.length)];
  var playerSelection = prompt("Rock, paper, scissors");
  var playerSelection = playerSelection.toLowerCase();
  var result = 0;
  if (playerSelection === computerSelection) {
    result = 'tie'
    console.log(result);    
  // } else if (playerSelection === "paper" && computerSelection === "paper") {
  //   result = "Tie";
  // } else if (
  //   playerSelection === "scissors" &&
  //   computerSelection === "scissors"
  // ) {
    // console.log(
    //   `You choise ${playerSelection} and PCU choise ${computerSelection} Result: Tie`
    // );
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result = 'Loose'
    console.log(result);  
    // console.log(
    //   `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    // );
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = 'Win'
    console.log(result);  
    // console.log(
    //   `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    // );
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = 'Win'
    console.log(result);  
    // console.log(
    //   `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    // );
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = 'Win'
    console.log(result);  
    // console.log(
    //   `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You WIN`
    // );
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = 'Loose'
    console.log(result);  
    // console.log(
    //   `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You LOOSE`
    // );
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = 'Loose'
    console.log(result);  
    // console.log(
    //   `You choise ${playerSelection} and PCU choise ${computerSelection} Result: You LOOSE`
    // );
  } else console.log("Error");
  // return result
}

function game() {
  var playerCount = 0
  for (let i = 1; i <= 5; i++) {
    playRound(i);
    console.log(playerCount)
  }
}



// function finalResult(){
//   var playerCount = 0
//   for (let i = 0; i + game(i); i++) {
//     playerCount
//   }
// }
console.log(game());


