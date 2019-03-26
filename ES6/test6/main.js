(function (window, document) {
  let arr = ["前端", "jquery", "javascript", "html", "css"];
  const crearLi = (arr) => {
    let liList = [];
    for (let item of arr) {
      liList.push(`<li>${item}</li>`)
    }
    return liList.join('')
  }
  let ul = document.createElement('ul')
  ul.innerHTML = crearLi(arr)
  document.body.appendChild(ul)
})(window, document)