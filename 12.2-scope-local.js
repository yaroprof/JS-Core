// * Local Scope
// can not be access from outside code blocs
// everythig withit in {} - is local variable
// if not VAR
let name = 'Peter'
function calculate() {
  let name = 'John'  // we can not this value from outside
  let age = 35
  console.log(`Im ${name} and Ive ${age} old`);  // Im John and Ive 35 old  -> in a local scope
  becomeGlobal = 'global variable'  //global variable- > not declaration and can acess on global environment
 }
 calculate()
 console.log(becomeGlobal);

// console.log(`Im ${name} and Ive ${age} old`);  // references error - can not access to variable - age
if (true) {
  const name = 'Bob' // local
  // var name = 'Den'  // error - name is declared alredady
}
console.log(`My name is ${name} and Im fine`);