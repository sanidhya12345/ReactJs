import React from 'react'
class State extends React.Component{
    state={
        count:0
    }
    addOne=()=>{
        this.setState({count:this.state.count+1})
    }
    minusOne=()=>{
        this.setState({count:this.state.count-1})
    }
    render() {
        const count = this.state.count
        console.log(count)
      return (
        <div>
         <button onClick={this.addOne}>
            Add One
            </button>
            <button onClick={this.minusOne}>
                Minus One
            </button>
        </div>
      )
    }
}
export default State;