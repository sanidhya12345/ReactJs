/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  return <h1>Welcome to 30 days of React</h1>;
};
class App extends React.Component {
  render() {
    return (
      <Router>
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
          </Routes>
      </Router>
    );
  }
}
export default App;
