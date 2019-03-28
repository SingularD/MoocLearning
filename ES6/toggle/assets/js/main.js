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
    console.log(this.categories)
  }

  _createElement() {

  }

  _bind() {

  }

  _show() {

  }
}