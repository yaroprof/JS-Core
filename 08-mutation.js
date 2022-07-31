// === Copying in Primitive data types
// const num1 = 10
// let num2 = num1
// num2 = 30

// console.log(num1); // 10
// console.log(num2); // 30

// === Copying in Objects data types
// const person = {
//   nikName: 'Bob',
//   job: 'dev'
// }
// person.job = 'designer'
// person.age = 25
// console.log(person);  // { nikName: 'Bob', job: 'designer', age: 25 }

// === Copies Mutation
// const person1 = person
// person1.nikName = 'Peter'
// person1.job = 'Security'
// console.log(person1);  // { nikName: 'Peter', job: 'Security', age: 25 }
// console.log(person);  // { nikName: 'Peter', job: 'Security', age: 25 }

// === Prevent Copies Mutation === 
// --- 01 var. === with  Object.assign()
// const person = {
//   nikName: 'Bob',
//   job: 'dev'
// }
// const person1 = Object.assign({}, person)
// person1.job = 'designer'
// person1.age = 25
// console.log(person); // { nikName: 'Bob', job: 'dev' }
// console.log(person1); // { nikName: 'Bob', job: 'designer', age: 25 }

// --- 02 var. === with  Spread operator

// const book = {
//   title: 'Next Door',
//   author: 'DeronJ'
// }
// const book1 = {...book}
// book1.title = 'Cramper',
// book1.author = 'Joryk'
// console.log(book);  // { title: 'Next Door', author: 'DeronJ' }
// console.log(book1)  // { title: 'Cramper', author: 'Joryk' }


// --- 03  var. === with  JSON - methods

const book = {
  title: 'Next Door',
  author: 'DeronJ'
}
const book1 = JSON.parse(JSON.stringify(book))
book1.title = 'Cramper',
book1.author = 'Joryk'
console.log(book);  // { title: 'Next Door', author: 'DeronJ' }
console.log(book1)  // { title: 'Cramper', author: 'Joryk' }





