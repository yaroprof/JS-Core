// // --- 01
// async function fun() {
//   console.log('test');
// }
// fun().then()

//--- 02
// a promise
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function() {
//     resolve('Promise resolved')
//   }, 3000)
// })
// // async function
// async function asyncFunc() {
//   let result = await promise
//   console.log(result);
//   console.log('hello');
// }
// asyncFunc()

// --- 03 with catch - method
let promise= new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('We have this result');
  }, 3000);
})

async function asyncFunc() {
  try{
    let result = await promise
    console.log(result);
  }
  catch(error){
    console.log('error');
  }
}
asyncFunc()







































