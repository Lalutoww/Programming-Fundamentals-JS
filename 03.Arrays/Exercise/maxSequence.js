function maxSequence(inputArr) {
   let longestSequence = [];
   let lastNum = 0;
   for (let i = 0; i < inputArr.length; i++) {
      lastNum = inputArr[i];
      let currentSequence = [lastNum];
      for (let j = i + 1; j < inputArr.length; j++) {
         let nextNum = inputArr[j];
         if (lastNum === nextNum) {
            currentSequence.push(nextNum);
         } else {
            break;
         }
      }
      if (currentSequence.length > longestSequence.length) {
         longestSequence = [];
         for (let j = 0; j < currentSequence.length; j++) {
            longestSequence.push(currentSequence[j]);
         }
      }
   }

   console.log(longestSequence.join(' '));
}
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
