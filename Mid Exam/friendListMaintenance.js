function friendListMaintenance(input) {
   let usernames = input.shift().split(', ');

   let currentLine = input.shift();

   let blacklistCount = 0;
   let lostCount = 0;

   while (currentLine != 'Report') {
      let lineArr = currentLine.split(' ');
      let command = lineArr[0];
      let argument = lineArr[1];
      let argument2 = lineArr[2];

      switch (command) {
         case 'Blacklist':
            let name = argument;
            if (usernames.includes(name)) {
               let indexOfUsername = usernames.indexOf(name);
               console.log(`${usernames[indexOfUsername]} was blacklisted.`);
               usernames[indexOfUsername] = 'Blacklisted';
               blacklistCount++;
            } else {
               console.log(`${name} was not found.`);
            }
            break;
         case 'Error':
            let errorIndex = Number(argument);
            if (errorIndex <= usernames.length - 1 && errorIndex > -1) {
               if (
                  usernames[errorIndex] !== 'Blacklisted' &&
                  usernames[errorIndex] !== 'Lost'
               ) {
                  console.log(
                     `${usernames[errorIndex]} was lost due to an error.`
                  );
                  usernames[errorIndex] = 'Lost';
                  lostCount++;
               } else {
                  break;
               }
            }
            break;
         case 'Change':
            let changeIndex = Number(argument);
            let newName = argument2;

            if (changeIndex <= usernames.length - 1 && changeIndex > -1) {
               console.log(
                  `${usernames[changeIndex]} changed his username to ${newName}.`
               );
               usernames.splice(changeIndex, 1, newName);
            } else {
               break;
            }
            break;
      }
      currentLine = input.shift();
   }
   console.log(`Blacklisted names: ${blacklistCount}`);
   console.log(`Lost names: ${lostCount}`);
   console.log(usernames.join(' '));
}
friendListMaintenance([
   'Mike, John, Eddie, William',
   'Error 3',
   'Error 3',
   'Change 0 Mike123',
   'Report',
]);
