const body = document.querySelector('body');
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
    if (round === 5) {resultPara.textContent = `Game Over! Player Score: ${playerScore}. Computer Score: ${computerScore}.`;
        div.appendChild(resultPara);};})});


// function game() {
//     let computerScore;
//     let playerScore;
//     let result;
//     for (let i=0; i<5; i++) {
//         buttons.forEach(button => {button.addEventListener('click', () => 
//         {result = playRound(button.id, getComputerChoice())})});
//         if (result === -1) {computerScore += 1;}
//         else if (result === 1) {playerScore += 1;}
//         else {continue;}
//     }
//     if (playerScore > computerScore) {console.log('player wins')}
//     else if (playerScore < computerScore) {console.log('computer wins')}
//     else {console.log('draw')}
// }
// game();