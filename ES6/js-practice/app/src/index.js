import _ from 'lodash';
function component() {
  let element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}
function header() {
  let div = document.createElement('div');
  div.innerHTML = `<h1>我是李松蔚</h1>`;
  return div;
}

document.querySelector('.cl').addEventListener('click', () => {
  alert('lisongwei')
})

document.body.appendChild(header());
document.body.appendChild(component());