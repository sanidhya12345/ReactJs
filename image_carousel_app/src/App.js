/** @format */
import React, { Component } from "react";

import "./App.css";
class App extends Component {
  state={
     index:0
  }
  render() {
    const style = {
      display: "block",
      justifyContent: "center",
      alignItems: "center",
    };
    const urls = [
      "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/39574/flower-exotic-colorful-pink-39574.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];
    
    const next=()=>{
        if(this.state.index!=urls.length){
            this.setState({index:this.state.index+1})
        }
    }
    const previous=()=>{
        if(this.state.index<1){
            this.setState({index:this.state.index-1});
        }
       
    }
    const imgStyle = {
      width: "300px",
      height: "300px",
    };
    return (
      <div style={style}>
        <div>
          <h1>Project-1: Image Carousel</h1>
          <div className="image">
            <button type="" className="b1" onClick={next}>
              {"->"}
            </button>
            <img src={urls[this.state.index]} style={imgStyle} alt=""></img>
            <button type="" className="b2" onClick={previous}>
              {"<-"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
