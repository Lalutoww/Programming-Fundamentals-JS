// Associative Arrays default

function minerTask(input) {
   let minerTask = {};

   for (let i = 0; i < input.length; i += 2) {
      let name = input[i];
      let quantity = Number(input[i + 1]);

      if (!minerTask[name]) {
         minerTask[name] = quantity;
      } else {
         minerTask[name] += quantity;
      }
   }

   for (const material in minerTask) {
      console.log(`${material} -> ${minerTask[material]}`);
   }
}

// Map method

function minerTask2(input) {
   let minerTask = new Map();

   for (let i = 0; i < input.length; i += 2) {
      let name = input[i];
      let quantity = Number(input[i + 1]);

      if (!minerTask.has(name)) {
         minerTask.set(name, quantity);
      } else {
         quantity += minerTask.get(name);
         minerTask.set(name, quantity);
      }
   }

   for (const material of minerTask) {
      console.log(`${material[0]} -> ${material[1]}`);
   }
}
minerTask2(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
