// fn()
// function fn() {
//   console.log('fn')
// }
// fn1()
// var fn1 = function () {
//   console.log('fn1')
// }
// fn2()
// const fn2 = function () {
//   console.log('fn2')
// }
// function two() {
//   console.log(this)
// }
// function one() {
//   two()
// }
// one()

// function fn1() {
//   let a = 100
//   return function () {
//     console.log(a)
//   }
// }
// fn1()()
// const f1 = fn1()
// const a = 200
// f1()

console.log(1)
setTimeout(() => {
  console.log(2)
})
console.log(3)
