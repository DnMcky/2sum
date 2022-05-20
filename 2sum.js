const twoSum = (array, target) => {
    let pairs = [];
    let solutionMap = new Map();

    array.map((element) => {
        // if the element in the array is a key in the solutoin map then we return the KV pair
        const checkedNumber = solutionMap.get(element);
        if (checkedNumber) {
            pairs.push([checkedNumber, element])
        }
        // find the difference between the element and the target. make the difference a key(solution) in the solution map
        const difference = target - element;
        solutionMap.set(difference, element);
    })

    if(pairs.length === 0){
        return `No pairs sum to ${target}`;
    }

    return pairs;
}

module.exports = twoSum;