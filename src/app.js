import shuffleArray from "./utils/shuffleArray.js"
"use strict";



const reserveDeck = [
    {
        'name': 'baby-turtle',
        'img': 'assets/baby_turtle.png',
    },
    {
        'name': 'mars-rover',
        'img': 'assets/mars-rover.png',
    },
    {
        'name': 'pattern1',
        'img': 'assets/pattern1.png',
    },
    {
        'name': 'rooster',
        'img': 'assets/rooster.png',
    },
    {
        'name': 'socklady',
        'img': 'assets/socklady.png',
    }
]
let playingDeck = [];

let firstGuess;

let numberOfGuesses = 0;
let numberOfPairs = 1;
let numberOfOpenedCards = 0;
const cardBackgroundImage = "assets/backpattern.png";
let isRunning = false;
let points = 0;         // points accumulated by the player
const maximumAmountOfPairs = reserveDeck.length // Maximum amount of cards in the game



const startGameButton = document.getElementById("start game");
const stopGameButton = document.getElementById("stop game");
const addCardsButton = document.getElementById("add cards");
const cardsArea = document.getElementById("cards area");
const numberOfCardsDisplay = document.getElementById("number of pairs");
const body = document.body;
const pointCounter = document.getElementById("pointsCounter");
const guessCounter = document.getElementById("guessCounter");


startGameButton.addEventListener("click", clickStartGame)
addCardsButton.addEventListener("click", clickAddCards);
stopGameButton.addEventListener("click", clickStopGame);

// ----------------------------------------------------------------------------

function initialize() {
    points = 0;

}

function clickStartGame() {
    isRunning = true;
    body.style.backgroundColor = "white";
}

function clickStopGame() {
    endgame();
}

function clickAddCards() {
    if (!isRunning) {
        if (numberOfPairs < maximumAmountOfPairs) {
            numberOfPairs++;
            updateNumberOfCardsDisplay();
            addCards();
        }
    }
}

// ----------------------------------------------------------------------------


function addCardsToBoard() {
    cardsArea.innerHTML = ""; // Removes all the cards from the board

    if( playingDeck.length > 0 ) {

        for (let i = 0; i < playingDeck.length; i++) {
            let newCard = document.createElement("img")
            newCard.src = cardBackgroundImage;
            let cardImage = playingDeck[i].img;
            newCard.addEventListener("click", function () {
                openCard(newCard, cardImage);
            });
            cardsArea.appendChild(newCard);
        }
    }

}


function addCards() {
    //shuffle cards in reserve deck
    let shuffledReserveDeck = shuffleArray(reserveDeck);
    //deal two cards of the same kind to the playing deck and remove the dealt card from the reserve deck.
    let cardToBeAdded = shuffledReserveDeck.pop();

    for (let i = 0; i < 2; i++) {
        playingDeck.push(cardToBeAdded);
    }

    // shuffle playing deck
    shuffleArray(playingDeck);
    // deal playing deck
    addCardsToBoard();

}


function openCard(openedCard, cardImage) {
    if (isRunning) {
        if (openedCard.src.includes(cardBackgroundImage) && numberOfOpenedCards < 2) {
            openedCard.src = cardImage
            numberOfOpenedCards++;
        }

        if (numberOfOpenedCards === 1) {
            firstGuess = openedCard;
        } else if (numberOfOpenedCards === 2) {
            numberOfGuesses++;
            updateNumberOfGuesses();
            checkForPair(openedCard);
        }

    }
}

/**
 * Checks whether the currently opened cards are pairs
 */
async function checkForPair(openedCard) {
    // If the guess is correct
    if (openedCard.src === firstGuess.src) {
        points++
        await delay(1000);
        openedCard.style.display = "none";
        firstGuess.style.display = "none";
        numberOfPairs--;
        updateNumberOfCardsDisplay();
    // if the guess is incorrect
   } else {
        await delay(1000);
        openedCard.src = cardBackgroundImage;
        firstGuess.src = cardBackgroundImage;

   }

    updatePointsDisplay()
    firstGuess = null;
    numberOfOpenedCards = 0;

    if (numberOfPairs === 0) {
        endgame();
    }


}


function updateNumberOfCardsDisplay() {
    numberOfCardsDisplay.innerHTML = numberOfPairs.toString();
}


function updatePointsDisplay() {
    pointCounter.innerHTML = points;
}

function updateNumberOfGuesses() {
    guessCounter.innerHTML = numberOfGuesses.toString();
}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function endgame() {
    isRunning = false;
    body.style.backgroundColor = "lightblue";
    if (numberOfPairs === 0) {
        body.style.backgroundColor = "lightgreen";
        let endDiv = document.createElement("div");
        let endMessage = document.createElement("p");
        endMessage.innerHTML = "You finished the game with with " +numberOfGuesses + " guesses. Well Done!!!"
        endDiv.appendChild(document.createElement("p"));
        cardsArea.appendChild(endMessage);
    }
}



window.onload = function () {
    initialize()
    addCards();
    updateNumberOfCardsDisplay();

}





