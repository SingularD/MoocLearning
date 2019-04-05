(function (window, document) {
  console.log(Math.floor(Date.now()))

  document.querySelector('.btn')
    .addEventListener('click', ({target}) => {
      const getHttp = (url) => {
        const promise = new Promise((resolve, reject) => {
          const handle = function(){
            if (this.readyState !== 4) {
              return
            }
            if (this.status === 200) {
              resolve(this.response)
            } else {
              reject(new Error(this.statusText))
            }
          };

          const xhr = new XMLHttpRequest();
          xhr.open('POST', url)
          xhr.readystatechange = handle
          xhr.setRequestHeader('content-type','text/plain;charset=UTF-8')
          xhr.send(JSON.stringify(loginInfo))
        })

        return promise
      }
      let loginInfo = {
        "username": document.querySelector('.username').value,
        "password": document.querySelector('.password').value,
        "token": localStorage.getItem('token')
      }
      getHttp('http://127.0.0.1:3000').then(() => {})











      // let loginInfo = {
      //   "username": document.querySelector('.username').value,
      //   "password": document.querySelector('.password').value,
      //   "token": localStorage.getItem('token')
      // }
      // let xhr = new XMLHttpRequest();
      // xhr.open('POST', 'http://127.0.0.1:3000')
      // xhr.setRequestHeader('content-type','text/plain;charset=UTF-8')
      // xhr.send(JSON.stringify(loginInfo))
      // xhr.onreadystatechange = function(){
      //   if ( xhr.readyState === 4 && xhr.status === 200 ) {
      //     alert( xhr.responseText );
      //     console.log(`${JSON.parse(xhr.responseText).token}`)
      //     localStorage.setItem('token', JSON.parse(xhr.responseText).token)
      //   } else {
      //     console.log(`xhr.statusText:  ${xhr.statusText}`)
      //   }
      // };
    })
})(window, document)