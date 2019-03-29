const methods = {
  appendChild(parent, ...children) {
    children.forEach(item => {
      parent.appendChild(item)
    })
  },
  $(selector, root = document) {
    return root.querySelector(selector)
  },
  $$(selector, root = document) {
    return root.querySelectorAll(selector)
  }
} // 公共方法
class CustomSelect {
  constructor(data) {
    this.categories = {};
    this.liList = []
    this._init(data); // 初始化数据
    this._createElement(); // 生成元素
    this._bind(); // 绑定事件
    this._show(); // 元素展示
  }

  _init(data) {
    data.forEach(({type, text, value}) => {
      if (!Object.keys(this.categories).includes(type)) {
        this.categories[type] = []
      }
      this.categories[type].push(value)
    })
  }

  _createElement() {
    let selectOptions = methods.$('.select-options')
    for (let key of Object.keys(this.categories)) {

      if (!this.liList.includes(key)) {

        let ul = document.createElement('ul')
        ul.className = 'options'

        let liArr = []
        this.categories[key].forEach((value) => {
          liArr.push(`<li class="options-item">${data[parseInt(value) - 1].text}</li>`)
        })

        ul.innerHTML = `<li class="options-item options-title"><h3>${key}</h3></li>${liArr.join('')}`

        methods.appendChild(selectOptions, ul)

      }
    }
    console.log(methods.$$('.options-title'))
    methods.$$('.options-title').forEach( item => {
      item.style.marginLeft = '0px'
    })
    methods.$$('.options-item').forEach( item => {
      item.style.marginLeft = '30px'
    })
  }
  _bind() {

  }

  _show() {

  }
}