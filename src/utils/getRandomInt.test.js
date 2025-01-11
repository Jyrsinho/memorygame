const getRandomInt = require('./getRandomInt')

test('getRandomInt returns number between 2 and 4', () => {
    expect(getRandomInt(2,5)).toBe(5);
})
