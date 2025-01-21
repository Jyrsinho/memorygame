import shuffleArray from "../src/utils/shuffleArray.js";
import { expect } from 'chai';





describe("shuffleArray", () => {
    describe("returns same size array", () => {
        it ("should return same sized array as it was given", () => {
            let testArray = [1,2,3,4,5,6,7,8,9,10];
            let length = testArray.length;
            let shuffledArray = shuffleArray(testArray);
            expect(shuffledArray).to.have.lengthOf(length);
        })
    })
    describe("empties the original deck",() => {
        it ("should empty out the original deck", () => {
            let testArray = [1,2,3,4,5,6,7,8,9,10];
            let shuffledArray = shuffleArray(testArray);
            expect(testArray).to.have.lengthOf(0); // Checks for the same elements, ignoring order

        })
    })
})




