const options = ["rock", "paper", "scissors"];

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
const playerDisplay = document.querySelector('#playerDisplay')
const computerDisplay = document.querySelector('#computerDisplay')

function getPlayerChoice(){
    rock.addEventListener('click', function(){
        return "rock";
    })
    paper.addEventListener('click', function(){
        return "paper";
    })
    scissors.addEventListener('click', function(){
        return "scissors";
    })
}

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


let playerScore = 0;
let computerScore = 0;
let winningScore = 5;

rock.addEventListener('click', function(){
    if(playerScore !== winningScore || computerScore !== winningScore){
        if(getComputerChoice() == "scissors"){
            playerScore += 1;
            playerDisplay.textContent = playerScore;
        } else if(getComputerChoice() == "paper"){
            computerScore += 1;
            computerDisplay.textContent = computerScore;
        }
    }
})

paper.addEventListener('click', function(){
    if(playerScore !== winningScore || computerScore !== winningScore){
        if(getComputerChoice() == "rock"){
            playerScore += 1;
            playerDisplay.textContent = playerScore;
        } else if(getComputerChoice() == "scissors"){
            computerScore += 1;
            computerDisplay.textContent = computerScore;
        }
    }   
})

scissors.addEventListener('click', function(){
    if(playerScore !== winningScore || computerScore !== winningScore){
        if(getComputerChoice() == "paper"){
            playerScore += 1;
            playerDisplay.textContent = playerScore;
        } else if(getComputerChoice() == "rock"){
            computerScore += 1;
            computerDisplay.textContent = computerScore;
        }
    }
})

    

        
            
