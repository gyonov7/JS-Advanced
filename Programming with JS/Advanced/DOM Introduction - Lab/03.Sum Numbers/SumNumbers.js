function calc() {
   let n1 = Number(document.getElementById('num1').value);
   let n2 = Number(document.getElementById('num2').value);
    let result = document.getElementById('sum');
result.value = n1+n2;
return result;
}