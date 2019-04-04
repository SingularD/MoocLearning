(function (window, document) {
  document.querySelector('.btn')
    .addEventListener('click', ({target}) => {
      let loginInfo = {
        "username": document.querySelector('.username').value,
        "password": document.querySelector('.password').value
      }
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://127.0.0.1:3000')
      xhr.setRequestHeader('content-type','text/plain;charset=UTF-8')
      xhr.send(JSON.stringify(loginInfo))
      xhr.onreadystatechange = function(){
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
          alert( xhr.responseText );
          console.log(`${JSON.parse(xhr.responseText).name}`)
        } else {
          console.log(`xhr.statusText:  ${xhr.statusText}`)
        }
      };
    })
})(window, document)