"use strict";

let firstGuess = '';

let numberOfPairs = 1;
let numberOfOpenedCards = 0;
const cardBackgroundImage = "assets/backpattern.png";
let isRunning = false;
let points = 0;         // points accumulated by the player
const maximumCards = 10; // Maximum amount of cards in the game

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



const startGameButton = document.getElementById("start game");
const stopGameButton = document.getElementById("stop game");
const addCardsButton = document.getElementById("add cards");
const cardsArea = document.getElementById("cards area");
const numberOfCardsDisplay = document.getElementById("number of pairs");
const body = document.body;
const pointCounter = document.getElementById("pointsCounter");


startGameButton.addEventListener("click", clickStartGame)
addCardsButton.addEventListener("click", clickAddCards);
stopGameButton.addEventListener("click", clickStopGame);

// ----------------------------------------------------------------------------

function clickStartGame() {
    isRunning = true;
    body.style.backgroundColor = "white";
}

function clickStopGame() {
    isRunning = false;
    body.style.backgroundColor = "lightblue";
}

function clickAddCards() {
    if (!isRunning) {
        numberOfPairs++;
        updateNumberOfCardsDisplay();
        addCards();
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


            } else if (openedCard.src.includes(cardImage.src))  {
                openedCard.src = cardBackgroundImage;
                numberOfOpenedCards--;
            }
        }
        if (numberOfOpenedCards ===1) firstGuess = openedCard.src;

    if (numberOfOpenedCards === 2) {
        checkForPair(openedCard);
    }

}

/**
 * Checks whether the currently opened cards are pairs
 */
function checkForPair(openedCard) {
   if (openedCard.src.includes(firstGuess)) {
       points++
   }
    updatePointsDisplay()
}


function updateNumberOfCardsDisplay() {
    numberOfCardsDisplay.innerHTML = numberOfPairs;
}


function updatePointsDisplay() {
    pointCounter.innerHTML = points;
}



window.onload = function () {
    addCards();
    updateNumberOfCardsDisplay();

}





