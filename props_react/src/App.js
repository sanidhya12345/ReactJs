import "./App.css";
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
const Div=(props)=>{
  const style={
     width:'100px',
     height:'100px',
     marginRight:'2px',
     backgroundColor:props.color, 
  }
  return(
     <div style={style}>
       <h1>
         {props.text}
       </h1>
    </div>)
}

const Generator=({numbers})=>{
   return (numbers.map((number)=>{
    if(test_prime(number)==true){
      <Div text={number} color={"#FFF000"}></Div>
    }
    else{
      <Div text={number} color={"#FFFF00"}></Div>
    }

   }
   )
   )
}
const App=()=>{
  const style={
     display:'flex',
     justifyContent:'center',
     alignItems:'center'
  }
    return (
      <div className="app">
         <h1>
           30 Days Of React
         </h1>
         <h2>
            Number Generator
         </h2>
         <div className="colors" style={style}>
          <Generator numbers={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}></Generator>
         </div>
      </div>
    )
}
export default App;