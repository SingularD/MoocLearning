// export const list = function (passagelist) {
//   let ul = document.createElement('ul')
//   ul.className = 'passageList'
//
//   let listArr = []
//   passagelist.forEach(({title}) => {
//     listArr.push(`<li>${title}</li>`)
//   })
//   ul.innerHTML = listArr.join('')
//   return ul
// }

export class PassageList {
  constructor(data) {
    this.data = data;
    this.element = null;
    this._init();
    this._bind();
  }
  _init() {
    let ul = document.createElement('ul')
    ul.className = 'passageList'

    let listArr = []
    this.data.forEach(({title}) => {
      listArr.push(`<li>${title}</li>`)
    })
    ul.innerHTML = listArr.join('')
    this.element = ul;
  }
  _showContent(content) {
    document.querySelector('.main-content').innerHTML = `<p>${content}</p>`
  }
  _bind() {
    this.element.addEventListener('click', ({target}) => {
      if (target.nodeName !== 'LI') return;
      this.data.forEach(item => {
        if (item.title === target.innerText) {
          this._showContent(item.content)
        }
      })

    })
  }
}

