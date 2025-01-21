import getRandomInt from '../src/utils/getRandomInt.js';
import * as assert from "node:assert";


describe("Random Int", () => {
    describe('random Number', function () {
        it('should return random integer', () => {
            assert.equal(getRandomInt(3,3),3 );
        })
    })
})



