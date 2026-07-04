import React, { Component } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
//import "./App.css";
import App5 from "./App5";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hide: false,
      show: true,
      count: 0,
      name: "Shreya",
      Role: "Frontend Developer",
    };
  }

  render() {
    return (
      <>
        <App5 name={this.state.name} desc={this.state.Role} />
        <App5 name="Shreya" desc="desc1" />
        <App5 name="Reya" desc="desc2" />
        <App5 name="Shre" desc="desc3" />

        <center>
          I am {this.state.name} and position at {this.state.Role}
        </center>
        <button
          onClick={() => {
            this.setState({ name: "shre", Role: "Full Stack Developer" });
          }}
        >
          Change
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add 1
        </button>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Substract
        </button>
        <center>{this.state.count}</center>

        <button
          onClick={() => {
            this.setState({
              hide: true,
              show: false,
            });
          }}
        >
          HIDE
        </button>
        <button
          onclick={() => {
            this.setState({
              hide: false,
              show: true,
            });
          }}
        >
          SHOW
        </button>
        <center>
          {this.state.show === true ? <h2>Hello, Shreya</h2> : null}
        </center>
      </>
    );
  }
}

export default App;
