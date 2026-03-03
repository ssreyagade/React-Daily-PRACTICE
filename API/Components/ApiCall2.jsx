import React, { Component } from "react";

export default class ApiCall2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      });
  }

  render() {
    return (
      <div>
        <h2>User List</h2>

        {this.state.users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>
              <b>Name:</b> {user.name}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Phone:</b> {user.phone}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
