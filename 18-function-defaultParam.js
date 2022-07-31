// === 01
// function multiFactor(value, multiplier = 1) {
//   return value * multiplier
// }

// console.log(multiFactor(10)); // 10
// console.log(multiFactor(10, 40));  // 400

// === with function.expression
// const sum = function (value, sumDefault = 3) {
//   return value + sumDefault
// }
// console.log(sum(10, 20));

// === with arrow-function
// const divide = (val, defVal = 3) =>{
//   return val / defVal
// }
// console.log(divide(40, 20)); // 2
// console.log(divide(40)); // 13.333333333333334

// === 
// const post = {
//   title: 'News',
//   author: 'John'
// }
// повертаємо неявно об'єкт без вказівка return за допомогою ...spread
// const newPost = (post, addedAt = Data()) =>({
//   ...post,
//   addedAt
// })
// const firstPost = {
//   id: 1,
//   tag: 'sport'
// }

// console.table(newPost( firstPost ));

// === with return

const newBook = (book, addedAt = Date()) =>{
  return(
    // create new object with default value - from book
    ({
      ...book,
      addedAt,
  })
  )
}
const firstBook = {
  tittle: 'This world',
  author: 'Jamile'
}
// console.log(newBook(firstBook));












