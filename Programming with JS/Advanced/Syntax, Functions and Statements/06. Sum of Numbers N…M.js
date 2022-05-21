function sumOfNum (startNum, endNum ){
    startNum = Number(startNum);
    endNum = Number(endNum);
let sum = 0;
    for (let index = startNum; index <= endNum; index++) {
        sum+=index;
        
    }
    console.log(sum);
}
sumOfNum('1', '5' );
sumOfNum('-8', '20' );