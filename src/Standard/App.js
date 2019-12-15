// Hi I'm Edwin and this is the simpler part of my first React app written from scratch.
// It simple calculator to standard counting with precision to 4-th position under zero
// I didn't write the shortest possible code because it is app for developers and (I hope) for my future employer
// In this code I bet on Developer Experience and I use switch construction everywhere where it was possible
// It makes my code easy to read and let me for catching errors in easy way
// I hope you'll like it :)

// Application to making simplest counting at positive numbers
// It can handle adding, substracting, multiplying, dividing and counting rest from dividnig ("%")
// Logical map of application:
// - Input data is possible only through clicking on the keyboard displaying on the user screen
// - During input method changeValue adding another values as a string to previous state of value
// - changeValue call method trimZero, which check if at the first position of inputted string is 0
// - if positive it cut it off
// - If user clicks special signs then method saveSign chceck if it is "=", then it try to count operation
// - In other options it save firstInput value into state
// - After typing second value when user clicks "=" application will try to call method count()
// - If sign is operator any aviable operations then method count is calling and trying to count ther result
// - Then in Result is displaingy a result of counting: number or error

import React, { Component } from "react";
import Input from "./Input";
import Keyboard from "./Keyboard";
import Signs from "./SignsArray";
import Rezultat from "./Rezultat";
import Tip from "./Tip";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "0",
      firstValue: "0",
      secondValue: "0",
      currentValuer: 1,
      sign: " ",
      result: "0",
      tip: 0
    };
    this.changeValue = this.changeValue.bind(this);
    this.trimZero = this.trimZero.bind(this);
    this.countResult = this.countResult.bind(this);
    this.saveSign = this.saveSign.bind(this);
    this.showTips = this.showTips.bind(this);

  }
  // It is function responsible for displaying tips
  showTips(){
    this.setState(prevState => {
      let newVal;
      if(prevState.tip === 0){
        newVal = 1;
      } else {
        newVal = 0;
      }
      return {
        tip: newVal
      }
    })
  }
  // It is a function responsible for saving sign in state and change valuer and change input value into zero
  saveSign(e) {
    this.setState({
      sign: e,
      firstValue: this.state.value,
      currentValuer: 2,
      value: "0"
    });
  }
  // It is a function which counting actually result
  // It also change state of rest values to zero
  // For making possible to keep counting for user
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
  // It is method changing state of "valuer"
  // which represents another number to count
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
  // It is function to removing zero from beginning of inputted string
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
  // It is function responsible for saving another number to input
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
          this.setState(prevState => {
            let newValue;
            if(prevState.value.length>1){
              newValue = prevState.value.slice(0, -1);
            } else {
              newValue = "0";
            }
            return{
              value: newValue
            }
          })
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
      <Tip tip={this.state.tip} />
        <div onClick={this.props.back} className="back__button">
          Back
        </div>
        <div className="complex__tooltip" onClick={this.showTips}>
          {this.state.tip === 1 ? "X" : "?"}
        </div>
        <h1>Simple calculator</h1>
        <Input value={this.state.value} />
        <Keyboard function={this.changeValue} />
        <Rezultat rezultat={this.state.result} />
      </div>
    );
  }
}

export default App;
