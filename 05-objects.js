// --- 01 === adding new properties
// const myCity = {
//   name: 'Kyiv',
//   country: 'Ukraine'
// }
// console.log(myCity);  // { name: 'Kyiv', country: 'Ukraine' }

// myCity.name = 'Lviv'
// console.log(myCity);  // { name: 'Lviv', country: 'Ukraine' }

// myCity = 'Odesa'
// console.log(myCity); // TypeError: Assignment to constant variable.

// 02 === remove properties
const person = {
  name: 'Peter',
  country: 'Poland'
}
delete person.name
console.log(person);  // { country: 'Poland' }