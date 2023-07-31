function flightSchedule(input) {
   let sectorArray = input.shift();
   let updatedStatusArray = input.shift();
   let flightStatus = input.shift().toString();

   let flights = {};

   for (const plane of sectorArray) {
      let [name, destination] = plane.split(' ');
      flights[name] = {
         Destination: destination,
         Status: 'Ready to fly',
      };
   }

   for (const newStatus of updatedStatusArray) {
      let [name, status] = newStatus.split(' ');
      if (flights[name]) {
         flights[name].Status = status;
      }
   }

   for (const flight in flights) {
      if (flights[flight].Status === flightStatus) {
         console.log(flights[flight]);
      }
   }
}
flightSchedule([
   [
      'WN269 Delaware',
      'FL2269 Oregon',
      'WN498 Las Vegas',
      'WN3145 Ohio',
      'WN612 Alabama',
      'WN4010 New York',
      'WN1173 California',
      'DL2120 Texas',
      'KL5744 Illinois',
      'WN678 Pennsylvania',
   ],

   [
      'DL2120 Cancelled',
      'WN612 Cancelled',
      'WN1173 Cancelled',
      'SK430 Cancelled',
   ],

   ['Cancelled'],
]);
