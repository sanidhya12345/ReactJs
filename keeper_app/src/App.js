/** @format */

import React from "react";
import "./App.css";
import keep from "./keep.png";
const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={keep} alt=""></img>
        <h1>Keeper</h1>
      </header>
      <hr></hr>
    </div>
  );
};
class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    );
  }
}
export default App;
