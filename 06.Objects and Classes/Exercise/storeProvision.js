function storeProvision(stock, order) {
   const storeProvision = {};

   const stockLength = stock.length;
   const orderLength = order.length;

   for (let i = 0; i < stockLength; i += 2) {
      const productName = stock[i];
      storeProvision[productName] = Number(stock[i + 1]);
   }

   for (let i = 0; i < orderLength; i += 2) {
      const productName = order[i];

      if (!storeProvision.hasOwnProperty(productName)) {
         storeProvision[productName] = 0;
      }
      storeProvision[productName] += Number(order[i + 1]);
   }

   for (const key in storeProvision) {
      console.log(`${key} -> ${storeProvision[key]}`);
   }
}
storeProvision(
   ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
   ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
