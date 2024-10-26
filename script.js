console.log("Hello World");

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    let valueRandom = choices[Math.floor(Math.random()*3)];
    return valueRandom;
}


function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: Rock, Paper, or Scissors");
    humanChoice = humanChoice.toLowerCase(); 
    
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        return "Invalid choice.";
    }
}



function playRound(humanChoice, computerChoice){
    console.log(`Your choice is ${humanChoice} and computer choice is ${computerChoice}`);

    if( humanChoice ==="rock" && computerChoice ==="scissors"){
        console.log("You win Rock beats scissors");
        humanScore = humanScore + 1;
    }
    else if( humanChoice ==="rock" && computerChoice ==="paper"){
        console.log("You loose Paper beats Rock");
        computerScore = computerScore + 1;
    } 
    else if( humanChoice ==="paper" && computerChoice ==="rock"){
        console.log("You win Paper beats rock");
        humanScore = humanScore + 1;
    }
    else if( humanChoice ==="paper" && computerChoice ==="scissors"){
        console.log("You loose Scissors beat paper");
        computerScore = computerScore+ 1;
    }
    else if( humanChoice ==="scissors" && computerChoice ==="paper"){
        console.log("You win Scissors beat paper");
        humanScore = humanScore + 1;
    }
    else if( humanChoice ==="scissors" && computerChoice ==="rock"){
        console.log("You loose Rock beats Scissors");
        computerScore = computerScore  + 1;
    }
    else{
        console.log("Both choose same, draw");
        }

}

let humanScore = 0;
let computerScore = 0;



for ( let i = 1; i <=5 ; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log(`The human Score was = ${humanScore} \nThe computer Score was = ${computerScore}`);