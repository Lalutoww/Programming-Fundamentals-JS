function destinationMapper(destination) {
   let pattern = /([=|\/])[A-Z]{1}[A-Za-z]{2,}\1/g;
   let count = 0;
   let cities = [];

   if (pattern.test(destination)) {
      const ourDest = destination.match(pattern);

      ourDest.forEach((destination) => {
         count += destination.length - 2;
         cities.push(destination.slice(1, destination.length - 1));
      });
   }

   console.log(`Destinations: ${cities.join(', ')}`);
   console.log(`Travel Points: ${count}`);
}
destinationMapper('');
