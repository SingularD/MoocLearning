import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import './style.css'


class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      LoginFlag: false
    }
    this.getUsername = this.getUsername.bind(this)
    this.getPassword = this.getPassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * 获取用户名
   * @param e
   */
  getUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  /**
   * 获取密码
   * @param e
   */
  getPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  /**
   * 提交验证登录
   */
  handleSubmit() {
    if (this.state.username === '' || this.state.password === '') {
      alert('请填写完整的账号密码！')
      return
    }
    let userInfo = {
      phoneNum: this.state.username,
      password: this.state.password,
    }
    axios.post('http://192.168.1.109:8080/api/merchant/login',
      JSON.stringify(userInfo),
      {headers: {'Content-Type': 'application/json;charset=UTF-8'}}
    )
      .then((res) => {
        if (res.data.result === "OK") {
          localStorage.setItem('token', res.data.token)
          alert('登录成功，页面即将跳转')
          this.setState({
            LoginFlag: true
          })
        } else {
          alert('账号或者密码错误！')
        }
      })
      .catch((err) => {
        alert(err)
      })
  }
  render() {
    return(
      <div className="login-container">
        { this.state.LoginFlag ? <Redirect to='/'/> : '' }
        <div
          className="login-form-content row justify-content-center align-items-center">
          <form className="col-6 align-content-center">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="email"
                className="form-control"
                id="username"
                onChange={this.getUsername}
                placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={this.getPassword}
                placeholder="Password" />
            </div>
            <button
              type="button"
              className="col-2 offset-5 btn btn-primary"
              onClick={this.handleSubmit}
            >
              登录
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
