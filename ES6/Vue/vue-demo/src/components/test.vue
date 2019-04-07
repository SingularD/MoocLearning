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

