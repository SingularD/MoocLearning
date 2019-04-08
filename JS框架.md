## JS框架学习

### Vue.js

#### 安装

```shell
npm install -g vue-cli

vue init webpack projectName
cd projectName
npm run dev
```



#### 基础知识

##### 生命周期

![Vue å®ä¾çå½å¨æ](https://cn.vuejs.org/images/lifecycle.png)

由上图我们可以看出：在vue中有八个生命周期的钩子，它们分别是：

1. beforeCreate
2. create
3. beforeMount
4. mounted
5. beforeUpdate
6. updated
7. beforeDestroy
8. destroyed

那么它们之中最重要的就是第四个，mounted，它所代表的是对象挂载之后的这么一个生命周期，相当于原生js中loaded，就是在dom节点挂载之后，开始渲染页面之前的这么一个生命周期，比如我们的ajax请求大部分可能就要在这里来进行



#### 选项数据

* data
* computed
* methods

首先data属性是管理全局变量的一个对象，在html标签中，要使用它其中的变量只需要`{{ 变量名即可 }}`,我们可以把它想做对象的解构赋值，而且在这个`{{}}`中我们可以输入js表达式，但是要注意的是这里使用的两层花括号；

computed和methods是两个对象，我们在模板主要使用他们的方法，所以在书写的时候data是函数形式，而他们两个则是对象

```vue
<template>
    <div>
      <h1>选项数据</h1>
      <h1>---------------------------</h1>
      <h1>data: {{ message }}</h1>
      <h1>---------------------------</h1>
      <h1>computed:  {{ count }}</h1>
      <h1>---------------------------</h1>
      <h1 @click="sayHi('hello')">methods!</h1>
    </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        message: '我是李松蔚',
        num: 20
      }
    },
    computed: {
      count() {
        return this.num + 10;
      }
    },
    methods: {
      sayHi(params) {
        alert(params)
      }
    }
  }
</script>
```

#### 模板语法

* v-html (类似于原生js的innerHTML)

* v-text (类似于原生js的innerText)

* v-bind (动态绑定标签的属性，简写模式 `:`，只要是元素的属性需要动态绑定的时候都需要v-bind)

* v-on (事件监听，简写模式`@`,有时候事件，需要组织默认行为或者组织事件冒泡，这个时候我们只需要在事件后面加上`.`修饰符即可)

  ```vue
  <button id="btn" v-on:click.prevent="handle"></button> // 阻止默认行为
  <button id="btn" v-on:click.stop="handle"></button> // 阻止事件冒泡
  ```

* v-model 在表单上建立数据的双向绑定，使用该标签后元素的`value, checked, selected`将失效，取而代之是用v-model,所有我们要把表单的数据在data中初始化

  v-model的修饰符

  ```vue
  <input v-model.lazy="msg"> // 数据不会实时更新，当表单失去焦点时更新
  <input v-model.number="msg"> // 输入值转化为数字类型
  <input v-model.trim="msg"> // 过滤输入的首尾空格
  ```

* v-for 主要用于遍历，但是要注意绑定key属性

  ```vue
  v-for="item in items" // 遍历数组
  v-for="(item, index) in items" // 遍历数组，index是索引

  v-for="(key, value) in item" // 遍历对象
  ```

* v-if 条件渲染，通过true和false来控制，使用v-if的时候，若值为false他就不会真实地生成DOM元素，而另外一个条件渲染v-show，在值为false的时候，他还是会生成DOM只是通过css的display属性将其隐藏，但是它还是存在于DOM上的。

### React.js

