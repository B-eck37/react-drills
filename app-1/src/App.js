import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ""
    }
  }

  handleChange(val){
    this.setState({
      userInput: val
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>Value: {this.state.userInput}</p>
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
