
function game(numGames) {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < numGames; i ++) {
        let playerSelection = prompt("What hand do you play?: ");
        let computerSelection = computerPlay();

        // Catch null
        if (playerSelection == null) {
            break;
        }

        let result = playGround(playerSelection, computerSelection);
        if (result == "you") {
            playerWins ++;
        } else if (result == "both") {
            playerWins ++;
            computerWins ++;
        } else {
            computerWins ++;
        }
    }
    console.log("The winner is: " + ((playerWins > computerWins) ? "you!!!" : "computer :(") + " (" + playerWins + " to " + computerWins + ")");
}


function playGround(playerSelection, computerSelection) {

    let winner = "both";

    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();

    if (computerSelectionLower === playerSelectionLower) {
        console.log("It's a draw! You both got " + capitalizeFirstLetter(playerSelectionLower));
    } else if ((playerSelectionLower == "rock"
    && computerSelectionLower == "scissors")
    || (playerSelectionLower == "scissors" 
    && computerSelectionLower == "paper")
    || (playerSelectionLower == "paper" 
    && computerSelectionLower == "rock")) {
        winner = "you";
        console.log("You win!!! " + capitalizeFirstLetter(playerSelectionLower) + " beats " + computerSelection);
        
    } else {
        winner = "computer";
        console.log("You lose... " + capitalizeFirstLetter(playerSelectionLower) + " loses to " + computerSelection);
    }

    return winner;
}


function computerPlay() {
    let rockPaperScissorsArray = ["Rock", "Paper", "Scissors"];
    return rockPaperScissorsArray[Number(returnRandomUpTo(rockPaperScissorsArray.length))];
}


function returnRandomUpTo(intUpTo) {
    return Math.floor(Math.random() * intUpTo);
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


game(5);
