// --- create a Map
// const map1 = new Map()
// console.log(map1);  // Map(0) {}

// --- insert item a Map
// let map2 = new Map()
// map2.set('person', {name:'Jack', age: 35})
// console.log(map2);

// --- Access Map Elements
// let map3=  new Map()
// map3.set('person', {name: 'Peter', age: 23})
// console.log(map3.get('person'));

//--- Check Map Elements
// const person = new Map()
// person.set('info', {name: 'Peter', age: 35})
// console.log(person.has('info'));  // true

// --- Removing Elements
let library = new Map()
library.set('book', {title:'SeaWolf', author: 'D.London'})
// console.log(library);

console.log(library.delete('car')); // false
library.delete('book')
console.log(library);  // Map(0) {}
