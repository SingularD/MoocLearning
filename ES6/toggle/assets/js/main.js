methods = {
  appendChild(parent, ...children) {
    children.forEach((item) => {
      parent.appendChild(item)
    })
  },
  $(selector, root = document) {
    return root.querySelector(selector)
  },
  $$(selector, root = document) {
    return [...root.querySelectorAll(selector)]
  }
} // 公共方法

class CustomSelect {
  constructor(options) {
    this.curToggle = false
    this.classify = {}


    this._init(options);
    this._createElement();
    this._bind();
    this._show();
  }

  _init(data) {
    data.forEach((item) => {
      if (!Object.keys(this.classify).includes(item.type)) {
        this.classify[item.type] = []
      }
      this.classify[item.type].push(item.text)
    })
    console.log(this.classify)

  }

  _createElement() {
    for (let key in this.classify) {
      let title = document.createElement('h2')
      title.className = 'selector-options-title'
      title.innerText = `${key}`
      methods.appendChild(methods.$('.selector-content'), title)


      let liList = []
      let ul = document.createElement('ul')
      ul.className = 'selector-options-group'

      this.classify[key].forEach(item => {
        liList.push(`<li><div class="selector-options-item">${item}</div></li>`)
      })
      ul.innerHTML = liList.join('')
      methods.appendChild(methods.$('.selector-content'), ul)
    }
  }

  _bind() {
    methods.$('.selector-content').addEventListener('mouseover', ({target}) => {
      if (target.nodeName === 'LI' || target.parentNode.nodeName === 'LI') {
        target.style.backgroundColor = 'grey'
        target.style.cursor = 'pointer'
      }
    })
    methods.$('.selector-content').addEventListener('mouseout', ({target}) => {
      if (target.nodeName === 'LI' || target.parentNode.nodeName === 'LI') {
        target.style.backgroundColor = ''
        target.style.cursor = ''
      }
    })
    methods.$('.selector-toggle-icon').addEventListener('click', () => {
      this.curToggle = !this.curToggle

      if (this.curToggle) {
        methods.$('.selector-content').style.transform = 'scale(1, 1)'
      } else {
        methods.$('.selector-content').style.transform = 'scale(1, 0)'
      }

    })
  }

  _show() {

  }
}