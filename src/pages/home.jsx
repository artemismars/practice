import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    const receivedValue = props.num;
    const myArray = ["dog", "cat", "lion"];
    this.state = {
      homeNum: parseInt(receivedValue),
      homeArray: myArray,
      homeItem: "",
    };
    this.counter = this.counter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <button onClick={this.counter}>increase the value</button>
        <p>{this.state.homeNum}</p>
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>add item</button>
        <ul>
          {this.state.homeArray.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </>
    );
  }

  counter() {
    const increasedValue = this.state.homeNum + 1;
    this.setState({
      homeNum: increasedValue,
    });
  }
  handleChange(e) {
    this.setState({
      homeItem: e.target.value,
    });
  }
  handleClick(e) {
    this.state.homeArray.push(this.state.homeItem);
    this.setState({
      homeArray: this.state.homeArray,
    });
  }
}

export default Home;
