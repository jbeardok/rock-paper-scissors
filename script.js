function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let int = Math.floor(Math.random() * 3);
    return choices[int];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    if ((playerChoice == 'rock' && computerSelection == 'paper') || 
        (playerChoice == 'scissors' && computerSelection == 'rock') ||
        (playerChoice == 'paper') && computerSelection == 'scissors') {
        return `You lose! ${computerSelection} beats ${playerChoice}!`
    }

    else if (playerChoice === computerSelection) {
        return `Draw! Both players have chosen ${computerSelection}!`
    }

    else {
        return `You win! ${playerChoice} beats ${computerSelection}!`
    }
}

const playerSelection = prompt("Enter a selection:\nRock, Paper, or Scissors: ")
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));