import React, { Component } from "react";
import Key from "./Key";
import KeyboardArray from "./KeyboardArray";

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  render() {
    const DisplayingKeyboard = KeyboardArray.map(el => {
      return <Key key={el} value={el} function={this.props.function} />;
    });
    return <div className="keyboard">{DisplayingKeyboard}</div>;
  }
}

export default Keyboard;
