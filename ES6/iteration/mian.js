// const arr = [1, 2, 3, 4];
// const object = {
//   name: 'lisongwei',
//   age: 22,
//   hobby: '游戏',
//   girlfriend: true,
//   sayHello: () => {
//     console.log('hhh')
//   }
// }

// const mapResult = arr.forEach((item, index) => {
//   console.log(item, index)
// })

// for (let x in object) {
//   console.log(x, object[x])
// }

// for(let x in arr) {
//   console.log(x)
// }
// console.log('------------------')
// for(let x of arr) {
//   console.log(x)
// }


const object = {
  name: 'lisongwei',
  age: 14,
  sex: 'man',
  hobby: '学习',
  girlfriend: true
}

for(let x of Object.keys(object)){
  console.log(x)
}
for(let x of Object.values(object)) {
  console.log(x)
}


// for(let x in object) {
//   console.log(x, object[x])
// }
// object.foreach( (item, index) => {
//   console.log(item, index)
// } )
