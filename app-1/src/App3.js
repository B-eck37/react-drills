import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App3 extends Component {
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


render(){
    return (
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>Value: {this.state.userInput}</p>
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)}></input>
        </div>
    );
  }
}

export default App3