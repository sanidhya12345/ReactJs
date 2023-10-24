/** @format */

import React from "react";
import "./NavBar.css";
import { MoonOutline } from "react-ionicons";
import user from "./LoginForm";

import Middle from "./Middle";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import About from "./About";
const Home = () => <h1>Welcome to Home Page</h1>;
const Skills=()=><h1>Welcome to skills page</h1>;
const MyWork=()=><h1>Welcome to mywork page</h1>
const Contact=()=><h1>Welcome to Contact Page</h1>
const MiddleComp = ({ middle, color, to }) => {
  let mid = <Middle style={middle} color={color}></Middle>;
  if (to === "/about") {
    mid = <About></About>;
  }
  else if(to==="/skills"){
    mid=<Skills></Skills>
  }
  else if(to==="/mywork"){
    mid=<MyWork></MyWork>
  }
  else if(to==="/contact"){
    mid=<Contact></Contact>
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
      height: "858px",
      backgroundColor: "#000000",
      textColor:'white',
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
        height: "858px",
        backgroundColor: middleBack,
      },
    });
    this.setState({ color: middleColor });
  };
  handleClick=(e)=>{
     const id=e.target.id;
     this.setState({to:id});
  }
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
    const link={
       textDecoration:'none',
       color:this.state.navColor.color
    }
    return (
      <div>
        <div className="navBar" style={this.state.navColor}>
          <div className="name">
            <h2 className="h1">Sanidhya Varshney</h2>
          </div>
          <div className="itemList">
            <div className="items">
              <Link to="/" style={link}>Home</Link>
              <Link to="/about" id="about" onClick={this.handleClick} style={link}>About</Link>
              <Link to="/skills" id="skills" onClick={this.handleClick} style={link}>Skills</Link>
              <Link to="/mywork" id="mywork" onClick={this.handleClick} style={link}>My Work</Link>
              <Link to="/contact" id="contact" onClick={this.handleClick} style={link}>Contact</Link>
              <Link to="https://sanidhya12345.blogspot.com/" target="_blank" style={link}>Blog</Link>
              <Outlet />

              {/* <a>Home</a>
              <a>About</a>
              <a>Skills</a>
              <a>My Work</a>
              <a>Contact</a> */}
              <MoonOutline
                style={this.state.icon}
                onClick={this.changeTheme}></MoonOutline>
            </div>
          </div>
        </div>
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
                to={`/${this.state.to}`}></MiddleComp>
            }></Route>
            <Route
            exact
            path="/skills"
            element={
              <MiddleComp
                to={`/${this.state.to}`}></MiddleComp>
            }></Route>
            <Route
            exact
            path="/mywork"
            element={
              <MiddleComp
                to={`/${this.state.to}`}></MiddleComp>
            }></Route>
            <Route
            exact
            path="/contact"
            element={
              <MiddleComp
                to={`/${this.state.to}`}></MiddleComp>
            }></Route>
        </Routes>
      </div>
    );
  }
}
export default NavBar;
