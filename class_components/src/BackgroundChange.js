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
            height:'2px',
            backgroundColor:'#FFFFFF',
            border:'none'
        },
        middle:{
            backgroundColor:'#FFFFFF',
            color:'#000000'
        },
        line2:{
            height:'2px',
            backgroundColor:'#FFFFFF',
            border:'none',
            position:'absolute'
        }
    }
    changeBack=()=>{
        let backgroundColor=this.state.headerStyle.backgroundColor==='#00FFFF'?'#000000':'#00FFFF';
        let color=this.state.headerStyle.color==='#000000'?'#FFFFFF':'#000000';
        let headerStyle={
            backgroundColor:backgroundColor,
            color:color
        }
        let middleBack=this.state.middle.backgroundColor==='#FFFFFF'?'#000000':'#FFFFFF';
        let midcolor=this.state.middle.color==='#000000'?'#FFFFFF':'#000000';
        let middle={
            backgroundColor:middleBack,
            color:midcolor
        }
        this.setState({headerStyle})
        this.setState({middle})
    }
    showTime=()=>{
        alert(new Date());
    }
    greeting=()=>{
        alert('hello everyone');
    }
    render() {
      const {welcome,title,subtitle,firstName,lastName,date}=this.props.data;
      const style={
         bottom:0,
         position:'absolute',
         width:'100%',
         height:'50px',
         backgroundColor:'#00FFFF',
         display:'grid',
         justiFyContent:'center',
         alignItems:'center',
         textAlign:'center'
      }
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
          <div style={this.state.middle}>
          <img src={photo} alt=''></img>
            <h1>{firstName} {lastName}</h1>
          </div>
          <div className='button' >
             <button onClick={this.greeting}>Greet People</button>
             <button onClick={this.showTime}>Show Time</button>
             <button onClick={this.changeBack}>Change Background</button>
          </div>
          <hr style={this.state.line2}></hr>
          <div style={style} className='copyright'>
             <h2>Copyright 2023</h2>
          </div>
        </div>
      )
    }
}
export default BackgroundChange;