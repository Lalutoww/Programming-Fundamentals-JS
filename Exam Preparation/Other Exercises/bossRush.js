function bossRush(input) {
   let pattern = /\|(?<bossName>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;

   let number = Number(input.shift());
   let bossArr = [];

   for (let i = 0; i < number; i++) {
      let exec = pattern.exec(input[i]);

      if (!exec) {
         console.log('Access denied!');
      } else {
         while (exec) {
            let bossName = exec.groups['bossName'];
            let title = exec.groups['title'];

            bossArr.push([bossName, title]);
            console.log(`${bossName}, The ${title}
>> Strength: ${bossName.length}
>> Armor: ${title.length}`);

            exec = pattern.exec(input[i]);
         }
      }
   }
}
bossRush([
   '3',
   '|STEFAN|:#H1gh Overseer#',
   '|IVAN|:#Master detective#',
   '|KARL|: #Marketing lead#',
]);
