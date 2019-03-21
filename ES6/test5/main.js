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

// class GetAge {
//   constructor(year) {
//     this._age = 18
//   }
//   getCurrentYear () {
//     let date = new Date()
//     return date.getFullYear()
//   }
//   get age() {
//     return this._age
//   }
//   set age(birthYear) {
//     this._age = this.getCurrentYear() - birthYear
//   }
// }
// let year = prompt("请输入年份")
//
// const age = new GetAge()
// age.age = year
// console.log(age.age)


// let foo = class {
//   constructor() {
//     this.name = 13
//   }
// }
// let f = new foo()
// console.log(foo.name)


// function Person() {
//
// }
// Person.prototype.name = 'lisongwei'
// Person.prototype.age = 20
// Person.prototype.sayName = function () {
//   return '我是' + this.name
// }
//
// const person = new Person()
// console.log(person.name)

// function Color() {}
// Color.prototype.color = 'red'
// Color.prototype.getColor = function () {
//   return this.color
// }
//
// const another = {
//   color: 'yellow'
// }
// const ep = new Color()
// console.log(ep.color)
// console.log(ep.getColor.apply(another))

// function foo({x, y = 20}) {
//   console.log(x, y)
// }
// foo()

class Point {
  constructor(x = 1) {
    this.x = x
  }
  get xx() {
    return this.x
  }
  set xx(val) {
    this.x = val
  }
}

const point = new Point();
console.log(point.xx)