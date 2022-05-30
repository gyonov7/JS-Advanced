function sortByTwo(arr) {
  arr.sort(twoCriteria);
  return arr.join("\n");

  function twoCriteria(curr, next) {
    if (curr.length === next.length) {
      return curr.localeCompare(next);
    }
    return curr.length - next.length;
  }
}

// sortByTwo(['Isacc',
// 'Theodor',
// 'Jack',
// 'Harrison',
// 'George']

// );
// console.log('---');
console.log(sortByTwo(["test", "Deny", "omen", "Default"]));
