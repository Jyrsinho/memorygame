
let numberOfCards = 2;
let numberOfOpenedCards = 0;
const cardbackgroundImage = "assets/backpattern.png";
let isRunning = false;


const startGameButton = document.getElementById("start game");
const stopGameButton = document.getElementById("stop game");
const addCardsButton = document.getElementById("add cards");
const cardsArea = document.getElementById("cards area");
const numberOfCardsDisplay = document.getElementById("number of cards");
const body = document.body;



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
        cardImage.src = "assets/pattern" + i +".png";
        newCard.addEventListener("click", function () {
            openCard(newCard, cardImage);
        });
        cardsArea.appendChild(newCard);
        if (i % 2 === 0) {
            cardNumber++;
        }
    }
}

function openCard(openedCard, cardImage) {
        if (isRunning) {
            if (openedCard.src.includes(cardbackgroundImage) && numberOfOpenedCards < 2) {
                openedCard.src = cardImage.src
                numberOfOpenedCards++;
            } else if (openedCard.src.includes(cardImage.src))  {
                openedCard.src = cardbackgroundImage;
                numberOfOpenedCards--;
            }
        }
}


function updateNumberOfCardsDisplay() {
    numberOfCardsDisplay.innerHTML = numberOfCards;
}



window.onload = function () {
    addCards();
    updateNumberOfCardsDisplay();

}





