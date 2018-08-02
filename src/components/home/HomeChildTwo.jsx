import React, { Component } from 'react'

class HomeChildTwo extends Component {
  state={
    data:'children'
  }
  componentDidMount(){
    this.props.toParent('two');
  }
  render(){
    return(
      <div>
        HomeChildTwo
      </div>
    )
  }
}

export default HomeChildTwo;