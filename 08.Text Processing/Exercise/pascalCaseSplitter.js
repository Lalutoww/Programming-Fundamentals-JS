function pascalCaseSplitter(string) {
   let stringCopy = string.toLowerCase();
   let finalString = string[0];
   for (let i = 1; i < string.length; i++) {
      if (string[i] !== stringCopy[i]) {
         finalString += ', ' + string[i];
      } else {
         finalString += string[i];
      }
   }
   console.log(finalString);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
