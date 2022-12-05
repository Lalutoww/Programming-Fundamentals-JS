function duplicateEncode(word) {
  word = word.toLowerCase();
  let temp = "";

  for (const char of word) {
    let testWord = word;
    let count = 0;

    while (testWord.includes(char)) {
      testWord = testWord.replace(char, "");
      count++;
    }

    if (count > 1) temp += ")";
    else temp += "(";
  }
  return temp;
}
console.log(duplicateEncode("SucceSs"));
