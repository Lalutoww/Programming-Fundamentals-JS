function schoolLibrary(input) {
   let books = input.shift().split('&');

   let chatArr = books;
   let currentLine = input.shift();

   while (currentLine !== 'Done') {
      let lineArr = currentLine.split(' | ');
      let command = lineArr[0];
      let argument1 = lineArr[1];
      let argument2 = lineArr[2];

      switch (command) {
         case 'Add Book':
            if (!chatArr.includes(argument1)) {
               chatArr.unshift(argument1);
            }
            break;
         case 'Take Book':
            if (chatArr.includes(argument1)) {
               let indexOfMessage = chatArr.indexOf(argument1);
               chatArr.splice(indexOfMessage, 1);
            }
            break;
         case 'Swap Books':
            if (chatArr.includes(argument1) && chatArr.includes(argument2)) {
               [chatArr[argument1], chatArr[argument2]] = [
                  chatArr[argument1],
                  chatArr[argument2],
               ];
            }
            break;
         case 'Insert Book':
            chatArr.push(argument1);
            break;
         case 'Check book':
            if (
               Number(argument1) <= chatArr.length - 1 &&
               Number(argument1) > -1
            ) {
               console.log(`${chatArr[argument1]}`);
            }
            break;
      }
      currentLine = input.shift();
   }
   console.log(chatArr.join(', '));
}
schoolLibrary([
   'Anna Karenina&Heart of Darkness&Catch-22&The Stranger',
   'Add Book | Catch-22',
   'Swap Books | Anna Karenina | Catch-22',
   'Take Book | David Copperfield',
   'Done',
]);
