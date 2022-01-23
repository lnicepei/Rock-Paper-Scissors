const computerSelection = computerPlay();

const playerSelection = playerPlay();

playRound(computerSelection, playerSelection);

function computerPlay(){
    let x = Math.floor(Math.random() * 3);
    if(x == 0){
        return("rock");
    }else if(x == 1){
        return("paper");
    }else{
        return("scissors");
    }
}

function playerPlay(){
    return prompt("Enter your choice");
}

function playRound(computerSelection, playerSelection){
    if(computerSelection == "rock" && playerSelection == "rock" ||  computerSelection == "paper" && playerSelection == "paper"  || computerSelection == "scissors" && playerSelection == "sciccors"){
        alert("tie!");
    }else if(computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock"){
        alert("player wins!");
    }else if (computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper"){
        alert("computer wins!");
    }else{
        alert("Enter correct choice!");
    }
}