const pickAndDeleteFromArray = require("../src/utils/pickAndDeleteFromArray");


test("pickAndDeleteFromArray should return the first element from the array", () => {
    let testArray = [1, 2, 3];
    expect(pickAndDeleteFromArray(testArray, 0)).toEqual(1);

})

test("pickAndDeleteFromArray should decrease the length of array given to it", () => {
    let testArray = [1, 2, 3];
    pickAndDeleteFromArray(testArray, 0);
    expect(testArray.length).toBe(2);

})

test("pickAndDeleteFromArray should remove the second element from the array", () => {
    let testArray = [1, 2, 3];
    pickAndDeleteFromArray(testArray, 1);
    expect(testArray).toStrictEqual([1,3]);
})