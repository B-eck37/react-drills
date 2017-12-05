import React, {Component} from 'react';

export default class NewTasks extends Component(){
    constructor(){
        super();
        this.state ={
            input: ''
        }
        this.addTask = this.addTask.bind(this);
    }

    handleChange(value){
        this.setState({
          userInput: value
        })
      }

      handleAdd(){
          this.props.add(this.state.input);
          this.setState({input: ""

          })
      }

render(){
return (
    <div>
<input value={this.state.userInput}
            placeholder="Enter New Task"
            onChange={(event => this.handleChange(event.target.value))}/>
        <button onClick={this.handleAdd}>Add Task</button>
    </div>
)
}
}
