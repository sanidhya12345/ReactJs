import './App.css';
import {useState} from 'react';
function App() {
  const [value,setValue]=useState("");
  const handleChange=(value)=>{
      setValue(value);
  }
  return (
    <div className="App">
       <div className="quiz_container">
          <h2>Q1.What will be the sum of 2+2?</h2>
          <div>
          <div>
            <label>A.8</label>
             <input type="radio" id="option1" value="option1" onChange={()=>{
              handleChange("option1")
             }}checked={value==="option1"} ></input>
          </div>
          <div>
          <label>B.4</label>
             <input type="radio" id="option2" value="option2" onChange={()=>{
              handleChange("option2")
             }} checked={value==="option2"}></input>
          </div>
          <div>
          <label>C.3</label>
             <input type="radio" id="option3" value="option3" onChange={()=>{
              handleChange("option3")
             }} checked={value==="option3"}></input>
          </div>
          <div>
          <label>D.5</label>
             <input type="radio" id="option4" value="option4" oonChange={()=>{
              handleChange("option4")
             }} checked={value==="option4"}></input>
          </div>
          </div>
       </div>
    </div>
  );
}

export default App;
