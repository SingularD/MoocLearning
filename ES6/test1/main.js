(function (window, document) {
  let Msg = function (opntions) {
    this._init(opntions)
  }
  Msg.prototype._init = function ({ content= '这是默认值' }) {
    this._createElement(content)
    this._show(this._el)
    this._bind(this._el)

  }
  Msg.prototype._createElement = function(content) {
    let wrap = document.createElement('div')
    wrap.className = 'wrap'
    wrap.innerHTML = '' +
      '<div class="wrap-content">' +
      '' + content +
      '</div>\n' +
      '<div class="wrap-footer">\n' +
      '  <button class="wrap-footer-confirm">confirm</button>\n' +
      '  <button class="wrap-footer-cancel">cancel</button>\n' +
      '</div>'
    this._el = wrap
  }
  Msg.prototype._bind = function (el) {
    const hideMsg = function () {
      document.body.removeChild(el)
    }
    el.querySelector('.wrap-footer-confirm').addEventListener('click', () => {
      hideMsg()
    })
    el.querySelector('.wrap-footer-cancel').addEventListener('click', () => {
      hideMsg()
    })
  }
  Msg.prototype._show = function (el) {
    document.body.appendChild(el)
  }

  window.$Msg = Msg
})(window, document)