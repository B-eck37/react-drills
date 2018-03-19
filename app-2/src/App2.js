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
    <h2 key={element}>{element}</h2>)
    return (
      <div className="App">
          {showFamily}
        </div>
        );
    }
}

export default App2;