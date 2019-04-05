// class Main {
//   constructor() {
//     this._createElement()
//     this._bind()
//   }
//
//   _createElement() {
//     let div = document.createElement('div')
//     div.className = 'div'
//
//     div.innerText = '哦'
//     document.body.appendChild(div)
//
//     let btn = document.createElement('button')
//     btn.className = 'btn'
//
//     btn.innerText = 'Click me!'
//     document.body.appendChild(btn)
//   }
//
//   _bind() {
//     document.querySelector('.btn')
//       .addEventListener('click', () => {
//         this._show('100px','100px').then(this._show)
//       })
//   }
//
//   _show(x, y) {
//     const promise = new Promise(resolve => {
//       let div = document.querySelector('.div')
//       div.style.transform = `translate(${x}, ${y})`
//       setTimeout(() => {
//         console.log(111)
//         resolve('200px', '300px')
//       },1000)
//     })
//
//     return promise
//   }
//   _next(x, y) {
//     let div = document.querySelector('.div')
//     setTimeout(() => {
//       div.style.transform = `transition(${x}, ${y})`
//     },1000)
//   }
// }
// new Main();

let div = document.createElement('div')
div.className = 'div'

div.innerText = '哦'
document.body.appendChild(div)

let btn = document.createElement('button')
btn.className = 'btn'

btn.innerText = 'Click me!'
document.body.appendChild(btn)
//
// const moveTo = (el, x, y, callback) => {
//   el.style.transform = `translate(${x}, ${y})`
//   setTimeout(() => {
//     callback && callback()
//   }, 1000)
// }
//
// btn.addEventListener('click', ev => {
//   moveTo(div, '100px', '100px', () => {
//     moveTo(div, '200px', '300px', () => {
//       moveTo(div, '500px', '300px', () => {
//         moveTo(div, '0px', '0px', () => {
//           console.log('finish!')
//         })
//       })
//     })
//   })
// })


const moveTo = (el, x, y) => {
  const promise = new Promise(resolve => {
    el.style.transform = `translate(${x}, ${y})`
    setTimeout(() => {
      resolve()
    }, 1000)
  })

  return promise
}

btn.addEventListener('click', ev => {
  moveTo(div, '100px', '100px')
    .then(() => {
      return moveTo(div, '200px', '300px')
    })
    .then(() => {
      return moveTo(div, '300px', '400px')
    })
    .then(() => {
      return moveTo(div, '0px', '0px')
    })
})
