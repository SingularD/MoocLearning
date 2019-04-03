(function (window, document) {
  document.querySelector('.btn')
    .addEventListener('click', ({target}) => {
      let data = 'lisognwei'
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://127.0.0.1:3000')
      xhr.send(data)
      xhr.onreadystatechange = function(){
        if ( xhr.readyState == 4 && xhr.status == 200 ) {
          alert( xhr.responseText );
          console.log(`xhr.responseText:  ${xhr.responseText}`)
        } else {
          alert( xhr.statusText );
          console.log(`xhr.statusText:  ${xhr.statusText}`)
        }
      };
    })
})(window, document)