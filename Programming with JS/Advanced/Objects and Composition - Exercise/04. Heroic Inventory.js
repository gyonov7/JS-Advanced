function heroic(arr) {
  let result = [];
  for (let token of arr) {
    let [name, level, items] = token.split(" / ");
    // let items = tokens.split(", ");
    items = items ? items.split(", ") : [];
    result.push({
      name,
      level: Number(level),
      items,
    });
  }
  return JSON.stringify(result);
}

console.log(
  heroic([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
