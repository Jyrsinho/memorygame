import shuffleArray from "../src/utils/shuffleArray.js";
import { expect } from 'chai';




describe("shuffleArray", () => {
    describe("returns same size array", () => {
        it ("should return same sized array as it was given", () => {
            let testArray = [1,2,3,4,5,6,7,8,9,10];
            let length = testArray.length;
            shuffleArray(testArray);
            expect(testArray).to.have.length(length);
        })
    })
    describe("contains same elements",() => {
        it ("should contain the same elements that it was given", () => {
            let testArray = [1,2,3,4,5,6,7,8,9,10];
            let shuffledArray = shuffleArray(testArray);
            expect(shuffledArray).to.have.members(originalArray); // Checks for the same elements, ignoring order
            expect(originalArray).to.have.members(shuffledArray);
        })
    })
})




