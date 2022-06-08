function storeCatalogue(arr) {
let result ={};
    for (const tokens of arr) {
        let [product,price]= tokens.split(' : ');
        let letter = product[0];

        if(result.hasOwnProperty(letter)==false){
            result[letter]={}
        }
result[letter][product]=price;
    }

    let sortedLetters = Object.keys(result).sort((a,b)=>a.localeCompare(b));
    
    for(let letter of sortedLetters){
        let sortedProduct = Object.keys(result[letter]).sort((a,b)=>a.localeCompare(b));
        console.log(letter);
        for(let p of sortedProduct){
            console.log(`  ${p}: ${result[letter][p]}`); 
        }
    }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
