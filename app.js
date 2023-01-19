function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie"
    } else if(
        (playerSelection == "rock" && computerSelection== "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    } else{
        return "Computer";
    }
}
 function gameRound() {
    const results = checkWinner(playerSelection, computerSelection);
    if(results == "Tie"){
        return "It's a tie"
    } else if(results == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = prompt("Rock, Paper, Scissors? ").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

