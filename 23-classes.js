// === 01 class- створення шаблону
// class Book{
//   // constructor- створ. екземпляру
//   constructor(title, author, year){
//     this.title = title
//     this.author = author
//     this.year = year
//   }
//   // метод не належить class, але успадковується всіма його екземплярами
//   getSummary(){
//     console.log(`This book ${this.title} wrote ${this.author} in ${this.year} `);
//   }
// }
// const ourBook = new Book('Sea Wolf', 'D.london', 1915)
// console.log(ourBook.getSummary());

// === 02 ---> with constructor
// class Persons{
//   constructor(targetPersons){
//     this.targetPersons = targetPersons

//   }
// }
// const peter = new Persons('Peter')
// console.log(peter);

// === 03 ---> without *constructor
// 03.1 create constructor-function
// function User(name) {
//   this.name = name
// }
// User.prototype.sayHi = function () {
//   console.log(`Hello ${this.name}`);
// }
// let user = new User('Peter')
// user.sayHi()

// 03.2 create constructor-function
// function Books(title) {
//   this.title = title
// }
// Books.prototype.showTitle = function () {
//   console.log(`This is book ${this.title}`);
// }
// let book1 = new Books('Sea Wolf')
// let book2 = new Books('Stay Hungry')
// book1.showTitle()
// book2.showTitle()

// 03.3 create constructor-function
// function Cars(model) {
//   this.model= model
// }
// Cars.prototype.showModel = function () {
//   console.log(`This is ${this.model}`); 
// }
// const model = new Cars('Opel')
// model.showModel()

// === 04 ---> Class Expression
// const User = class getUser{
//   sayHi(){
//     console.log(getUser);
//   }
// }
// new User().sayHi()

// 04.1 ---> Class Expression
// const Rectangle = class{
//   constructor(width, height){
//     this.width = width
//     this.height = height
//   }
//   area(){
//     return this.width*this.height
//   } 
// }
// console.log(new Rectangle(4, 5).area());


// === constructor function
function Video(title){
  this.title = title
  console.log(this);
}
const movie = new Video('Bow')
console.log(movie.title);




































