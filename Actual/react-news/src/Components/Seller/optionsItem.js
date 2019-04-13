import React from 'react'
import axios from 'axios'

class OptionsItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type,
      createOrder: {
        flag: false,
        orderId: '',
        uName: '',
        uPhone: ''
      },
      updateOrder: {
        flag: false,
        // orderId: this.props.orderData.orderId,
        // uName: this.props.orderData.uname,
        // uPhone: this.props.orderData.uphone
        orderId: 'a',
        uName: 'a',
        uPhone: 'a'
      }
    }
  }

  /**
   * 父组件传入的删除方法，隐藏组件
   * @param type
   */
  handleCancel(type) {
    this.props.cancel(type)
  }

  /**
   * 获取更新后的订单号，用户名，电话号
   * @param e
   */
  updateOrderId(e) {
    this.setState({
      orderId: e.target.value
    })
  }

  updateUserName(e) {
    this.setState({
      uName: e.target.value
    })
  }

  updateUserPhone(e) {
    this.setState({
      uPhone: e.target.value
    })
  }

  

  render() {
    return (
      <div className="seller-selector-edit col-8 mt-5">


        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">姓名</span>
          </div>
          {
            this.props.type === 'createOrder' ?
              <input
                type="text"
                className="form-control"
                placeholder="姓名" /> :
              <input
                type="text"
                defaultValue={this.state.updateOrder.uName}
                onChange={this.updateUserName.bind(this)}
                className="form-control"
                placeholder="姓名" />
          }
        </div>


        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">电话</span>
          </div>
          {
            this.props.type === 'createOrder' ?
              <input
                type="text"
                className="form-control"
                placeholder="电话" /> :
              <input
                type="text"
                className="form-control"
                onChange={this.updateUserPhone.bind(this)}
                defaultValue={this.state.updateOrder.uPhone}
                placeholder="电话"
              />
          }        </div>


        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">订单</span>
          </div>
          {
            this.props.type === 'createOrder' ?
              <input
                type="text"
                className="form-control"
                placeholder="订单" /> :
              <input
                type="text"
                className="form-control"
                defaultValue={this.state.updateOrder.orderId}
                onChange={this.updateOrderId.bind(this)}
                placeholder="订单" />
          }        </div>

        {
          this.state.type === 'createOrder' ?
            <div className="float-right">
              <button className="btn btn-success mr-5">添加订单</button>
              <button
                onClick={this.handleCancel.bind(this, 'add')}
                className="btn btn-primary">取消添加</button>
            </div> :
            <div className="float-right">
              <button className="btn btn-warning mr-5">修改订单</button>
              <button
                onClick={this.handleCancel.bind(this, 'update')}
                className="btn btn-primary">取消修改</button>
            </div>
        }
      </div>
    )
  }
}

export default OptionsItem
