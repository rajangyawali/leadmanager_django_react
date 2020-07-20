import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
