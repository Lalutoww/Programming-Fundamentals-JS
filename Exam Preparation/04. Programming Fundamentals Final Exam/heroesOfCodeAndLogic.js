function heroesOfCodeAndLogic(input) {
   let heroesNumber = Number(input.shift());
   let heroes = {};

   for (let i = 0; i < heroesNumber; i++) {
      let line = input.shift();
      let [name, hp, mp] = line.split(' ');
      hp = Number(hp);
      mp = Number(mp);
      if (!heroes[name]) {
         heroes[name] = {
            hp: hp,
            mp: mp,
         };
      }
   }

   let line = input.shift();

   while (line != 'End') {
      let [command, heroName, arg1, arg2] = line.split(' - ');

      switch (command) {
         case 'CastSpell':
            let mpNeeded = Number(arg1);
            let spellName = arg2;

            if (heroes[heroName].mp >= mpNeeded) {
               heroes[heroName].mp -= mpNeeded;
               console.log(
                  `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`
               );
            } else {
               console.log(
                  `${heroName} does not have enough MP to cast ${spellName}!`
               );
            }
            break;
         case 'TakeDamage':
            let damage = Number(arg1);
            let attacker = arg2;

            if (heroes[heroName].hp > damage) {
               heroes[heroName].hp -= damage;

               console.log(
                  `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`
               );
            } else {
               console.log(`${heroName} has been killed by ${attacker}!`);
               delete heroes[heroName];
            }
            break;
         case 'Recharge':
            let mpAmount = Number(arg1);
            let baseMPAmount = heroes[heroName].mp;
            heroes[heroName].mp += mpAmount;

            if (heroes[heroName].mp > 200) {
               let rechargedMP = Math.abs(200 - baseMPAmount);
               heroes[heroName].mp = 200;
               console.log(`${heroName} recharged for ${rechargedMP} MP!`);
            } else {
               console.log(`${heroName} recharged for ${mpAmount} MP!`);
            }
            break;
         case 'Heal':
            let hpAmount = Number(arg1);
            let baseHPAmount = heroes[heroName].hp;
            heroes[heroName].hp += hpAmount;

            if (heroes[heroName].hp > 100) {
               let healedHP = Math.abs(100 - baseHPAmount);
               heroes[heroName].hp = 100;
               console.log(`${heroName} healed for ${healedHP} HP!`);
            } else {
               console.log(`${heroName} healed for ${hpAmount} HP!`);
            }
            break;
      }
      line = input.shift();
   }

   for (const hero in heroes) {
      console.log(`${hero}\nHP: ${heroes[hero].hp}\nMP: ${heroes[hero].mp}`);
   }
}
heroesOfCodeAndLogic([
   '4',
   'Adela 90 150',
   'SirMullich 70 40',
   'Ivor 1 111',
   'Tyris 94 61',
   'Heal - SirMullich - 50',
   'Recharge - Adela - 100',
   'CastSpell - Tyris - 1000 - Fireball',
   'TakeDamage - Tyris - 99 - Fireball',
   'TakeDamage - Ivor - 3 - Mosquito',
   'End',
]);
