import React from 'react';

class DestructuringProps extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {welcome,title,subtitle,firstName,lastName,date}=this.props.data;
        return(
            <div className='destructor'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <h4>{firstName}{lastName}</h4>
                <small>{date}</small>
            </div>
        )
    }
}
export default DestructuringProps;