import React, { Component } from "react";
import "./App.css";
import Output from "./components/UserOutput";
import Input from "./components/UserInput";

class App extends Component {
  state = {
    username: "gabeNovsky",
  };

  inputHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <Input
          userChange={this.inputHandler}
          currentUserName={this.state.username}
        />
        <Output userName={this.state.username} />
        <Output userName="Novsky" />
        <Output userName="gabrielnovsky" />
      </div>
    );
  }
}

export default App;
