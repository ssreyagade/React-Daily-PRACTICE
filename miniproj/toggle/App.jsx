import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      message: ["hello", "hi", "bye", "gm"],
    };
  }

  toggleText = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.toggleText}>show/hide</button>

        {this.state.show && <h2>Hello World!</h2>}
        {this.state.show &&
          this.state.message.map((msg, index) => <h2 key={index}>{msg}</h2>)}
      </div>
    );
  }
}
export default App;
