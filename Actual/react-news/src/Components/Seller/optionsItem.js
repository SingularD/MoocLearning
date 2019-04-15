import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {testURL, baseURL} from "../../Base";

class OptionsItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type,
      jump: false,
      updateOrder: {
        orderNum: '',
        uname: '',
        uphone: ''
      },
      createOrder: {
        orderNum: '',
        uname: '',
        uphone: ''
      }
    }
    this.updateOrder = this.updateOrder.bind(this)
    this.submitUpdateOrder = this.submitUpdateOrder.bind(this)
    this.createOrder = this.createOrder.bind(this)
    this.submitCreateOrder = this.submitCreateOrder.bind(this)
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
  updateOrder(e) {
    let data = {}
    data[e.target.name] = e.target.value
    this.setState({
      updateOrder : Object.assign(this.state.updateOrder, data)
    })
  }

  /**
   * 提交修改订单
   */
  submitUpdateOrder() {
    console.log(this.state.updateOrder)
    let choice = window.confirm(`你确定修改订单: ${this.state.updateOrder.orderNum} 吗？`)
    if (choice) {
      axios.post(`${baseURL}/merchant/update`,
        JSON.stringify(this.state.updateOrder),
        {headers: {
          'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': localStorage.getItem('token')
        }
        }
        )
        .then((res) => {
          if (!res.data.result) {
            localStorage.removeItem('$username')
            this.setState({
              check: true
            })
            alert('请登录后尝试')
          }
        })
    }
  }

  /**
   * 获取新建订单的订单号，用户名，手机号
   * @param e
   */
  createOrder(e) {
    let data = {}
    data[e.target.name] = e.target.value
    this.setState({
      createOrder : Object.assign(this.state.createOrder, data)
    })
  }

  /**
   * 提交新建订单
   */
  submitCreateOrder() {
    let choice = window.confirm(`你确定新建订单: ${this.state.createOrder.orderNum} 吗？`)
    if (choice) {
      axios.post(`${baseURL}/merchant/add`,
        JSON.stringify(this.state.createOrder),
        {headers: {
          'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': localStorage.getItem('token')
          }})
        .then((res) => {
          if (!res.data.result) {
            localStorage.removeItem('$username')
            this.setState({
              check: true
            })
            alert('请登录后尝试')
          }
        })
      alert('新建成功！')
    }

  }

  componentDidMount() {
    if (this.props.type === 'updateOrder') {
      this.setState({
        updateOrder: {
          orderId: this.props.orderData.orderId,
          orderNum: this.props.orderData.orderNum,
          uname: this.props.orderData.uname,
          uphone: this.props.orderData.uphone
        }
      })
    }
  }


  render() {
    return (
      <div className="seller-selector-edit col-8 mt-5">
        {this.state.check ? <Redirect to='/login'/> : ''}

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">姓名</span>
          </div>
          {
            this.props.type === 'createOrder' ?
              <input
                type="text"
                name="uname"
                className="form-control"
                onChange={this.createOrder}
                placeholder="姓名" /> :
              <input
                type="text"
                name="uname"
                defaultValue={this.state.updateOrder.uname}
                onChange={this.updateOrder}
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
                name="uphone"
                onChange={this.createOrder}
                placeholder="电话" /> :
              <input
                type="text"
                className="form-control"
                name="uphone"
                onChange={this.updateOrder}
                defaultValue={this.state.updateOrder.uphone}
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
                name="orderNum"
                onChange={this.createOrder}
                placeholder="订单" /> :
              <input
                type="text"
                className="form-control"
                name="orderNum"
                defaultValue={this.state.updateOrder.orderNum}
                onChange={this.updateOrder}
                placeholder="订单" />
          }        </div>

        {
          this.state.type === 'createOrder' ?
            <div className="float-right">
              <button
                className="btn btn-success mr-5"
                onClick={this.submitCreateOrder}
              >
                添加订单
              </button>
              <button
                onClick={this.handleCancel.bind(this, 'add')}
                className="btn btn-primary">取消添加</button>
            </div> :
            <div className="float-right">
              <button
                className="btn btn-warning mr-5"
                onClick={this.submitUpdateOrder}
              >
                修改订单</button>
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
