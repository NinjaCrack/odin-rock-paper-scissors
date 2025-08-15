let randomChoice = Math.floor(Math.random() * 3) +1;
const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");
const resultOutput = document.getElementById('result');
const yourScore = document.getElementById('yourScore');
const compScore = document.getElementById('computerScore');
const gameNumber = document.getElementById('gameNumber');

let gameCounter = 0;
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if(computerChoice === humanChoice) {
        resultOutput.textContent = `Its a Draw! You both chose ${humanChoice}`;
    } else if(
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) { 
        resultOutput.textContent = `You Win! ${humanChoice} beats ${computerChoice}!`;
        humanScore += 1;
        yourScore.textContent = humanScore;
        
    } else {
        resultOutput.textContent = `You Lose! ${computerChoice} beats ${humanChoice}!`
        computerScore += 1;
        compScore.textContent = computerScore;
    }
    randomChoice = Math.floor(Math.random() * 3) +1;
    gameCounter++;
    gameNumber.textContent = `${gameCounter} / 10`;

     if( gameCounter >= 10) {
        if(humanScore > computerScore) {
            resultOutput.textContent = 'Game Over! You Win!';
            
        } else if(humanScore == computerScore) {
            resultOutput.textContent = 'Game Over! Draw!'
        }
        else {
            resultOutput.textContent = 'Game Over! You Computer Wins!'
        }

        rockbtn.disabled = true;
        paperbtn.disabled = true;
        scissorsbtn.disabled = true;
        resultOutput.innerHTML += `<br> <a href="#" class="reset" onclick="location.reload(); return false;">Play Again</a>`;
     }

}

function getComputerChoice() {
    if( randomChoice == 1) {
        computerChoice = "Rock";
    } else if(randomChoice == 2) {
        computerChoice = "Paper";
    } else if(randomChoice == 3) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    rockbtn.addEventListener('click', function() {
        humanChoice = this.value;
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    paperbtn.addEventListener('click', function() {
        humanChoice = this.value;
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
    scissorsbtn.addEventListener('click', function() {
        humanChoice = this.value;
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
}

getHumanChoice();

