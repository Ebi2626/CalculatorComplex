import React, { Component } from "react";
import Keyboard from "./Keyboard";
import Signs from "./SignsArray";
import Rezultat from "./Rezultat";
import Screen from "./Screen"

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
  }
  render() {
    return (
      <div className="App">
        <h1>Pierwszy reactowy kalkulator liczb zespolonych</h1>
        <Screen value={this.state.value}>
        </Screen>
        <Keyboard function={this.changeValue} />
        <Rezultat rezultat={this.state.result} />
      </div>
    );
  }
}

export default App;
