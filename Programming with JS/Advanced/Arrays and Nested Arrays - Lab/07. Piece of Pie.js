function pieceOfPie(arr, piece1, piece2) {
  let result = [];

  let startIndex = arr.indexOf(piece1);
  let endIndex = arr.indexOf(piece2);
  for (let i = startIndex; i <= endIndex; i++) {
    result.push(arr[i]);
  }

  return result
}

pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
