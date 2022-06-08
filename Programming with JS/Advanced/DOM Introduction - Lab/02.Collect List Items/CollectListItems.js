function extractText() {
    let temp1 = document.getElementById('items');
    let arr = temp1.textContent.split('\n').slice(1,-1).map(e=>e.trim());
let result =[];
    for(let item of arr){
        result.push(item);
    }
    temp1.textContent ='';
    let final = document.getElementById('result');
    final.value = result.join('\n');


}