import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
      doneList: []
    }
    this.getInputValue = this.getInputValue.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.appendDoneItem = this.appendDoneItem.bind(this)
    this.removeDoneItem = this.removeDoneItem.bind(this)
  }

  /**
   * 输入框触发onChange事件，获取输入框的值，传递到state中
   * @param e 事件
   */
  getInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  /**
   * 触发回车事件之后，向state中添加输入框中的值
   * @param e
   */
  handleEnter(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      const list = [...this.state.list, this.state.inputValue]
      this.setState({
        list,
        inputValue: ''
      })
    }
  }

  /**
   * 子组件触发点击事件后，删除当前的选项
   * @param index 子组件的索引
   */
  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }

  /**
   * 触发todo列表的元素的点击事件后，把自身添加到done列表中，并在todo中删除自身
   * @param item 元素内容
   * @param index 索引
   */
  appendDoneItem(item, index) {
    const doneList = [...this.state.doneList, item]
    this.setState({doneList})
    this.handleDelete(index)
  }

  /**
   * 点击事件删除在done列表中所选的内容
   * @param index
   */
  removeDoneItem(index) {
    const doneList = [...this.state.doneList]
    doneList.splice(index, 1)
    this.setState({doneList})
  }
  render() {
    return(
      <div className='content'>
        <input
          className="getInput"
          type="text"
          value={this.state.inputValue}
          onChange={this.getInputValue}
          onKeyUp={this.handleEnter}
          placeholder="请输入你的计划"
        />
        <ul className="list-group">
          { this.state.list.length ? <li>这是你的计划</li> : '' }
          {
            this.state.list.map((item, index) => (
              <TodoItem
                content={item}
                key={index}
                index={index}
                appendDoneItem={this.appendDoneItem}
                deleteFunction={this.handleDelete}
                listType="todo"
              />
            ))
          }
        </ul>
        <ul className="list-group done-list-group">
          {  this.state.doneList.length ? <li>这是你已完成计划</li> : ''  }
          {
            this.state.doneList.map((item, index) => (
              <TodoItem
                content={item}
                key={index}
                index={index}
                removeDoneItem={this.removeDoneItem}
                deleteFunction={this.handleDelete}
                listType="done"
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default TodoList