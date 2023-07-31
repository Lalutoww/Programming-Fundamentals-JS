function furniture(input) {
   let pattern =
      /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]?[\d]+)!(?<quantity>[\d]+)\b/g;

   let totalPrice = 0;
   let furniture = [];
   let command = input.shift();

   while (command !== 'Purchase') {
      let validFurniture = pattern.exec(command);

      while (validFurniture !== null) {
         furniture.push(validFurniture.groups['name']);
         let price = Number(validFurniture.groups['price']);
         let quantity = Number(validFurniture.groups['quantity']);
         totalPrice += price * quantity;
         validFurniture = pattern.exec(command);
      }

      command = input.shift();
   }
   console.log('Bought furniture:');
   if (furniture.length >= 1) console.log(furniture.join('\n'));
   console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture([
   '>>Invalid<!5',
   '>>Invalid<!5',
   '>Invalid<<!5',
   '>>Invalid<!5',
   '>>Invalid<!5',
   '>>TV<<30.21314!5',
   '>>Invalid<<!!5',
   'Purchase',
]);
