let computerScore = 0;
let playerScore = 0;

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

let computerSelection = getComputerChoice();

// human choice //
function playerSelectionfunc() {
    let playerChoice = prompt("Enter your choice (Rock/Paper/Scissors)");
    if (playerChoice === "Rock" || playerChoice === "rock" || playerChoice === "rOck" || playerChoice === "roCk" || playerChoice === "rocK" || playerChoice === "ROCK") {
        return "Rock";
    };
    if (playerChoice === "Paper" || playerChoice === "paper" || playerChoice === "pAper" || playerChoice === "paPer" || playerChoice === "papEr" || playerChoice === "PAPER") {
        return "Paper";
    };
    if (playerChoice === "Scissors" || playerChoice === "scissors" || playerChoice === "sCissors" || playerChoice === "scIssors" || playerChoice === "sciSsors" || playerChoice === "SCISSORS") {
        return "Scissors";
    }; 
};
// Single round //

function playRound() {
    let playerSelection = playerSelectionfunc();
    if (playerSelection == "Rock" && computerSelection == "Rock") {
        console.log("You draw!");
        if (playerScore != 0 && computerScore != 0) {
            playerScore++;
            computerScore++;
        };
    };
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    };
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You Won! Rock beats Scissors");
        playerScore++;
    };
    //////////////////////////////////////////////////////////////
    if (playerSelection == "Paper" && computerSelection == "Paper") {
        console.log("You draw!");
        if (playerScore != 0 && computerScore != 0) {
            playerScore++;
            computerScore++;
        };
    };
    if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    };
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You Won! Paper beats Rock");
        playerScore++;
    };
    //////////////////////////////////////////////////////////////
    if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        console.log("You draw!");
        if (playerScore != 0 && computerScore != 0) {
            playerScore++;
            computerScore++;
        };
    };
    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    };
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You Won! Scissors beats Paper");
        playerScore++;
    };
};

// function game //
function game() {
for (let rounds = 0; rounds < 5; rounds++) {
    if (rounds == 0){
        console.log("#### Rock Paper Scissors Game ####");
    };
    playRound();
    if (rounds != 0) {
        console.log("round = ",rounds + 1);
    };
    console.log("Score = You ", playerScore, "Computer ", computerScore);
    console.log("####################################################")
};
}
// Final game //
//game();
if (playerScore > computerScore) {
    console.log("You won, the final score is ", playerScore, " x ", computerScore);
};
if (playerScore < computerScore) {
    console.log("You lost, the final score is ", playerScore, " x ", computerScore);
};
if (playerScore == computerScore) {
    console.log("You draw, the final score is ", playerScore, " x ", computerScore)
};