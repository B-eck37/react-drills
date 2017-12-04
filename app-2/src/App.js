import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      listOfThings: ["Tacos", "Salsa", "Tomatoes", "Lettuce", "Jalepenos"]
    }
  }
  render() {
    let showFood = this.state.listOfThings.map(element =>
      <h2>{element}</h2>
    )
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {showFood}
        </p>
      </div>
    );
  }
}

export default App;
