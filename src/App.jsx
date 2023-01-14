import React, { Component } from "react";

class SimpleOnKeyUp extends Component {
  
  constructor() {
    super();
    this.state = {};
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onKeyUp(event) {
    console.log(event.target.value);
      this.setState({ inputValue: event.target.value });
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div className="App">
        <form>
          <input type="text" onKeyUp={this.onKeyUp} />
        </form>
        
        <span>you're typing {inputValue}</span>
      </div>
    );
  }
}

export default SimpleOnKeyUp;
