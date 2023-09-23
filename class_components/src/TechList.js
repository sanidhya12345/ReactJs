import React from 'react';

class TechList extends React.Component{
    render(){
        const skills=['html','css','javscript'];
        const skillsFormat=skills.map((skill)=><li>{skill}</li>)
        return(skillsFormat)
    }
}
export default TechList;