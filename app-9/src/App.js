import React, { Component } from 'react';
import './App.css'
import router from './router'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to='/home' style={{marginRight: 20}}>Home</Link>
            <Link to='/signup' style={{marginRight: 20}}>Signup</Link>
            <Link to='/details'>Details</Link>
          </ul>
        </nav>
        <br/>
        {router}
      </div>
    );
  }
}

export default App;
