function serializeString(input) {
   let string = input[0];
   let letters = [];

   for (const char of string) {
      if (!letters.includes(char)) {
         letters.push(char);
      }
   }

   while (letters.length > 0) {
      let char = letters.shift();
      let indices = [];

      for (let i = 0; i < string.length; i++) {
         if (char === string[i]) {
            indices.push(i);
         }
      }
      console.log(`${char}:${indices.join('/')}`);
   }
}
serializeString(['abababa']);
