import { Component } from "react";
import { Axios } from "./components/axios/Axios";
import "./App.css";
import { Avacado } from "./components/avacado/Avacado";
import { Dogs } from "./components/fetchDogs/Dogs";
import { Image } from "./components/fetchImage/Image";
import { Quote } from "./components/fetchQuote/Quote";
import { Profile } from "./components/profile/Profile";
import { Tomato } from "./components/tomato/Tomato";

class App extends Component {
  state = {
    show: true,
  };

  render() {
    const btnText = this.state.show ? "SEE TOMATO" : "GO TO AVOCADO";

    return (
      <div className="App">
        <Image />
        <Quote />
        <Dogs />
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
        <Profile />
        <Axios />
      </div>
    );
  }
}

export default App;
