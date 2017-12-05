import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor (){
    super();
    this.state = {
        list: [],
        userInput: ""
    }
    this.addTask = this.addTask.bind(this);
  }

  handleChange(value){
    this.setState({
      userInput: value
    })
  }

  addTask(){
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ""
    });
  }


  render() {
    let list = this.state.list.map((element,index)=> {
      return (
        <Todo key={index} task={element} />
      )
    })

    return (
      <div className="App">
        <h1>To-Do List</h1>

        <div>
        <input value={this.state.userInput}
            placeholder="Enter New Task"
            onChange={(event => this.handleChange(event.target.value))}/>
        <button onClick={this.addTask}>Add Task</button>
        </div>
        <br />
        {list}
      </div>
    );
  }
}

export default App;
