function asciiSumator(input) {
   let firstEl = input[0];
   let secondEl = input[1];
   let string = input[2];
   let sum = 0;
   let check = false;

   for (const char of string) {
      if (firstEl.charCodeAt() < secondEl.charCodeAt()) {
         check =
            char.charCodeAt() > firstEl.charCodeAt() &&
            char.charCodeAt() < secondEl.charCodeAt();
      } else {
         check =
            char.charCodeAt() < firstEl.charCodeAt() &&
            char.charCodeAt() > secondEl.charCodeAt();
      }

      if (check) {
         sum += char.charCodeAt();
      }
   }
   console.log(sum);
}
asciiSumator(['.', '@', 'dsg12gr5653feee5']);
