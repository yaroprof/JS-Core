// Callback function
// Higher order func.
// Functions as First Class Objects/ Citix=zens


// const greeMorning = (name) =>{
//   const myName = 'Peter'
//   console.log(`Good morning ${name}, my name is ${myName}`);  //Hello John, my name is Peter
// }
// greeMorning('John')
// ===
// const greetEvening = (name) =>{
//   const myName = 'Peter'
//   console.log(`Good veening ${name}, my name is ${myName}`); 
// }
// // greetEvening('Bob')

// function greet() {
//   greeMorning('John')
//   greetEvening('Bob')
// }
// greet()


// ===> *Call back - func.
function morning(name) {
  // console.log(`Good morning ${name.toUpperCase()}`);
  return `Good morning ${name.toUpperCase()}`
}
function afterNoon(name) {
  // console.log(`Good morning ${name.toUpperCase()}`);
  return `Good afternoon ${name.repeat(3)}`
}
// ===> *Higher order func.
// callBack() & morning is not the same; morning - 
function greet(name, callBack) {
  const myName = 'John'
  console.log(`${callBack(name)}, my name is ${myName}`);
}     
greet('Peter', morning)
greet('Den ', afterNoon)