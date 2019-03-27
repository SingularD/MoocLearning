(function (window, document) {
  const method = {
    /**
     * 在parent下添加children元素
     * @param parent
     * @param children
     */
    appendChild(parent, ...children) {
      children.forEach( el => {
        parent.appendChild(el)
      })
    },
    /**
     * 简化选择器
     * @param selector
     * @param root
     * @returns {HTMLElement | HTMLSelectElement | HTMLLegendElement | HTMLTableCaptionElement | HTMLTextAreaElement | HTMLModElement | HTMLHRElement | HTMLOutputElement | HTMLPreElement | HTMLEmbedElement | HTMLCanvasElement | HTMLFrameSetElement | HTMLMarqueeElement | HTMLScriptElement | HTMLInputElement | HTMLUnknownElement | HTMLMetaElement | HTMLStyleElement | HTMLObjectElement | HTMLTemplateElement | HTMLBRElement | HTMLAudioElement | HTMLIFrameElement | HTMLMapElement | HTMLTableElement | HTMLAnchorElement | HTMLMenuElement | HTMLPictureElement | HTMLParagraphElement | HTMLTableDataCellElement | HTMLTableSectionElement | HTMLQuoteElement | HTMLTableHeaderCellElement | HTMLProgressElement | HTMLLIElement | HTMLTableRowElement | HTMLFontElement | HTMLSpanElement | HTMLTableColElement | HTMLOptGroupElement | HTMLDataElement | HTMLDListElement | HTMLFieldSetElement | HTMLSourceElement | HTMLBodyElement | HTMLDirectoryElement | HTMLDivElement | HTMLUListElement | HTMLHtmlElement | HTMLAreaElement | HTMLMeterElement | HTMLAppletElement | HTMLFrameElement | HTMLOptionElement | HTMLImageElement | HTMLLinkElement | HTMLHeadingElement | HTMLSlotElement | HTMLVideoElement | HTMLBaseFontElement | HTMLTitleElement | HTMLButtonElement | HTMLHeadElement | HTMLParamElement | HTMLTrackElement | HTMLOListElement | HTMLDataListElement | HTMLLabelElement | HTMLFormElement | HTMLTimeElement | HTMLBaseElement | null}
     */
    $(selector, root = document) {
      return root.querySelector(selector)
    },
    $$(selector, root = document) {
      return root.querySelectorAll(selector)
    }
  }

  let Img = function (options) {
    this._init(options);
    this._createElement();
    this._bind();
    this._show();
  }
  /**
   * 初始化
   * @param data 图片数据
   * @param initType 初始高亮的按钮
   * @param parasitifer 挂载点
   * @private
   */
  Img.prototype._init = function ({ data, initType, parasitifer}) {
    this.types = ['全部']; // 所有分类
    this.all = []; // 所有图片
    this.classified = {'全部': []}; // 按照分类后的图片，数组中存放all数组里面的下标
    this.curType = initType; // 当前显示的图片分类
    this.parasitifer = method.$(parasitifer) // 挂载点

    this.imgContainer = null

    this._classify(data)
  }
  /**
   * 对图片进行分类
   * @param data
   * @private
   */
  Img.prototype._classify = function (data) {
    let srcs = [];
    data.forEach(({ type, title, alt, src }) => {
      if (!this.types.includes(type)) {
        this.types.push(type)
      }
      if (!Object.keys(this.classified).includes(type)) {
        this.classified[type] = []
      }
      if (!srcs.includes(src)) {
        srcs.push(src)
        let figure = document.createElement('figure')
        let img = document.createElement('img')
        let figcaption = document.createElement('figcaption')

        img.src = src
        img.setAttribute('alt', alt)
        figcaption.innerText = title

        method.appendChild(figure, img, figcaption)

        this.all.push(figure)
        this.classified[type].push(this.all.length - 1)
      } else {
        this.classified[type].push(srcs.findIndex(s1 => s1 === src))
      }
    })
  }
  /**
   * 获取同一分类的所有图片
   * @param type
   * @returns {*[]}
   * @private
   */
  Img.prototype._getImgsByType = function (type) {
    return type === '全部' ? [...this.all] : this.classified[type].
      map(index => this.all[index])
  }
  /**
   * 生成元素
   * @private
   */
  Img.prototype._createElement = function () {
    let typesBtn = [];
    for (let type of this.types.values()) {
      typesBtn.push(`
        <li class="__Img__classify__type-btn${type === this.curType 
        ? ' __Img__type-btn-active' : ''}">${ type }</li>`)
    }
    let template =
      `
        <ul class="__Img__classify">
            ${typesBtn.join('')}
        </ul>
        <div class="__Img__img-container"></div>
      `
    let wrap = document.createElement('div');
    wrap.className = '__Img__container'
    wrap.innerHTML = template
    this.imgContainer = method.$('.__Img__img-container', wrap)

    method.appendChild(this.imgContainer, ...this._getImgsByType(this.curType))

    this.wrap = wrap;
    this.typeBtnEls = [...methods.$$('.__Img__classify__type-btn', wrap)];
    this.figures = [...methods.$$('figure', wrap)];

    let overlay = document.createElement('div');
    overlay.className = '__Img__overlay';
    overlay.innerHTML = `
      <div class="__Img__overlay-prev-btn"></div>
      <div class="__Img__overlay-next-btn"></div>
      <img src="" alt="">
    `;
    method.appendChild(this.wrap, overlay);
    this.overlay = overlay;
    this.previewImg = methods.$('img', overlay);
  }
  Img.prototype._bind = function () {

  }
  Img.prototype._show = function () {

  }
  window.$Img = Img
})(window, document)