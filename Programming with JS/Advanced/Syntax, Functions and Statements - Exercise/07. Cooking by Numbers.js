function cooking(numInput, ...commands) {
    numInput = Number(numInput);
  // •	chop - divide the number by two
  let chop = (x) => x / 2;
  // •	dice - square root of a number
  let dice = (x) => Math.sqrt(x);
  // •	spice - add 1 to the number
  let spice = (x) => x + 1;
  // •	bake - multiply number by 3
  let bake = (x) => x * 3;
  // •	fillet - subtract 20% from the number
  let fillet = (x) => x - x * 0.2;

 
  for (let command of commands) {
    if(command=='chop'){
    
        console.log(chop(numInput))
        numInput=chop(numInput);
    }else if(command =='dice'){
        console.log(dice(numInput));
        numInput=dice(numInput);

    }else if(command =='spice'){
        console.log(spice(numInput));
        numInput=spice(numInput);

    }else if(command =='bake'){
        console.log(bake(numInput));
        numInput=bake(numInput);

    }else if(command =='fillet'){
        console.log(fillet(numInput));
        numInput=fillet(numInput);

    }
  }
}

cooking("32", "chop", "chop", "chop", "chop", "chop");
console.log("---");
cooking("9", "dice", "spice", "chop", "bake", "fillet");
