
let numberOfCards = 2;
let numberOfOpenedCards = 0;
const cardbackgroundImage = "assets/backpattern.png";
let isRunning = false;
let openedCards = [];
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
const numberOfCardsDisplay = document.getElementById("number of cards");
const body = document.body;
const pointCounter = document.getElementById("pointsCounter");



startGameButton.addEventListener("click", clickStartGame)
addCardsButton.addEventListener("click", clickAddCards);
stopGameButton.addEventListener("click", clickStopGame);

/*
Alerts the user that the new game button has been clicked.
 */
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
        numberOfCards = numberOfCards + 2;
        updateNumberOfCardsDisplay();
        addCards();
    }
}


// TODO: Create a function that sets a given amount of cards to the board
function addCards() {
    cardsArea.innerHTML = "";
    let cardNumber = 0;
    for (let i = 0; i < numberOfCards; i++) {
        let newCard = document.createElement("img")
        let cardImage = document.createElement("img")
        newCard.src = cardbackgroundImage;
        cardImage.src = "assets/pattern" + cardNumber +".png";
        newCard.addEventListener("click", function () {
            openCard(newCard, cardImage);
        });
        cardsArea.appendChild(newCard);
        if (i % 2 === 1) {
            cardNumber++;
        }
    }
}

function openCard(openedCard, cardImage) {
        if (isRunning) {
            if (openedCard.src.includes(cardbackgroundImage) && numberOfOpenedCards < 2) {
                openedCard.src = cardImage.src
                numberOfOpenedCards++;
                openedCards.push(openedCard);

            } else if (openedCard.src.includes(cardImage.src))  {
                openedCard.src = cardbackgroundImage;
                numberOfOpenedCards--;
                openedCards.pop(openedCard)
            }
        }
    if (numberOfOpenedCards === 2) {
        checkForPair();
    }

}

/**
 * Checks whether the currently opened cards are pairs
 */
function checkForPair() {
    if (openedCards.at(0) === openedCards.at(1)) {
        points += 1;
        updatePointsDisplay()
        openedCards.pop();
        openedCards.pop();
    }
}


function updateNumberOfCardsDisplay() {
    numberOfCardsDisplay.innerHTML = numberOfCards;
}

function updatePointsDisplay() {
    pointCounter.innerHTML = points;
}



window.onload = function () {
    addCards();
    updateNumberOfCardsDisplay();

}





