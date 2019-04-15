import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './Components/Login/index' // 登录界面组件
import Main from './Components/Main/index' // 主要内容部分


class App extends React.Component{
  render() {
    return(
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component = {Login}/>
            <Route path="/" component = {Main}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
