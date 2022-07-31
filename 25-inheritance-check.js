// перевірка до Class

// class Car{
//   constructor( model, engine, color ){
//       this.model = model,
//       this.engine = engine,
//       this.color = color
//   }
//   showCar(){
//     console.log(`This car - ${this.model} with ${this.engine} and ${this.color} color`);
//   }
// }
// const nextCar = new Car ('Volvo', '2lit.', 'grey' )
// console.log(nextCar.showCar());
// // === checking inheritance
// console.log(nextCar instanceof Car);
// console.log(nextCar instanceof Object);

// перевірка до об'єкту - hasOwnProperty

class Car{
  constructor( model, engine, color ){
      this.model = model,
      this.engine = engine,
      this.color = color
  }
  showCar(){
    console.log(`This car - ${this.model} with ${this.engine} and ${this.color} color`);
  }
}
const nextCar = new Car ('Volvo', '2lit.', 'grey' )
console.log(nextCar.showCar());
// === checking inheritance
console.log(nextCar.hasOwnProperty('model')); // true
console.log(nextCar.hasOwnProperty('color')); // true
console.log(nextCar.hasOwnProperty('Car')); // false
