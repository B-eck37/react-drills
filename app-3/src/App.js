import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfThings: ["tacos", "salsa", "tomatoes", "lettuce", "jalepenos"],
      filteredList: ""
    };
  }
  handleChange(value) {
    this.setState({ filteredList: value });
  }

  render() {
    let showList = this.state.listOfThings
      .filter((element, index) => {
        return element.includes(this.state.filteredList);
      })
      .map((element, index) => {
        return <h2>{element}</h2>;
      });

    return (
      <div className="App">
        <input
          onChange={event => this.handleChange(event.target.value)}
          type="text"
        />
        {showList}
      </div>
    );
  }
}

export default App;
