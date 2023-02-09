import { Component } from "react";

export class Profile extends Component {
  state = {
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    this.setState({ person: data.results[0] });
  }
  render() {
    return (
      <div>
        {!this.state.person ? (
          <p>Loading....</p>
        ) : (
          <div>
            <p>{this.state.person.name.first}</p>
            <p>{this.state.person.name.last}</p>
          </div>
        )}
      </div>
    );
  }
}
