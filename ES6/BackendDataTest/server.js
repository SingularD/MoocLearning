const http = require('http')

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  let body = {
    "dataList":[
      '学习',
      '吃饭',
      '睡觉'
    ]
  }
  res.write('sss')
  res.end(JSON.stringify(body))
}).listen(8888)