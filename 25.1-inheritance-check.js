// 01
// class Library{
//   constructor(title, author){
//     this.title = title
//     this.author = author
//   }
//   showBook(){
//     console.log(`This book ${this.title} by ${this.author}`);
//   }
// }
// class Book extends Library{}
// let book1 = new Library('Sea Wolf', 'D.London')
// book1.showBook()

// --- 02 --- with kw: super
class Car{
  constructor(brand){
    this.brand = brand
  }
  present(){
    return 'I have a ' + this.brand
  }
}
class Model extends Car{
  constructor(brand, model){
    super(brand)
    this.model = model
  }
  show(){
    return this.present() + ' , its a ' + this.model
  }
}
myCar = new Model('Ford', 'Mustang')
console.log(myCar.show());



