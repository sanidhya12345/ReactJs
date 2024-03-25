/** @format */

import "./App.css";
import { useState } from "react";
function App() {
  const [style, setStyle] = useState({
    width: "200px",
    height: "200px",
    backgroundColor: "#ff2",
    margin: "auto",
    marginTop: "40px",
  });
  const changeColor = () => {
    let obj = {
      width: "200px",
      height: "200px",
      backgroundColor: "#ff2",
      margin: "auto",
      marginTop: "40px",
    };
    if(obj.backgroundColor=='#ff2'){
      obj.backgroundColor='#ff2456';
    }
    else{
      obj.backgroundColor='#ff2';
    }
    setStyle(obj);
  };
  return (
    <div className="App">
      <div className="box_container" style={style}></div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
