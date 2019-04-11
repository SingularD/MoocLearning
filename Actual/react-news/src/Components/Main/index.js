import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import './style.css'

import MainHeader from '../MainHeader/index'
import MainSearch from '../MainSearch/index'
import LogisticsInfo from '../LogisticsInfo/index'

class Main extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      loginInfo: {
        username: '',
        loginStatus: false
      },

    }
  }

  render() {
    return (
      <React.Fragment>
        <MainHeader loginInfo={this.state.loginInfo}/>
        <BrowserRouter>
          <Route path='/search' component={MainSearch}/>
          <Route path='/logistics/:orderId?' component={LogisticsInfo}/>
        </BrowserRouter>
      </React.Fragment>
    )
  }

}

export default Main
