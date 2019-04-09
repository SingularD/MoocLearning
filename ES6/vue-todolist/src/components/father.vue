<template>
  <div class="father">
    <input
      class="father-input"
      v-model="fatherMessage"
      type="text"
      placeholder="我是father"
    >
    <h2>我是父组件：{{showMessage}}</h2>
    <button>发送给子组件</button>
    <Child
      :toChild="fatherMessage"
      @getChildMessage="getChildMessage"
    ></Child>
  </div>
</template>

<script>
  import Child from '@/components/child'
  export default {
    components: {Child},
    name: "father",
    data() {
      return {
        fatherMessage: '',
        showMessage: ''
      }
    },
    methods: {
      getChildMessage(data) {
        this.showMessage = data
      }
    }
  }
</script>

<style scoped>
.father{
  width: 80%;
  height: 40vh;
  background-color: #999999;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.father-input{
  margin-top: 30px;
  width: 50%;
  height: 30px;
}
  button{
    margin-top: 30px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    margin-bottom: 30px;
  }
</style>
