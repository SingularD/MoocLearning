import React from 'react'
import {Link} from "react-router-dom";
import './style.css'

class MainHeader extends React.Component{

  render() {
    const { loginInfo } = this.props
    return (
    <div className="main-header-container row justify-content-center">
      <nav className="nav col-12 col-lg-12 row">
        <Link className="col-lg-2 offset-lg-2 nav-link col-3" to="/search">订单查询</Link>
        <Link className="col-lg-2 nav-link col-3" to="/logistics">物流查询</Link>
        <Link className="col-lg-2 nav-link col-3" to="/seller">卖家信息</Link>
          { loginInfo.loginStatus ?
            <a className="nav-link disabled offset-lg-1 col-lg-2 col-3 ">你好:{loginInfo.username}</a>:
            <a className="nav-link offset-lg-1 col-lg-2 col-3" href="/login">未登录</a>}
      </nav>
    </div>
    )
  }
}

export default MainHeader
