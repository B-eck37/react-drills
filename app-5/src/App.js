import React, { Component } from 'react';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myImage={"http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/05/08/fc/top-10-hawaiian-beaches-lanikai-beach.rend.hgtvcom.1280.720.suffix/1491584246278.jpeg"}/>

      </div>
    );
  }
}

export default App;
