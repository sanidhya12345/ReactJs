import React from 'react'
import './BackgroundChange.css';
import photo from './photo.jpg';
class BackgroundChange extends React.Component{
    constructor(props){
        super(props);
    }
    state={
        headerStyle:{
            backgroundColor:'#00FFFF',
            color:'#000000'
        },
        line:{
            border: 'none'
        },
        middle:{
            backgroundColor:'#000000'
        }
    }
    changeBack=()=>{
        let backgroundColor=this.state.headerStyle.backgroundColor==='#00FFFF'?'#00008B':'#00FFFF';
        let color=this.state.headerStyle.color==='#000000'?'#FFFFFF':'#000000';
        let headerStyle={
            backgroundColor:backgroundColor,
            color:color
        }
        this.setState({headerStyle})
    }
    showTime=()=>{
        alert(new Date());
    }
    greeting=()=>{
        alert('hello everyone');
    }
    render() {
      const {welcome,title,subtitle,firstName,lastName,date}=this.props.data;
      return (
        <div>
          <div style={this.state.headerStyle} className='header'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <h4>{firstName}{lastName}</h4>
            <small>{date}</small>
            <hr style={this.state.line}></hr>
          </div>
          <img src={photo} alt=''></img>
          <h1>{firstName} {lastName}</h1>
          <div className='button' >
             <button onClick={this.greeting}>Greet People</button>
             <button onClick={this.showTime}>Show Time</button>
             <button onClick={this.changeBack}>Change Background</button>
          </div>
        </div>
      )
    }
}
export default BackgroundChange;