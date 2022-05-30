function magicMetrics(matrix) {
  let isMagical = true;

  for (let i = 0; i < matrix.length - 1; i++) {
    let sumCurrRow = matrix[i].reduce((a, b) => a + b, 0);
    let sumNextRow = matrix[i + 1].reduce((a, b) => a + b, 0);

    let sumCurrCol = 0;
    let sumNextCol = 0;
    for (let j = 0; j < matrix.length; j++) {
      sumCurrCol += matrix[i][j];
      sumNextCol += matrix[i + 1][j];
    }
    if (!(sumNextRow == sumCurrRow && sumNextCol == sumCurrCol)) {
      isMagical = false;
      break;
    }
  }
  console.log(isMagical ? 'true':'false');
}

magicMetrics([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
