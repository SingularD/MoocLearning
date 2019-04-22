import React from 'react'
import {HashRouter, Route, Switch} from "react-router-dom";

import MainHeader from '../MainHeader/index'
import MainSearch from '../MainSearch/index'
import LogisticsInfo from '../LogisticsInfo/index'
import Seller from '../Seller/index'

class Main extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      loginInfo: {
        username: '',
        loginStatus: false //判断用户是否已登录
      },

    }
  }

  componentDidMount() {
    if (localStorage.getItem('$username')) {
      let _state = {
        username: localStorage.getItem('$username'),
        loginStatus: true
      }
      this.setState({
        loginInfo: Object.assign(this.state.loginInfo, _state)
      })
    }

  }

  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <MainHeader loginInfo={this.state.loginInfo}/>
            <Switch>
              <Route path='/search' component={MainSearch}/>
              <Route path='/logistics/:orderId?' component={LogisticsInfo}/>
              <Route path='/seller/:userId?' component={Seller}/>
            </Switch>
        </React.Fragment>
      </HashRouter>
    )
  }

}

export default Main
