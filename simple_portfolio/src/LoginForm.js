import React from 'react'
import './LoginForm.css'
class LoginForm extends React.Component{
     state={
      username:'',
      password:'',
      openWindow:false
    }
    handleChange=(e)=>{
       const {name,value}=e.target
        this.setState({[name]:value});
    }
    handleSubmit=(e)=>{
       e.preventDefault();
    }
    render() {
    const style={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'30px'
    }
    const {username,password}=this.state;
      return (
        <div>
            <h4>Login</h4> 
             <div style={style}>
           <div className='form'> 
                     
              <form onSubmit={this.handleSubmit}>
              <label htmlFor="Username">UserName:</label>
                <div>
                 <input type='text'name='username' value={username} placeholder='User Name' onChange={this.handleChange}></input>
                </div>
                <label htmlFor="Password">Password:</label>
                <div>
                 <input type='text' name='password' value={password} placeholder='Password' onChange={this.handleChange}></input>
                </div>
                 <button className='button'>Login</button>
              </form>
           </div>
        </div>
        </div>
       
      )
    }   
}
const user={LoginForm}
export default user;