// *** Global Scope vs Local Scope
// any variables outside code block {} is said to be in Global Scope
// can be access anywhere in the programm

let name = 'John'
name = 'Peter'
function calculate() {
  // let name = 'orange'
  // console.log(name);  // Peter
  name = 'orange'
  function inner() {
    name = '->inner name value'
    console.log(`this is from inner function ${name}`);
  }
  inner()
  }
calculate()

if (true){
  name = 'apple'
  // console.log(name);
}
// console.log(`My name is ${name} so Im fine`);   // orange