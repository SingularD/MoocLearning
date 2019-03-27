class Transform {
  constructor() {
    this.el = null;
    this._queue = []; // 存放数据顺序
    this._transform = {
      translate: '',
      rotate: '',
      scale: ''
    }
    this.init() // 初始化DOM
    this.el.style.transition = `all ${ .3 }s` // 设置默认过渡动画时间
  }
  init() {
    const div = document.createElement('div')
    div.className = 'ball'
    div.style.cssText =
      `
      background: linear-gradient(#ff9b9b 50%, #196dbb 50%);
      width: 150px;
      height: 150px;
      border-radius: 50%;
      `
    document.body.appendChild(div)
    this.el = div
  }
  translate(value, time) {
    return this._add('translate', value, time)
  }// 移动
  rotate(value, time) {
    return this._add('rotate', value, time)
  }// 旋转
  scale(value, time) {
    return this._add('scale', value, time)
  }// 缩放
  _add(type, value, time) {
    this._queue.push({
      type,
      value,
      time
    })
    return this
  } // 将动画存入队列
  start() {
    if (!this._queue.length) return;
    setTimeout(() => {
      const info = this._queue.shift(); // 获得队首元素
      console.log(info)
      this.el.style.transition = `all ${info.time / 1000}s`;
      this.el.style.transform = this.getTransform(info) // 执行队首元素
      console.log(this.el.style.transform)
      setTimeout(() => {
        this.start();
      }, info.time);
    },0)
    // setTimeout 用于消除有时候浏览器渲染问题
  } // 利用动画队列顺序开始执行动画
  getTransform({ type, value, time }) {
    const _tsf = this._transform;
    switch (type) {
      case 'translate':
        _tsf.translate = `translate(${ value })`
        break;
      case 'scale':
        _tsf.scale = `scale(${ value })`
        break;
      case 'rotate':
        _tsf.rotate = `rotate(${ value }deg)`
        break;
    }
    return `${_tsf.translate}${_tsf.scale}${_tsf.rotate}`
  } // 获得动画以及其参数
}
const a = new Transform()
document.querySelector('.ball').addEventListener('click', () => {
  a.translate('100px, 300px', 1000)
    .rotate(180, 1000)
    .scale(2, 1000)
    .translate('200px, 200px', 1000)
    .start()
})
