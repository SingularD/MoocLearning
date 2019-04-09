<template>
  <div class="content">
    <input type="text"
           class="input"
           @keyup.enter="getInputValue"
           v-model="inputValue"
           placeholder="请输入你的计划"
    >
    <ul>
      <li v-if="showWhatTodo">这是你的计划</li>
      <li class="list" v-for="(item, index) in list" :key="index">
        <list-item
          type="todo"
          :content="item"
          :index="index"
          @deleteItem="deleteItem"
          @appendDoneItem="appendDoneItem"
        ></list-item>
      </li>
    </ul>
    <ul>
      <li v-if="showWhatDone">这是你已完成的</li>
      <li class="list" v-for="(item, index) in doneList" :key="index">
        <list-item
          type="done"
          :content="item"
          :index="index"
          @deleteItem="deleteItem"
        ></list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
export default {
  name: 'TodoList',
  components: { ListItem },
  data () {
    return {
      inputValue: '',
      list: [],
      doneList: []
    }
  },
  computed: {
    showWhatTodo () {
      return this.list.length ? true : ''
    },
    showWhatDone () {
      return this.doneList.length ? true : ''
    }
  },
  methods: {
    getInputValue () {
      this.list = [...this.list, this.inputValue]
      this.inputValue = ''
    },
    deleteItem (index, type) {
      if (type === 'todo') {
        this.list.splice(index, 1)
      } else this.doneList.splice(index, 1)
    },
    appendDoneItem (item, index) {
      this.doneList = [...this.doneList, item]
      this.list.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.list{
  list-style: none;
  border: #999999 1px solid;
  margin-top: 5px;
  border-radius: 10px;
}
ul{
  width: 60%;
}
.content{
  width: 60%;
  background-color: #80b7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.input{
  width: 60%;
  height: 30px;
}
</style>
