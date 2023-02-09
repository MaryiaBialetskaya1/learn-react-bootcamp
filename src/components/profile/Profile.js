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
            <div>
              <img src={this.state.person.picture.medium} alt="profile pic" />
            </div>
            <h3>
              {this.state.person.name.first} {this.state.person.name.last}
            </h3>
            <div>
              <h4>My email is: {this.state.person.email}</h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}
