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

