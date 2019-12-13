import React, { Component } from 'react';
import App from "./Standard/App.js";
import Complex from "./Complex/App.js";

class ApplicationMenu extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let choice = this.props.userChoice;
        let value;
        if (choice === 1) {
            value = <App back={this.props.back}/>;
        } else if (choice === 2 ){
            value = <Complex back={this.props.back}/>;
        } else {
            value = <div>
                    <h1>Choose type of calculator</h1>
                    <ul className="application__options">
                        <li className="application__option" onClick={this.props.standard}> Standard </li>
                        <li className="application__option" onClick={this.props.complex}> Complex </li>
                    </ul>
                </div>;
        }
        return(
            <div>
                {value}
            </div>
        )
    }

   
}

export default ApplicationMenu