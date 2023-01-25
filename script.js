function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let int = Math.floor(Math.random() * 3);
    return choices[int];
}

console.log(getComputerChoice());