// === before
// let num  // declaration
// const num1 = 10 // // declaration + assigning
// num = true  //  expression return value
// num2 = 15  // 
// console.log(num);  // true
// console.log(num1);  // 10
// console.log(num2);  // 15


// === Difference between Let & Const

// === let 

// let num = 10
// // num = 20  
// // let num = 30  // error 
// console.log(num);  // 20

// let num1
// console.log(num1); // undefined


// === const
// const num = 10 // 10
// num = 20  // Assignment to constant variable.
// console.log(num);  


// === hosting
// --- with let & const
// console.log(num);  //  Cannot access 'num' before initialization
// let num

// --- with var
// console.log(num);  //  undefined - but hoisting is working
// var num = 10

// --- without declaration
// console.log(num);  // ReferenceError: num is not defined
// a = true
