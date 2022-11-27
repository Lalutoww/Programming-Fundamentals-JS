function censor(sentence, word) {
  function repeat(word) {
    let newWord = '';
    for (let index = 0; index < word.length; index++) {
      newWord += '*';
    }
    return newWord;
  }
  let censored = sentence.replace(word, repeat(word));

  while (censored.includes(word)) {
    censored = censored.replace(word, repeat(word));
  }

  console.log(censored);
}
censor('Find the hidden word', 'hidden');
