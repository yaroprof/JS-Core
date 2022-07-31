// === 01
// const button = {
//   width: 200,
//   text: 'send'
// }
// const redButton = {
//   ...button,
//   color: 'red'
// }
// // console.log(redButton);  // { width: 200, text: 'send', color: 'red' }
// console.table(redButton)  // виведення в табличному вигляді

const carModel = {
  model: 'Mazda',
  engine: 1600
}
const carStyle = {
  color:'red',
  length: 3000
}
const newCar = {
  ...carModel,
  ...carStyle
}
console.table(newCar);



