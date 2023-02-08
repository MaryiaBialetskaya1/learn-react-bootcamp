import { Component } from "react";

export class Profile extends Component {
  state = {
    results: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const result = await fetch(url);
    const data = await result.json();
    this.setState({ results: data.results[0] });
  }
  render() {
    return (
      <div>
        <p>{this.state.gender}</p>
        {/* <img src={this.state.pictire.medium} alt="profile pic" /> */}
        <p>{this.state.cell}</p>
      </div>
    );
  }
}
