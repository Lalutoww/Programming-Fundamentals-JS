function starEnigma(input) {
   let messageCount = Number(input.shift());
   let decryptedArr = [];

   for (let i = 0; i < messageCount; i++) {
      let pattern = /[SsTtAaRr]/g;
      if (pattern.test(input[i])) {
         let decryptKey = input[i].match(pattern).length;
         let decryptedMessage = '';
         for (const char of input[i]) {
            let mesChar = char.charCodeAt() - decryptKey;
            decryptedMessage += String.fromCharCode(mesChar);
         }
         decryptedArr.push(decryptedMessage);
      } else {
         decryptedArr.push(input[i]);
      }
   }

   let destroyedPlanets = [];
   let attackedPlanets = [];

   let decryptedPattern =
      /@(?<name>[A-Za-z]+)[^@\-!\:>]*:(?<population>[\d]+)[^@\-!\:>]*!(?<attackType>[AD])![^@\-!\:>]*->(?<soldierCount>[\d]+)[^@\-!\:>]*/g;

   for (const message of decryptedArr) {
      let result = decryptedPattern.exec(message);
      if (result) {
         if (result.groups['attackType'] === 'D') {
            destroyedPlanets.push(result.groups['name']);
         } else {
            attackedPlanets.push(result.groups['name']);
         }
         result = decryptedPattern.exec(message);
      }
   }
   console.log(`Attacked planets: ${attackedPlanets.length}`);
   attackedPlanets.sort((a, b) => a.localeCompare(b));
   for (const planet of attackedPlanets) {
      console.log(`-> ${planet}`);
   }

   console.log(`Destroyed planets: ${destroyedPlanets.length}`);
   destroyedPlanets.sort((a, b) => a.localeCompare(b));
   for (const planet of destroyedPlanets) {
      console.log(`-> ${planet}`);
   }
}
starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
