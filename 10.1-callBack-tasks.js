// === 01 Write a function that returns true or false for a given number. We will reuse this function, so make it reusable.
// const isOdd = (num) => num % 2 === 1
// console.log(isOdd(4));  // false

// === 02.1  Exclaim
// Write a function that returns the given string with a concatenated exclamation ! at the end. 
// const exclaim = ()=>{
//   return '!'
// }
// function greet(callBack, name) {
//   console.log(`${name} ${callBack()}` );
// }
// greet(exclaim, 'Adrian')

// 02.1
// exclaim-Higher order func.
// str - call back function
// const exclaim = (str) => `${str}!`
// console.log(exclaim('Adrian'));

// === 03.1  - Double the chars!
// Write a function that duplicates each char in a string. If I pass 'abc' to the function, it should return 'aabbcc'. We will reuse this function, so make it reusable.
// 03.1.1
// const str = 'Adrian'
// const strArray = [...str]
// let scalar = 2
// const doubleStr = strArray.map(e => e.repeat(2)
// )
// console.log(doubleStr.join(''));  // AAddrriiaann

// 03.1.2 -> more short form
// const doubleStr = (str) => str.split('').map( c => `${c}${c}`).join('')
// console.log(doubleStr('Arnold'));  // AArrnnoolldd

// 04 
// Write a function called atLeastTwo that receives an array and a callback as its arguments. If at least two elements from the array return a truthy value when passed as an argument to the callback, atLeastTwo should return true. If there aren't at least two elements from the array that return a truthy value when passed as arguments to the callback, atLeastTwo should return false.

// 04.1 ===> isOdd

// --- is Odd - true
// const oddNum = (num) =>{
//   return num % 2 === 1
// }
// const addLeastTwo = (arr, callBack) => arr.filter(callBack).length >= 2
// console.log(addLeastTwo([1,2,3,4,5], oddNum));

// --- is Odd - false
// const isOdd = (num) => num % 2 === 1
// const addLeastTwo = (arr, callBack) => arr.filter(callBack).length >= 2
// console.log(addLeastTwo([2,4,5], isOdd)); // false


// ===> 05 Gropup By
// Write a groupBy function that groups elements from an array by the returned value from the callback when an element from the array is passed as an argument.

