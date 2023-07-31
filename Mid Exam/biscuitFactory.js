function biscuitFactory(input) {
   let biscuitNumber = Number(input.shift());
   let workerCount = Number(input.shift());
   let rivalBiscuits = Number(input.shift());

   let dailyBiscuit = 0;

   for (let i = 1; i <= 30; i++) {
      if (i % 3 === 0) {
         dailyBiscuit += Math.floor((biscuitNumber * workerCount * 75) / 100);
      } else {
         dailyBiscuit += Math.floor(biscuitNumber * workerCount);
      }
   }

   let difference = dailyBiscuit - rivalBiscuits;
   let percentage = Math.abs((difference / rivalBiscuits) * 100);

   console.log(
      `You have produced ${dailyBiscuit} biscuits for the past month.`
   );

   if (dailyBiscuit > rivalBiscuits) {
      console.log(
         `You produce ${percentage.toFixed(2)} percent more biscuits.`
      );
   } else {
      console.log(
         `You produce ${percentage.toFixed(2)} percent less biscuits.`
      );
   }
}
biscuitFactory(['65', '12', '26000']);
