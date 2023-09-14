import pic from './photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="App-logo" alt="logo" />
           <p>
            <h1>
              My name is Sanidhya Varshney.
            </h1>
            <h2>
              I am from Aligarh.
            </h2>
            <h3>
              Graduate from GLA University Mathura.
            </h3>
           </p>
      </header>
    </div>
  );
}

export default App;
