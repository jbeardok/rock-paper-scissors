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
        const returnArray = [`You lose! ${computerSelection} beats ${playerChoice}!`, -1];
        return returnArray;
    }

    else if (playerChoice === computerSelection) {
        const returnArray = [`Draw! Both players have chosen ${computerSelection}!`, 0];
        return returnArray;
    }

    else {
        const returnArray = [`You win! ${playerChoice} beats ${computerSelection}!`, 1];
        return returnArray;
    }
}

function game() {
    let total = 0;
    let playerSelection;
    let computerSelection;
    let resultArray;
    for (let i=0; i<5; i++) {
        playerSelection = prompt("Enter a selection:\nRock, Paper, or Scissors: ");
        computerSelection = getComputerChoice();
        resultArray = playRound(playerSelection, computerSelection);
        console.log(resultArray[0])
        total += resultArray[1];
    }

    if (total > 0) {
        return `Congratulations! You have won the game!`;
    }

    else if (total === 0) {
        return `The game ended in a draw!`;
    }

    else {
        return `Sorry, you have lost the game. Better luck next time!`;
    }
}

console.log(game());