// 01 with let
// let person = {
//   name: 'Peter',
//   age: 35
// }
// // console.log(`person: ${person.name}`);
//  let person1 = person
// // console.log(`person1: ${person.name}`);
// person1.name= 'John'
// console.log(`person: ${person.name}`);
// console.log(`person1: ${person1.name}`);

// 02  with const
const book = {
  author: 'Tom',
  title: 'FirstWar'
}
const book1 = book
// console.log(book1);
book1.author = 'Peter'
book1.year = 1954
console.log(book);