let computerScore = 0;
let playerScore = 0;
let round = 0;

let playerscoreinfos = document.getElementById('playerscore');
let computerscoreinfos = document.getElementById('computerscore');
let finalResult = document.getElementById("finalresult");
let roundsinfos = document.getElementById("round");

let playerRock = document.getElementById("playerRock");
let playerPaper = document.getElementById("playerPaper");
let playerScissors = document.getElementById("playerScissors");

// computer choice //

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    };
    if (randomNumber === 1) {
        return "Paper";
    }
    if (randomNumber === 2) {
        return "Scissors";
    }
};

// Single Round //

function playRound() {
    let computerChoice = getComputerChoice();
    if (playerChoice == "Rock" && computerChoice == "Rock") {
        playerScore++;
        computerScore++;
    }
    if (playerChoice == "Rock" && computerChoice == "Paper") {
        computerScore++;
    };
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        playerScore++;
    };
    //////////////////////////////////////////////////////////////
    if (playerChoice == "Paper" && computerChoice == "Paper") {
        playerScore++;
        computerScore++;
    };
    if (playerChoice == "Paper" && computerChoice == "Scissors") {
        computerScore++;
    };
    if (playerChoice == "Paper" && computerChoice == "Rock") {
        playerScore++;
    };
    //////////////////////////////////////////////////////////////
    if (playerChoice== "Scissors" && computerChoice == "Scissors") {
        playerScore++;
        computerScore++;
        
    };
    if (playerChoice == "Scissors" && computerChoice == "Rock") {
        computerScore++;
    };
    if (playerChoice == "Scissors" && computerChoice == "Paper") {
        playerScore++;
    };
};


function selectRock() {
    round++;
    playerChoice = "Rock";
    if(round <= 5) {
        playRound();
        roundsinfos.innerHTML = round;
    };
    playerscoreinfos.innerHTML = playerScore;
    computerscoreinfos.innerHTML = computerScore;
    if(round == 5) {
        if(playerScore == computerScore) {
            finalResult.innerHTML = "It's a draw!";
        };
        if(playerScore > computerScore) {
            finalResult.innerHTML = "You won!";
        };
        if(playerScore < computerScore) {
            finalResult.innerHTML = "You lost!";
        };
        document.getElementById('restart').classList.replace("default", "displayRestart");
    };
};
playerRock.addEventListener("click", selectRock);

function selectPaper() {
    round++;
    playerChoice = "Paper";
    if(round <= 5) {
        playRound();
        roundsinfos.innerHTML = round;
    };
    playerscoreinfos.innerHTML = playerScore;
    computerscoreinfos.innerHTML = computerScore;
    if(round == 5) {
        if(playerScore == computerScore) {
            finalResult.innerHTML = "It's a draw!";
        };
        if(playerScore > computerScore) {
            finalResult.innerHTML = "You won!";
        };
        if(playerScore < computerScore) {
            finalResult.innerHTML = "You lost!";
        };
        document.getElementById('restart').classList.replace("default", "displayRestart");
    };
};
playerPaper.addEventListener("click", selectPaper);

function selectScissors() {
    round++;
    playerChoice = "Scissors";
    if(round <= 5) {
        playRound();
        roundsinfos.innerHTML = round;
    };
    playerscoreinfos.textContent = playerScore;
    computerscoreinfos.textContent = computerScore;
    if(round == 5) {
        if(playerScore == computerScore) {
            finalResult.innerHTML = "It's a draw!";
        };
        if(playerScore > computerScore) {
            finalResult.innerHTML = "You won!";
        };
        if(playerScore < computerScore) {
            finalResult.innerHTML = "You lost!";
        };
        document.getElementById('restart').classList.replace("default", "displayRestart");
    };
};
playerScissors.addEventListener("click", selectScissors);
