import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'



class App extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <React.Fragment>
        {/*<BrowserRouter>*/}
        {/*  <Switch>*/}
        {/*    <Route path="/login" component = {}/>*/}
        {/*    <Route path="/" component = {}/>*/}
        {/*  </Switch>*/}
        {/*</BrowserRouter>*/}
      </React.Fragment>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
