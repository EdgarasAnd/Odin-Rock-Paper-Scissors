const array = ["rock", "paper", "scissors"];
// const btnRock = document.getElementById('rock')
// const btnPaper = document.getElementById('paper')
// const btnScissors = document.getElementById('scissors')
var btn = document.querySelectorAll('button');
    
// function getButtonId(i) {
//   let buttonId = i.target.id;
//   console.log(buttonId);
// } 




// for (i of btns) {
//   (function(i) {
//     i.addEventListener('click', function() {
//       document.querySelector('.msg').innerHTML = i.innerHTML;
//     });
//   })(i);
// }
const resultHtml = document.querySelector('tbody')
const finalResultHtml = document.querySelector('.final-result')





function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
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

var roundResult = 0;
var playerScore = 0;
var computerScore = 0;
var computerWonRound = `You won this round`;
var youWonRound = "Comp. won this round";
var tie = "Tie";
var error = 'error';

btn.forEach((button) => {
  button.addEventListener('click', (i) => {
    const playerSelection = i.target.id;
  console.log(playerSelection);

  const computerSelection = array[Math.floor(Math.random() * array.length)];
  // for (let i = 1; i <= 1; i++) {
    
    // const playerSelection = prompt("Rock, paper, scissors").toLowerCase();
  
  
    const roundResult = playRound(computerSelection, playerSelection);
    resultHtml.innerHTML += (`<tr>
    <td>${playerSelection}</td>
    <td>${computerSelection}</td>
  </tr>`)
    console.log(roundResult);
    
    if (roundResult === computerWonRound) {
      playerScore++;
    } else if (roundResult === youWonRound) {
      computerScore++;
    } else {
      tie++;
    }
  // }
  
  });
  
});


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
