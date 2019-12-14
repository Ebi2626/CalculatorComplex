// 13.12.2019
// Hello, I'm Edwin and this is my first so advanced app in react written from scratch.
// I didn't write the shortest possible code because it is app for developers and (I hope) my future employer
// In this code I bet on Developer Experience and I use switch construction everywhere where it was possible
// It makes my code easy to read and let me for catching errors in easy way
// I hope you I'll like it :)

// Application to making simplest counting at positive complex numbers (builded from integers)
// It can handle adding, substracting, multiplying, dividing and counting module (%)
// Logical map of application:
// - Input data is possible only through clicking on the keyboard displayin on the user screen
// - During input method changeValue adding another values as a string to previous state of current input
// - changeValue call method trimZero, which check if at the first position of inputted string is 0
// - if positive it cut it off
// - Then when user click button "next input" or "previous input" currentInput (state of application) change
// - If user click special signs then method saveSign chceck if it is "=", then it try to count operation
//   connected to sign saved in application state. If there isn't any it log in console an error number.
// - If sign is "%" application try to count module of current number thanks to method module()
// - If sign is operator any aviable operations then method count is calling and trying to count ther result
// - If it works well then result is given through the props into the result component and display for user
//   It also restart all values of application state and change current input into first so thah user can keep counting
// - If it gone badly then log error number in the console
// - Error numbers with short describe are at the end of this code

import React, { Component } from "react";
import Keyboard from "./Keyboard";
import Signs from "./SignsArray";
import Result from "./Result";
import Screen from "./Screen";
import Button from "./Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number_1: {
        real: "0",
        imaginary: "0"
      },
      number_2: {
        real: "0",
        imaginary: "0"
      },
      currentInput: 1,
      sign: "",
      resultReal: "0",
      resultImaginary: "0",
      errorNumber: null
    };
    this.changeValue = this.changeValue.bind(this);
    this.trimZero = this.trimZero.bind(this);
    this.saveSign = this.saveSign.bind(this);
    this.count = this.count.bind(this);
    this.module = this.module.bind(this);
    this.errorLog = this.errorLog.bind(this);
    this.prevInput = this.prevInput.bind(this);
    this.nextInput = this.nextInput.bind(this);
    this.showTips = this.showTips.bind(this);
  }
  showTips(){
    
  }
  prevInput() {
    // Changing currentInput value into lower, log error if user try to choose value lower than 1
    if (this.state.currentInput !== 1) {
      this.setState(prevState => {
        let newCurrentInput = prevState.currentInput - 1;
        return {
          currentInput: newCurrentInput
        };
      });
    } else {
      this.setState({
        errorNumber: 6
      });
    }
  }
  nextInput() {
    // Changing currentInput value into higher, log error if user try to choose value higher than 4
    if (this.state.currentInput !== 4) {
      this.setState(prevState => {
        let newCurrentInput = prevState.currentInput + 1;
        return {
          currentInput: newCurrentInput
        };
      });
    } else {
      this.setState({
        errorNumber: 7
      });
    }
  }
  module() {
    // Counting module of current number
    switch (this.state.currentInput) {
      case 1 || 2:
        this.setState(prevState => {
          let realPow =
            prevState.number_1.real !== "0"
              ? Math.pow(prevState.number_1.real, 2)
              : 0;
          let imaginaryPow =
            prevState.number_1.imaginary !== "0"
              ? Math.pow(prevState.number_1.imaginary, 2)
              : 0;
          let newVal = Math.sqrt(realPow + imaginaryPow);
          return {
            number_1: {
              real: "0",
              imaginary: "0"
            },
            number_2: {
              real: "0",
              imaginary: "0"
            },
            currentInput: 1,
            sign: "",
            errorNumber: null,
            resultImaginary: "0",
            resultReal: newVal
          };
        });
        break;
      case 3 || 4:
        this.setState(prevState => {
          let realPow =
            prevState.number_2.real !== "0"
              ? Math.pow(prevState.number_2.real, 2)
              : 0;
          let imaginaryPow =
            prevState.number_2.imaginary !== "0"
              ? Math.pow(prevState.number_2.imaginary, 2)
              : 0;
          let newVal = Math.sqrt(realPow + imaginaryPow);
          return {
            number_1: {
              real: "0",
              imaginary: "0"
            },
            number_2: {
              real: "0",
              imaginary: "0"
            },
            currentInput: 1,
            sign: "",
            errorNumber: null,
            resultImaginary: "0",
            resultReal: newVal
          };
        });
        break;
      default:
        this.setState({
          errorNumber: 5
        });
        break;
    }
  }

  count(sign) {
    if (sign === "") {
      this.setState({
        errorNumber: 3
      });
    } else {
      // Chcecking type of sign and tryning count
      switch (sign) {
        case "+":
          this.setState(prevState => {
            let nevReal = prevState.number_1.real + prevState.number_2.real;
            let nevImaginary =
              prevState.number_1.imaginary + prevState.number_2.imaginary;
            return {
              sign: "",
              resultReal: nevReal,
              resultImaginary: nevImaginary,
              currentInput: 1,
              errorNumber: null,
              number_1: {
                real: "0",
                imaginary: "0"
              },
              number_2: {
                real: "0",
                imaginary: "0"
              }
            };
          });
          break;
        case "-":
          this.setState(prevState => {
            let nevReal = prevState.number_1.real - prevState.number_2.real;
            let nevImaginary =
              prevState.number_1.imaginary - prevState.number_2.imaginary;
            return {
              sign: "",
              resultReal: nevReal,
              resultImaginary: nevImaginary,
              currentInput: 1,
              errorNumber: null,
              number_1: {
                real: "0",
                imaginary: "0"
              },
              number_2: {
                real: "0",
                imaginary: "0"
              }
            };
          });
          break;
        case "*":
          this.setState(prevState => {
            let nevReal =
              prevState.number_1.real * prevState.number_2.real -
              prevState.number_1.imaginary * prevState.number_2.imaginary;
            let nevImaginary =
              prevState.number_1.real * prevState.number_2.imaginary +
              prevState.number_1.imaginary * prevState.number_2.real;
            return {
              sign: "",
              resultReal: nevReal,
              resultImaginary: nevImaginary,
              currentInput: 1,
              errorNumber: null,
              number_1: {
                real: "0",
                imaginary: "0"
              },
              number_2: {
                real: "0",
                imaginary: "0"
              }
            };
          });
          break;
        case "/":
          this.setState(prevState => {
            let nevReal =
              prevState.number_1.real * prevState.number_2.real +
              prevState.number_1.imaginary * prevState.number_2.imaginary;
            let denominator =
              prevState.number_2.real * prevState.number_2.real +
              prevState.number_2.imaginary * prevState.number_2.imaginary;
            nevReal = nevReal / denominator;
            let nevImaginary =
              prevState.number_1.imaginary * prevState.number_2.real -
              prevState.number_1.real * prevState.number_2.imaginary;
            nevImaginary = nevImaginary / denominator;
            return {
              sign: "",
              resultReal: nevReal,
              resultImaginary: nevImaginary,
              currentInput: 1,
              errorNumber: null,
              number_1: {
                real: "0",
                imaginary: "0"
              },
              number_2: {
                real: "0",
                imaginary: "0"
              }
            };
          });
          break;
        default:
          this.setState({
            errorNumber: 4
          });
          break;
      }
    }
  }
  saveSign(val) {
    // If user click "=" application try to count inputted value using sing saved in state of appliaction
    if (val === "=") {
      this.count(this.state.sign);
    } else {
      switch (val) {
        // If user click this back arrow, application try to work like a backspace
        case "←":
          switch (this.state.currentInput) {
            case 1:
              this.setState(prevState => {
                let prevVal = String(prevState.number_1.real);
                let nevVal =
                  prevVal.length < 2
                    ? "0"
                    : prevState.number_1.real.slice(0, -1);
                console.log("Długośc stringa: " + prevVal.length);
                console.log("wartość do wpisania: " + nevVal);
                return {
                  number_1: {
                    real: nevVal,
                    imaginary: prevState.number_1.imaginary
                  }
                };
              });
              break;
            case 2:
              this.setState(prevState => {
                let prevVal = String(prevState.number_1.imaginary);
                let nevVal =
                  prevVal.length < 2
                    ? "0"
                    : prevState.number_1.imaginary.slice(0, -1);
                console.log("Długośc stringa: " + prevVal.length);
                console.log("wartość do wpisania: " + nevVal);
                return {
                  number_1: {
                    imaginary: nevVal,
                    real: prevState.number_1.real
                  }
                };
              });
              break;
            case 3:
              this.setState(prevState => {
                let prevVal = String(prevState.number_2.real);
                let nevVal =
                  prevVal.length < 2
                    ? "0"
                    : prevState.number_2.real.slice(0, -1);
                console.log("Długośc stringa: " + prevVal.length);
                console.log("wartość do wpisania: " + nevVal);
                return {
                  number_2: {
                    real: nevVal,
                    imaginary: prevState.number_2.imaginary
                  }
                };
              });
              break;
            case 4:
              this.setState(prevState => {
                let prevVal = String(prevState.number_2.imaginary);
                let nevVal =
                  prevVal.length < 2
                    ? "0"
                    : prevState.number_2.imaginary.slice(0, -1);
                console.log("Długośc stringa: " + prevVal.length);
                console.log("wartość do wpisania: " + nevVal);
                return {
                  number_2: {
                    imaginary: nevVal,
                    real: prevState.number_2.real
                  }
                };
              });
              break;
            default:
              this.setState({
                errorNumber: 2
              });
              break;
          }
          break;
        case "%":
          this.module();
          break;
        default:
          this.setState({
            sign: val
          });
      }
    }
  }
  trimZero() {
    // this method try to remove zero from first position in the current input
    switch (this.state.currentInput) {
      case 1:
        if (
          this.state.number_1.real.charAt(0) === 0 ||
          this.state.number_1.real.charAt(0) === "0"
        ) {
          this.setState(prevState => {
            let nevVal = prevState.number_1.real.substr(1);
            if (nevVal !== undefined) {
              return {
                number_1: {
                  real: nevVal,
                  imaginary: prevState.number_1.imaginary
                }
              };
            }
          });
        }
        break;
      case 2:
        if (
          this.state.number_1.imaginary.charAt(0) === 0 ||
          this.state.number_1.imaginary.charAt(0) === "0"
        ) {
          this.setState(prevState => {
            let nevVal = prevState.number_1.imaginary.substr(1);
            if (nevVal !== undefined) {
              return {
                number_1: {
                  imaginary: nevVal,
                  real: prevState.number_1.real
                }
              };
            }
          });
        }
        break;
      case 3:
        if (
          this.state.number_2.real.charAt(0) === 0 ||
          this.state.number_2.real.charAt(0) === "0"
        ) {
          this.setState(prevState => {
            let nevVal = prevState.number_2.real.substr(1);
            if (nevVal !== undefined) {
              return {
                number_2: {
                  real: nevVal,
                  imaginary: prevState.number_2.imaginary
                }
              };
            }
          });
        }
        break;
      case 4:
        if (
          this.state.number_2.imaginary.charAt(0) === 0 ||
          this.state.number_2.imaginary.charAt(0) === "0"
        ) {
          this.setState(prevState => {
            let nevVal = prevState.number_2.imaginary.substr(1);
            if (nevVal !== undefined) {
              return {
                number_2: {
                  imaginary: nevVal,
                  real: prevState.number_2.real
                }
              };
            }
          });
        }
        break;
      default:
        this.setState({
          errorNumber: 0
        });
        console.log("Error numer: 0");
        break;
    }
  }
  changeValue(e) {
    this.trimZero();
    // Application get value of button clicked by user thanks to it's "innerHTML"
    // Then check if it is special sign, if true then it call method saveSign otherwise it add value into input as a string
    let val = e.target.innerHTML;
    let specialSign;
    function test(a) {
      if (a === val) {
        specialSign = "yes";
        return specialSign;
      }
    }
    for (let i = 0; i < Signs.length; i++) {
      test(Signs[i]);
    }
    if (specialSign === "yes") {
      this.saveSign(val);
    } else {
      switch (this.state.currentInput) {
        case 1:
          this.setState(prevState => {
            let nevVal = prevState.number_1.real + "" + val;
            return {
              number_1: {
                real: nevVal,
                imaginary: prevState.number_1.imaginary
              }
            };
          });
          break;
        case 2:
          this.setState(prevState => {
            let nevVal = prevState.number_1.imaginary + "" + val;
            return {
              number_1: {
                imaginary: nevVal,
                real: prevState.number_1.real
              }
            };
          });
          break;
        case 3:
          this.setState(prevState => {
            let nevVal = prevState.number_2.real + "" + val;
            return {
              number_2: {
                real: nevVal,
                imaginary: prevState.number_2.imaginary
              }
            };
          });
          break;
        case 4:
          this.setState(prevState => {
            let nevVal = prevState.number_2.imaginary + "" + val;
            return {
              number_2: {
                imaginary: nevVal,
                real: prevState.number_2.real
              }
            };
          });
          break;
        default:
          this.setState({
            errorNumber: 0
          });
          console.log("Error numer: 1");
          break;
      }
    }
  }
  errorLog() {
    if (this.state.errorNumber !== null) {
      console.log("Error number: " + this.state.errorNumber);
    }
  }
  render() {
    this.errorLog();
    return (
      <div className="App">
        <div onClick={this.props.back} className="back__button">
          Back
        </div>
        <div className="complex__tooltip" onClick={this.showTips}>?</div>
        <h1>Simple Caluclator for Complex Numbers</h1>
        <Screen
          n1r={this.state.number_1.real}
          n1i={this.state.number_1.imaginary}
          n2r={this.state.number_2.real}
          n2i={this.state.number_2.imaginary}
          color={this.state.currentInput}
        />
        <div className="control__buttons">
          <Button function={this.prevInput} value="Previous" />
          <Button function={this.nextInput} value="Next" />
        </div>
        <Keyboard function={this.changeValue} />
        <Result
          resultReal={this.state.resultReal}
          resultImaginary={this.state.resultImaginary}
        />
      </div>
    );
  }
}

export default App;

/* Error numbers:

0 - Trimming problem function trimZero
1 - Changing value problem function changeValue
2 - Problem with saving sign because of currentInput value in function saveSign 
3 - Counting problem because of empty sign
4 - Counting problem because of wrong value in sign
5 - Module problem because of currentInput value out of range
6 - Problem with trying to change input into lower position than 1
7 - Problem with trying to change input into higher position than 4

*/
