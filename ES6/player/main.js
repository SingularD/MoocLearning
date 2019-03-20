class Player {
  constructor(container) {
    this.container = document.querySelector(container);
    this.songsInfo = [];
    this.dom = null;
    this.audio = new Audio()

    this.getSongs();
    this.createElement();
    this.bindEvent();
    this.render();
  }
  getSongs() {
    this.songsInfo = []
  }
  createElement() {
    const div = document.createElement('div')
    div.innerHTML =
      `
        <button class="play">播放</button>
      `
    this.dom = div
  }
  bindEvent() {
    this.dom.querySelector('.play').addEventListener('click', (e) => {
      console.log('开始播放')
    })
  }
  render() {
    this.container.appendChild(this.dom)
  }
}

new Player('body')