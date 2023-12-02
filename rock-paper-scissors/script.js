// Global variables here
let round = 1;
let playerPoints = 0;
let computerPoints = 0;

// Function randomly generates either Rock,Paper or Scissors for computer choice
let computerPick = ""
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

// Setting up player choices as interactive buttons
let userPick = document.querySelector('.choice.rock');
userPick.addEventListener('click', function () {
    userPick = "rock";
    gameStart(userPick, computerChoice());
});
userPick = document.querySelector('.choice.paper');
userPick.addEventListener('click', function () {
    userPick = "paper";
    gameStart(userPick, computerChoice());
});
userPick = document.querySelector('.choice.scissors');
userPick.addEventListener('click', function () {
    userPick = "scissors";
    gameStart(userPick, computerChoice());
});

// Setting up a text field to get game status updates instead of printing to console
let gameText = document.querySelector('.game-text');
let playerSelectionText = document.querySelector('.player-pick');
let computerSelectionText = document.querySelector('.computer-pick');
let roundText = document.querySelector('.round-text');
let playerPointText = document.querySelector('.player-points');
let computerPointText = document.querySelector('.computer-points');


//Function for the game logic
function gameStart(userPick, computerPick) {
    roundText.innerText = `Round
${round}`;

    if (userPick === computerPick) {
        playerSelectionText.innerText = `" ${userPick} "`;
        computerSelectionText.innerText = `" ${computerPick} "`;
        gameText.innerText = `You picked ${userPick}
        Computer chose ${computerPick}
        It's a Tie! Restart Round!`;
        round -= 1;

    } else if ((userPick === "rock" && computerPick === "scissors") ||
        (userPick === "paper" && computerPick === "rock") ||
        (userPick === "scissors" && computerPick === "paper")) {
        playerPoints += 1;

        playerPointText.innerText = `Player
        ${playerPoints}`;
        playerSelectionText.innerText = `" ${userPick} "`;
        computerSelectionText.innerText = `" ${computerPick} "`;
        gameText.innerText = `You picked ${userPick}
        Computer chose ${computerPick}
        You win round ${round}!`;

    } else {
        computerPoints += 1;
        computerPointText.innerText = `Computer
        ${computerPoints}`;

        playerSelectionText.innerText = `" ${userPick} "`;
        computerSelectionText.innerText = `" ${computerPick} "`;
        gameText.innerText = `You picked ${userPick}
        Computer chose ${computerPick}
        You lose round ${round}!`;

    }
    if (playerPoints >= 3 || computerPoints >= 3) {
        gameText.innerText = `Game Over! 
        Final score in Round ${round}
        Player:${playerPoints} and Computer:${computerPoints}!`;
        round = 1;
        playerPoints = 0;
        computerPoints = 0;

    } else {
        round += 1
    }

}   
