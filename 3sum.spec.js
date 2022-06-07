const threeSum = require('./3sum');

describe.each([
    [[2,3,4,7,11,15], 9, [[2,3,4]]],
    [[1,2,3,4], 6, [[1,2,3]]],
    [[-1,0, 1], -1, [[-1,0, 1]]],
    [[1,2,3,4,5], 10, [[1,4,5]]],
    [[2,3,4,5], 10, "No triplets found"]
])('find triplets of numbers in an array that added equal a given target', (array, target, expected) => {
    test(`returns ${expected}`, () => {
        const triplets = threeSum(array, target);
        expect(triplets).toStrictEqual(expected)
    })
})