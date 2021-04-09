let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
const descrContainer = document.querySelector("#descr-container")
const descrAll = document.querySelector("#descr-all")
const main = document.querySelector("#main");
const result = document.querySelector("#result-announce");

descr1 = document.querySelector("#descr1")
descr2 = document.querySelector("#descr2")
descr3 = document.querySelector("#descr3")
descr4 = document.querySelector("#descr4")
descr5 = document.querySelector("#descr5")
descr6 = document.querySelector("#descr6")
allDescr = document.querySelectorAll(".desc")
descrTimeout = 3000
removeClass(selections=allDescr, className="disappear", time=3000, idx=0)
allDescr = document.querySelectorAll(".desc")
setTimeout(function(){addClass(selections=allDescr, className="disappear", time=descrTimeout, idx=0)}, descrTimeout)
setTimeout(function(){
    descrContainer.classList.add("disappear");
    main.classList.remove("disappear");
}, allDescr.length*descrTimeout)

let allSelections = document.querySelectorAll('.player-choice-button')

allSelections.forEach(selection => {
    selection.addEventListener("click", () => {
        playerSelection = selection.id.toLowerCase();
        playRound(playerSelection, computerSelection);
        
        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
    });
});


function addClass(selections, className, time, idx) {
    if (typeof idx === 'undefined') {idx = 0}
    if (selections.length>idx) {
        selections[idx].classList.add(className)
        setTimeout(function() {
            addClass(selections, className, time, idx+1)
        }, time)
    }
}


function removeClass(selections, className, time, idx) {
    if (typeof idx === 'undefined') {idx = 0}
    if (selections.length>idx) {
        selections[idx].classList.remove(className)
        setTimeout(function() {
            removeClass(selections, className, time, idx+1)
        }, time)
    }
}


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    if (computerSelection == playerSelection) {

        let strTieGameDisplays = ['Opponent is strong, but so are you! Almost had them!!', 'Tie game!', 'Close one...', "It's a tie"];
        displayResults('tie', strTieGameDisplays[Number(returnRandomUpTo(strTieGameDisplays.length))]);

    } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")) {
        computerScore ++;
        keepCpuScore();
        
        if (computerScore === 1) {
            displayResults('lost',
            'Oh no! You lost... ' 
            + capitalizeFirstLetter(computerSelection) + ' beats ' + capitalizeFirstLetter(playerSelection)
            );
        } else if (computerScore === 2) {
            displayResults('lost',
            'So close! They got you :( ' 
            + capitalizeFirstLetter(computerSelection) + ' beats ' + capitalizeFirstLetter(playerSelection)
            );
        } else if (computerScore === 3) {
            displayResults('lost',
            capitalizeFirstLetter(computerSelection) + ' beats ' +
            capitalizeFirstLetter(playerSelection) +
            ". Here comes opponent's Ultimate Move. Watch out!"
            );
        } else if (computerScore === 4) {
            displayResults('lost',
            'Man! That Move was so strong... ' + capitalizeFirstLetter(computerSelection) + ' beats ' + capitalizeFirstLetter(playerSelection) + ". Last round!"
            );
        } else {
            displayResults('lost', "Opponent won... We lost the championship :((");
        }

    } else {
        playerScore = ++playerScore;
        keepPlayerScore();

        if (playerScore === 1) {
            displayResults('won',
            'Sugoiii! You won!! ' + capitalizeFirstLetter(playerSelection) + ' beats ' + computerSelection
            );
        } else if (playerScore === 2) {
            displayResults('won',
            "You're on a roll!! " + capitalizeFirstLetter(playerSelection)+ ' beats ' + computerSelection
            );
        } else if (playerScore === 3) {
            displayResults('won',
            "The Heroes are no match for you. " + capitalizeFirstLetter(playerSelection) + ' beats ' + computerSelection + '!'
            );
        } else if (playerScore === 4) {
            displayResults('won',
            "The championship is almost in your hands now... " + capitalizeFirstLetter(playerSelection) + ' beats ' + computerSelection + '!!'
            );
        } else {
            displayResults('won', "YOU ARE THE NEW CHAMPION!!!");
        }
    }
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


function displayResults(strPlayerResult, str) {
    result.animate([{ opacity: 0 }, { opacity: 0.9}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });
    if (strPlayerResult == 'won') {
        result.setAttribute(
            "style", "background-color: LawnGreen; border: 10px solid Green")
    } else if (strPlayerResult == 'lost') {
        result.setAttribute(
            "style", "background-color: pink; border: 10px solid red")
    } else {
        result.setAttribute(
            "style", "background-color: white; border: 10px solid grey")
    }
    result.textContent = str;
}



function keepPlayerScore() {
    let playerScoreBox = document.querySelector("#player-score");
  
    playerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
  
    playerScoreBox.textContent = playerScore;
}


function keepCpuScore() {
    let computerScoreBox = document.querySelector("#opponent-score");
  
    computerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
  
    computerScoreBox.textContent = computerScore;
}


function declareWinner() {

}


function hideMain() {
    main.classList("disappear");
}
