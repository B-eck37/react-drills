import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List';
import NewTasks from './NewTasks'
// import Todo from './Todo'

class App extends Component {
  constructor (){
    super();
    this.state = {
        list: [],
    }
    this.addTask = this.addTask.bind(this)
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
        
        <NewTasks add={this.addTask}/>
        <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;

