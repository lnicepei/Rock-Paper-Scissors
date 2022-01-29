let computerSelection, playerSelection, computerScore = 0, playerScore = 0, restartBtn;

restartBtn = document.createElement("div");
restartBtn.innerHTML = "RESTART THE GAME";
restartBtn.setAttribute("id", "restartbutton");
// document.restartBtn.style.color = "red";

let playerScoreInsideScore = document.createElement('div');
playerScoreInsideScore.setAttribute("id", "playerscore");
// document.playerScoreInsideScore.style.cssText = "display: flex; justify-content: center; align-items: center; flex-direction: column; margin-bottom: 20px; background-color: yellow;";

let computerScoreInsideScore = document.createElement('div');
computerScoreInsideScore.setAttribute("id", "computerscore");
document.getElementById('btnScissors').style.cssText = "padding: 10px;  border-radius: 20px; border: 2px solid black; box-shadow: 15px 10px 10px grey;"
document.getElementById('btnRock').style.cssText = "padding: 10px;  border-radius: 20px; border: 2px solid black; box-shadow: 15px 10px 10px grey;"
document.getElementById('btnPaper').style.cssText = "padding: 10px;  border-radius: 20px; border: 2px solid black; box-shadow: 15px 10px 10px grey;"
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
    // const scoreContainer = document.createElement('div');
    // scoreContainer.setAttribute("id", "score");
    // document.body.appendChild(scoreContainer);

    document.getElementById('score').appendChild(computerScoreInsideScore);
    document.getElementById('score').appendChild(playerScoreInsideScore);
    // document.getElementById('score').cssText = "display: flex; justify-content: center;"

    document.getElementById('playerscore').textContent = "Player score is " + playerScore;
    document.getElementById('computerscore').textContent = "Computer score is " + computerScore;

    document.getElementById('btnRock').addEventListener('click', remover1);
    document.getElementById('btnPaper').addEventListener('click', remover2);
    document.getElementById('btnScissors').addEventListener('click', remover3);   
    
}

function restartGame(){
    document.getElementById('score').appendChild(restartBtn);
    document.getElementById('score').style.cssText = "display: flex; justify-content: center; align-items: center; flex-direction: column; margin: 20px; background-color: yellow; border: 2px solid black";
    // document.getElementById('restartbutton').style.cssText = "display: flex; justify-content: center; align-items: center; background-color: yellow;";
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
        alert("tie!");
    }else if(computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        alert("player wins!");
        playerScore++;
    }else if (computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "rock" && playerSelection == "scissors"){
        alert("computer wins!");
        computerScore++;
    }else{
        alert("Enter correct choice!");
    }
    if(computerScore < 3 && playerScore < 3){
        console.log("player score is " + playerScore);
        console.log("computer score is " + computerScore);

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
