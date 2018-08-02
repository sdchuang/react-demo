import React, { Component } from 'react'

class HomeChild extends Component {
  state={
    data:'children'
  }

  componentDidMount(){
    console.log(this)
  }
  render(){
    return(
      <div>
        {this.props.name} homeChild
      </div>
    )
  }
}

export default HomeChild;