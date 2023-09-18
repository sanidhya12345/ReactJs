// import doSomething from "./functions.js";
// function App() {
//   return (
//     <div className="App">
       
//     </div>
//   );
// }
import "./App.css";
import html from "./html.jpg";
import css from "./css.jpg";
import js from "./js.jpg";
import react from "./react.jpg";
const App=()=>(
    <div className="Container">
       <h1>
         Front End Technologies
       </h1>
       <div className="imageContainer">
          <img src={html} alt='html'></img>
          <img src={css} alt='css'></img>
          <img src={js} alt='js'></img>
          <img src={react} alt='react'></img>
       </div>
    </div>
)
export default App;
