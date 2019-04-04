const http = require('http');
const querystring = require('querystring');
const jwt = require('jsonwebtoken')

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  req.setEncoding('utf8');

  let check = {
    "username": "lisongwei",
    "password": "123"
  }

  let body = '';

  req.on('data',function(chunk){
    body+=chunk;
  });

  req.on('end',function(){
    console.log(body)
    if (body === JSON.stringify(check)) {
      res.end('success!');
    }else {
      res.end('失败')
    }
  });



  // const handleReq = new Promise(resolve => {
  //   let data = '';
  //   req.on('data', chunk => {
  //     data += chunk
  //   })
  //   if (data !== '') resolve(data)
  // })
  // const check = (data) => {
  //   let username = 'lisongwei';
  //   if (data === username) {
  //     req.on('end', () => {
  //       res.end('true')
  //     })
  //   }else {
  //     req.on('end', () => {
  //       res.end('false')
  //     })
  //   }
  // }
  // handleReq.then(check)

}).listen(3000);