
let numberOfCards = 2;

const startGameButton = document.getElementById("start game");
const stopGameButton = document.getElementById("stop game");
const addCardsButton = document.getElementById("add cards");
const cardsArea = document.getElementById("cards area");
const numberOfCardsDisplay = document.getElementById("number of cards");
let isRunning = false;

startGameButton.addEventListener("click", clickStartGame)
addCardsButton.addEventListener("click", clickAddCards);
stopGameButton.addEventListener("click", clickStopGame);

/*
Alerts the user that the new game button has been clicked.
 */
function clickStartGame() {
    isRunning = true;

}

function clickStopGame() {
    isRunning = false;
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
    for (let i = 0; i < numberOfCards; i++) {
        let newCard = document.createElement("img")
        newCard.src = "assets/pattern1.png";
        newCard.addEventListener("click", function () {
            openCard(newCard);
        });
        cardsArea.appendChild(newCard);
    }
}

function openCard(newCard) {
        if (newCard.src.includes("assets/pattern1.png")) {
            newCard.src = "assets/pattern2.png";
        } else {
            newCard.src = "assets/pattern1.png";
        }
}




function updateNumberOfCardsDisplay() {
    numberOfCardsDisplay.innerHTML = numberOfCards;
}


window.onload = function () {
    addCards();
    updateNumberOfCardsDisplay();

}



