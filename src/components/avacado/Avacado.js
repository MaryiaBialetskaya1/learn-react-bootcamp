import { Component } from "react";
import avocado from "../../images/avocado.webp";

export class Avacado extends Component {
  render() {
    return (
      <div>
        <img src={avocado} alt="avocado" width="250px" />
      </div>
    );
  }
}
