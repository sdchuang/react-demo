
import React,{ Component } from 'react'
import { Route,Switch } from 'react-router-dom'


import home from '../components/home/home'
import list from '../components/home/list'
import user from '../components/home/user'


class Routes extends Component{
  render(){
    return(
      <Switch>
        <Route path="/home/index" component={home}/>
        <Route path="/home/list" component={list}/>
        <Route path="/home/user" component={user}/>
      </Switch>
    )
  }
}

export default Routes;