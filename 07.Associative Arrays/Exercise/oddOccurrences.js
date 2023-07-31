function oddOccurrences(input) {
   let words = input.split(' ').map((x) => x.toLowerCase());
   let wordStorage = new Map();

   for (const word of words) {
      let quantity = 1;
      if (!wordStorage.has(word)) {
         wordStorage.set(word, quantity);
      } else if (wordStorage.has(word)) {
         quantity += wordStorage.get(word);
         wordStorage.set(word, quantity);
      }
   }

   let sortedWords = Array.from(wordStorage.entries()).filter(
      (x) => x[1] % 2 == 1
   );

   let buff = '';
   for (const oddWord of sortedWords) {
      buff += `${oddWord[0]} `;
   }
   console.log(buff);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
