import React, { Component } from "react";

import TodoList from "../components/todolist";

class Todo extends Component {
  constructor(props) {
    super(props);
    const myArray = ["dog", "cat", "lion"];
    this.state = {
      homeArray: myArray,
      homeItem: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>add item</button>
        <ul>
          {this.state.homeArray.map((item) => {
            return <TodoList item={item} />;
          })}
        </ul>
      </>
    );
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

export default Todo;
