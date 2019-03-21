class Transform {
  /**
   * 构造函数
   * @param {*} selector
   * transform: 形变
   * translate: 移动
   * transition: 平滑
   */
  constructor(selector) {
    this.el = document.querySelector(selector);

    this._queue = [];
    this._transform = {
      translate: '',
      scale: '',
      rotate: ''
    };

    this.defaultTime = Transform.config.defaultTime;
    this.el.style.transition = `all ${this.defaultTime / 1000}s`;
  }

  /**
   * 位移
   * @param {*} value
   * @param {*} time
   */
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

    return `${_tsf.translate}${_tsf.scale}${_tsf.rotate}`;
  }
}

Transform.defaultConfig = {
  defaultTime: 300
};

/**
 * 将配置作为静态属性 放在类上
 */
Transform.config = Object.assign({}, Transform.defaultConfig);

/**
 * 还原默认配置
 */
Transform.resetConfig = () => {
  Transform.config = Object.assign({}, Transform.defaultConfig);
}

/**
 * 利用继承实现同时多重动画
 */
class MultiTransform extends Transform {
  constructor(selector) {
    super(selector);
  }

  multi(arr, time) {
    return this._add('multi', arr, time);
  }

  sleep(time) {
    return this._add('sleep', '', time);
  }

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

      case 'multi':

        value.forEach((item) => {
          this._getTransform(item);
        });

        break;

      case 'sleep':
        break;
    }

    return `${_tsf.translate}${_tsf.scale}${_tsf.rotate}`;
  }
}

