import React from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Link } from "react-router-dom";
import './style.css'
import { baseURL } from '../../Base'


class Seller extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      orderId: '',
      orderData: {},
      edit: {
        flag: false,
        uName: '',
        uPhone: '',
        orderNum: ''
      },
      add: {
        flag: false,
        uName: '',
        uPhone: '',
        orderNum: ''
      }

    }
    this.getOrderId = this.getOrderId.bind(this)
    this.searchOrder = this.searchOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  getOrderId(e) {
    this.setState({
      orderId: e.target.value
    })
  }
  searchOrder() {
    if (this.state.orderId) {
      axios.get(baseURL + `/order?orderId=${this.state.orderId}`)
        .then(res => {
          if (!res.data) alert('你查询的订单不存在！')
          else {
            this.setState(() => ({
              orderData: res.data
            }))
          }
        })
    }
  }
  deleteOrder() {
    let choose = window.confirm(`你确定删除订单: ${this.state.orderId} 吗？`)
    if (choose) {
      let data = {
        orderNum: this.state.orderId
      }
      axios.post(baseURL + `/merchant/cancel`, JSON.stringify(data))
      alert('订单已删除')
    }
  }
  render() {
    return (
      <div className="seller-container row justify-content-center">
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
          </div>

        </div>
        <div className="seller-selector-items col-8 mt-5">
          <h1>订单编号: {this.state.orderId ? this.state.orderId : '不存在!'}</h1>
          <div className="aboutOrder w-100">
            <ul className="list-group list-group-flush pb-3">
              <li className="list-group-item">买家姓名:{this.state.orderData.uname}</li>
              <li className="list-group-item">买家电话:{this.state.orderData.uphone}</li>
              <li className="list-group-item">
                <span>操作</span>
                <span className="float-right">
                  {/*<button className="btn btn-success ">添加订单</button>*/}
                  <button className="btn btn-warning mr-5">修改订单</button>
                  <button className="btn btn-danger" onClick={this.deleteOrder}>删除订单</button>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="seller-selector-edit col-8 mt-5">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">姓名</span>
            </div>
            <input type="text" className="form-control" placeholder="姓名" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">电话</span>
            </div>
            <input type="text" className="form-control" placeholder="电话" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">订单</span>
            </div>
            <input type="text" className="form-control" placeholder="订单" />
          </div>
          <div>
            <button className="btn btn-warning float-right">修改订单</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Seller