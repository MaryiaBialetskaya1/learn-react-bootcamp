import { Component } from "react";

export class Quote extends Component {
  state = {
    content: null,
    author: null,
  };

  async componentDidMount() {
    const url = "https://api.quotable.io/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ content: data.content, author: data.author });
  }

  render() {
    return (
      <div>
        <h4>{this.state.author}</h4>
        <p>{this.state.content}</p>
      </div>
    );
  }
}
