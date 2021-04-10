let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
const descrContainer = document.querySelector("#descr-container")

const body = document.querySelector("#body")
const main = document.querySelector("#main");
const title = document.querySelector("#title");
const result = document.querySelector("#result-announce");
const descr = document.querySelector("#descr")

let descrTimeout = 3000
let descrTimeoutNext = 1000
let descrTimeoutAnimation = 4500


// let descrTimeout = 0
// let descrTimeoutNext = 0
// let descrTimeoutAnimation = 0

let resultTimeout = 0
let resultTimeoutNext = 2000

introduction();

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


function introduction() {
    title.classList.add("load")
    setTimeout(function() {
        descr.classList.add("desc-animate")
    }, descrTimeout)
    descrTimeout += descrTimeoutAnimation
    setTimeout(function() {
        descr.classList.remove("desc-animate")
    }, descrTimeout)

    descrTimeout += descrTimeoutNext
    setTimeout(function() {
        descr.textContent = "All of the greatest Jan Ken Pon Heroes have gathered here...";
        descr.classList.add("desc-animate")
    }, descrTimeout)
    descrTimeout += descrTimeoutAnimation
    setTimeout(function() {descr.classList.remove("desc-animate")}, descrTimeout)

    descrTimeout += descrTimeoutNext
    setTimeout(function() {
        descr.textContent = "for the Ultimate Showdown!!";
        descr.style["font-weight"] = "bold"
        descr.style["font-size"] = "100px"
        descr.classList.add("desc-animate")
    }, descrTimeout)
    descrTimeout += descrTimeoutAnimation
    setTimeout(function() {descr.classList.remove("desc-animate")}, descrTimeout)

    descrTimeout += descrTimeoutNext
    setTimeout(function() {
        descr.textContent = "Now...";
        descr.style["font-weight"] = "normal"
        descr.style["font-size"] = "50px"
        descr.classList.add("desc-animate")
    }, descrTimeout)
    descrTimeout += descrTimeoutAnimation
    setTimeout(function() {descr.classList.remove("desc-animate")}, descrTimeout)

    descrTimeout += descrTimeoutNext
    setTimeout(function() {
        descr.textContent = "Do you have what it takes to become...";
        descr.classList.add("desc-animate")
    }, descrTimeout)
    descrTimeout += descrTimeoutAnimation
    setTimeout(function() {descr.classList.remove("desc-animate")}, descrTimeout)

    descrTimeout += descrTimeoutNext
    setTimeout(function() {
        descr.textContent = "...The Master Pon!?";
        descr.style["font-weight"] = "bold"
        descr.style["font-size"] = "100px"
        descr.classList.add("desc-animate")
    }, descrTimeout)
    descrTimeout += descrTimeoutAnimation + descrTimeoutNext * 2
    setTimeout(function() {descr.classList.remove("desc-animate")}, descrTimeout)

    descrTimeout += descrTimeoutNext
    setTimeout(function() {
        descr.style["font-size"] = "10px"
        descr.style["padding"] = "0 0 0 0"

        main.classList.remove("disappear")
    }, descrTimeout)

}


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
            main.classList.add("disappear")
            body.style['background-image'] = 'url("rsc/lost.jpeg")'
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
            main.classList.add("disappear")
            body.style['background-image'] = 'url("rsc/victory.jpg")'

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


function displayResults(strPlayerResult, strRes) {
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
    result.textContent = strRes;

    result.classList.add("result-animate")
    resultTimeout += resultTimeoutNext
    setTimeout(function() {result.classList.remove("result-animate")}, resultTimeout)
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
