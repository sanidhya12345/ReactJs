import React from 'react'
import './NavBar.css'
import { SunnyOutline } from 'react-ionicons'
import banner from './banner.png'

const Middle=(props)=>{
  const style={
     float:'right',
     paddingRight:'140px',
     width:'50%',
     height:'700px',
     paddingTop:'30px'
  }
  const div={
    color:props.color,
    paddingLeft:'70px',
    paddingTop:'70px'
  }
   return(
     <div style={props.style}>
        <div>
          <img src={banner} alt='' style={style}></img>
        </div>
        <div style={div}>
          <h2>HEY THERE !</h2>
          <h1>I AM SANIDHYA</h1>
          <h3>A Software Developer</h3>
          <p>I am a Full Stack developer.I like to do code things from the scratch,and enjoy bringing ideas to life in the browser</p>
        </div>
     </div>
   )
}
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
    color:'#FFFFFF'
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
                    <a href='https://github.com/sanidhya12345' target='_blank'>My Work</a>
                    <a>Contact</a>
                    <SunnyOutline style={this.state.icon} onClick={this.changeTheme}></SunnyOutline>
                </div>
           </div>
        </div>
         <div>
         <Middle style={this.state.middle} color={this.state.color}></Middle>
         </div>
        
        </div>
      
      )
    }
}
export default NavBar;