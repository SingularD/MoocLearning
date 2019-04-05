(function (window, document) {

document.querySelector('.btn')
  .addEventListener('click', evt => {
    let loginInfo = {
      "username": document.querySelector('.username').value,
      "password": document.querySelector('.password').value,
    }
    console.log(loginInfo)
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:3000')
    xhr.setRequestHeader('content-type','text/plain;charset=UTF-8')
    xhr.send(JSON.stringify(loginInfo))
    xhr.onreadystatechange = function(){
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        alert( xhr.responseText );
        console.log(`${xhr.responseText}`)
        // localStorage.setItem('token', JSON.parse(xhr.responseText).token)
      } else {
        console.log(`xhr.statusText:  ${xhr.statusText}`)
      }
    };
  })
})(window, document)