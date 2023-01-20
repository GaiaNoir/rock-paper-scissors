const options = ["rock", "paper", "scissors"];


function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
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
 function gameRound(playerSelection, computerSelection) {
    const results = checkWinner(playerSelection, computerSelection);
    if(results == "Tie"){
        return "It's a tie"
    } else if(results == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput==false){
        const choice = prompt("Rock, Paper, Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput= true;
            return choiceInLower;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i<5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(gameRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection)== "Player"){
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection)== "Computer"){
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log("Player 1 Wins!");
    } else if (playerScore < computerScore){
        console.log("Computer Wins!");
    }
}
 game()
