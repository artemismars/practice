import React, { Component } from "react";

class Increment extends Component {
  constructor(props) {
    super(props);
    const receivedValue = props.num;
    this.state = {
      homeNum: parseInt(receivedValue),
    };
    this.counter = this.counter.bind(this);
  }

  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <button onClick={this.counter}>increase the value</button>
        <p>{this.state.homeNum}</p>
      </>
    );
  }

  counter() {
    const increasedValue = this.state.homeNum + 1;
    this.setState({
      homeNum: increasedValue,
    });
  }
}

export default Increment;
