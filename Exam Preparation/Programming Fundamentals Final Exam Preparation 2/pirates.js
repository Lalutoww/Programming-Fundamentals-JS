function pirates(input) {
   let cities = {};
   let line = input.shift();

   while (line != 'Sail') {
      let [cityName, population, gold] = line.split('||');

      if (!cities[cityName]) {
         cities[cityName] = {
            population: Number(population),
            gold: Number(gold),
         };
      } else {
         cities[cityName].population += Number(population);
         cities[cityName].gold += Number(gold);
      }

      line = input.shift();
   }
   let commandLine = input.shift();

   while (commandLine != 'End') {
      let [command, cityName, arg1, arg2] = commandLine.split('=>');

      switch (command) {
         case 'Plunder':
            let people = Number(arg1);
            let gold = Number(arg2);

            cities[cityName].population -= people;
            cities[cityName].gold -= gold;
            console.log(
               `${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`
            );

            if (
               cities[cityName].population <= 0 ||
               cities[cityName].gold <= 0
            ) {
               console.log(`${cityName} has been wiped off the map!`);
               delete cities[cityName];
            }

            break;
         case 'Prosper':
            let treasureIncrease = Number(arg1);
            if (treasureIncrease > 0) {
               cities[cityName].gold += treasureIncrease;
               console.log(
                  `${treasureIncrease} gold added to the city treasury. ${cityName} now has ${cities[cityName].gold} gold.`
               );
            } else {
               console.log('Gold added cannot be a negative number!');
            }
            break;
      }

      commandLine = input.shift();
   }
   let citiesCount = Object.keys(cities).length;

   if (citiesCount > 0) {
      console.log(
         `Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`
      );
      for (const city in cities) {
         console.log(
            `${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`
         );
      }
   } else {
      console.log(
         'Ahoy, Captain! All targets have been plundered and destroyed!'
      );
   }
}
pirates([
   'Nassau||95000||1000',
   'San Juan||930000||1250',
   'Campeche||270000||690',
   'Port Royal||320000||1000',
   'Port Royal||100000||2000',
   'Sail',
   'Prosper=>Port Royal=>-200',
   'Plunder=>Nassau=>94000=>750',
   'Plunder=>Nassau=>1000=>150',
   'Plunder=>Campeche=>150000=>690',
   'End',
]);
