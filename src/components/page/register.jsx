import React, {Component} from 'react'

class register extends Component{
  login(){
    this.props.history.push('/login')
  }
  render(){
    return (
      <div>
        <h2>register</h2>
        <header>
        <button onClick={()=>this.login()}>login</button>   
        </header>
      </div>
    )
  }
}

export default register;