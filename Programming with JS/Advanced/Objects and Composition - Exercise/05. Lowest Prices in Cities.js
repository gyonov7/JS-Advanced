function lowestPrices(arr) {
  let result = {};

  for (let tokens of arr) {
    let [town, product, price] = tokens.split(" | ");
    price = Number(price);

    if (result.hasOwnProperty(product)) {
      if (result[product].price > price) {
        result[product].price = price;
      } else {
        continue;
      }
    }
    result[product] = {
      town,
      price,
    };
  }

  for(let key in result){
      console.log(`${key} -> ${result[key].price} (${result[key].town})`);
  }
}

lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
