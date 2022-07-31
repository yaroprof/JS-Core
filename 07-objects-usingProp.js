// 01
// const name = 'John'
// const age = 35
// const profile = {
//   firstName: name,
//   old: age,
//   getSummary:  function (){
//     console.log(`He is ${this.firstName} and he is ${this.old} old `)
//   }
// }
// profile.getSummary()

// 02
const name = 'John'
const age = 35
const profile = {
  name,
  age,
  getSummary:  function (){
    console.log(`He is ${this.name} and he is ${this.age} old `)
  }
}
profile.getSummary()