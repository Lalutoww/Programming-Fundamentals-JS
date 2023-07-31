function emojiDetector(input) {
   let text = input.shift();
   let allDigits = text.match(/[\d]/g).map((x) => Number(x));
   let coolFactor = 1;
   let emojiCount = 0;
   let coolEmojis = [];

   let emojiPattern = /(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g;

   for (const digit of allDigits) {
      coolFactor *= digit;
   }
   console.log(`Cool threshold: ${coolFactor}`);

   let emojis = text.matchAll(emojiPattern);

   for (const emoji of emojis) {
      let emojiValue = 0;
      let emojiName = emoji[2];
      for (const char of emojiName) {
         emojiValue += char.charCodeAt();
      }

      if (emojiValue >= coolFactor) {
         coolEmojis.push(emoji[0]);
      }
      emojiCount++;
   }
   console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
   for (const emoji of coolEmojis) {
      console.log(emoji);
   }
}
emojiDetector([
   'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
]);
