function negativePositive (arr) {
let result = [];
    arr.forEach(element => {
        if(element>=0){
            result.push(element);
        }else{
            result.unshift(element);
        }
    });

    console.log(result.join('\n'));
}

negativePositive([7, -2, 8, 9]);