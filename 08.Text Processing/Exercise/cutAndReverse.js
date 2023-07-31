function cutAndReverse(string) {
   let middle = string.length / 2;
   let firstHalf = string.substring(0, middle);
   let secondHalf = string.substring(middle);

   let result = [firstHalf, secondHalf].map((word) =>
      word.split('').reverse().join('')
   );

   for (const word of result) {
      console.log(word);
   }
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
