function activationKeys(input) {
   let rawActivationKey = input.shift();
   let command = input.shift();

   while (command != 'Generate') {
      let arguments = command.split('>>>');
      let request = arguments.shift();

      switch (request) {
         case 'Contains':
            let substring = arguments[0];
            if (rawActivationKey.includes(substring)) {
               console.log(`${rawActivationKey} contains ${substring}`);
            } else {
               console.log('Substring not found!');
            }
            break;
         case 'Flip':
            let casing = arguments[0];
            let startIndex = arguments[1];
            let endIndex = arguments[2];

            let partOfString = rawActivationKey.substring(startIndex, endIndex);

            let instance =
               casing == 'Upper'
                  ? partOfString.toUpperCase()
                  : partOfString.toLowerCase();

            rawActivationKey = rawActivationKey.replace(partOfString, instance);

            console.log(rawActivationKey);
            break;
         case 'Slice':
            let indexStart = arguments[0];
            let indexEnd = arguments[1];

            let slice = rawActivationKey.substring(indexStart, indexEnd);

            rawActivationKey = rawActivationKey.replace(slice, '');
            console.log(rawActivationKey);
            break;
      }
      command = input.shift();
   }
   console.log(`Your activation key is: ${rawActivationKey}`);
}
activationKeys([
   'abcdefghijklmnopqrstuvwxyz',
   'Slice>>>2>>>6',
   'Flip>>>Upper>>>3>>>14',
   'Flip>>>Lower>>>5>>>7',
   'Contains>>>def',
   'Contains>>>deF',
   'Generate',
]);
