import React, { Component } from 'react'

class ShouldComponentUpdate extends Component{
    constructor(props){
        super(props)
        this.state={
            day:1
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextState.day);
        if(nextState.day>31){
            return false;
        }
        else{
            return true;
        }
    }
    doTask=()=>{
        this.setState({day:this.state.day+1});
    }
    render() {
      return (
        <div>
           <button onClick={this.doTask}>Increase Day</button>
           <h1>Day:{this.state.day}</h1>
        </div>
      )
    }
}
export default ShouldComponentUpdate;