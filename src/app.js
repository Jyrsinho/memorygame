//Generate 4x4 grid of images

var numberOfCards = 2;

const newGameButton = document.getElementById("new game");
const addCardsButton = document.getElementById("add cards");

newGameButton.addEventListener("click", clickNewGame)
addCardsButton.addEventListener("click", clickAddCards);


/*
Alerts the user that the new game button has been clicked.
 */
function clickNewGame() {
    alert("new game clicked");
}

function clickAddCards() {
    alert("add a new card");
}


// TODO: Create a function that sets a given amount of cards to the board

