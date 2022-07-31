// async - повертає promise, а потім -resolve
// ===>
// const asyncFn = async() =>{
//   return 'Success!'
// }
// asyncFn()
// .then(value => console.log(value))

// ===> with error
const asyncFn = async() =>{
  throw new Error('There was an error')
}
asyncFn()  // rejected>: Error: There was an error
