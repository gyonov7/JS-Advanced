function equalNeighbors(matrix) {

let counter = 0;
for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length-1; colIndex++) {
       let currentInRow = matrix[rowIndex][colIndex];
       let nextInRow = matrix[rowIndex][colIndex+1]
       if(currentInRow===nextInRow){
           counter++;
       }
    }
}

for (let rowIndex = 0; rowIndex < matrix.length-1; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
       let currentInRow = matrix[rowIndex][colIndex];
       let nextInRow = matrix[rowIndex+1][colIndex]
       if(currentInRow===nextInRow){
        counter++;
    }
    }
}
console.log(counter);
}

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);
