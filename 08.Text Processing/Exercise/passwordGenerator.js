function passwordGenerator(input) {
   let result = input[0] + input[1];
   let thirdWord = input[2].toUpperCase();
   let vowels = ['a', 'e', 'i', 'o', 'u'];
   let changeCount = 0;

   for (const char of result) {
      if (vowels.includes(char)) {
         result = result.replace(char, thirdWord[changeCount++]);
         if (thirdWord[changeCount] === undefined) {
            changeCount = 0;
         }
      }
   }
   let finalPassword = result.split('').reverse().join('');
   console.log(`Your generated password is ${finalPassword}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
