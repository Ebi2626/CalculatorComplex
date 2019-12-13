import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.value ? this.props.value : 0
    };
  }
  render() {
    let colorfull = this.props.color ? "input__complex--active" : "";
    return (
      <div className="Input__complex">
        <input
          type="text"
          className={"input__complex " + colorfull}
          placeholder={this.props.value}
          disabled
        />
      </div>
    );
  }
}

export default Input;
