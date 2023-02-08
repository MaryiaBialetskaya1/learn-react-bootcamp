import { Component } from "react";

export class Image extends Component {
  state = {
    image: null,
  };

  async componentDidMount() {
    const url = "https://randomfox.ca/floof/";
    const result = await fetch(url);
    const data = await result.json();
    this.setState({ image: data.image });
  }
  render() {
    return (
      <div>
        <img src={this.state.image} alt="fetched pic" width="250px" />
      </div>
    );
  }
}
