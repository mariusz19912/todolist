import React, { Component } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <h1>To Do List</h1>
          </header>
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default App;
