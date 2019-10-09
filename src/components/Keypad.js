import React, { Component } from "react";

export default class Keypad extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  printString(){
     console.log("Entering password...")
  } 

  render() {
    return (
      <input type="password" onKeyUp={this.printString} />
    );
  }

}
