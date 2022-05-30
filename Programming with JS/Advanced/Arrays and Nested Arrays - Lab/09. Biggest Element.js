function biggestEl(arr) {
let biggest = 0;
let result = [];
    for(let i =0;i<arr.length;i++){
        result.push(biggest = Math.max(...arr[i]));
    }

   
return Math.max(...result);
}

console.log(biggestEl([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));
