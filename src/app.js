"use strict";
const images = [
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

let firstGuess;

let numberOfGuesses = 0;
let numberOfPairs = 1;
let numberOfOpenedCards = 0;
const cardBackgroundImage = "assets/backpattern.png";
let isRunning = false;
let points = 0;         // points accumulated by the player
const maximumAmountOfPairs = images.length // Maximum amount of cards in the game



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
    isRunning = false;
    body.style.backgroundColor = "lightblue";
    initialize();
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

// TODO: Create a function that sets a given amount of cards to the board
function addCards() {
    cardsArea.innerHTML = "";
    for (let i = 0; i < numberOfPairs; i++) {
        for (let j = 0; j < 2; j++) {
            let newCard = document.createElement("img")
            let cardImage = document.createElement("img")
            newCard.src = cardBackgroundImage;
            cardImage.src = images.at(i).img;
            newCard.addEventListener ("click", function () {
            openCard(newCard, cardImage);
            });
            cardsArea.appendChild(newCard);
        }
    }
}

function openCard(openedCard, cardImage) {
    if (isRunning) {
        if (openedCard.src.includes(cardBackgroundImage) && numberOfOpenedCards < 2) {
            openedCard.src = cardImage.src
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
    // if the guess is incorrect
   } else {
        await delay(1000);
        openedCard.src = cardBackgroundImage;
        firstGuess.src = cardBackgroundImage;

   }

    updatePointsDisplay()
    firstGuess = null;
    numberOfOpenedCards = 0;

}


function updateNumberOfCardsDisplay() {
    numberOfCardsDisplay.innerHTML = numberOfPairs.toString();
}


function updatePointsDisplay() {
    pointCounter.innerHTML = points;
}

function updateNumberOfGuesses() {
    guessCounter.innerHTML = numberOfGuesses;
}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}



window.onload = function () {
    initialize()
    addCards();
    updateNumberOfCardsDisplay();

}





