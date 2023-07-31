function deserializeString(input) {
   let result = [];
   let command = input[0];
   while (command !== 'end') {
      for (let i = 0; i < input.length; i++) {
         command = input[i];
         if (command === 'end') {
            break;
         }
         let tokens = input[i].split(':');
         let letter = tokens[0];
         let index = tokens[1].split('/').map((x) => Number(x));
         for (const number of index) {
            result[number] = letter;
         }
      }
   }
   console.log(result.join(''));
}
deserializeString([
   'a:0/3/5/11',
   'v:1/4',
   'j:2',
   'm:6/9/15',
   's:7/13',
   'd:8/14',
   'c:10',
   'l:12',
   'end',
]);
