import pickAndDeleteFromArray from "../src/utils/pickAndDeleteFromArray.js";
import * as assert from "node:assert";

describe("pickAndDeleteFromArray", () => {
    describe("return first element from array", () => {
        it("should return the first element from array", () => {
            let testArray = ["auto", "kana", "koira"];
            assert.equal(pickAndDeleteFromArray(testArray, 0), "auto");
        })
    })
    describe("decrease the length", () => {
        it("should decrease the length of array", () => {
            let testArray = [1, 2, 3];
            let length = testArray.length;
            pickAndDeleteFromArray(testArray,0)
            assert.equal(testArray.length, length -1);

        })
    })
    describe("remove the second element from array", () => {
        it("should remove the second element from array", () => {
            let testArray = [1, 2, 3];
            let length = testArray.length;
            pickAndDeleteFromArray(testArray, 1);
            assert.equal((testArray.length), length -1);
            assert.equal(testArray, [1,3]);
        })
    })
})





