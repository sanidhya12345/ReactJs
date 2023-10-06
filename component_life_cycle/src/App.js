/** @format */

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("I am the constructor and i will be the first to run.");
    this.state = {
      firstname: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(
      "I am getDerivedStateFromProps and i will be the second to run."
    );
    return null;
  }
  componentDidMount() {
    console.log("I am componentDidMount and i will be the last to run.");
  }
  render() {
    console.log("I am render method and i will be the third to run");
    return <div>React Component Life Cycles</div>;
  }
}
export default App;
