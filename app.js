const options = ["rock", "paper", "scissors"];

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
const playerDisplay = document.querySelector('#playerDisplay');
const computerDisplay = document.querySelector('#computerDisplay');
const tieDisplay = document.querySelector('#tieDisplay');
const body = document.querySelector('body');
const h1 = document.createElement('h1');


function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
};


let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let winningScore = 5;
let isGameOver = false;

rock.addEventListener('click', function(){
    if(!isGameOver){
        if(getComputerChoice() == "scissors"){
            playerScore += 1;
            playerDisplay.textContent = playerScore;
        } else if(getComputerChoice() == "paper"){
            computerScore += 1;
            computerDisplay.textContent = computerScore;
        } else {
            tieScore += 1;
            tieDisplay.textContent = tieScore;
        };
    }
    if(playerScore === winningScore || computerScore === winningScore){
        isGameOver = true;
        if(isGameOver){
            if(playerScore > computerScore){
                h1.innerText = 'Congrats! You won! You beat the robot!';
                body.appendChild(h1);
            } else if(computerScore > playerScore){
                h1.innerText = 'Uh oh! You lost! The robots have taken over!';
                body.appendChild(h1);
            };
        };
    };
    
});

paper.addEventListener('click', function(){
    if(!isGameOver){
        if(getComputerChoice() == "rock"){
            playerScore += 1;
            playerDisplay.textContent = playerScore;
        } else if(getComputerChoice() == "scissors"){
            computerScore += 1;
            computerDisplay.textContent = computerScore;
        } else {
            tieScore += 1;
            tieDisplay.textContent = tieScore;
        };
    }
    if(playerScore === winningScore || computerScore === winningScore){
        isGameOver = true;
        if(isGameOver == true){
            if(playerScore > computerScore){
                h1.innerText = 'Congrats! You won! You beat the robot!';
                body.appendChild(h1);
            } else if(computerScore > playerScore){
                h1.innerText = 'Uh oh! You lost! The robots have taken over!';
                body.appendChild(h1);
            };
        };
    };     
});

scissors.addEventListener('click', function(){
    if(!isGameOver){
        if(getComputerChoice() == "paper"){
            playerScore += 1;
            playerDisplay.textContent = playerScore;
        } else if(getComputerChoice() == "rock"){
            computerScore += 1;
            computerDisplay.textContent = computerScore;
        } else {
            tieScore += 1;
            tieDisplay.textContent = tieScore;
        };
    }   
    if(playerScore === winningScore || computerScore === winningScore){
        isGameOver = true;
        if(isGameOver == true){
            if(playerScore > computerScore){
                h1.innerText = 'Congrats! You won! You beat the robot!';
                body.appendChild(h1);
            } else if(computerScore > playerScore){
                h1.innerText = 'Uh oh! You lost! The robots have taken over!';
                body.appendChild(h1);
            };
            
        };
    };
});

