import './About.css'
import photo from './photo.jpg'
const About = () => {
    const style={
        display:'flex',
        justifyContent:'left',
        alignItems:'left',
    }
    const inner={
        backgroundColor:'#ff2345',
        width:'400px',
        height:'400px',
        marginTop:'150px',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'flex-end'
    }
    const innermost={
        width:'300px',
        height:'300px',
        borderRadius:'50%'
    }
    return(
        <div className="aboutContainer">
            <div style={style}>
                <div style={inner}>
                    <div style={innermost} className="innermost">
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default About;