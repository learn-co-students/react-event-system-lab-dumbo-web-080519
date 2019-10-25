// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  handleOnkeyup =() =>{
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
       <input type="password" onKeyUp={this.handleOnkeyup}/>
      </div>
    );
  }

}

export default Keypad;
