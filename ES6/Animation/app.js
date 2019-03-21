class Transform {
  constructor() {
    this.el = null;
    this.init()
    this._queue = [];
    this._transform = {
      translate: '',
      rotateL: '',
      transition: ''
    }

    this.defaultTime = Transform.config.defaultTime;
    this.el.style.transition = `all ${this.defaultTime / 1000}s`;

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
    return this._add('translate', value, time);
  }

  /**
   * 缩放
   * @param {*} value
   * @param {*} time
   */
  scale(value, time) {
    return this._add('scale', value, time);
  }

  /**
   * 旋转
   * @param {*} value
   * @param {*} time
   */
  rotate(value, time) {
    return this._add('rotate', value, time);
  }

  /**
   * 添加动画步骤到队列
   * @param {*} type
   * @param {*} value
   * @param {*} time
   */
  _add(type, value, time = this.defaultTime) {
    this._queue.push({
      type,
      value,
      time
    });

    return this;
  }

  /**
   * 添加结束
   */
  done() {
    this._start();
  }

  /**
   * 调用队列中的形变
   */
  _start() {
    if (!this._queue.length) return;

    setTimeout(() => {
      const info = this._queue.shift();
      this.el.style.transition = `all ${info.time / 1000}s`;
      console.log(this._getTransform(info))
      this.el.style.transform = this._getTransform(info);

      setTimeout(() => {
        this._start();
      }, info.time);
    }, 0);
  }

  /**
   * 根据队列中的内容返回transform结果
   * @param {*} param0
   */
  _getTransform({ type, value, time }) {
    const _tsf = this._transform;

    switch (type) {
      case 'translate':
        _tsf.translate = `translate(${value})`;
        break;

      case 'scale':
        _tsf.scale = `scale(${value})`;
        break;

      case 'rotate':
        _tsf.rotate = `rotate(${value}deg)`;
        break;
    }
    console.log(_tsf.scale)
    return `${_tsf.translate}${_tsf.scale}${_tsf.rotate}`;
  }
}
Transform.defaultConfig = {
  defaultTime: 300
};


Transform.config = Object.assign({}, Transform.defaultConfig);


Transform.resetConfig = () => {
  Transform.config = Object.assign({}, Transform.defaultConfig);
}
const a = new Transform()
Transform.config.defaultTime = 600;

a.translate('200px, 200px')
  .done()
