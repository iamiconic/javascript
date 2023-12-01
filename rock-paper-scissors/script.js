// Rock Paper Scissors game played vs computer in console

// Write function to randomly select computer choice

function computerChoice() {
    let computerRandom = Math.floor((Math.random() * 3) + 1);
    let computerPick = ""
    if (computerRandom === 1) {
        computerPick = "rock";
    } else if (computerRandom === 2) {
        computerPick = "paper";
    } else {
        computerPick = "scissors";
    }
    return computerPick
}


// Function to prompt use for choice
// The user choice is not case sensitive
// If selection is not a valid choice throw error

function userChoice() {
    validPick = ["rock", "paper", "scissors"];
    let userPick = "";

    while (!validPick.includes(userPick)) {
        userPick = prompt("Please type your choice. Rock, Paper or Scissors");
        userPick = userPick.toLowerCase()
        if (!validPick.includes(userPick)) {
            alert("Invalid Choice. Try again!")
        }
    } return userPick
}


// Function to create game logic taking in computer and player choice and determine winner
// Function to play a best of 5 (consider while loop?)
// If tie replay round
// Record results and display resulting winner 

function gameStart() {
    round = 1;
    playerPoints = 0;
    computerPoints = 0;

    while (playerPoints < 3 && computerPoints < 3) {
        console.log(`Round: ${round} begin! Score is Player:${playerPoints} Computer:${computerPoints} `)
        let computerPick = computerChoice();
        let userPick = userChoice();

        if (userPick === computerPick) {
            console.log(`You picked "${userPick}" and Computer chose "${computerPick}". It's a Tie! Restart Round!`);
        } else if (userPick === "rock" && computerPick === "scissor") {
            playerPoints += 1;
            console.log(`You picked "${userPick}" and Computer chose "${computerPick}". You win round ${round}!`);
            round += 1;
        } else if (userPick === "rock" && computerPick === "paper") {
            computerPoints += 1;
            console.log(`You picked "${userPick}" and Computer chose "${computerPick}". You lose round ${round}!`);
            round += 1;
        } else if (userPick === "paper" && computerPick === "scissors") {
            playerPoints += 1;
            console.log(`You picked "${userPick}" and Computer chose "${computerPick}". You win round ${round}!`);
            round += 1;
        } else if (userPick === "paper" && computerPick === "rock") {
            computerPoints += 1;
            console.log(`You picked "${userPick}" and Computer chose "${computerPick}". You lose round ${round}!`);
            round += 1;
        } else if (userPick === "scissors" && computerPick === "paper") {
            playerPoints += 1;
            console.log(`You picked "${userPick}" and Computer chose "${computerPick}". You win round ${round}!`);
            round += 1;
        } else if (userPick === "scissors" && computerPick === "rock") {
            computerPoints += 1;
            console.log(`You picked "${userPick}" and Computer chose "${computerPick}". You lose round ${round}!`);
            round += 1;
        }

    }
    console.log(`Game Over! Finished on round ${round} with Player score: ${playerPoints} and Computer score: ${computerPoints}!`)
}


