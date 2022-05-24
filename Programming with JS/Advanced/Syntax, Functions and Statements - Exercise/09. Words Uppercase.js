function upperCase (text) {

   let pattern = /(?<word>)[A-z]+/g;

//    let res = text.match(pattern);
//    console.log(res);


let res = pattern.exec(text);
let word = '';
let toPrint = [];
while(res!=null){
    //console.log(res);
    for (const letter of res[0]) {
        word+=letter.toLocaleUpperCase();
    }
toPrint.push(word);
word='';

    res = pattern.exec(text);
}
console.log(toPrint.join(', '));
}

upperCase('Hi, how are you?');
