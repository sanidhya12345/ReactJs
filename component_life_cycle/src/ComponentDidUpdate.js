import React, { Component } from 'react'
class ComponentDidUpdate extends Component{
    constructor(props){
        super(props);
        this.state={
            day:1,
            congratulation:''
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
    componentDidUpdate(prevProps,prevState){
        if(prevState.day===30){
            this.setState({congratulation:'Congratulation Day 30 has been completed'});
        }
    }
    doTask=()=>{
        this.setState({day:this.state.day+1});
    }
    render() {
      return (
        <div>
            <button onClick={this.doTask}>Increase Day</button>
            <h1>Day: Day {this.state.day}</h1>
            <h2>{this.state.congratulation}</h2>
        </div>
      )
    }
}
export default ComponentDidUpdate