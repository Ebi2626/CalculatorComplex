import React, { Component } from "react";
import Input from "./Input";
import Keyboard from "./Keyboard";
import Signs from "./SignsArray";
import Rezultat from "./Rezultat";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "0",
      firstValue: "0",
      secondValue: "0",
      currentValuer: 1,
      sign: " ",
      result: "0"
    };
    this.changeValue = this.changeValue.bind(this);
    this.trimZero = this.trimZero.bind(this);
    this.countResult = this.countResult.bind(this);
    this.saveSign = this.saveSign.bind(this);
  }
  saveSign(e) {
    this.setState({
      sign: e,
      firstValue: this.state.value,
      currentValuer: 2,
      value: "0"
    });
  }
  countResult() {
    let sign = this.state.sign;
    let result;
    switch (sign) {
      case "+":
        result = (
          Number(this.state.firstValue) + Number(this.state.secondValue)
        ).toFixed(4);
        this.setState({
          result: result,
          value: "0",
          firstValue: "0",
          secondValue: "0"
        });
        break;
      case "-":
        result = (
          Number(this.state.firstValue) - Number(this.state.secondValue)
        ).toFixed(4);
        this.setState({
          result: result,
          value: "0",
          firstValue: "0",
          secondValue: "0"
        });
        break;
      case "*":
        result = (
          Number(this.state.firstValue) * Number(this.state.secondValue)
        ).toFixed(4);
        this.setState({
          result: result,
          value: "0",
          firstValue: "0",
          secondValue: "0"
        });
        break;
      case "/":
        result = (
          Number(this.state.firstValue) / Number(this.state.secondValue)
        ).toFixed(4);
        this.setState({
          result: result,
          value: "0",
          firstValue: "0",
          secondValue: "0"
        });
        break;
      case "%":
        result = (
          Number(this.state.firstValue) % Number(this.state.secondValue)
        ).toFixed(4);
        this.setState({
          result: result,
          value: "0",
          firstValue: "0",
          secondValue: "0"
        });
        break;
      default:
        result = "wprowadzono nieporawny znak!";
        this.setState({
          result: result,
          value: "0",
          firstValue: "0",
          secondValue: "0"
        });
        break;
    }
  }
  secondValuer() {
    if (this.state.currentValue === 1) {
      this.setState({
        currentValuer: 2
      });
    } else {
      this.setState({
        currentValuer: 1,
        value: "0",
        secondValue: "0"
      });
    }
    return;
  }
  trimZero() {
    if (this.state.currentValuer === 1) {
      if (!".".includes(this.state.value)) {
        let stateOfApp = this.state.value;
        if (stateOfApp.charAt(0) === "0") {
          this.setState(prevState => {
            let newState = prevState.value.substr(1);
            return {
              value: newState
            };
          });
        }
      }
    } else {
      if (!".".includes(this.state.secondValue)) {
        let stateOfApp2 = this.state.secondValue;
        if (stateOfApp2.charAt(0) === "0") {
          this.setState(prevState => {
            let newState = prevState.secondValue.substr(1);
            return {
              value: newState,
              secondValue: newState
            };
          });
        }
      }
    }
  }
  changeValue(e) {
    this.trimZero();
    if (Signs.includes(e.target.innerHTML)) {
      let Sign = e.target.innerHTML;
      switch (Sign) {
        case ".":
          let Value = e.target.innerHTML;
          this.setState(prevState => {
            let x = prevState.value;
            let z = x + Value;
            return {
              value: z
            };
          });
          break;
        case "←":
          break;
        case "=":
          this.countResult();
          break;
        default:
          this.secondValuer();
          this.saveSign(Sign);
          break;
      }
    } else {
      let Value = e.target.innerHTML;
      if (this.state.currentValuer === 1) {
        this.setState(prevState => {
          let x = prevState.value;
          let z = x + Value;
          return {
            value: z,
            firstValue: z
          };
        });
      } else {
        if (this.state.currentValuer === 2) {
          this.setState(prevState => {
            let x = prevState.secondValue;
            let z = x + Value;
            return {
              value: z,
              secondValue: z
            };
          });
        }
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div onClick={this.props.back} className="back__button">
          Back
        </div>
        <h1>Simple calcualtor</h1>
        <Input value={this.state.value} />
        <Keyboard function={this.changeValue} />
        <Rezultat rezultat={this.state.result} />
      </div>
    );
  }
}

export default App;
