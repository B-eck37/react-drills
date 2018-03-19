import React, { Component } from 'react';
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
      <h2 key={element}>{element}</h2>
    )
    return (
      <div className="App">
        <div className="App-intro">
          {showFood}
        </div>
      </div>
    );
  }
}

export default App;
