import React from 'react'
import ConfirmURL from './icons/confirm.png'
import ConfirmDoneURL from './icons/confirm-done.png'
import DeleteURL from './icons/delete-.png'

class TodoItem extends React.Component{

  handleDelete(index) {
    this.props.deleteFunction(index)
  }
  addDoneItem(item) {
    this.props.appendDoneItem(item)
  }
  removeDoneItem(index) {
    this.props.removeDoneItem(index)
  }
  render() {
    const { content, index } = this.props
    return(
      <li className='todo-item'>
        {
          this.props.listType === 'todo' ?
            <img src={ConfirmURL} onClick={this.addDoneItem.bind(this, content, index)}/> :
            <img src={ConfirmDoneURL} onClick={this.removeDoneItem.bind(this, index)}/>
        }
        <p>{content}</p>
        {
          this.props.listType === 'todo' ?
            <img src={DeleteURL}  onClick={this.handleDelete.bind(this, index)}/> :
            <img src={DeleteURL}  onClick={this.removeDoneItem.bind(this, index)}/>
        }
      </li>
    )
  }
}
export default TodoItem