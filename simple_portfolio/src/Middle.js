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
export default Middle;