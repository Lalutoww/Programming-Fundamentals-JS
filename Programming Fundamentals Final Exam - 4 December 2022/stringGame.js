function stringGame(input) {
   let string = input.shift();

   let line = input.shift();

   while (line != 'Done') {
      let [command, arg1, arg2] = line.split(' ');

      switch (command) {
         case 'Change':
            let char = arg1;
            let replacement = arg2;

            if (string.includes(char)) {
               while (string.includes(char)) {
                  string = string.replace(char, replacement);
               }
            }
            console.log(string);
            break;
         case 'Includes':
            let part = arg1;

            if (string.includes(part)) {
               console.log('True');
            } else {
               console.log('False');
            }
            break;
         case 'End':
            let endPart = arg1;
            if (string.endsWith(endPart)) {
               console.log('True');
            } else {
               console.log('False');
            }
            break;
         case 'Uppercase':
            string = string.toUpperCase();
            console.log(string);
            break;
         case 'FindIndex':
            let charToFind = arg1;
            console.log(string.indexOf(charToFind));
            break;
         case 'Cut':
            let startIndex = Number(arg1);
            let count = startIndex + Number(arg2);
            let substring = string.substring(startIndex, count);
            string = substring;
            console.log(string);
            break;
      }

      line = input.shift();
   }
}
stringGame([
   '*S0ftUni is the B3St Plac3**',
   'Change 2 o',
   'Includes best',
   'End is',
   'Uppercase',
   'FindIndex P',
   'Cut 3 7',
   'Done',
]);
