# ES6 #

## JavaScript常用方法总结

### 遍历

#### 数组

1. for循环遍历，常用于遍历数组：

   ```Js
   const arr = [1, 2, 3, 4];
   for(let i = 0; i < arr.length; i++) {
       console.log(arr[i])
   }
   ```

2. every：对数组中的每一个元素运行指定函数，全部为true返回true

   filter：对数组中的每一个元素运行指定函数，返回该函数返回值为true的元素组成的数组

   some：对数组中的每一个元素运行指定函数，只要有一个元素返回true则返回true

   ```Js
   let arr = [1, 2, 3, 4, 5];
   const everyResult = arr.every((item) => {
       return (item > 2)
   }) // everyResult为true

   const someResult = arr.some((item) => {
       return (item > 2)
   }) // someResult为false

   const filterResult = arr.filter((item) => {
       return (item > 2)
   }) // filterResult为[3, 4, 5]
   ```

3. foreach方法用于对每一个元素来运行指定函数，没有返回值

   map和foreach差不多，但是有返回值

   ```Js
   let arr = [1, 2, 3]

   const mapResult = arr.map((item) => {
       return item*2
   }) // mapResult值[2, 4, 6]

   arr.foreach((item) => {
       // ...
       // ...
       // ...
   })
   ```

4. for…in 和 for...of方法

   for…in相当于获取键名，在数组中就是获取了元素下标

   在数组中for…of方法效果和foreach是一样的，但是在对象中不能使用，之后在对象的遍历中我们提到

   ```Js
   let arr = [1, 2, 3, 4];
   for(let x in arr) {
       console.log(x)
   }// 在数组中使用for...in，x是元素下标
   // 上述代码结果0，1，2，3
   for(let x of arr) {
       console.log(x)
   }// 和foreach一样，结果为1, 2, 3, 4
   ```



#### 对象

for…in ， for…of 

for…in方法遍历的键名

for…of只能遍历一个数组，这个时候我们使用keys()和value()方法来转化对象进行遍历

Object.keys(obj),Object.values(obj)这两个方法用于提取对象中键和值分别组成的数组

先对比一下

```Js
const object = {
    name: 'lisongwei',
    age: 14,
    sex: man,
    hobby: '学习',
    girlfriend: true
}

for(let x in object) {
    console.log(x, object[x])
} 
// name lisongwei
//age 14
//sex man
//hobby 学习
//girlfriend true

for(let x of Object.keys(object)){
    console.log(x)
}// name age sex hobby girlfriend
for(let x of Object.values(object)) {
    console.log(x)
}// lisongwei 14 man 学习 true
```







### let 与 const 

#### let

块级作用域： 通俗地讲就是用” {} “包裹起来的区域

let声明的变量只能在当前的块级作用域中使用，不能重复声明

不存在变量提升

存在暂存死区



#### const

不存在变量提升

声明的时候必须赋值，一旦声明就不能修改，引用类型除外，需要使用到引用类型冻结

不能重复声明

只在当前作用域内有效



### 结构赋值

#### 数组与对象的解构赋值

数组：(解构赋值时与数组元素顺序有关)

```js
let [a, b, c] = [1, 2, 3] //可对abc分别赋值
```

```Js
let [a, ...b] = [1, 2, 3] // a=1,b=[2,3]
let [ , , c] = [1, 2, 3] // c = 3
let [a, [b, c], d] = [1, [2, 3], 4] // a=1 ... d=4
```

对象： （解构赋值时与属性方法顺序无关，只与属性名和方法名有关）

```js
const person = {
    name: 'li',
    age: 20,
    hobby: '学习'
}
const { age } = person // 20

```

```js
const person = {
    name: 'li',
    age: 20,
    hobby: [
        '学习',
        '游戏',
        '吃饭'
    ],
    son: {
        name: 'xiaoli',
        age: 10
    }
}
const { name, age, hobby:[a,b,c],son:{name: sonName} } = person
// name='li' age:20 b="学习" sonName="xiaoli"
```

在对象的解构赋值的时候，同名的加一个冒号写上一个新的变量名即可给其赋值，就像上面的sonName一样，在对象或者数组在进行解构赋值的前面要加上数组或者对象名和冒号，在他们之后再进行解构赋值，最有一点在解构赋值的时候如果解构的元素未赋值，那么是可以给一个默认值的：

```js
const student = {
    name: "li",
    age: 10
}
const { name, hobby="学习" } = student // name="li" hobby="学习"
```





#### 字符串模板

在ES6之前我们处理字符串模板的方式是

```js
var person = {
    name: "lisongwei",
    age:20
}
var div = document.createElement('div');
div.innerHtml = '<p>姓名是：' + person.name + '</p>' +
    '<p>年龄是：'+ person.age +'</p>'
document.body.appendChild(div)
```

现在使用ES6新特性来构造字符串模板

```Js
const person = {
    name: "lisongwei",
    age:20
}
const div = document.createElement('div');
div.innerHtml = ` <p>姓名是：${person.name}</p><p>年龄是：${person.age}</p> `
document.body.appendChild(div)
```

可以达到相同的效果在`${}`中，可以添加js的函数表达式



#### 扩展运算符 `...`

扩展运算符`…`在字符串，数组，对象之中都有很多的运算，起主要作用是`拆分`比如

```js
let str = 'abcdefg';
let [...str1] = str; 
// let str1 = [...str] 与上面的代码等价
console.log(str1) // ["a", "b", "c", "d", "e", "f", "g"]
```

 对于一个数组

```js
let arr = ['li', 'song', 'wei'];
let arr1 = ['shuai', 'ge'];
let Arr = [...arr, ...arr1];// 相当于拆分了arr和arr1,同时组合成新数组
console.log(Arr) // ["li", "song", "wei", "shuai", "ge"]

// 同时利用该特性 ：Array.push(el) 等价于 [...Array, el] 向数组最后一位添加元素
// 向数组首位添加元素：[el, ...Array]
```

对于对象

```js
const obj1 = {
    name: 'lisongwei',
    age: 22
}
const obj2 ={
    hobby: [
        '学习',
        '游戏'
    ]
}
let Obj = {...obj1, ...obj2} // 将两个对象合并为一个

```

在函数参数之中：

```js
let [a,b,c,d] = [1,2,3,4]
function add (a, b, c, d) {
    // ...
    // ...
    // ...
}
//当参数个数太多或者不清楚时候可以使用...args
function (a, ...args) {
    // ...
    // ...
    // ...
}
//...agrs是一个数组，包含了a之后所有的参数
```



#### Promise

Promise用于触发回调，相对于传统的回调写法，优化了很多

```Js
const display = (args) => {
    return new Promise( ( resolve, reject ) => {
        if ( args ) {
            resolve(params1)
        }else {
            reject(params2)
        }
    } )
}

const success = (val) => {
    console.log(val)
    // ...
    // ...
    // ...
} // 成功执行的回调函数

const fail = (err) => {
    console.log(err)
    // ...
    // ...
    // ...
} // 失败时候执行的回调

display(true).then(success) //成功执行success函数
// display(false).then(fail) 失败执行fail函数
// 在Promise中resolve函数就是回调函数，也就是放在.then()之中的函数,只用在其中加入函数
// 名即可不需要加括号，在声明的时候reslove已经规定好了参数

Promise.all([p1, p2, p3]).then(fn)
// .all方法是指p1,p2,p3都成功的时候三个promise同时回调.then()中的函数，返回值也是一个
// 数组 
promise.race([p1,p2,p3]).then(fn) //.all相当于且，.race相当于或，有一个成功的时候
// 就全部执行回调函数

```

#### 巩固Promise对象

通过一个动画实例来解析回调和Promise，首先我们用传统回调来写一个方块移动的动画

```js
let div = document.createElement('div')
div.className = 'div'

div.innerText = '哦'
document.body.appendChild(div)

let btn = document.createElement('button')
btn.className = 'btn'

btn.innerText = 'Click me!'
document.body.appendChild(btn)
// 生成DOM元素
```

```Css
.div{
            width: 100px;
            height: 100px;
            background-color: #1d5fac;
            font-size: 30px;
            line-height: 100px;
            text-align: center;
            transition: all 1s;
        }
// 元素样式
```

```js
// 用回调函数实现动画
const moveTo = (el, x, y, callback) => {
    el.style.transform = `translate(${x}px, ${y}px)`
    setTimeout(() => {
        callback && callback() // 这一步坚持是否有回调函数并执行
    })
}
btn.addEventListener('click', e => {
    moveTo(div, 100, 100, () => {
        moveTo(div, 200, 200, () => {
            moveTo(div, 300, 400, () => {
                moveTo(div, 0, 0, () => {
                    console.log('移动结束！')
                })
            })
        })
    })
})
```

从上面代码我们可以看出我们在`moveTo`函数的参数中的最后一个添加了一个回调函数，调用回调函数的时候我们只能嵌套地调用，假如我们要修改其中一个嵌套函数的功能或者改变顺序，那将是一件很恼火的事情，在此之上，我们在使用Promise对象来实现上述功能；

```js
const moveTo = (el, x, y) => {
    const promise = new Promise(resolve => {
        el.style.transform = `translate(${x}px, ${y}px)`
		setTimeout(() => {
            reslove()
		}, 1000)
    })
    return promise
}
btn.addEventListener('click', e => {
    moveTo(div, 100, 100)
        .then(() => {
        	return moveTo(div, 200, 200)
    })
        .then(() => {
        	return moveTo(div, 300, 400)
    })
        .then(() => {
        	return moveTo(div, 0, 0)
    })
        .then(() => {
        	console.log('移动结束！')
    })
})
```

我们先从最直观的角度来看：我们在moveTo函数中实例了Promise之后，返回了一个promise对象，然后这个moveTo函数就拥有了.then方法，这个方法就是我们在实例Promise的时候的resolve函数，就相当于之前的回调函数callback，我们现在可以用.then去调用。

那么我们在详细地分析一下这个过程：

首先我们声明了函数`moveTo`,在这个函数中，我们又实例了一个Promise类，并返回了实例后的对象promise，所以这就解释了我们为什么可以链式调用`moveTo`函数，因为它的返回值是一个对象，那么`moveTo()`就是一个对象

然后我们们再看在实例这个Promise类的时候发生了什么，我们向他的构造函数中传入了

```Js
(resolve) => {
    el.style.transform = `translate(${x}px, ${y}px)`
    setTimeout(() => {
        reslove()
    }, 1000)
}
```

这么一个函数，这个函数首先是执行我们的动画，然后再计时器的作用下执行参数中的函数`resolve`，而这个`resolve`就是我们在.then中要写的函数，所以说我们的回调函数就是被写在这个`resolve`中的，那么我们再看之前的动画代码，为什么要在.then中返回这个moveTo对象呢，因为我们在之后还要去调用.then方法，为了确保下一次还能调用.then方法，我们必须要返回promise对象，所以才要在每一步中返回moveTo对象（函数）

综上所述：我们先将它的使用方法以及和回调函数的对应关系总结出来，至于Promise对象的具体原理以后再做讨论；我们在以后要使用回调函数的时候，首先我们先写出一个函数，在其中返回一个Promise实例，在它的构造器中，传入resolve方法，在函数体中写我们的逻辑，如果在某一步需要触发回调函数的时候，我们加上resolve()，即可，之后，我们通过.then就可以调用回调函数了。

#### class

对于js中的类，实际相当于一个语法糖，那么声明类的主要方式是

```Js
class object {
    constructor() {   
        // ...
        // ...
        // ...
        // constructor是类的构造函数，是在类实例的时候运行的函数
        // 构造函数中传入的函数也就是实例对象的时候传入的参数
    }
    // ...
    // 方法 形式 functionName () {}
}
```

类的表达式和get/set方法

我们在实例一个类的时候：

```js
const person = new Person();
const person = class {
    // ...
    // ...
    // ...
}
person.name // perosn
const person = class Person {
    // ...
    // ...
    // ...
    //在这里调用Person.属性或者Person.方法相当于 person.属性,person.方法
	// 但是当你实例对象不为person的时候 person.属性,person.方法失效了，所以这个
    // 时候最好是使用类的表达式，直接使用Person.属性或者Person.方法
}
person.name // Person
class Person {
    // ...
}
Person.name // Person
// 类的name属性用来返回类名
```



```Js
// get set方法

class Person {
    constructor() {
        this.name = '';
    }
    get name() {
        return this.name;
    }
    set name(value) {
        this.name = value
    }
}
const person = new Person();
console.log(person.name) // 这个时候浏览器或者node一定会报错，错误为堆栈溢出
// 我们在调用person.name 的时候实际当用了Person类里面的get方法，而且调用的是
// get name() {} 这样就会一直递归调用，所以会爆栈，所以我们必须修改name属性名
// 我们将name属性改为 _name ，如下

class Person {
    constructor() {
        this._name = '';
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value
    }
}
const person = new Person();
// 这个时候就不会出现上述错误
// 以此为例 get就相当于 person.name
// set相当于 perosn.name = value
// 不需要使用person.getName或者person.setName这种方法
```

### JavaScript 的prototype 属性研究

在ES5中我们常常通过构造函数来声明一个类，ES6中我们可以使用class关键字，而其实他们二者原理一样，class其实也是一个语法糖，那么我们主要来研究一下ES5中式如何来构造一个类的

```js
function Person() {
    
}
Person.prototype.name = 'lisongwei'
Person.prototype.age = 20
Person.Prototype.sayName = function () {
    return '我是' + this.name
}
var person = new Person()
console.log(person.name) // lisongwei
console.log(person.sayName()) // 我是lisongwei
```

首先`function Person() {}`是一个函数，但是在之后，我们用`new Perosn()`实例了他之后，他就成为了一个构造函数，如果没有`new`关键字，那么这个函数就是全局对象`window`上面的一个方法了，我们在使用`new`之后构造了一个空对象`Person`这个时候，我们通过`prototype`属性，往这个`Person`空对象的原型对象上面挂载属性和方法，那么这个这个原型对象`Person.prototype`就有了我们之前挂载上去的属性和方法，之后我们声明的对象会共享原型对象`Person.prototype`上面已挂载的所有属性和方法，所以我们暂且理解为`Person`与原型对象两者之间相互共享属性和方法



### ES6继承 

因为在ES6之中我们有了class类的概念，自然就有面向对象的特性，如何实现一个继承呢？

```Js
class Father {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    sayName() {
        console.log(`我是${this.name}`)
    }
}

class Child extends Father {
    constructor(name, age, sex, hobby) {
        super(name, age, sex);
        this.hobby = hobby;
    }
    func() {
        console.log(`我喜欢${this.hobby}`)
    }
}

const child = new Child( 'lisongwei', 22, '男', '写代码' )
child.func() // 我喜欢写代码
```



按照上述方法，我们就完成了一个继承，父类是Father子类是Child，子类中式可以访问到所有父类的属性和方法也包括子类自身的属性和方法，在继承的时候要注意两个地方，一个是`extends`关键字，另外一个是`super()`方法。`class B extends A {}`就代表B类继承了A类这个很好理解，而`super`就表示调用父类的构造函数，因为你在实例子类的时候会调用父类的属性和方法，所以父类的构造函数必须要运行才行，所以在子类构造函数之中，在使用`this`之前要调用`super()`，而它的参数就是父类中的参数，那么现在我们知道`super`就是父类的构造函数，那么这个构造函数中的`this`是指的那个类呢？在继承的时候通过`super`调用父类的构造函数的时候，`super`中的`this `就是指的子类，因为继承之后父类的属性和方法都是属于子类了，所以在调用构造函数的时候`this`必须是子类。

### JavaScript 中bind(), call(), apply() 方法研究

在js中，bind(),call(),apply()都用于改变this指向，以我的理解就是改变函数的运行环境，比如说，A类里面有一个a方法，通过上述三个方法可以使得a函数在另一个类B中也可以运行，也就是a可以用到B类中的属性

```js
const obj1 = {
    name: '小明',
    age: 10,
    sayName() {
        console.log(`大家好，我是${this.name}`)
    }
}
const obj2 = {
    name: '小红',
    age: 20,
    sayName() {
        console.log(`大家好，我是${this.name}`)
    }
}
// 现在我们有两个对象，第一个对象对象调用sayName方法会输出'大家好我是小明',但是现在我要
// 输出'大家好，我是小红',第一种方法就是直接调用obj2中sayName方法,还有就是调用上述三个方
// 法改变obj1中sayName方法之中this指向，当this指向指向obj2的时候，也有一样的效果

obj1.sayName.call(obj2) // 大家好，我是小红
const changeThis = obj1.sayName.bind(obj2)
changeThis() // 大家好，我是小红
```

通过上述例子可以看到，在调用call方法的时候是立即执行，也只是在这次执行的时候改变this指向但是bind是永远改变this指向，并且要把新函数赋给新函数，要调用函数就必须调用新函数，综上，bind和call作用都是一样，改变this指向，但是使用方式有所不同，bind是永久改变this指，而call只是在调用的时候改变this指向。call其实apply的一个语法糖，他们只是参数不同，call是在新的对象后面直接添加参数`obj1.call(obj2, params1, params2...)`，apply是要数组形式传参`obj1.apply(obj2,[params1, params2...])`

