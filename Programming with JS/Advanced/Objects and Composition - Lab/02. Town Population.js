function townPopulation(arr) {
  let result = {};
  for (let tokens of arr) {
    let [town, population] = tokens.split(" <-> ");
    if (result.hasOwnProperty(town)) {
      result[town] += Number(population);
    }else{
        result[town] = Number(population);
    }
    
  }
  for(let [t,p] of Object.entries(result)){
      console.log(`${t} : ${p}`);
  }
}

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
