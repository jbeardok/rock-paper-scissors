const body = document.querySelector('body');
const p = document.querySelector('#headPara');
const div = document.createElement('div');
const resultPara = document.createElement('p');
const buttons = document.querySelectorAll('button');

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
            div.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
            body.appendChild(div);
            return -1;
    }
    else if (playerSelection === computerSelection) {
        div.textContent = `Draw! ${playerSelection} and ${computerSelection} are the same.`;
        body.appendChild(div);
        return 0;
    }
    else {
        div.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        body.appendChild(div);
        return 1;
    }
}

let computerScore = 0;
let playerScore = 0;
let result;
let round = 0;
buttons.forEach(button => {button.addEventListener('click', () => 
{result = playRound(button.id, getComputerChoice());
    if (result === -1) {computerScore += 1;};
    if (result === 1) {playerScore += 1;};
    console.log(computerScore, playerScore);
    round += 1; console.log(round);
    if (computerScore === 5 || playerScore === 5) 
    {resultPara.textContent = `Game over! Player score: ${playerScore}. 
    Computer score: ${computerScore}. 
    Rounds taken: ${round}.`;
    div.appendChild(resultPara); round = 0; computerScore = 0, playerScore = 0; p.textContent = 'Press any button to continue playing: ';}})});