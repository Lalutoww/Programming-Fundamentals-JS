function cats(array) {
   class Cat {
      constructor(name, age) {
         this.name = name;
         this.age = age;
      }

      meow() {
         console.log(`${this.name}, age ${this.age} says Meow`);
      }
   }

   let cats = [];

   array.forEach((element) => {
      let catData = element.split(' ');
      cats.push(new Cat(catData[0], catData[1]));
   });

   for (const cat of cats) {
      cat.meow();
   }
}

cats(['Mellow 2', 'Tom 5']);
