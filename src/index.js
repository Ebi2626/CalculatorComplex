import React from "react";
import ReactDOM from "react-dom";
import App from "./Standard/App.js";
import Complex from "./Complex/App.js";

import "./styles.css";

let choosenCalculator;
let a = 2;
if (a===1){
  choosenCalculator = <App />;
} else {
  choosenCalculator = <Complex />
}


const rootElement = document.getElementById("root");
ReactDOM.render(choosenCalculator, rootElement);
