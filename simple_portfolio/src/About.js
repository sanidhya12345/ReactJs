import photo from './photo.jpg'
const About = () => {
    const style={
        backgroundColor:'#fff323',
        width:'450px',
        height:'855px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    const photostyle={
       width:'550px',
       height:'700px',
       border:'2px solid #000000',
       marginLeft:'300px',
       borderRadius:'100px'
    }
    const about={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:"0"

    }
    return(
        <div className="aboutContainer">
            <div style={style}>
                <img src={photo} style={photostyle}></img>
            </div>
            <div style={about}>
                <h1>hi</h1>
            </div>
        </div>
    )
}
export default About;