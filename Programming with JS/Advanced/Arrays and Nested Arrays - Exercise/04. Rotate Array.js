function rotateArr(arr, rotations) {
  for (let i = 1; i <= rotations % arr.length; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(" "));
}

rotateArr(["Banana", "Orange", "Coconut", "Apple"], 1000);
