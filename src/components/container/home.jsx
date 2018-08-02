import React, { Component } from 'react'
import Routes from '../../routes'

class Home extends Component {
  home(){
    this.props.history.push('/home/index')
  }
  user(){
    this.props.history.push('/home/user')
  }
  list(){
    this.props.history.push('/home/list')
  }
  render(){
    return(
      <div>
        <li onClick={()=>this.home()}>home</li>
        <li onClick={()=>this.user()}>user</li>
        <li onClick={()=>this.list()}>list</li>
        <div>
          <Routes />
        </div>
      </div>

    )
  }
}

export default Home;