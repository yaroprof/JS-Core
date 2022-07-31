let num1 
let num2
function myFun() {
  let num2
  num1 = true  // не оголошена, відповідна ця змінна глобальна
  num2 = 10
  console.log(num2);  // 10
}
myFun()
console.log(num1);  // true
console.log(num2);  // undefined