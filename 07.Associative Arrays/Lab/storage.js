function storage(input) {
   let storage = new Map();

   for (const line of input) {
      let [name, quantity] = line.split(' ');
      quantity = Number(quantity);

      if (storage.has(name)) {
         quantity += storage.get(name);
      }
      storage.set(name, quantity);
   }

   for (const [name, quantity] of storage) {
      console.log(`${name} -> ${quantity}`);
   }
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
