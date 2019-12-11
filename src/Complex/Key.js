import React, { Component } from "react";

class Key extends Component {
  render() {
    return (
      <div
        className="key"
        value={this.props.value}
        onClick={this.props.function}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Key;
