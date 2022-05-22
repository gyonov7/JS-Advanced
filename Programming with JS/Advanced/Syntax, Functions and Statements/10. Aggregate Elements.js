function elements (arr) {

    // •	Sum(ai) - calculates the sum of all elements from the input array
    // •	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
    // •	Concat(ai) - concatenates the string representations of all elements from the array
    
let sum = () => {
    let currSum = 0;
    for (let num of arr) {
        currSum+=num;
    }
    return currSum;
}

let sumInverse = () => {
    let currSum = 0;
    for (let num of arr) {
        currSum+=1/num;
    }
    return currSum;
}

let concate = () => {
    let result = '';
    for (let num of arr) {
        result+= num;
    }
    return result;
}
console.log(sum(arr));
console.log(sumInverse(arr));
console.log(concate(arr));
}

elements([1, 2, 3]);
