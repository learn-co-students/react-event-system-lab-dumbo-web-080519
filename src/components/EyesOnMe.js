import React, { Component } from "react";

export default class EyesOnMe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  printGood(){
    console.log("Good!")
  }

  printHey(){
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button
        onFocus={this.printGood}
        onBlur={this.printHey}
      >
        Button
      </button>
    );
  }
}
