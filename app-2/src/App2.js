import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends Component {
constructor(){
    super()
    this.state = {
        listOfThings: ["Mom", "Dad", "Sister", "Friends"]
    }
}

  render() {
      let showFamily = this.state.listOfThings.map(element =>
    <h2>{element}</h2>)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          </div>
          {showFamily}
        </div>
        );
    }
}

export default App2;