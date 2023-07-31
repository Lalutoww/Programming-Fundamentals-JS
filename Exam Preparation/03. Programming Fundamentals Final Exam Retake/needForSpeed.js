function needForSpeed(input) {
   let numberOfCars = Number(input.shift());
   let carStorage = {};

   for (let i = 0; i < numberOfCars; i++) {
      let [carName, mileage, fuel] = input[i].split('|');
      mileage = Number(mileage);
      fuel = Number(fuel);

      carStorage[carName] = {
         mileage: mileage,
         fuel: fuel,
      };
   }

   let line = input.shift();

   while (line != 'Stop') {
      let [command, carName, arg1, arg2] = line.split(' : ');

      switch (command) {
         case 'Drive':
            let distance = Number(arg1);
            let fuel = Number(arg2);

            if (carStorage[carName].fuel >= fuel) {
               carStorage[carName].fuel -= fuel;
               carStorage[carName].mileage += distance;
               console.log(
                  `${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
               );
            } else {
               console.log('Not enough fuel to make that ride');
            }

            if (carStorage[carName].mileage >= 100000) {
               delete carStorage[carName];
               console.log(`Time to sell the ${carName}!`);
            }
            break;
         case 'Refuel':
            let refuel = Number(arg1);
            if (carStorage[carName].fuel + refuel > 75) {
               console.log(
                  `${carName} refueled with ${
                     75 - carStorage[carName].fuel
                  } liters`
               );
               carStorage[carName].fuel += 75 - carStorage[carName].fuel;
            } else {
               carStorage[carName].fuel += refuel;
               console.log(`${carName} refueled with ${refuel} liters`);
            }
            break;
         case 'Revert':
            let kilometers = Number(arg1);
            if (carStorage[carName].mileage - kilometers < 10000) {
               carStorage[carName].mileage = 10000;
            } else {
               carStorage[carName].mileage -= kilometers;
               console.log(
                  `${carName} mileage decreased by ${kilometers} kilometers`
               );
            }
            break;
      }
      line = input.shift();
   }

   for (const car in carStorage) {
      console.log(
         `${car} -> Mileage: ${carStorage[car].mileage} kms, Fuel in the tank: ${carStorage[car].fuel} lt.`
      );
   }
}
needForSpeed([
   '4',
   'Lamborghini Veneno|11111|74',
   'Bugatti Veyron|12345|67',
   'Koenigsegg CCXR|67890|12',
   'Aston Martin Valkryie|99900|50',
   'Drive : Koenigsegg CCXR : 382 : 82',
   'Drive : Aston Martin Valkryie : 99 : 23',
   'Drive : Aston Martin Valkryie : 2 : 1',
   'Refuel : Lamborghini Veneno : 40',
   'Revert : Bugatti Veyron : 2000',
   'Stop',
]);
