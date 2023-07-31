function replaceRepeatingChars(string) {
   let finalString = string[0];

   for (let i = 1; i < string.length; i++) {
      let char = string[i];
      let lastChar = string[i - 1];

      if (char !== lastChar) {
         finalString += char;
      }
   }
   console.log(finalString);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
