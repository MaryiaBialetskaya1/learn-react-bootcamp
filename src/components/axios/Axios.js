import { Component } from "react";
import axios from "axios";

export class Axios extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }
  render() {
    return (
      <div>
        <h1>USERS: </h1>
        <div>
          {this.state.users.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <span>Email: {user.email} </span>
              <span>Street: {user.address.street} </span>
              <span>City: {user.address.city} </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
