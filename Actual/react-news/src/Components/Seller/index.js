import React from 'react'
import axios from 'axios'
import './style.css'
import { Redirect } from 'react-router-dom'
import { baseURL} from '../../Base'

import OptionsItem from './optionsItem'


class Seller extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      orderId: '',
      check: false,
      orderInfoFlag: false,
      addOrderFlag: false,
      updateOrderFlag: false,
      orderData: {}

    }
    this.getOrderId = this.getOrderId.bind(this)
    this.searchOrder = this.searchOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.addOrder = this.addOrder.bind(this)
    this.updateOrder = this.updateOrder.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  /**
   * 获取搜索框内的订单号
   * @param e
   */
  getOrderId(e) {
    this.setState({
      orderId: e.target.value
    })
  }

  /**
   * 点击查询输入的订单号
   * 查询订单，获取到订单编号，并请求后台
   */
  searchOrder() {
    this.setState({
      orderInfoFlag: true,
      addOrderFlag: false
    })
    if (this.state.orderId) {
      axios.get( `${baseURL}/order?key=${this.state.orderId}`)
        .then(res => {
          if (!res.data) alert('你查询的订单不存在！')
          else {
            this.setState({
              orderData: res.data[0],
              orderInfoFlag : true
            })
          }
        })
    }
  }

  /**
   * 点击删除按钮，删除订单操作
   */
  deleteOrder() {
    let choose = window.confirm(`你确定删除订单: ${this.state.orderId} 吗？`)
    if (choose) {
      let data = {
        orderNum: this.state.orderId
      }
      axios.post(  `${baseURL}/merchant/cancel`,
        JSON.stringify(data),
        {headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': localStorage.getItem('token')
          }
        })
        .then((res) => {
          this.setState({
            orderInfoFlag: false
          })
          if (!res.data.result) {
            localStorage.removeItem('$username')
            this.setState({
              check: true
            })
            alert('请登录后尝试')
          }
        })
      alert('订单已删除')
    }
  }

  /**
   * 点击新建订单后，展示添加订单界面，并隐藏其它组件
   */
  addOrder() {
    this.setState({
      addOrderFlag: true,
      orderInfoFlag: false,
      updateOrderFlag: false
    })
  }

  /**
   * 点击修改订单按钮，展示修改订单界面，并隐藏其它组件
   */
  updateOrder() {
    this.setState({
      updateOrderFlag: true,
      addOrderFlag: false
    })
  }

  /**
   * 取消按钮，点击后隐藏组件
   * @param type
   */
  handleCancel(type) {
    if (type === 'add') {
      this.setState({
        addOrderFlag: false
      })
    } else {
      this.setState({
        updateOrderFlag: false
      })
    }
  }

  render() {
    return (
      <div className="seller-container row justify-content-center">
        {this.state.check ? <Redirect to='/login'/> : ''}

        <div className="seller-selector row justify-content-between col-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="输入订单号"
              onChange={this.getOrderId}
                   />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  onClick={this.searchOrder}
                >搜索</button>
              </div>
            <div className="input-group-append">
              <button
                className="btn btn-success"
                onClick={this.addOrder}
              >
                新建订单
              </button>
            </div>
          </div>
        </div>

        {
          this.state.orderInfoFlag ?
            <div className="seller-selector-items col-8 mt-5">
              <h1>订单编号: {this.state.orderId ? this.state.orderId : '不存在!'}</h1>
              <div className="aboutOrder w-100">
                <ul className="list-group list-group-flush pb-3">
                  <li className="list-group-item">买家姓名:{this.state.orderData.uname}</li>
                  <li className="list-group-item">买家电话:{this.state.orderData.uphone}</li>
                  <li className="list-group-item">
                    <span>操作</span>
                    <span className="float-right">
                  <button
                    className="btn btn-warning mr-lg-5 mr-3"
                    onClick={this.updateOrder}
                  >
                    修改订单
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.deleteOrder}
                  >
                    删除订单
                  </button>
                </span>
                  </li>
                </ul>
              </div>
            </div> : ''
        }
        {
          this.state.addOrderFlag ?
            <OptionsItem cancel={this.handleCancel} type={'createOrder'} /> : ''
        }
        {
          this.state.updateOrderFlag ?
            <OptionsItem cancel={this.handleCancel} type={'updateOrder'} orderData={this.state.orderData}/> : ''
        }
      </div>
    )
  }
}

export default Seller
