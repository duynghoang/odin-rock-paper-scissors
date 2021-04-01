
function game(numGames) {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < numGames; i ++) {
        console.log("Game #" + (i + 1))
        let playerSelection;
        while (true) {
            let playerSelectionPrompt = prompt("What hand do you play?: ");

            // Catch null
            if (playerSelectionPrompt == null) {
                console.log("Wrong input. Please try again");
                continue;
            }

            // Catch wrong input
            playerSelectionPrompt = playerSelectionPrompt.toLowerCase();
            if (["rock", "paper", "scissors"].indexOf(playerSelectionPrompt) < 0) {
                console.log("Wrong input. Please try again");
                continue;
            } else {
                playerSelection = playerSelectionPrompt;
                break;
            }

        }

        let computerSelection = computerPlay();
        let winner = playGround(playerSelection, computerSelection);
        if (winner == "you") {
            playerWins ++;
        } else if (winner == "both") {
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
    let computerSelectionLower = computerSelection.toLowerCase();

    if (computerSelectionLower === playerSelection) {
        console.log("It's a draw! You both got " + capitalizeFirstLetter(playerSelection));
    } else if ((playerSelection == "rock"
    && computerSelectionLower == "scissors")
    || (playerSelection == "scissors" 
    && computerSelectionLower == "paper")
    || (playerSelection == "paper" 
    && computerSelectionLower == "rock")) {
        winner = "you";
        console.log("You win!!! " + capitalizeFirstLetter(playerSelection) + " beats " + computerSelection);
        
    } else {
        winner = "computer";
        console.log("You lose... " + capitalizeFirstLetter(playerSelection) + " loses to " + computerSelection);
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
