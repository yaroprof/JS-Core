// * Variable Lookup
// {} - code block

const globalNumber = 5
function add(num1, num2) {
  const globalNumber = 10
  const result = num1 + num2 + globalNumber  // 20
  function innerFun() {
    const globalNumber = 9
    console.log(result + globalNumber + 7);  // 36
  }
  innerFun()
  return result
}
console.log(add(3, 7));  // 20