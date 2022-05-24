function sumFirstLast (arr) {

return Number(arr.shift())+Number(arr.pop());
}

// second option
//let sumFirstLast = (arr) =>  Number(arr.shift())+Number(arr.pop());


console.log(sumFirstLast(['20', '30', '40']));