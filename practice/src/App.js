import React, { Component } from 'react'
import './App.css'
class App extends Component{
  state={
    heading:'sanidhya varshney'
  }
  onSubmit=(e)=>{
    e.preventDefault();
    let heading=this.state.heading==='sanidhya varshney'?'hello world':'sanidhya varshney';
    this.setState({heading:heading});
  }
  render(){
     return (<div>
       <h1>{this.state.heading}</h1>
       <button type="submit" onClick={this.onSubmit}>Change Heading</button>
     </div>)
  }
}
export default App;