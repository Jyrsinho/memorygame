const getRandomInt = require('./getRandomInt');

/**
 * Shuffles the given array to a random order
 */
function shuffleArray(originalDeck) {

    let shuffledDeck = [];
    let randomNumber;

    for (let i = 0; i < originalDeck.length; i++) {

        randomNumber = getRandomInt(0, originalDeck.length - 1);
        // pick a card from the randomNumber pointed index. If that index is empty pick from the next one
        /*
        while (originalDeck[randomNumber] === undefined) {
            randomNumber++;
            if (randomNumber > originalDeck.length -1) {
                randomNumber = 0;
            }
        }

         */
        let cardToBeDealt = originalDeck.at(randomNumber)

        // delete the dealt card from the original deck
        delete originalDeck.at(randomNumber);
        // add the chosen card to the shuffled deck.
        shuffledDeck[i] = cardToBeDealt;

    }

    return shuffledDeck;
}

module.exports = shuffleArray;