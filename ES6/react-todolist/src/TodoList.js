import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }
  getInputValue(e) {
    this.setState({inputValue: e.target.value})
  }
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      const list = [...this.state.list, this.state.inputValue]
      this.setState({
        list,
        inputValue: ''
      })
    }
  }
  addItem() {
    return this.state.list.map((item, index) => (
      <TodoItem
        key={index}
        content={item}
        index={index}
        handleFunction={this.handleDelete}
      />
    ))
  }
  handleDelete(index, data) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }
  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.getInputValue.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          />
        <ul>
          {this.addItem()}
        </ul>
      </React.Fragment>
    )
  }
}
export default TodoList