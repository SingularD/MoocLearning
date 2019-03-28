// 1. 对图片进行分类
// 2. 生成dom元素
// 3. 绑定事件
// 4. 显示到页面上
(function (window, document) {
  let canchange = true
  let curPreviewImgIndex = 0
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
     * @returns HTMLElement
     */
    $(selector, root = document) {
      return root.querySelector(selector)
    },
    $$(selector, root = document) {
      return [...root.querySelectorAll(selector)]
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
    this.all = []; // 所有图片，存放的是页面元素，
    // 每一个元素(对象)形式:<figure><img></img><figcaption></figcaption></figure>
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
      // 判断所有分类中是否有当前分类，若没有这添加该分类
      if (!this.types.includes(type)) {
        this.types.push(type)
      }
      // 判断classify中是否该分类，若没有则添加该分类
      if (!Object.keys(this.classified).includes(type)) {
        this.classified[type] = []
      }
      // 判断存放所有图片路径的数组中是否有当前路径，若没有则添加该图片的路径，并且相应地生成
      // 展示图片和包裹图片的HTML元素，并将该元素放入存放all数组中，也将其添加到classify中
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
    // 页面主要骨架，两个部分，一个分类标签栏，一个是图片展示部分
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
    this.imgContainer = method.$('.__Img__img-container', wrap) // 图片展示部分

    method.appendChild(this.imgContainer, ...this._getImgsByType(this.curType))
    // 将所属分类的图片及其包装它的HTML元素，添加到图片展示部分里面
    this.wrap = wrap;
    this.typeBtnEls = [...method.$$('.__Img__classify__type-btn', wrap)];
    this.figures = [...method.$$('figure', wrap)];

    let overlay = document.createElement('div'); // 遮罩层
    overlay.className = '__Img__overlay';
    overlay.innerHTML = `
      <div class="__Img__overlay-prev-btn"></div>
      <div class="__Img__overlay-next-btn"></div>
      <img src="" alt="">
    `;
    method.appendChild(this.wrap, overlay);
    this.overlay = overlay;
    this.previewImg = method.$('img', overlay);

    this._calcPosition(this.figures)
  }

  Img.prototype._diff = function (prevImgs, nextImgs) {
    let diffArr = [];

    prevImgs.forEach((src1, index1) => {
      let index2 = nextImgs.findIndex(src2 => src1 === src2)

      if (index2 !== -1) {
        diffArr.push([index1, index2])
      }
    })
    return diffArr
  }
  Img.prototype._bind = function () {
    method.$('.__Img__classify', this.wrap).addEventListener('click',
      ({target}) => {

        if (target.nodeName !== 'LI') return;

        if (!canchange) return
        canchange = false

        const type = target.innerText;
        const els = this._getImgsByType(type);

        let prevImgs = this.figures.map(figure => method.$('img', figure).src)
        let nextImgs = els.map(figure => method.$('img', figure).src)

        const diffArr = this._diff(prevImgs, nextImgs)

        diffArr.forEach(([, i2]) => {
          this.figures.every((figure, index) => {
            let src = method.$('img', figure).src

            if (src === nextImgs[i2]) {
              this.figures.splice(index, 1)
              return false
            }
            return true
          })
        })
        this._calcPosition(els)

        let needAppendEls = [];
        if (diffArr.length) {
          let nextElsIndex = diffArr.map(([, i2]) => i2)
          els.forEach((figure, index) => {
            if (!nextElsIndex.includes(index)) needAppendEls.push(figure)
          })
        } else {
          needAppendEls = els
        }

        this.figures.forEach(el => {
          el.style.transform = 'scale(0, 0) translate(0, 100%)';
          el.style.opacity = '0'
        })

        method.appendChild(this.imgContainer, ...needAppendEls);

        setTimeout(() => {
          els.forEach(el => {
            el.style.transform = 'scale(1, 1) translate(0, 0)'
            el.style.opacity = '1'
          })
        })
        setTimeout(() => {
          this.figures.forEach(figure => {
            this.imgContainer.removeChild(figure)
          })

          this.figures = els
          canchange = true
        }, 600)

        this.typeBtnEls.forEach(btn => {btn.className = '__Img__classify__type-btn'})
        target.className = '__Img__classify__type-btn __Img__type-btn-active'
    })

    this.imgContainer.addEventListener('click', ({ target }) => {
      if (target.nodeName !== 'FIGURE' && target.nodeName !== 'FIGCAPTION') return

      if (target.nodeName === 'FIGCAPTION') {
        target = target.parentNode;
      }

      const src = method.$('img', target).src

      curPreviewImgIndex = this.figures.findIndex(figure => src ===
        method.$('img', figure).src)

      this.previewImg.src = src

      this.overlay.style.display = 'flex'
      setTimeout(() => {
        this.overlay.style.opacity = '1'
      })
    })

    this.overlay.addEventListener('click', () => {
      this.overlay.style.opacity = '0'

      setTimeout(() => {
        this.overlay.style.display = 'none'
      }, 300)
    })

    method.$('.__Img__overlay-prev-btn', this.overlay).
    addEventListener('click', e => {
      e.stopPropagation()
      curPreviewImgIndex = curPreviewImgIndex === 0 ? this.figures.length - 1 : curPreviewImgIndex - 1;
      this.previewImg.src = method.$('img', this.figures[curPreviewImgIndex]).src
      })
    method.$('.__Img__overlay-next-btn', this.overlay).
    addEventListener('click', e => {
      e.stopPropagation()
      curPreviewImgIndex = curPreviewImgIndex === this.figures.length - 1 ? 0 : curPreviewImgIndex + 1;
      this.previewImg.src = method.$('img', this.figures[curPreviewImgIndex]).src
    })
  }


  Img.prototype._show = function () {
    method.appendChild(this.parasitifer, this.wrap)

    setTimeout(() => {
      this.figures.forEach(figure => {
        figure.style.transform = 'scale(1, 1) translate(0, 0)'
        figure.style.opacity = '1'
      })
    })


}


  Img.prototype._calcPosition = function (figures) {
    let horizontalImgIndex = 0;
    figures.forEach((figure, index) => {
      figure.style.top = parseInt(index / 4) * 140 + parseInt(index / 4) * 15
      + 'px';
      figure.style.left = horizontalImgIndex * 240 + horizontalImgIndex * 15
      + 'px';
      figure.style.transform = 'scale(0, 0) translate(0, 100%)'
      horizontalImgIndex = (horizontalImgIndex + 1 ) % 4;
    })

    let len = Math.ceil(figures.length / 4)
    this.imgContainer.style.height = len * 140 + (len - 1) * 15 + 'px'
  }
  window.$Img = Img
})(window, document)