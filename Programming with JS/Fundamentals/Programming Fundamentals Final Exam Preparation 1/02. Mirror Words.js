function mirrorWords(input) {
  let text = input[0];

  let pattern = /(@|#)(?<firstWord>[A-z]{3,})\1\1(?<secondWord>[A-z]{3,})\1/g;
  let match = pattern.exec(text);
  let count = 0;
  let result = [];
  while (match != null) {
    count++;

    let word1 = match[2];
    let word2 = match[3];
    let toCheck = word2.split("").reverse().join("");
    if (word1 == toCheck) {
      result.push(`${word1} <=> ${word2}`);
    }

    match = pattern.exec(text);
  }

  if (count > 0) {
    console.log(`${count} word pairs found!`);
  } else {
    console.log(`No word pairs found!`);
  }

  if (result.length > 0) {
    console.log(`The mirror words are:\n${result.join(", ")}`);
  } else {
    console.log(`No mirror words!`);
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
console.log("---");
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
console.log("---");

mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
