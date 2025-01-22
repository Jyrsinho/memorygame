import getRandomInt from './getRandomInt.js';
import pickAndDeleteFromArray from "./pickAndDeleteFromArray.js";

/**
 * Shuffles the given array to a random order and returns new array with original array's elements shuffled
 * @return shuffled array
 */
export default function shuffleArray(originalDeck) {

    let shuffledDeck = [];
    let randomNumber;

    while (originalDeck.length > 0) {

        randomNumber = getRandomInt(0, originalDeck.length - 1);
        // pick a card from the randomNumber pointed index from the original
        // deck. Remove that card from the array
        let pickedCard = pickAndDeleteFromArray(originalDeck, randomNumber);
        // add the chosen card to the shuffled deck.
        shuffledDeck.push(pickedCard);
    }


    return shuffledDeck;
}
