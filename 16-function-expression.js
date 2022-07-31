// === 01
// const myFunc = function (num1, num2) {
//   let result
//   num1 = num1 + 10
//   result = num1 + num2
//   return result
// }
// console.log(myFunc(10,20));

// === funct.expression as callBack func in setTimeout
const person = function (name, greet) {
  console.log(`${greet} my dear friend ${name}`);
}

setTimeout(() => {
  person('Peter', 'Hello')
}, 2000);