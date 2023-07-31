function adAstra(input) {
   let text = input[0];
   let foodPattern =
      /([\|#])(?<name>[A-Z a-z]+)\1(?<expirationDate>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]+)\1/g;

   let totalCalories = 0;
   let foodStorage = [];

   let matches = text.matchAll(foodPattern);

   for (const match of matches) {
      let name = match.groups['name'];
      let expirationDate = match.groups['expirationDate'];
      let calories = Number(match.groups['calories']);

      foodStorage.push(
         `Item: ${name}, Best before: ${expirationDate}, Nutrition: ${calories}`
      );

      totalCalories += calories;
   }

   let days = Math.floor(totalCalories / 2000);
   console.log(`You have food to last you for: ${days} days!`);
   foodStorage.forEach((el) => console.log(el));
}
adAstra([
   '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|',
]);
