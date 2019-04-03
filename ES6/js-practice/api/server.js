const http = require('http');
const querystring = require('querystring');

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let postData='';
  req.setEncoding('utf8');

  req.on('data',function(chunk){
    console.log(chunk)
    postData+=chunk;
  });
  req.on('end',function(){
    res.end(postData+"hehe");
  });
}).listen(3000);