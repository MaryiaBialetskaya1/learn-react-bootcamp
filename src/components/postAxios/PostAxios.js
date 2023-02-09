import { Component } from "react";
import axios from "axios";

export class PostAxios extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <h1>Posts:</h1>
        <div>
          {this.state.posts.map((post) => (
            <div key={post.id}>
              <p>TITLE: {post.title}</p>
              <p>BODY: {post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
