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
const Generator=({numbers})=>{
   const style={
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
   }
   const lst=numbers.map((number)=>{
      if(number%2===0 && test_prime(number)===true && number!=0 ){
        return <Div text={number} color="#FF0000"></Div>
      }
      else if(test_prime(number)==true && number!=0){
        return <Div text={number} color="#FF0000"></Div>
      }
      else if(number%2===0 || number==0){
        return <Div text={number} color="#00FF00"></Div>
      }
      else{
        return <Div text={number} color="#FFF000"></Div>
      }
   })
   return(
    <div style={style}>
      {lst}
    </div>
   )
}
const Div=(props)=>{
  const style={
    width:'100px',
    height:'100px',
    marginRight:'2px',
    marginTop:'2px',
    backgroundColor:props.color
  }
  const headStyle={
    color:"#FFFFFF"
  }
  return(
    <div style={style}>
      <h1 style={headStyle}>{props.text}</h1>
    </div>
  )
}
const App=()=>{
  const mainStyle={
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
   const style={
    display:'block',
    backgroundColor:"#FFFFFF",
    height:'408px',
    width:'816px'
   }
  return(
    <div className="app">
      <h1>30 Days of React</h1>
      <h2>Number Generator</h2>
      <div style={mainStyle}>
        <div style={style}>
           <Generator numbers={[0,1,2,3,4,5,6,7]}></Generator>
           <Generator numbers={[8,9,10,11,12,13,14,15]}></Generator>
           <Generator numbers={[16,17,18,19,20,21,22,23]}></Generator>
           <Generator numbers={[24,25,26,27,28,29,30,31]}></Generator>
        </div>
      </div>
     
    </div>
  )
}

export default App;