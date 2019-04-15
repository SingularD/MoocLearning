import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import { baseURL } from "../../Base";
import './style.css'

class MainSearch extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      searchPhoneNum: '',
      wrongPhoneNum: false,
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
      axios.get(`${baseURL}/order?key=${this.state.searchPhoneNum}`)
        .then((res) => {
          if (res.data.length) {
            this.setState({
              orderInfoList: res.data
            })
          } else {
            this.setState({
              wrongPhoneNum: true
            })
          }
        })
        .catch((err) => {
          console.log(err)
          alert('查询失败，请输入正确手机号！')
        })
    } else{
      alert('未能查询您手机号相关的订单信息')
    }
  }
  changeDateForm(time) {
    let date = new Date(time);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return (Y+M+D+h+m+s);
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
                  <div className="col-3">用户名</div>
                  <div className="col-3">订单时间</div>
                  <div className="col-2">
                      查看物流
                  </div>
                </div>
              </li>
              {
                this.state.wrongPhoneNum ?
                  <h1 style={{color: 'red'}}>无相关订单，请重新输入!!!</h1> : ''
              }
              {
                this.state.orderInfoList.map((item, index) => (
                  <li className="list-group-item" key={index}>
                    <div className="row justify-content-between">
                      <div className="col-3">{item.orderNum}</div>
                      <div className="col-3">{item.uname}</div>
                      <div className="col-3">{this.changeDateForm(item.time)}</div>
                      <div className="col-2">
                        <Link to={`/logistics/${item.orderNum}`}>
                          <button className="btn btn-primary">
                            查询物流
                          </button>
                        </Link>
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
