<template>
  <div class="child">
    <input class="child-input" type="text" v-model="childMessage">
    <h4>我是子组件:{{toChild}}</h4>
    <button @click="handleClick">发送给父组件</button>
  </div>
</template>

<script>
  export default {
    name: "child",
    props: ['toChild'],
    data () {
      return {
        childMessage: '',
        showChildMessage: ''
      }
    },
    methods: {
      getMessageToFather(data) {
        this.$emit('getChildMessage', data)
      },
      handleClick() {
        this.getMessageToFather(this.childMessage)
      }
    }
  }
</script>

<style scoped>
.child{
  width: 60%;
  height: 40%;
  background-color: #80b7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .child-input{
    width: 60%;
    height: 30px;
    margin-top: 30px;
  }
  button{
    margin-top: 30px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
  }
</style>
