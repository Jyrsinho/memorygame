const shuffleArray = require('./shuffleArray')

test('shuffleArray should return same size array as it was given', () => {
    testArray = ["auto", "kana", "koira"];
    shuffledTestArray = shuffleArray(testArray);
    expect(shuffledTestArray.length).toBe(3);
})


