// 01
// function myFunc(a,b) {
//   let num1
//   num2 = a + 10
//   num1 = num2 + b
//   return num1
// }
// let newNum = myFunc(10, 20)
// console.log(newNum);

// === provided value through reference- передача по посиланню
// // inside function mutation ouside object
// const laptopModel = {
//   modelName: 'HP',
//   age: 2019
// }
// function changeModel(newParam) {
//   newParam.age = 2020
// }
// changeModel(laptopModel)
// console.log(laptopModel);

// === create Copy Object inside whithin the function
const person = {
  nickName: 'Bayron',
  age: 37
}
function changePersonAge(old) {
  const updatePersonAge = Object.assign({}, old)
  updatePersonAge.age += 1
  return updatePersonAge
}
function changePersonName(name) {
  const updatePersonName = Object.assign({}, name)
  updatePersonName.nickName= 'Peter'
  return updatePersonName
}

const person1 = changePersonAge(person)
const person2 = changePersonName(person)

console.log(person);  // { nickName: 'Bayron', age: 37 }
console.log(person1);  // { nickName: 'Bayron', age: 38 }
console.log(person2);  // { nickName: 'Peter', age: 37 }