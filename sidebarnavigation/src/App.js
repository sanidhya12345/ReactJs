import React, { Component } from 'react'

import './App.css';

const Item=()=>{
  return(
    <div>
             <h2>Home</h2>
             <h2>About</h2>
             <h2>Contact</h2>
             <h2>Blog</h2>
    </div>
  )
}
class App extends Component{
  state={
     style:{
        height:'400px',
        width:'300px',
     },
     buttonStyle:{
        height:'50px',
        width:'50px',
        border:'none',
        borderRadius:'50%',
        text:'+'
     },
     isChange:false
  }
  openDiv=(e)=>{
      e.preventDefault();
      let sty1={
        height:'400px',
        width:'300px',
        backgroundColor:'#FEFFD2'
      }
      let sty2={
        height:'400px',
        width:'300px',
      }
      let bs1={
        height:'50px',
        width:'50px',
        border:'none',
        borderRadius:'50%',
        marginLeft:'250px',
        text:'x'
      }
      let bs2={
        height:'50px',
        width:'50px',
        border:'none',
        borderRadius:'50%',
        text:'+'
      }
      if(!this.state.isChange){
         this.setState({style:sty1,buttonStyle:bs1,isChange:true})
      }
      else{
        this.setState({style:sty2,buttonStyle:bs2,isChange:false})
      }
      
  }
  render(){
    return(
      <div className='container'>
         <div style={this.state.style}>
             <button onClick={this.openDiv} style={this.state.buttonStyle}>{this.state.buttonStyle.text}</button>
             {this.state.isChange && <Item/>}
         </div>
      </div>
    )
  }
}
export default App;
