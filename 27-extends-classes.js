// стоврили масив за допомогою власного екземпляру і класу успадкованого від Array
class numberArray extends Array{
  sum(){
    // reduce виконує ітерацію, перебирає масив
    return this.reduce((el, acc) => acc += el, 0)
  }
}
const myArray = new numberArray(2,5,7)
console.log(myArray);
console.log(myArray.sum());  // 14