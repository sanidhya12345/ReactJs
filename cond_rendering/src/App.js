import React from 'react'

const Button=({text,onClick})=>{
   return(
     <button onClick={onClick}>{text}</button>
   )
}
class Header extends React.Component{
  render() {
    const {
      welcome,
      title,
      subtitle,
      author:{
        firstName,
        lastName
      },
      date
    }=this.props.data;
    return (
      <div>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h4>{firstName}{lastName}</h4>
        <small>{date}</small>
      </div>
    )
  }
}

class App extends React.Component{
  state={
    loggedIn:false,
  }
  handleLogin=()=>{
      this.setState({
        loggedIn:!this.state.loggedIn
      })
  }
   render() {
    const data={
      welcome:'30 days of React',
      title:'Getting Started React',
      subtitle:'Javascript Library',
      author:{
        firstName:'Sanidhya',
        lastName:'Varshney'
      },
      date:'Sep 27,2023'
    }
    let status
    let text
    if(this.state.loggedIn){
      status=<h1>Welcome to 30 Days of React</h1>
      text='Logout';
    }
    else{
      status=<h3>Please Login</h3>
      text='Login';
    }
     return (
       <div>
         <Header data={data}></Header>
         {status}
         <Button text={text} onClick={this.handleLogin}/>
       </div>
     )
   }
}

export default App;