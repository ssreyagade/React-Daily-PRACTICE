import React, { Component } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
//import "./App.css";

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
