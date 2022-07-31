// === 01
const myArr = [1,2,3,4,5]
// console.log(myArr);

// === 02 with new Array - створення екземпляру Array
const myArr1 = new Array(1,2,3,4,5)
// console.log(myArr1);
console.log(myArr === myArr1); // false -> при створенні 2 різних об'єктів, навіть якщо вони однакові, обєкти на які вони посилаються створені в різних місцях пам'яті 
