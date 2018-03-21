import React, { Component } from 'react';
import './App.css';
import router from './router'
import Products from './Products'

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Products /> */}
        {router}
      </div>
    );
  }
}

export default App;
