import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './style.css'

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

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainHeader loginInfo={this.state.loginInfo}/>
            <Switch>
              <Route path='/search' component={MainSearch}/>
              <Route path='/logistics/:orderId?' component={LogisticsInfo}/>
              <Route path='/seller/:userId?' component={Seller}/>
            </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }

}

export default Main
