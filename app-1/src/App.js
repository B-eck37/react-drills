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

  handleChange(val){
    this.setState({
      userInput: val
    })
  }


  render() {
    return (
      <div className="App">
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)} value={this.state.userInput}></input>
        Hey!
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
