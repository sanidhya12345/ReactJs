/** @format */

import React from "react";
import "./NavBar.css";
import { SunnyOutline } from "react-ionicons";
import user from "./LoginForm";
import Middle from "./Middle";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
const Home = () => <h1>Welcome to Home Page</h1>;
const About = () => <h1>Welcome to About Page</h1>;
const MiddleComp = ({ middle, color, to }) => {
  let mid = <Middle style={middle} color={color}></Middle>;
  if (to === "/about") {
    mid = <About></About>;
  }
  return <div>{mid}</div>;
};
class NavBar extends React.Component {
  state = {
    icon: {
      color: "#FFFFFF",
      height: "45px",
      width: "45px",
    },
    navColor: {
      color: "#FFFFFF",
      backgroundColor: "#000000",
    },
    middle: {
      height: "872px",
      backgroundColor: "#000000",
    },
    color: "#FFFFFF",
    clicked: false,
    to: "about",
  };
  handleMiddle = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  changeTheme = () => {
    let iconColor = this.state.icon.color === "#FFFFFF" ? "#000000" : "#FFFFFF";
    let textColor =
      this.state.navColor.color === "#FFFFFF" ? "#000000" : "#FFFFFF";
    let backColor =
      this.state.navColor.backgroundColor === "#000000" ? "#FFFFFF" : "#000000";
    let middleBack =
      this.state.middle.backgroundColor === "#000000" ? "#FFFFFF" : "#000000";
    let middleColor = this.state.color === "#FFFFFF" ? "#000000" : "#FFFFFF";
    this.setState({
      icon: {
        height: "45px",
        width: "45px",
        color: iconColor,
      },
    });
    this.setState({
      navColor: {
        color: textColor,
        backgroundColor: backColor,
      },
    });
    this.setState({
      middle: {
        height: "872px",
        backgroundColor: middleBack,
      },
    });
    this.setState({ color: middleColor });
  };
  render() {
    console.log();
    //let back=this.state.clicked?<Middle style={this.state.middle} color={this.state.color}></Middle>:<user.LoginForm></user.LoginForm>
    // let back = (
    //   <Middle style={this.state.middle} color={this.state.color}></Middle>
    // );
    // let back=<Middle style={this.state.middle} color={this.state.color}></Middle>;
    // if(this.state.to==="/about"){
    //   back=<About></About>
    // }
    return (
      <div>
        <div className="navBar" style={this.state.navColor}>
          <div className="name">
            <h2 className="h1">Sanidhya Varshney</h2>
          </div>
          <div className="itemList">
            <div className="items">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/mywork">My Work</Link>
              <Link to="/contact">Contact</Link>
              <Outlet />

              {/* <a>Home</a>
              <a>About</a>
              <a>Skills</a>
              <a>My Work</a>
              <a>Contact</a> */}
              <button type="" onClick={this.handleMiddle}>
                Login
              </button>
              <SunnyOutline
                style={this.state.icon}
                onClick={this.changeTheme}></SunnyOutline>
            </div>
          </div>
        </div>
        <div></div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MiddleComp
                middle={this.state.middle}
                color={this.state.color}></MiddleComp>
            }></Route>
          <Route
            exact
            path="/about"
            element={
              <MiddleComp
                middle={this.state.middle}
                color={this.state.color}
                to={`/${this.state.to}`}></MiddleComp>
            }></Route>
        </Routes>
      </div>
    );
  }
}
export default NavBar;
