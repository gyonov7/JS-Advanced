function biggerHalf(arr) {
    let result =[];
  arr.sort((a, b) => a - b);
  for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

console.log(biggerHalf([4, 7, 2, 5]));
