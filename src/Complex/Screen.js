import React, { Component } from 'react';
import Input from "./Input";

class Screen extends Component{

  render(){
    return(
      <div className="screen">
          <Input value={this.props.value} />
          <Input value={this.props.value} />
          <Input value={this.props.value} />
          <Input value={this.props.value} />
      </div>
    )
  }
}



export default Screen;
