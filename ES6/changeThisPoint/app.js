const obj1 = {
  name: 'lisongwei',
  sayName(params) {
    console.log(this.name,params)
  }
}
const obj2 = {
  name: 'liaoyu',
  sayName(params) {
    console.log(this.name,params)
  }
}

obj1.sayName = obj1.sayName.bind(obj2,'这是lisongwei');
obj1.sayName();
// obj1.sayName('sss')
// obj2.sayName();