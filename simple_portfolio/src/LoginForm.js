import React from 'react'
import './LoginForm.css'
class LoginForm extends React.Component{
    render() {
    const style={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'30px'
    }
      return (
        <div>
            <h4>Login</h4> 
             <div style={style}>
           <div className='form'> 
                     
              <form>
              <label for="Username">UserName:</label>
                <div>
                 <input type='text' name='UserName' placeholder='User Name'></input>
                </div>
                <label for="Password">Password:</label>
                <div>
                 <input type='text' name='Password' placeholder='Pssword'></input>
                </div>
                 <button className='button'>Login</button>
              </form>
           </div>
        </div>
        </div>
       
      )
    }   
}
export default LoginForm;