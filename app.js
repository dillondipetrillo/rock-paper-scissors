// Game will be played against the computer

const choices = ["Rock", "Paper", "Scissors"];
let computerWins = 0;
let playerWins = 0;

// Get the computers choice with the func getComputerChoice
const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * choices.length);

  return choices[randNum];
};

const getPlayerChoice = () => {
  let caseSensitivePlayer;
  do {
    let playerPrompt = prompt("Rock, Paper, or Scissors?", "");

    caseSensitivePlayer =
      playerPrompt[0].toUpperCase() + playerPrompt.slice(1).toLowerCase();
  } while (!choices.includes(caseSensitivePlayer));

  return caseSensitivePlayer;
};

const playRound = (playerSelection, computerSelection) => {
  if (computerSelection === playerSelection) {
    // Tie
    return `It's a Tie! Computer: ${computerSelection} - Player: ${playerSelection}`;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    // Computer wins
    computerWins++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    // Player wins
    playerWins++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
};

const game = () => {
  // play five rounds
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    // use prompt to get the user choice
    let playerSelection = getPlayerChoice();

    // console.log the results of each round
    console.log(playRound(playerSelection, computerSelection));
  }

  // console.log winner at the end
  let winner = computerWins > playerWins ? "Computer" : "Player";
  if (computerWins && playerWins) console.log(`${winner} Wins!`);
  console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
};

game();
