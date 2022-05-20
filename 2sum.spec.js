const twoSum = require('./2sum');

describe.each([
    [[2,7,11,15], 9, [[2,7]]],
    [[2,3,4], 6, [[2,4]]],
    [[-1,0], -1, [[-1,0]]],
    [[1,2,3,4,5], 10, 'No pairs sum to 10']
])('find pairs of numbers in an array that added equal a given target', (array, target, expected) => {
    test(`returns ${expected}`, () => {
        const pairs = twoSum(array, target);
        expect(pairs).toStrictEqual(expected)
    })
})