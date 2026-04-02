import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      index: 0,
      messages: ["hello", "hi", "bye", "gm"],
    };
  }

  nextMessage = () => {
    this.setState((prev) => ({
      index: (prev.index + 1) % prev.messages.length,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.nextMessage}>show/hide</button>

        {this.state.messages[this.state.index]}
      </div>
    );
  }
}
export default App;
