function solve() {
  let inputText = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  
let toPrint = [];
let input = inputText.toLowerCase().split(" ");
  if (convention == "Pascal Case") {
    for (word of input) {
      let newWord = word[0].toUpperCase() + word.substring(1);
      toPrint.push(newWord);
    }
    result.textContent = toPrint.join('');

  } else if (convention == "Camel Case") {
    for (let i = 1;i<input.length;i++) {
      let newWord = input[i][0].toUpperCase() + input[i].substring(1);
      toPrint.push(newWord);
    }
    result.textContent = input[0]+toPrint.join('');
  } else {
    result.textContent = "Error!";
  }
}
