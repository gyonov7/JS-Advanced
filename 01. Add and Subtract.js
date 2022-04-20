function addAndSubstract(arr) {
  let newArr = [];
  let originSum=0;
  let newSum=0;
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    originSum+=element;
    if (element % 2 === 0) {
      element += index;
    } else {
      element -= index;
    }
    newSum+=element;
    newArr.push(element);
  }
  console.log(newArr);
  console.log(originSum);
  console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35]);
