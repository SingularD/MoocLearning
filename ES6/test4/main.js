// const display = (el) => {
//   return new Promise(resolve => {
//     el.style.transform = "scale(1,1)"
//     setTimeout(function () {
//       resolve();
//     }, 1000)
//   })
// }
//
// let img1 = document.querySelector('.img1')
// let img2 = document.querySelector('.img2')
// let img3 = document.querySelector('.img3')
//
//
//
// document.querySelector('#btn').addEventListener('click', evt => {
//   display(img1)
//     .then(function () {
//       return display(img2)
//     })
//     .then(function () {
//       return display(img3)
//     })
// })

// function cook() {
//   console.log('开始做饭。');
//   let p = new Promise(function(resolve, reject){
//     setTimeout(function() {
//       console.log('做饭完毕！');
//       resolve('鸡蛋炒饭');
//     }, 1000);
//   });
//   return p;
// }
//
// function eat(data) {
//   console.log('开始吃饭：' + data);
//   let p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       console.log('吃饭完毕!');
//       resolve('一块碗和一双筷子');
//     }, 2000);
//   });
//   return p;
// }
// function wash(data) {
//   console.log('开始洗碗：' + data);
//   let p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       console.log('洗碗完毕!');
//       resolve('干净的碗筷');
//     }, 2000);
//   });
//   return p;
// }
//
// cook()
//   .then(eat)
//   .then(wash)
const data = {
  one: 'li',
  two: 'song',
  three: 'wei',
  wrong: 'false'
}
let p1 = new Promise(resolve => {
  resolve(data.one)
})
let p2 = new Promise(resolve => {
  resolve(data.two)
})
let p3 = new Promise((resolve, reject) => {
  if (false) {
    resolve(data.three)
  } else {
    reject(data.wrong)
  }
})


const log = (data) => {
  console.log(data)
}

//
// Promise.all([p1, p2, p3]).then(log)

// let str = 'abcdefg';
// // let [...str1] = str;
// let str1 = [...str]
// console.log(str1)

// let arr = ['li', 'song', 'wei'];
// let arr1 = ['shuai', 'ge'];
// let Arr = [...arr, ...arr1];
// console.log(Arr)

// const obj1 = {
//   name: 'lisongwei',
//   age: 22
// }
// const obj2 ={
//   hobby: [
//     '学习',
//     '游戏'
//   ]
// }
// let Obj = {...obj1, ...obj2}
// console.log(Obj)
//
// let [a,b,c,d] = [1,2,3,4]
// function add (a, b, c, d) {
//   return a+b+c+d
// }
// function add2 (a, ...args) {
//   console.log(a, args)
// }
// add2(1,2,3,4,5,5)
// console.log(add(a, b, c, d))
