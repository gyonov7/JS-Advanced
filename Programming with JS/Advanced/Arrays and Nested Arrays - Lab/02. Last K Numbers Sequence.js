function lastKNumbers(n, k) {
  let sum = 0;
  let result = [1];
  for (let index = 1; index < n; index++) {
let lastKNums = result.slice(-k);
    for (let index = 0; index < lastKNums.length; index++) {
      let currNum = Number(lastKNums[index]);
      sum+=currNum;
    }
result.push(sum);
sum=0;
  }

  return result;
}

lastKNumbers(6, 3);
lastKNumbers(8, 2);
