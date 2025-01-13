const getRandomInt = require('../src/utils/getRandomInt')

test('getRandomInt returns number 3 when given 3 and 3', () => {
    expect(getRandomInt(3,3)).toBe(3);
})

test('getRandomInt returns number between 2 and 4', () => {
    expect(getRandomInt(2,4)).toBeGreaterThanOrEqual(2);
    expect(getRandomInt(4,4)).toBeLessThanOrEqual(4);
})
