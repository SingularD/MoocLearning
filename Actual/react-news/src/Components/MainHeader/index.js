import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import './style.css'

class MainHeader extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const { loginInfo } = this.props
    return (
    <div className="main-header-container row">
      <nav className="nav col-12 row">
        <Link className="nav-link active col-2 offset-2" to="/search">订单查询</Link>
        <Link className="nav-link col-2" to="/logistics">物流查询</Link>
        <Link className="nav-link col-2" to="/seller">卖家信息</Link>
          { loginInfo.loginStatus ?
            <a className="nav-link disabled col-2 offset-2">你好:${loginInfo.username}</a>:
            <a className="nav-link col-2 offset-2" href="/login">未登录</a>}
      </nav>
    </div>
    )
  }
}

export default MainHeader
