import React, {Component} from 'react'
import { connect } from 'react-redux'

class login extends Component{
  state={

  }
  componentDidMount(){
    console.log(this.props)
  }
  login(){
    this.props.changeUserName('668')
    // this.props.history.push('/home/index')
  }
  register(){
    this.props.history.push('/register')
  }
  render(){
    return (
      <div>
        <h2>login</h2>
        <header>
          <button onClick={()=>this.login()}>login</button>  
          <div>{this.props.userReducer.name}</div>
          <button onClick={()=>this.register()}>register</button>  
        </header>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return state;
}
function mapDispatchToProps(dispatch){
  return {
    changeUserName(data){
      dispatch ({
        type:'change',
        name:data
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(login)