function classLaptop() {
   class Laptop {
      info = {};
      isOn = false;
      quality = 0;
      constructor(info, quality) {
         this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand,
         };
         this.quality = quality;
      }
      turnOn() {
         this.quality -= 1;
         return (this.isOn = true);
      }
      turnOff() {
         this.quality -= 1;
         return (this.isOn = false);
      }
      showInfo() {
         return JSON.stringify(this.info);
      }
      get price() {
         return Number(`${800 - this.info.age * 2 + this.quality * 0.5}`);
      }
   }

   let info = { producer: 'Lenovo', age: 1, brand: 'Legion' };
   let laptop = new Laptop(info, 10);
   laptop.turnOn();
   console.log(laptop.showInfo());
   laptop.turnOff();
   laptop.turnOn();
   laptop.turnOff();
   console.log(laptop.isOn);
   console.log(laptop.quality);
   console.log(laptop.price);
}
classLaptop();
