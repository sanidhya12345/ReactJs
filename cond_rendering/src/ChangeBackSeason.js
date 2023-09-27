import React from 'react'
import autumn from './autumn.jpg';
import spring from './spring.jpg';
import winter from './winter.jpg';
import summer from './spring.jpg';
const Button=({text,onClick})=>{
    return(
      <button onClick={onClick}>{text}</button>
    )
}
const Autumn=(props)=>{
    return(
        <div>
            <img src={autumn} style={props} alt=''></img>
        </div>
    )
}
const Winter=(props)=>{
    return(
        <div>
            <img src={winter} style={props} alt=''></img>
        </div>
    )
}
const Spring=(props)=>{
    return(
        <div>
            <img src={spring} style={props} alt=''></img>
        </div>
    )
}
const Summer=(props)=>{
    return(
        <div>
            <img src={summer} style={props} alt=''></img>
        </div>
    )
}
class ChangeBackSeason extends React.Component{
    state={
        season:'autumn'
    }
    changeSeason=()=>{
        let arr=['summer','autumn','winter','spring'];
        let index=parseInt(Math.floor(Math.random()*arr.length));
        this.setState({season:arr[index]})
    }
    render() {
        const style={
            width:'300px',
            height:'300px'
        }
        const div={
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            paddingTop:'20px'
        }
        const main={
            display:'block'
        }
      let back
      if(this.state.season==='autumn'){
        back=<Autumn style={style}></Autumn>
      }
      else if(this.state.season==='spring'){
         back=<Spring style={style}></Spring>
      }
      else if(this.state.season==='winter'){
        back=<Winter style={style}></Winter>
      }
      else if(this.state.season==='summer'){
        back=<Summer style={style}></Summer>
      }
      let text='Change Season'
      return (
        <div style={main}>
            <div style={div}>
                {back}
            </div>
            <div style={div}>
            <Button text={text} onClick={this.changeSeason}></Button>
            </div>
        </div>
      )
    }
}

export default ChangeBackSeason;