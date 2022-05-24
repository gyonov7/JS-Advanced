function sameNumbers(numbers) {
  numbers = String(numbers);
  let sum = +numbers[0];
  isEqual = true;
 for (let index = 1; index < numbers.length; index++) {
    let currDigit = numbers[0];
   
    let nextDigit = numbers[index];

    if(currDigit==nextDigit){
        sum+=+nextDigit;
    }else{
        isEqual = false;
        sum+=+nextDigit;
    }
 }

 if(isEqual==false){
     console.log('false');
     console.log(sum);

 }else{
     console.log('true');
     console.log(sum);
 }
}


sameNumbers(1234);
