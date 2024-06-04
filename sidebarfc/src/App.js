import { useState} from 'react';
import './App.css';
import Item from './Item.js'
function App() {
  const [modify,setModify]=useState({
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
 })
 const openDiv=(e)=>{
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
    let mod1={};
    mod1.style=sty1;
    mod1.buttonStyle=bs1;
    mod1.isChange=true;

    let mod2={};
    mod2.style=sty2;
    mod2.buttonStyle=bs2;
    mod2.isChange=false;

    if(!modify.isChange){
      setModify(mod1);
    }
    else{
      setModify(mod2);
    }

 }
  return (
    <div className="App">
       <div style={modify.style}>
             <button onClick={openDiv} style={modify.buttonStyle}>{modify.buttonStyle.text}</button>
             {modify.isChange && <Item/>}
         </div>
    </div>
  );
}

export default App;
