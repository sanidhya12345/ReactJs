import React from 'react';
import photo from './photo.jpg';
import './UserCard.css';

const SkillButton=()=>{
    const style={
        backgroundColor:'#00FFFF',
        color:'#FFFFFF',
        border:'none',
        fontSize:'20px',
        borderRadius:'5px',
        marginRight:'10px'
    }
    const skills=['HTML','CSS','JS','React','Node','Python','Java','SQL','C','Git'];
     return skills.map((skill)=><button type="" style={style}>{skill}</button>)
}
class UserCard extends React.Component{
    render(){
        const img={
            width:'200px',
            height:'200px',
            borderRadius:'50%',
            paddingTop:'20px',
        }
        const style={
            display:'flex'
        }
        return(
            <div className='usercard'>
                <img src={photo} alt='' style={img}></img>
                <h1>Sanidhya Varshney</h1>
                <h2>Software Developer</h2>
                <h1>Skills</h1>
                <div className='skills' style={style}>
                    <SkillButton></SkillButton>
                </div>
            </div>
        )
    }
}

export default UserCard;