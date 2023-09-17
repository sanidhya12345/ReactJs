import "./App.css";
import doSomething from "./functions.js";
function App() {
  return (
    <div className="App">
       <div className="two">
       <button type="" onClick={doSomething.addition}>Addition</button>  
       <button type="" onClick={doSomething.subtract}>Subtraction</button>
       <button type="" onClick={doSomething.multiply}>Multiplication</button>
       <button type="" onClick={doSomething.division}>Division</button>
       </div>
          
    </div>
  );
}

export default App;
