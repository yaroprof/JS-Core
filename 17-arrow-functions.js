const book = (title, author) =>{
  console.log(`This book ${title} is wrote by ${author}  `);
}
setTimeout(() => {
  book('Red&Black', 'TomJ')
}, 2000);