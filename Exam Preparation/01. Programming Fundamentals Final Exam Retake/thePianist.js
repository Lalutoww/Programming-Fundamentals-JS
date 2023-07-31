function thePianist(input) {
   let pieceNumber = Number(input.shift());
   let songs = {};

   for (let i = 0; i < pieceNumber; i++) {
      let [piece, composer, key] = input.shift().split('|');
      songs[piece] = {
         composer: composer,
         key: key,
      };
   }
   let line = input.shift();

   while (line != 'Stop') {
      let [command, piece, arg1, arg2] = line.split('|');
      switch (command) {
         case 'Add':
            let composer = arg1;
            let key = arg2;
            if (!songs[piece]) {
               songs[piece] = {
                  composer: composer,
                  key: key,
               };
               console.log(
                  `${piece} by ${composer} in ${key} added to the collection!`
               );
            } else {
               console.log(`${piece} is already in the collection!`);
            }
            break;
         case 'Remove':
            if (!songs[piece]) {
               console.log(
                  `Invalid operation! ${piece} does not exist in the collection.`
               );
            } else {
               delete songs[piece];
               console.log(`Successfully removed ${piece}!`);
            }
            break;
         case 'ChangeKey':
            let changeKey = arg1;
            if (!songs[piece]) {
               console.log(
                  `Invalid operation! ${piece} does not exist in the collection.`
               );
            } else {
               songs[piece].key = changeKey;
               console.log(`Changed the key of ${piece} to ${changeKey}!`);
            }
            break;
      }
      line = input.shift();
   }

   for (const piece in songs) {
      console.log(
         `${piece} -> Composer: ${songs[piece].composer}, Key: ${songs[piece].key}`
      );
   }
}
thePianist([
   '3',
   'Fur Elise|Beethoven|A Minor',
   'Moonlight Sonata|Beethoven|C# Minor',
   'Clair de Lune|Debussy|C# Minor',
   'Add|Sonata No.2|Chopin|B Minor',
   'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
   'Add|Fur Elise|Beethoven|C# Minor',
   'Remove|Clair de Lune',
   'ChangeKey|Moonlight Sonata|C# Major',
   'Stop',
]);
