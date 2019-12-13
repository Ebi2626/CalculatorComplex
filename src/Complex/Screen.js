import React, { Component } from 'react';
import Input from "./Input";

class Screen extends Component{

  render(){

    return(
      <div className="screen">
          <Input value={this.props.n1r} color={this.props.color===1?true:false}/>
          <Input value={this.props.n1i} color={this.props.color===2?true:false}/>
          <Input value={this.props.n2r} color={this.props.color===3?true:false}/>
          <Input value={this.props.n2i} color={this.props.color===4?true:false}/>
      </div>
    )
  }
}



export default Screen;
