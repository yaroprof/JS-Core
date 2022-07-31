// const myPromise= new Promise((resolve, reject) => {
   
// })

// === with fetch request
// 01
// fetch('https://jsonplaceholder.typicode.com/posts/35')
// .then(response => response.json())
// .then(json => console.log(json))
// // .catch(error => console.error(error)) 
// .catch(error => console.log(error.message)) 

// === Створення власного Promise - використання влаштованої функції fetch
const getData = (url) =>
  new Promise((resolve, reject) => 
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  )
  getData('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data))
  .catch(error => console.log(error.message))