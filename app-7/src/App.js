import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List';
import NewTasks from './NewTasks'

class App extends Component {
  constructor (){
    super();
    this.state = {
        list: [],
    }
    
  }

 

  addTask(tasks){
    this.setState({
      list: [...this.state.list, tasks],
    });
  }


  render() {

    return (
      <div className="App">
        <h1>To-Do List</h1>

        <div>
        <NewTasks add={this.addTask} />
        <List tasks={this.state.list}/>
        </div>
      </div>
    );
  }
}

export default App;

