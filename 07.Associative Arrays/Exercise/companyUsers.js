function companyUsers(input) {
   let companyUsers = {};

   for (const user of input) {
      let [name, userId] = user.split(' -> ');

      if (!companyUsers[name]) {
         companyUsers[name] = [];
      }
      companyUsers[name].push(userId);
   }

   let sorted = Object.entries(companyUsers).sort((a, b) =>
      a[0].localeCompare(b[0])
   );

   for (const el of sorted) {
      console.log(el[0]);
      let set = new Set(el[1]);
      for (const num of set) {
         console.log(`-- ${num}`);
      }
   }
}
companyUsers([
   'SoftUni -> AA12345',
   'SoftUni -> BB12345',
   'Microsoft -> CC12345',
   'HP -> BB12345',
]);
