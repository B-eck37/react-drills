import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Loading from './Loading';

class App extends Component {
  constructor(){
    super();
    this.state = {
      person: '',
      birthYear: '',
      height: '',
      hairColor: '',
      eyeColor: '',
    }
  }

  componentDidMount(){
    axios.get('https://swapi.co/api/people/1').then(response => {
      let info = response.data
      this.setState({
        person: info.name,
        birthYear: info.birth_year,
        height: info.height,
        hairColor: info.hair_color,
        eyeColor: info.eye_color
      })
      console.log(info)
      console.log(this.state)
    })
  }



  render() {
    return (
      <div className="App">
      {!this.state.person ? <Loading/> :
      <div>
       <h1>Jedi: {this.state.person}</h1>
       <h2>Born: {this.state.birthYear}</h2>
       <h2>Height: {this.state.height}</h2>
       <h2>Hair Color: {this.state.hairColor}</h2>
       <h2>Eye Color: {this.state.eyeColor}</h2>
       </div>}
      </div>
    );
  }
}

export default App;
