import { Component } from "react";
import tomato from "../../images/tomato.webp";

export class Tomato extends Component {
  render() {
    return (
      <div>
        <img src={tomato} alt="Tomato" width="250px" />
      </div>
    );
  }
}
