import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "./app.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>hello antd</h1>
        <Button type="primary">Button</Button>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
