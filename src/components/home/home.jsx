import React, { Component } from 'react'
import { connect } from 'react-redux'

import HomeChild from './homeChild'
import HomeChildTwo from './HomeChildTwo'

import { userLists } from '../../action'

class HomeIndex extends Component {
  state={
    data:'',
    name:''
  }
  action(){
    var data = {page:1};
    this.props.dispatch(userLists(data))
    console.log(this.props)
  }
  componentDidMount(){
    // console.log(this)
  }
  two(data){
    console.log(data)
    this.setState({
      data
    })
  }
  render(){
    return(
      <div>
        <h2>home</h2>
        <p onClick={()=>this.action()}>action</p>
        <div>
          <ul>
            {
              this.props.userListData.data && this.props.userListData.data.userList.map((iterm,index) => {
                return(
                  <li key={index}>{iterm.mobile}</li>
                )
              })
            }
            <li>{this.state.data}</li>
          </ul>
          <HomeChild name="hello"/>
          <HomeChildTwo toParent={this.two.bind(this)}/>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps)(HomeIndex);