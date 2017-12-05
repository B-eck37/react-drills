import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super()
    this.state = {
        userName: "",
        passWord: ""
    };
this.handleLogin = this.handleLogin.bind(this);
  }
  

  handleUserChange(user){
    this.setState({
      userName: user
    })
  }

  handlePassChange(pass){
    this.setState({
      passWord: pass
    })
  }

  // handleLogin() {
  //   alert(`Username: ${ this.state.username } Password: ${ this.state.password }`);
  // }
  handleLogin(){
    alert(`User: ${this.state.userName} Password: ${this.state.passWord}`)
  }

  render() {
    return (
      <div className="App">
       <input onChange={event => this.handleUserChange(event.target.value)}></input>
       <input onChange={event => this.handlePassChange(event.target.value)}></input>
       <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;


// handleChange(value){
//   this.setState({
//     userName: value
//   })
// }
// handleChanges(value){
//   this.setState({
//     passWord: value
//   })
// }


// render() {
//     return (
//       <div className="App">
//        <input onChange={event => this.handleChange(event.target.value)}></input>
//        <input onChange={event => this.handleChanges(event.target.value)}></input>
//        <button onClick={() => alert(this.state.userName && this.state.passWord)}>Login</button>
//       </div>
//     );
//   }
// }