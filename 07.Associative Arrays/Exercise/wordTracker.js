function wordTracker(input) {
   let wordTracker = {};

   let neededWords = input.shift().split(' ');

   for (const sentenceWord of neededWords) {
      let currentWord = sentenceWord;
      wordTracker[currentWord] = 0;
      for (const word of input) {
         if (currentWord === word) {
            wordTracker[currentWord]++;
         }
      }
   }

   let sortedObject = Object.entries(wordTracker);
   sortedObject.sort((a, b) => b[1] - a[1]);

   for (const word of sortedObject) {
      console.log(`${word[0]} - ${word[1]}`);
   }
}
wordTracker([
   'is the',
   'first',
   'sentence',
   'Here',
   'is',
   'another',
   'the',
   'And',
   'finally',
   'the',
   'the',
   'sentence',
]);
