import { Component } from "react";

export class Dogs extends Component {
  state = {
    url: null,
  };

  async componentDidMount() {
    const imageUrl = "https://random.dog/woof.json";
    const result = await fetch(imageUrl);
    const data = await result.json();
    console.log(data);

    this.setState({ url: data.url });
  }

  render() {
    return (
      <div>
        <img src={this.state.url} alt="Dogs" width="250px" />
      </div>
    );
  }
}
