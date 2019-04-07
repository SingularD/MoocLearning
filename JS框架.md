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

首先data属性是管理全局变量的一个对象，在html标签中，要使用它其中的变量只需要`{{ 变量名即可 }}`,我们可以把它想做对象的解构赋值，但是要注意的是这里使用的两层花括号；

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





### React.js

