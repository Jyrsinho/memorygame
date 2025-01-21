const shuffleArray = require('../src/utils/shuffleArray')

test('shuffleArray should return same size array as it was given', () => {
    let testArray = ["auto", "kana", "koira"];
    let shuffledTestArray = shuffleArray(testArray);
    expect(shuffledTestArray.length).toBe(3);
})


test('shuffleArray should contain the same elements as original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray([...originalArray]);

    // Check that both arrays have the same elements
    expect(shuffledArray).toEqual(expect.arrayContaining(originalArray));
    expect(originalArray).toEqual(expect.arrayContaining(shuffledArray));
});
