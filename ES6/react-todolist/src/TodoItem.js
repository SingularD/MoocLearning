import React from 'react'

class TodoItem extends React.Component{
  constructor(props) {
    super(props)
    this._delete = this._delete.bind(this)
  }
  _delete() {
    this.props.handleFunction(this.props.index)
  }
  render() {
    return <li onClick={this._delete}>{this.props.content}</li>
  }
}

export default TodoItem