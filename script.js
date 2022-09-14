const array = ["rock", "paper", "scissors"];
// const btnRock = document.getElementById('rock')
// const btnPaper = document.getElementById('paper')
// const btnScissors = document.getElementById('scissors')
// let btns = document.querySelectorAll('button');

// btns.forEach((btns) => {
//   btns.addEventListener('click', () => {
//     const choiceSelection = btns.id.selection;
//     const choose = theChoice.find((choose) => choose.name === choiceSelection);
//     select(choose);
//   })
// });
// console.log()

// for (i of btns) {
//   (function(i) {
//     i.addEventListener('click', function() {
//       document.querySelector('.msg').innerHTML = i.innerHTML;
//     });
//   })(i);
// }
const resultHtml = document.querySelector('tbody')
const finalResultHtml = document.querySelector('.final-result')

var youWonRound = `You won this round`;
var computerWonRound = "Comp. won this round";
var tie = "Tie";
var error = 'error'
var roundResult = 0;
var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return tie;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return youWonRound;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return youWonRound;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return youWonRound;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return computerWonRound;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return computerWonRound;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return computerWonRound;
  } else return (error)
}




for (let i = 1; i <= 5; i++) {
  var computerSelection = array[Math.floor(Math.random() * array.length)];
  var playerSelection = prompt("Rock, paper, scissors").toLowerCase();
  var roundResult = playRound(computerSelection, playerSelection);
  resultHtml.innerHTML += (`<tr>
  <td>${playerSelection}</td>
  <td>${computerSelection}</td>
</tr>`)
  console.log(roundResult);
  
  if (roundResult === youWonRound) {
    playerScore++;
  } else if (roundResult === computerWonRound) {
    computerScore++;
  } else {
    tie++;
  }
}


resultHtml.innerHTML += (`<tr>
  <td><strong>${playerScore}</strong></td>
  <td><strong>${computerScore}</strong></td>
</tr>`)
console.log(
  "Final result is: Your score is " +
    playerScore +
    " " +
    "AI scopre is" +
    " " +
    computerScore
);

if (playerScore > computerScore) {
  finalResultHtml.innerHTML += (`<h3>You WON</h3>`)
  console.log("You win");
}

if (computerScore > playerScore) {
  finalResultHtml.innerHTML += (`<h3>AI WON</h3>`)
}

if (playerScore === computerScore) {
  finalResultHtml.innerHTML += (`<h3>TIE</h3>`)
  console.log("Tie");
}
