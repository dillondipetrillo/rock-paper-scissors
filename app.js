// Game will be played against the computer
const choiceBtns = document.querySelectorAll(".choice-btn");
const btnsDiv = document.querySelector(".btns");
const results = document.querySelector(".results");
let computerWins = document.getElementById("computer-score");
let playerWins = document.getElementById("user-score");
const endOfGame = document.querySelector(".end-of-game");

computerWins.textContent = 0;
playerWins.textContent = 0;

let computerScore = 0;
let playerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

// Get the computers choice with the func getComputerChoice
const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * choices.length);

  return choices[randNum];
};

const playRound = (playerSelection, computerSelection) => {
  let gameResult = document.createElement("p");

  if (computerSelection === playerSelection) {
    // Tie
    gameResult.textContent = `It's a Tie! Computer: ${computerSelection} - Player: ${playerSelection}`;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    // Computer wins
    computerScore++;
    computerWins.textContent = computerScore;
    gameResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    // Player wins
    playerScore++;
    playerWins.textContent = playerScore;
    gameResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  results.appendChild(gameResult);
};

const disableBtns = () => {
  choiceBtns.forEach((btn) => (btn.disabled = true));
};

const checkWinner = () => {
  let gameOver = false;

  if (computerScore < 5 && playerScore < 5) return gameOver;

  let winner = document.createElement("p");
  gameOver = true;

  if (computerScore === 5) {
    winner.textContent = "Computer Wins!";
  }
  if (playerScore === 5) {
    winner.textContent = "Player Wins!";
  }

  endOfGame.appendChild(winner);

  disableBtns();

  return gameOver;
};

const resetGame = () => {
  computerWins.textContent = 0;
  playerWins.textContent = 0;

  computerScore = 0;
  playerScore = 0;

  results.replaceChildren();
  endOfGame.replaceChildren();
  btnsDiv.removeChild(btnsDiv.lastElementChild);
  choiceBtns.forEach((btn) => (btn.disabled = false));
};

const showResetBtn = () => {
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset Game";

  resetBtn.addEventListener("click", resetGame);
  btnsDiv.appendChild(resetBtn);
};

choiceBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    playRound(e.target.textContent, getComputerChoice());

    checkWinner() ? showResetBtn() : null;
  })
);
