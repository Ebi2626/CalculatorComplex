import React, { Component } from "react";

import ApplicationMenu from "./ApplicationMenu.js";

class Application extends Component {
  constructor(){
    super();
    this.state = {
      userChoice: 0
    }
    this.chooseStandard = this.chooseStandard.bind(this);
    this.chooseComplex = this.chooseComplex.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  chooseStandard(){
    this.setState({
      userChoice: 1
    })
  }
  chooseComplex(){
    this.setState({
      userChoice: 2
    })
  }
  goBack(){
      this.setState({
        userChoice: 0
      })
  }

  render(){
      return(
            <div className="application__choosingMenu">
                  <ApplicationMenu userChoice={this.state.userChoice} back={this.goBack} standard={this.chooseStandard} complex={this.chooseComplex} />
            </div>
      )
  }
}

export default Application;