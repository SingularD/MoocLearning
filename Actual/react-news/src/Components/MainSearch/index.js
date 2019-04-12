import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import './style.css'

class MainSearch extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      searchPhoneNum: '',
      orderInfoList: []
    }


    this.getPhoneNum = this.getPhoneNum.bind(this)
    this.queryOrderInfoList = this.queryOrderInfoList.bind(this)
  }
  getPhoneNum(e) {
    this.setState({
      searchPhoneNum: e.target.value
    })
  }
  queryOrderInfoList() {
    if (this.state.searchPhoneNum !== '') {
      axios.get(`http://www.logiblack.com/api/order/${this.state.searchPhoneNum}`)
        .then((res) => {
          this.setState({
            orderInfoList: res.data
          })
        })
    } else{
      alert('未能查询您手机号相关的订单信息')
    }
  }
  render() {
    return(
      <React.Fragment>
        <div
          className="main-search-container row justify-content-center">
          <div
            className="input-group mb-3 col-9 search-input">
            <input
              type="text"
              className="form-control"
              placeholder="输入手机号，查询订单"
              onChange={this.getPhoneNum}

            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.queryOrderInfoList}
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
                  <div className="col-3">订单编号</div>
                  <div className="col-3">物流状态</div>
                  <div className="col-3">订单时间</div>
                  <div className="col-2">
                      查看物流
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row justify-content-between">
                  <div className="col-3">订单编号</div>
                  <div className="col-3">物流状态</div>
                  <div className="col-3">订单时间</div>
                  <div className="col-2">
                    <button className="btn btn-primary">
                      查看物流
                    </button>
                  </div>
                </div>
              </li>
              {
                this.state.orderInfoList.map((item, index) => (
                  <li className="list-group-item">
                    <div className="row justify-content-between">
                      <div className="col-3">{item.orderId}</div>
                      <div className="col-3">{item.status}</div>
                      <div className="col-3">{item.time}</div>
                      <div className="col-2">
                        <button className="btn btn-primary">
                          <Link to={`/logistics/${item.orderId}`}>
                            查询物流
                          </Link>
                        </button>
                      </div>
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

export default MainSearch
