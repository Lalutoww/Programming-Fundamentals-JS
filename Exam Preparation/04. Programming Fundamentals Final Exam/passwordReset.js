function passwordReset(input) {
   let password = input.shift();

   let command = input.shift();

   while (command !== 'Done') {
      let [task, arg1, arg2] = command.split(' ');

      switch (task) {
         case 'TakeOdd':
            let newPass = '';
            for (let i = 0; i < password.length; i++) {
               if (i % 2 !== 0) {
                  newPass += password[i];
               }
            }
            password = newPass;
            console.log(password);
            break;
         case 'Cut':
            let startIndex = Number(arg1);
            let endIndex = startIndex + Number(arg2);

            let string = password.substring(startIndex, endIndex);
            password = password.replace(string, '');

            console.log(password);
            break;
         case 'Substitute':
            let substring = arg1;
            let substitute = arg2;
            if (password.includes(substring)) {
               while (password.includes(substring)) {
                  password = password.replace(substring, substitute);
               }
               console.log(password);
            } else {
               console.log('Nothing to replace!');
            }
            break;
      }

      command = input.shift();
   }

   console.log(`Your password is: ${password}`);
}
passwordReset([
   'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
   'TakeOdd',
   'Cut 18 2',
   'Substitute ! ***',
   'Substitute ? .!.',
   'Done',
]);
