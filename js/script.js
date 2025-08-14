// const randomNum = Math.floor(Math.random() * 3) +1;
// //rock = 1
// //paper = 2
// //scissor = 3


// if (randomNum == 1) {
//     console.log("Rock");
// } else if (randomNum == 2) {
//     console.log("Paper")
// } else if (randomNum == 3) {
//     console.log("Scissors")
// }


let choice;
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) +1;
    console.log(computerChoice);
    
    if (computerChoice == 1) {
        choice = "Rock";
    } else if (computerChoice == 2) {
        choice = "Paper";
    } else if (computerChoice == 3) {
        choice = "Scissors";
    }

    return choice;
}

function getHumanChoice() {
    pass
}
getComputerChoice();
console.log(choice);