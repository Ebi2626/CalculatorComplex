import React, { Component } from 'react';

class Button extends Component{
    render(){
        return (
            <div onClick={this.props.function} className="button">
                {this.props.value}
            </div>
        )
    }
}

export default Button;