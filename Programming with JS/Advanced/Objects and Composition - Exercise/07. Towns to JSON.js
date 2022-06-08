    function towns(arr) {
    let obj = [];
    class Town {
        constructor(town,lati,long){
            this.Town = town,
            this.Latitude = Number(lati),
            this.Longitude = Number(long)
        }
    }
    for (let i = 1; i < arr.length; i++) {
        let array = arr[i].split("|").slice(1,-1).map(e=>e.trim());
        let townName = array[0];
        let townLati = Number(array[1]).toFixed(2);
        let townLong = Number(array[2]).toFixed(2);
        
        let town = new Town(townName,townLati,townLong)
        obj.push(town);
    }
    console.log(JSON.stringify(obj));
    }

towns([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
