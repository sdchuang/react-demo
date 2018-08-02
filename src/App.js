import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom'

import login from './components/page/login'
import register from './components/page/register'
import home from './components/container/home'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={login}/>
          <Route path="/login" component={login}/>
          <Route path="/register" component={register}/>

          <Route path="/home" component={home}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
