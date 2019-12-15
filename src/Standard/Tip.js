import React, { Component } from "react";

class Tip extends Component {
  render() {
    let style;
    if (this.props.tip === 0) {
      document.querySelector("body").style.overflowY = "auto";
      style = {
        opacity: 0,
        display: "none"
      };
    } else if (this.props.tip === 1) {
      document.querySelector("body").style.overflowY = "hidden";
      style = {
        opacity: 1,
        display: "flex"
      };
    }
    return (
      <div className="tip" style={style}>
        <p className="tip__paragraph">- Type values with displayed keyboard</p>
        <p className="tip__paragraph">
          - Choose operator using keyboard after typing first value{" "}
        </p>
        <p className="tip__paragraph">- Click "=" after typing second value</p>
        <p className="tip__paragraph">
          - Calculator cannot count with negative numbers
        </p>
        <p className="tip__paragraph">- Enjoy! :)</p>
      </div>
    );
  }
}

export default Tip;
