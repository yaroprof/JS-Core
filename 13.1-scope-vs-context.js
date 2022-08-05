// === scope vs context

// --- scope 
// --- with global variable
// const color = 'red'
// function test() {
//   return color
// }
// console.log(test());  // red

// --- with local variable
// function test() {
//   const color = 'red'
// }
// console.log(test());  // undefined this variable within a scope? log cant access in local scope

// --- with local variable
// function test() {
//   const color = 'red'
//   return color
// }
// console.log(test()); //  red  undefined this variable within a scope, but function return a result

// --- context*
// in this case - method 'Hello' action in context object - greet1
const greet1 = {
  name: 'Peter',
  hello: function () {
    console.log(`Hello ${this.name} from 1th context`);  // // Hello Peter from 1th context  --> after apply method: Hello Tom from 1th context -> apply changed greet1 context on context - greet2
  }
}
// in this case - method 'Hello' action in the context object - greet2
greet1.hello()
const greet2 = {  
  name: 'Tom',
  hello: function () {
    console.log(`Hello ${this.name} from 2th context`); // Hello Tom from 1th context 
  }
}
greet2.hello()
// using apply method
greet1.hello.apply(greet2)