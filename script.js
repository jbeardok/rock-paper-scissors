const body = document.querySelector('body');
const div = document.createElement('div');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let int = Math.floor(Math.random() * 3);
    return choices[int];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection == 'rock' && computerSelection == 'paper') || 
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'paper') && computerSelection == 'scissors') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            div.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
            body.appendChild(div);
    }
    else if (playerSelection === computerSelection) {
        console.log(`Draw! ${playerSelection} and ${computerSelection} are the same.`);
        div.textContent = `Draw! ${playerSelection} and ${computerSelection} are the same.`;
        body.appendChild(div);
    }
    else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        div.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        body.appendChild(div);
    }
}

const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {button.addEventListener('click', () => {playRound(button.id, getComputerChoice())})});

// function game() {
//     let total = 0;
//     let playerSelection;
//     let computerSelection;
//     let resultArray;
//     for (let i=0; i<5; i++) {
//         playerSelection = prompt("Enter a selection:\nRock, Paper, or Scissors: ");
//         computerSelection = getComputerChoice();
//         resultArray = playRound(playerSelection, computerSelection);
//         console.log(resultArray[0])
//         total += resultArray[1];
//     }

//     if (total > 0) {
//         return `Congratulations! You have won the game!`;
//     }

//     else if (total === 0) {
//         return `The game ended in a draw!`;
//     }

//     else {
//         return `Sorry, you have lost the game. Better luck next time!`;
//     }
// }

// console.log(game());