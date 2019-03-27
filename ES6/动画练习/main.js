class Transition {
  constructor() {
    this._queue = [
      {
        type: 'translate',
        value: '100px, 100px',
        time: '3s'
      },
      {
        type: 'rotate',
        value: '180deg',
        time: '3s'
      },
      {
        type: 'scale',
        value: '2, 2',
        time: '3s'
      },
      {
        type: 'translate',
        value: '200px, 500px',
        time: '3s'
      }
    ];
    this._tsf = {
      translate: '',
      rotate: '',
      scale: ''
    }
    this.el = document.querySelector('.test')
    this.el.style.transition = `all 3s`
  }
  start() {
    if (!this._queue.length) return
    setTimeout(() => {
      const info = this._queue.shift()
      // console.log(info.time)
      this.el.style.transition = `all 1s`
      this.el.style.transform = this.getTransform(info)
      // console.log(this.el.style.transform)
      setTimeout(() => {
        this.start()
      }, 1000)
    }, 0)
  }
  getTransform({ type, value, time }) {
    let tsf = this._tsf
    switch (type) {
      case 'translate':
        tsf.translate = `translate(${value})`
        break;
      case 'rotate':
        tsf.rotate = `rotate(${value})`
        break;
      case 'scale':
        tsf.scale = `scale(${value})`
    }
    return `${tsf.translate}${tsf.rotate}${tsf.scale}`
  }
}
const tsf = new Transition()
document.querySelector('.test').addEventListener('click', () => {
  tsf.start()
})