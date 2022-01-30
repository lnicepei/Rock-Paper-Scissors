let computerSelection, playerSelection, computerScore = 0, playerScore = 0, restartBtn;

restartBtn = document.createElement("div");
restartBtn.innerHTML = "RESTART THE GAME";
restartBtn.setAttribute("id", "restartbutton");

let playerScoreInsideScore = document.createElement('div');
playerScoreInsideScore.setAttribute("id", "playerscore");

let computerScoreInsideScore = document.createElement('div');
computerScoreInsideScore.setAttribute("id", "computerscore");
document.getElementById('btnScissors').style.cssText = "padding: 10px;  border-radius: 5px; border: 1px solid grey; box-shadow: 0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20);	-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; "
document.getElementById('btnRock').style.cssText = "padding: 10px;  border-radius: 5px; border: 1px solid grey; box-shadow: 0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; "
document.getElementById('btnPaper').style.cssText = "padding: 10px;  border-radius: 5px; border: 1px solid grey; box-shadow: 0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20); -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; "
document.getElementById('score').style.cssText = "display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 10px;  border-radius: 5px; border: 1px solid grey; box-shadow: 0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20); margin: 50px"

let resultsOfTheRound = document.createElement('div');
resultsOfTheRound.setAttribute("id", "results");

playerPlay();

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

    document.getElementById('score').appendChild(computerScoreInsideScore);
    document.getElementById('score').appendChild(playerScoreInsideScore);

    document.getElementById('playerscore').textContent = "Player score is " + playerScore;
    document.getElementById('computerscore').textContent = "Computer score is " + computerScore;

    document.getElementById('btnRock').addEventListener('click', remover1);
    document.getElementById('btnPaper').addEventListener('click', remover2);
    document.getElementById('btnScissors').addEventListener('click', remover3); 
    
}

function restartGame(){

    document.getElementById('score').appendChild(restartBtn);
    document.getElementById('score').style.cssText = "display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 10px;  border-radius: 5px; border: 1px solid grey; box-shadow: 0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20); margin: 50px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;";
    document.getElementById('restartbutton').addEventListener('click', function remover(){
        
        playerScore = 0;
        computerScore = 0;
        
        document.getElementById('score').removeChild(restartBtn);
        document.getElementById('score').textContent = "";
        
        document.getElementById('btnScissors').removeEventListener('click', remover1);
        document.getElementById('btnRock').removeEventListener('click', remover2);
        document.getElementById('btnPaper').removeEventListener('click', remover3);

        playerPlay();
    });

}

function playRound(computerSelection, playerSelection){

    if(computerSelection == "rock" && playerSelection == "rock" ||  computerSelection == "paper" && playerSelection == "paper"  || computerSelection == "scissors" && playerSelection == "scissors"){
        resultsOfTheRound.textContent = "tie";
        document.getElementById('score').appendChild(resultsOfTheRound);
    }else if(computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        resultsOfTheRound.textContent = "player wins";
        document.getElementById('score').appendChild(resultsOfTheRound);
        playerScore++;
    }else if (computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "rock" && playerSelection == "scissors"){
        resultsOfTheRound.textContent = "computer wins";
        document.getElementById('score').appendChild(resultsOfTheRound);
        computerScore++;
    }

    if(computerScore < 3 && playerScore < 3){

        document.getElementById('playerscore').textContent = "Player score is " + playerScore;
        document.getElementById('computerscore').textContent = "Computer score is " + computerScore;

    }else if(computerScore == 3){
        document.getElementById('score').textContent = "COMPUTER WINS";

        restartGame();
    }else if(playerScore == 3){
        document.getElementById('score').textContent = "PLAYER WINS";

        restartGame();
    }

}

function remover1(){

    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);
    return;

}

function remover2(){

    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);
    return;

}

function remover3(){

    playerSelection = "scissors";
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);
    return;

}
