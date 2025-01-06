
var numberOfCards = 2;

const startGameButton = document.getElementById("start game");
const addCardsButton = document.getElementById("add cards");
const cardsArea = document.getElementById("cards area");
const numberOfCardsDisplay = document.getElementById("number of cards");

startGameButton.addEventListener("click", clickStartGame)
addCardsButton.addEventListener("click", clickAddCards);


/*
Alerts the user that the new game button has been clicked.
 */
function clickStartGame() {
    addCards();

}

function clickAddCards() {
    numberOfCards = numberOfCards + 2;
    updateNumberOfCardsDisplay();
}


// TODO: Create a function that sets a given amount of cards to the board
function addCards() {
    for (let i = 0; i < numberOfCards; i++) {
        const newCard = document.createElement("img")
        cardsArea.appendChild(newCard);
    }
}

function updateNumberOfCardsDisplay() {
    numberOfCardsDisplay.innerHTML = numberOfCards;
}

window.onload = function () {
    addCards();
    updateNumberOfCardsDisplay();
}



