<template>
  <div class="list-item">
    <img
      v-if="showTodo"
      :src="confirm"
      @click="appendDoneItem(content, index)"
    >
    <img
      v-if="showDone"
      :src="confirmDone"
      @click="deleteItem(index, type)"
    >
    <p>{{content}}</p>
    <img :src="deleteIcon" @click="deleteItem(index, type)">
  </div>
</template>

<script>
import Confirm from '@/assets/icons/confirm.png'
import Delete from '@/assets/icons/delete-.png'
import confirmDone from '@/assets/icons/confirm-done.png'
export default {
  name: 'ListItem',
  props: ['content', 'index', 'type'],
  data () {
    return {
      confirm: Confirm,
      deleteIcon: Delete,
      confirmDone: confirmDone
    }
  },
  computed: {
    showTodo () {
      return this.type === 'todo' ? true : ''
    },
    showDone () {
      return this.type === 'done' ? true : ''
    }
  },
  methods: {
    deleteItem (index, type) {
      this.$emit('deleteItem', index, type)
    },
    appendDoneItem (item, index) {
      this.$emit('appendDoneItem', item, index)
    }
  }
}
</script>

<style scoped>
.list-item{
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-item p{
  width: 60%;
  text-align: center;
}
.list-item img{
  width: 30px;
}
</style>
