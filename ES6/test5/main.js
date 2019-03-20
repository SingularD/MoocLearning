// const obj = {
//   _name: '',
//   get name() {
//     console.log('get')
//     return this._name
//   },
//   set name(val) {
//     this._name = val
//     console.log('set')
//   }
// }
// obj.name
// obj.name = 'aaa'

// class Person {
//   constructor() {
//     this._name = ''
//   }
//   get name() {
//     return this._name
//   }
//   set name(val) {
//     this._name = val
//   }
// }
//
// const person = new Person()
// person.name = 'lisongwei'
// console.log(person.name)

class GetAge {
  constructor(year) {
    this._age = 18
  }
  getCurrentYear () {
    let date = new Date()
    return date.getFullYear()
  }
  get age() {
    return this._age
  }
  set age(birthYear) {
    this._age = this.getCurrentYear() - birthYear
  }
}
let year = prompt("请输入年份")

const age = new GetAge()
age.age = year
console.log(age.age)