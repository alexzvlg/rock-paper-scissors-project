// Function that will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
    let randomValue =  Math.floor(Math.random() * 10);
    if (randomValue <= 3) {
        randomValue = "rock";
    } else if (randomValue <= 6) {
        randomValue = "paper";
    } else if (randomValue <= 9) {
        randomValue = "scissors";
    }
    return randomValue;
};

// Function that will return one of the valid choices depending on what the user inputs.
function getHumanChoice() {
    let gamePrompt = prompt("Choose one: rock, paper or scissors");

    return gamePrompt;
};

// Variables to keep track of the players score.
// let humanScore = 0;
// let computerScore = 0;

// Function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
/*
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    console.log("You: " + humanChoice);
    computerChoice = getComputerChoice();
    console.log("Computer: " + computerChoice);

    let humanScore = 0;
    let computerScore = 0

    if (humanChoice === computerChoice) {
        console.log("That's a draw!");
    } else if (humanChoice === "rock" & computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    } else if (humanChoice === "rock" & computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    } else if (humanChoice === "paper" & computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++;
    } else if (humanChoice === "paper" & computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper!");
        computerScore++;
    } else if (humanChoice === "scissors" & computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    } else if (humanChoice === "scissors" & computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore++;
    } else;
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
    return;
};
*/

// Function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
function playGame() {  
        
    let humanScore = 0;
    let computerScore = 0


    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        console.log("You: " + humanChoice);
        
        computerChoice = getComputerChoice();
        console.log("Computer: " + computerChoice);
    
        if (humanChoice === computerChoice) {
            console.log("That's a tie!");
        } else if (humanChoice === "rock" & computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else if (humanChoice === "rock" & computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        } else if (humanChoice === "paper" & computerChoice === "rock") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else if (humanChoice === "paper" & computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        } else if (humanChoice === "scissors" & computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if (humanChoice === "scissors" & computerChoice === "paper") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        } else;
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
        return;
    };    

    console.log("Round 1:");
    playRound();
    console.log("");

    console.log("Round 2:");
    playRound();
    console.log("");

    console.log("Round 3:");
    playRound();
    console.log("");

    console.log("Round 4:");
    playRound();
    console.log("");

    console.log("Round 5:");
    playRound();
    console.log("");

    if (humanScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (humanScore < computerScore) {
        console.log("Too bad, you lost the game!");
    } else if (humanScore === computerScore) {
        console.log("Incredible! This is a tie!");
    }
    return;
};

playGame();