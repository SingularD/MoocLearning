// const test = {
//   name: 'lisongwei',
//   sayName: function () {
//     console.log(this.name)
//   }
// }
// const test2 = {}
// test2.satName = test.sayName
// test2.satName()
//
// test.sayName()
//
// const demo = {
//   name: 'liaoyu'
// }
// test.sayName.bind(demo,'hello')()
// test.sayName.call(demo,'hello')
// test.sayName.apply(demo, ['hello'])

Function.prototype.myCall = function (obj) {
  obj._fn_ = this
  obj._fn_();
  let a = obj._fn_();
  delete obj._fn_
  return a
}

const test = {
  name: 'test'
}
const o = {
  name: 'o',
  sayName: function () {
    return this.name
  }
}
//
// o.sayName()
console.log(o.sayName.call(test))
console.log(o.sayName.myCall(test))

// Function.prototype.myBind = function(obj,...arg1){
//   return (...arg2) => {
//     let args = arg1.concat(arg2);
//     let val ;
//     obj._fn_ = this;
//     console.log(this)
//     val = obj._fn_( ...args );
//     delete obj._fn_;
//     return val
//   }
// }

// o.sayName()
// o.sayName.bind(test)()
// o.sayName.myBind(test)()

function ttt(arr) {
  console.log(...arr)
}

ttt([1,'2',3])
