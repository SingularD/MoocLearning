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
    this.curToggle = false; // 下拉框是否显示
    this.classify = {}; // 将要展示的数据以键值对的形式储存,键名:'type',值:'text'
    this.lastClick = undefined; // 上一个点击的内容

    this._init(options); // 初始化，分类数据
    this._createElement(); // 添加元素
    this._bind(); // 绑定监听事件
    this._show(); // 下拉框动画
  }

  /**
   * 将data.js中的数据进行分类，分类好的数据在this.classify中
   * @param data
   * @private
   */
  _init(data) {
    data.forEach((item) => {
      if (!Object.keys(this.classify).includes(item.type)) {
        this.classify[item.type] = []
      }
      this.classify[item.type].push(item.text)
    })
    console.log(this.classify)

  }

  /**
   * 将分类好的数据，生成对应的元素放在相应的位置
   * @private
   */
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

  /**
   * 主要的几个监听事件
   * 鼠标滑过时改变背景颜色
   * 点击时改变背景颜色和将点击的内容以及上一次点击的内容展示
   * 搜索框改变时对应展示元素
   * 当点击下拉按钮以外的地方，关闭下拉框
   * @private
   */
  _bind() {
    methods.$('.selector-content').addEventListener('mouseover', ({target}) => {
      if (target.parentNode.nodeName === 'LI') target = target.parentNode
      if (target.nodeName === 'LI') {
        target.style.backgroundColor = 'grey'
        target.style.cursor = 'pointer'
      }
    })
    methods.$('.selector-content').addEventListener('mouseout', ({target}) => {
      if (target.parentNode.nodeName === 'LI') target = target.parentNode
      if (target.nodeName === 'LI') {
        target.style.backgroundColor = ''
        target.style.cursor = ''
      }
    })
    methods.$('.selector-content').addEventListener('click', ({target}) => {
      // if (target.parentNode.nodeName === 'LI') target = target.parentNode
      if (target.nodeName === 'LI' || target.parentNode.nodeName === 'LI') {
        methods.$$('.selector-options-item').forEach( item => {
          item.className = `selector-options-item`
        })

        let num = 0;
        methods.$$('li').forEach((item, index) => {
          if (item === target || item === target.parentNode) num = index + 1
        })


        methods.$('.selector-message').innerHTML = `
          <p>之前选择的是： ${ this.lastClick }</p>
          <p>当前选择的是：${target.innerText} - ${num}</p>
        `
        this.lastClick = target.innerText
      }
    })
    methods.$('.selector-content-search').addEventListener('input',
      ({target}) => {
        methods.$$('li').forEach(item => {
          if (!item.innerText.includes(target.value)
            && !item.innerText.toLowerCase().includes(target.value)
            && !item.innerText.toUpperCase().includes(target.value)
          ) {
            item.style.display = 'none'
          }else {
            item.style.display = 'block'
          }
        })
      }
      )
    window.addEventListener('click', ({target}) => {
      if (target === methods.$('.selector-content-search')) return
      if (target !== methods.$('.selector-toggle-icon')) {
        methods.$('.selector-content').style.transform = 'scale(1, 0)'
        this.curToggle = false
      }
    })

  }

  /**
   * 下拉框开启和关闭时候的动画
   * @private
   */
  _show() {
    methods.$('.selector-toggle-icon').addEventListener('click', (e) => {
      this.curToggle = !this.curToggle
      if (this.curToggle) {
        methods.$('.selector-content').style.transform = 'scale(1, 1)'
      } else {
        methods.$('.selector-content').style.transform = 'scale(1, 0)'
      }
      e.stopPropagation()
    })
  }
}