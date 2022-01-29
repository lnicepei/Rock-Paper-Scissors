let computerSelection, playerSelection, computerScore = 0, playerScore = 0, restartBtn;
restartBtn = document.createElement("button");
restartBtn.innerHTML = "RESTART THE GAME";
restartBtn.setAttribute("id", "restartbutton");



const playerScoreInsideScore = document.createElement('div');
playerScoreInsideScore.setAttribute("id", "playerscore");

const computerScoreInsideScore = document.createElement('div');
computerScoreInsideScore.setAttribute("id", "computerscore");

// const scoreDiv = document.createElement('div');
// computerScoreInsideScore.setAttribute("id", "score");
// document.body.appendChild(scoreDiv);

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
    const scoreContainer = document.createElement('div');
    scoreContainer.setAttribute("id", "score");
    document.body.appendChild(scoreContainer);
    document.getElementById('score').appendChild(computerScoreInsideScore);
    document.getElementById('score').appendChild(playerScoreInsideScore);
    document.getElementById('playerscore').textContent = "Player score is " + playerScore;
    document.getElementById('computerscore').textContent = "Computer score is " + computerScore;
    document.getElementById('btnRock').addEventListener('click', function(){
        playerSelection = "rock";
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        return;
    });
    document.getElementById('btnPaper').addEventListener('click', function(){
        playerSelection = "paper";
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        return;
    });
    document.getElementById('btnScissors').addEventListener('click', function(){
        playerSelection = "scissors";
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        return;
    });   
}

function restartGame(){
    document.getElementById('score').appendChild(restartBtn);
    document.getElementById('restartbutton').addEventListener('click', function(){
        playerScore = 0;
        computerScore = 0;
        //document.getElementById('score').appendChild(restartBtn);
        document.getElementById('score').removeChild(restartBtn);
        document.getElementById('score').textContent = "";
        document.getElementById('score').remove();
        // computerSelection = "";
        // playerSelection = "";
        // document.getElementById('score').remove();
        // document.getElementById('btnScissors').removeEventListener('click', restartGame);
        // document.getElementById('btnRock').removeEventListener('click', restartGame);
        // document.getElementById('btnPaper').removeEventListener('click', restartGame);
        // document.getElementById('playerscore').remove();
        // document.getElementById('computerscore').remove();   
        // document.getElementById('score').removeChild(computerScoreInsideScore);
        // document.getElementById('score').removeChild(playerScoreInsideScore);
        document.body.remove(scoreContainer);
        document.body.appendChild(scoreContainer);
        // document.getElementById('computerscore').textContent.remove();
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
        playerScore = 0;
        computerScore = 0;
        document.getElementById('score').textContent = "COMPUTER WINS";
        restartGame();
    }else if(playerScore == 3){
        playerScore = 0;
        computerScore = 0;
        document.getElementById('score').textContent = "PLAYER WINS";
        restartGame();
    }
}

