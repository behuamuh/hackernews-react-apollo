import React, { Component } from "react";
import Counter from "./Counter";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        Learn React
        <Counter />
        <AddTodo />
        <Todos />
      </div>
    );
  }
}

export default App;
