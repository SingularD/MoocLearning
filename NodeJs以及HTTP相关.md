## NodeJs 总结

### http 请求过程

1. 浏览器和服务器建立TCP连接
2. 浏览器向服务器发送请求命令
3. 浏览器向服务器发送请求头
4. 服务器应答
5. 服务器向浏览器发送应答头
6. 浏览器向服务器发送数据
7. 服务器关闭，关闭TCP连接

### 跨域请求

受同源保护策略的影响，两个网址URL只要除了path部分以外，其它任何一个地方不相同都算作异域，相互之间的http请求就需要跨域，那么我推荐使用XHR 2的方法进行跨域。

#### XHR2跨域

这个方法很简单，只需要设置响应头`Access-Control-Allow-Origin`为对应请求的URL或者*即可

### XMLHttpRequest对象

简称该对象为XHR对象，该对象用于js的HTTP请求

#### 发送请求

```js
open(method, url, async)// 连接服务器，参数为请求方式，请求URL，异步/同步

setRequestHeader() // 发送请求头

send(string)// 请求的信息
```



#### 接受请求

```Js
responseText // 获取响应的文本形式
responseXML // 获取响应的XML格式
status // 响应的状态码
statusText // 响应状态的文本形式
getAllResponseHeader // 获取响应头的所有属性
getResponseHeader // 获取指定的响应头的属性
readtstate // 服务器响应变化
// 0:请求还未初始化，open还未调用；1:服务器连接已建立，已经调用了open
// 2:接收到头信息； 3:接收到响应体了
// 请求已完成，响应完成
onreadystatechange来监听响应的变化
```



#### Token

token是用于客户端向服务端发送请求时的认证

主要有两个方法，一个签发一个验证，在node中需要引入`jsonwebtoken`模块

```js
const jwt = require('jsonwebtoken');
jwt.sign(); // 签发一个token
jwt.verify(); // 验证token
```

在前端部分，我们通过localStorage对象来存储和读取就行

`localStorage.setItem(key, value) //存储` 

`localStorage.getItem(key) // 读取` 



### NodeJs Web服务器

我们可以通过以下代码创建一个Node的Web服务器

```js
const http = require('http) // Node不支持import方式引入模块，若要用import则需插件

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有URL跨域访问
    req.setEncoding('utf8'); // 设置编码格式
    
    body = '';
    req.on('data', (chunk) => {
        body += chunk
    })
    // 监听请求的数据
    console.log(body) // body = ''
    req.on('end', () => {
        res.end(body)
    })
    // 监听请求完毕时触发响应，响应之前的请求数据
})
```

如上述代码所示，我们建立了两个最基础的监听，一个是监听请求，一个是响应，但是特别需要注意一点，犹豫NodeJs的异步机制，我们在我们在请求和响应这两个监听的中间加上任何逻辑都不一定实惠按照我们的代码顺序执行,就如上述代码中的console.log，一定会输出空，因为Node是异步的，所以它会先执行console.log在执行监听请求的事件。在Node编程中，一定灵活使用回调和Promise对象，不然我们很难摸清楚它异步执行的顺序，还有就是在Node中的所有API都是支持回调函数的。

### NodeJs EventEmitter

