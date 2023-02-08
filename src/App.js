import { Component } from "react";
import "./App.css";
import { Avacado } from "./components/avacado/Avacado";
import { Quote } from "./components/fetchQuote/Quote";
import { Tomato } from "./components/tomato/Tomato";

class App extends Component {
  state = {
    show: true,
  };

  render() {
    const btnText = this.state.show ? "SEE TOMATO" : "GO TO AVOCADO";

    return (
      <div className="App">
        <Quote />
        <div>
          <div>{this.state.show ? <Avacado /> : <Tomato />}</div>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            {btnText}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
