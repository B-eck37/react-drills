import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
          userInput: ""
        }
      }
handleChange(value){
  this.setState({
    userInput: value
  })
}

    
  render() {
    return (
      <div className="App">
        <p>Value: {this.state.userInput}</p>
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)}></input>
        
      </div>
    );
  }
}

export default App;