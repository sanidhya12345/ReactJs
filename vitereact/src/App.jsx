import './App.css'
import { useState } from 'react';
function App() {
  
  let [counter,setCounter]=useState(0);
  const addvalue=()=>{
     if(counter<20){
      setCounter(counter+1);
     }
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>React with Vite</h1> 
      <h2>Counter Value: {counter}</h2>

      <button onClick={addvalue}>Add Value</button>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
