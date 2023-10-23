import { LogoFacebook, LogoInstagram,LogoTwitter,LogoGithub,LogoWhatsapp,MailOpenOutline } from 'react-ionicons'
import { Routes,Route ,Link} from 'react-router-dom'
import banner from './banner.png';
const Middle=(props)=>{
    const style={
       float:'right',
       paddingRight:'140px',
       width:'700px',
       height:'700px',
       paddingTop:'30px'
    }
    const div={
      color:props.color,
      paddingLeft:'70px',
      paddingTop:'70px'
    }
    const styleAbout={
      fontSize:'30px',
      padding:'0px 10px 10px 10px',
      backgroundColor:'#ff2345',
      borderRadius:'10px',
      border:'none',
      color:'#000000',
      textDecoration:'none'
    }
    const social={
      height:'45px',
      width:'45px',
      marginTop:'50px',
      marginRight:'30px',
    }
    const divabout={
      display:'flex',
      justifyContent:'left',
      alignItems:'left',
      paddingTop:'40px'
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
            {/* <button type="" style={styleAbout} className='aboutButton'> About Me</button> */}
            <div style={divabout}>
            <Link to="/about" style={styleAbout}>About Me</Link>
            </div>
        
            <div>
              <LogoFacebook style={social} color={props.color} ></LogoFacebook>
              <LogoInstagram style={social} color={props.color}></LogoInstagram>
              <LogoTwitter style={social} color={props.color}></LogoTwitter>
              <LogoGithub style={social} color={props.color}></LogoGithub>
              <LogoWhatsapp style={social} color={props.color}></LogoWhatsapp>
              <MailOpenOutline style={social} color={props.color}></MailOpenOutline>
            </div>
          </div>
       </div>
     )
  }
export default Middle;