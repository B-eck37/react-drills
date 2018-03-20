import React, { Component } from 'react'

class NewTasks extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }

    handleChange(value){
        this.setState(() => {
            return {
            input: value
            }
        })
    }

    handleAdd(){
            this.props.add(this.state.input)
            this.setState(() => {
                return {
                    input: ''
                }
            })
    }

    handleEnter(target){
        if(target.charCode===13){
            this.handleAdd();
        }
    }

    render() {
        return (
            <div onKeyPress={this.handleEnter}>
                <input value={this.state.input} placeholder='Enter new Task here' onChange={event => this.handleChange(event.target.value)}/><br/>
                <button type='submit'  onClick={this.handleAdd}>Submit Task</button>
            </div>
        )
    }
}


export default NewTasks;

