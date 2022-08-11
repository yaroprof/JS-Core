// --- Promise
// - Ex01
// let count = true
// const countValue = new Promise(function (resolve,reject) {
//   if(count){
//     resolve('There is a count value')
//   }else{
//     reject('There is no count value')
//   }
// })
// console.log(countValue);

// - Ex02 ---> with 'Then'
// return a Promise
// let countValue= new Promise(function(resolve, reject) {
//   resolve("Promise resolved")
// })
// // executes when Promise is resolved succesfully
// countValue
// .then(function successValue(result) {
//   console.log(result);
// })
// .then(function successValue1() {
//   console.log("You can call multiple functions this way.");
// })

// - Ex03 ---> with 'Catch'
const countValue = new Promise(function (resolve, reject) {
  reject('Promise rejected')
})
countValue.then(function successValue(result) {
  console.log(result);
})
.catch(function errorValue(result) {
  console.log(result);
})







