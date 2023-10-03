import React from 'react'
import './NavBar.css'
import { SunnyOutline } from 'react-ionicons'
import user from './LoginForm'
import Middle from './Middle'

class NavBar extends React.Component{
  state={
    icon:{
      color:'#FFFFFF',
      height:'45px',
      width:'45px'
    },
    navColor:{
      color:'#FFFFFF',
      backgroundColor:'#000000'
    },
    middle:{
      height:'872px',
     backgroundColor:'#000000'
    },
    color:'#FFFFFF',
    clicked:false
  }
  handleMiddle=()=>{
     this.setState({clicked:!this.state.clicked})
  }
  changeTheme=()=>{
     let iconColor=this.state.icon.color==='#FFFFFF'?'#000000':'#FFFFFF';
     let textColor=this.state.navColor.color==='#FFFFFF'?'#000000':'#FFFFFF';
     let backColor=this.state.navColor.backgroundColor==='#000000'?'#FFFFFF':'#000000';
     let middleBack=this.state.middle.backgroundColor==='#000000'?'#FFFFFF':'#000000';
     let middleColor=this.state.color==='#FFFFFF'?'#000000':'#FFFFFF';
     this.setState({icon:{
      height:'45px',
      width:'45px',
       color:iconColor
     }})
     this.setState({navColor:{
       color:textColor,
       backgroundColor:backColor
     }})
     this.setState({middle:{
       height:'872px',
       backgroundColor:middleBack
     }})
     this.setState({color:middleColor})
  }
    render() {
     console.log()
     let back=this.state.clicked?<Middle style={this.state.middle} color={this.state.color}></Middle>:<user.LoginForm></user.LoginForm>
      return (
        <div>
            <div className='navBar' style={this.state.navColor}>
           <div className='name'>
              <h2 className='h1'>Sanidhya Varshney</h2>
           </div>
           <div className='itemList'>
                <div className='items'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Skills</a>
                    <a>My Work</a>
                    <a>Contact</a>
                    <button type="" onClick={this.handleMiddle}>Login</button>
                    <SunnyOutline style={this.state.icon} onClick={this.changeTheme}></SunnyOutline>
                </div>
           </div>
        </div>
         <div>
         </div>
           {back}
        </div>
      
      )
    }
}
export default NavBar;