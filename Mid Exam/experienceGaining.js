function experienceGaining(input) {
   //Collecting input data
   let experienceNeeded = input.shift();
   let countOfBattles = input.shift();
   let experienceEarnedPerBattle = input.shift();

   let battlesNeeded = 0;
   let hasCollected = false;

   let totalExperience = 0;
   for (let i = 1; i <= countOfBattles; i++) {
      if (i % 3 === 0) {
         totalExperience +=
            experienceEarnedPerBattle + experienceEarnedPerBattle * 0.15;
      }
      if (i % 5 === 0) {
         totalExperience += experienceEarnedPerBattle * 0.9;
      }
      if (i === 15) {
         totalExperience += experienceEarnedPerBattle * 0.05;
      }
      if (i % 3 !== 0 && i % 5 !== 0) {
         totalExperience += experienceEarnedPerBattle;
      }

      battlesNeeded++;
      if (totalExperience >= experienceNeeded) {
         hasCollected = true;
         break;
      }

      experienceEarnedPerBattle = input.shift();
   }
   //Print output
   if (hasCollected) {
      console.log(
         `Player successfully collected his needed experience for ${battlesNeeded} battles.`
      );
   } else {
      let neededExperience = experienceNeeded - totalExperience;
      console.log(
         `Player was not able to collect the needed experience, ${neededExperience.toFixed(
            2
         )} more needed.`
      );
   }
}
experienceGaining([400, 5, 50, 100, 200, 100, 20]);
