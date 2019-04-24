function Person() {
  Person.prototype.name = 'li'
  Person.prototype.age = 20
  Person.prototype.sayName = function () {
    console.log(this.name)
  }
}

const p1 = new Person()
console.log(Person.prototype.constructor)


