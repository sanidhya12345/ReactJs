import React from 'react';

class PropsInClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='propsInclass'>
                <h1>{this.props.data.welcome}</h1>
                <h2>{this.props.data.title}</h2>
                <h3>{this.props.data.subtitle}</h3>
                <h4>{this.props.data.firstName} {this.props.data.lastName}</h4>
                <small>{this.props.data.date}</small>
            </div>
        )
    }
}
export default PropsInClass;