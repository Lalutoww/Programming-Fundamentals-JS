function convertToObject(string) {
   let person = JSON.parse(string);

   for (let key of Object.keys(person)) {
      console.log(`${key}: ${person[key]}`);
   }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
