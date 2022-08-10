// --- Call Back Functions
// const greet = (name, callBack) =>{
//   console.log(`Hello ${name}`);
//   callBack()
// }
// const callMe = () => console.log('Im a call back function');
// greet('Peter', callMe)

// --- CBF with a setTimeout
// function greet() {
//   console.log('Hello world');
// }
// function sayName(name) {
//   console.log(`Hello ${name}`);
// }
// setTimeout(greet, 2000);
// sayName('John')

// --- CBF-01
const greet = (name, muFunc) =>{
  console.log('Hello world');
  muFunc(name)
}
const sayName = (name) =>{
  console.log(`Hello ${name}`);
}
setTimeout(greet, 2000, 'Peter' , sayName)