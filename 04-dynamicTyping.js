// 01
// val = 'string'
// val = 10
// console.log(val); // 10

// === 02
// -> mutable
// function foo() {
//   console.log('Hello');
// }
// foo()

// foo = 10
// console.log(foo);  // 10  -> змінили тип змінної з function на number, яке вже - не функція
// // foo()  // foo is not a function

// -> unmutable
const foo = () => {
  console.log('Howdy'); // Howdy
};
foo();

foo = 'string';
console.log(foo); // Assignment to constant variable.
