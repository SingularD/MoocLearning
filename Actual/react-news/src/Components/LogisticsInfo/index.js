import React from 'react'
import axios from 'axios'
import { orderState, baseURL } from "../../Base";

class LogisticsInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      orderId: this.props.match.params.orderId, // 读取路由中的订单号
      logisticsNum: '', // 存放手动输入框中的订单编号
      orderState: '',
      logisticsInfoList: [], // 接受请求中的物流信息
    }

    this.getLogisticsNum = this.getLogisticsNum.bind(this)
    this.getLogisticsInfoList = this.getLogisticsInfoList.bind(this)
  }

  /**
   * 从表单中获取订单号
   * @param e
   */
  getLogisticsNum(e) {
    this.setState({
      logisticsNum: e.target.value
    })
  }

  /**
   * 点击按钮后获取该输入框内订单号的物流信息
   */
  getLogisticsInfoList() {
    if (this.state.logisticsNum !== '') {
    // 注意setState的用法！！！！！！！
      axios.get(`${baseURL}/order/detail?orderNum=${this.state.logisticsNum}`)
        .then((res) => {
          this.setState({
            logisticsInfoList : res.data.data,
            orderState: orderState[res.data.state]
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  /**
   * 在页面加载时，通过URL来请求订单号并获取它的物流信息
   */
  componentDidMount() {
    if (this.state.orderId !== undefined) {
      const _this = this
      axios.get(`${baseURL}/order/detail?orderNum=${this.state.orderId}`)
        .then((res) => {
          _this.setState({
            logisticsInfoList : res.data.data,
            orderState : orderState[res.data.state]
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }


  render() {
    return(
      <React.Fragment>
        <div
          className="main-search-container row justify-content-center">
          <div
            className="input-group mb-3 col-9 search-input form-group">
            <input
              type="text"
              className="form-control"
              placeholder="输入订单号，查询物流信息"
              defaultValue={this.state.orderId}
              onChange={this.getLogisticsNum}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.getLogisticsInfoList}
              >
                查询
              </button>
            </div>
          </div>
        </div>
          <div className="row orderContent justify-content-center">
            <div className="col-9">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row justify-content-between">
                    <div className="col-3">时间</div>
                    <div className="col-6">
                      订单编号：
                      {this.state.orderId ? this.state.orderId : this.state.logisticsNum}
                    </div>
                    <div className="col-3">状态: {this.state.orderState}</div>

                  </div>
                </li>

                {
                  this.state.logisticsInfoList.map((item, index) => (
                    <li className="list-group-item" key={index}>
                      <div className="row justify-content-start">
                        <div className="col-3">{ item.time }</div>
                        <div className="col-6">{ item.context }</div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

      </React.Fragment>
    )
  }
}

export default LogisticsInfo
