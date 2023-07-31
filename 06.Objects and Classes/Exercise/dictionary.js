function dictionary(array) {
   class Term {
      constructor(word, definition) {
         this.word = word;
         this.definition = definition;
      }
   }

   let words = [];
   let definitions = [];

   for (const line of array) {
      const currentTerm = JSON.parse(line);
      const currentWord = Object.keys(currentTerm)[0];
      const currentDefinition = Object.values(currentTerm)[0];

      const termIndex = words.indexOf(currentWord);
      if (termIndex > -1) {
         definitions[termIndex] = currentDefinition;
      } else {
         words.push(currentWord);
         definitions.push(currentDefinition);
      }
   }

   let terms = [];
   let wordsLength = words.length;

   for (let i = 0; i < wordsLength; i++) {
      terms.push(new Term(words[i], definitions[i]));
   }

   let sortedTerms = terms.sort((a, b) => a.word.localeCompare(b.word));
   sortedTerms.forEach((term) => {
      console.log(`Term: ${term.word} => Definition: ${term.definition}`);
   });
}
dictionary([
   '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
   '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
   '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
   '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
   '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
