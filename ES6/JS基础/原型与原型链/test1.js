function Person() {
  Person.prototype.name = 'li'
  Person.prototype.age = 20
  Person.prototype.sayName = function () {
    console.log(this.name)
  }
}

const p1 = new Person()

console.log(p1.__proto__ === Person.prototype)
// 实例p1的原型对象是Person.prototype,原型对象的constructor属性是Person()

console.log(Person.__proto__ === Function.prototype)
// Person的构造函数是Function()

console.log(Function.__proto__ === Function.prototype)
// 函数对象Function的构造函数就是他自身Function

console.log(Function.prototype.__proto__ === Object.prototype)
// Function.prototype的构造函数Object()

console.log(Object.prototype.__proto__ === null)
// 原型链的顶点为null

console.log('-----------------------------------')
const o1 = {
  name: 'li',
  age: 20,
  sayName: function () {
    console.log(this.name)
  }
}

console.log(o1.__proto__ === Object.prototype)
// o1是通过默认的构造函数Object实例出来的，所以没有自定义的构造函数的话，原型链就很简单
// 当有自定义的构造函数的时候，那么还要针对函数对象找它们对应的原型链

console.log('-----------------------------------')
const arr = [1, 2]
console.log(arr.__proto__ === Array.prototype)
// 实例arr的原型对象是构造函数Array的显式原型
console.log(Array.__proto__ === Function.prototype)
// 构造函数Array的构造函数是Function，所以Array的隐式原型指向Function的显式原型
console.log(Array.__proto__.__proto__ === Object.prototype)
// Array.__proto__.__proto__ === Function.prototype.__proto__
// 那就是所有构造器的原型Function.prototype对象的原型对象就是Object.prototype

function t() {
  console.log(Object.prototype.toString.call(arguments))
  console.log([...arguments].join(''))
}
t(1,2)
