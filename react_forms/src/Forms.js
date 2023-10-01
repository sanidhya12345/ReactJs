import React ,{Component}from 'react'

class Forms extends Component{
    state={
        firstName:''
    }
    handleChange=(e)=>{
        const value=e.target.value;
        this.setState({firstName:value})
    }
    render() {
    const firstName=this.state.firstName;
      return (
        <div>
          <input type='text' id='firstName' placeholder='First Name' value={firstName} onChange={this.handleChange}></input>
          <h1>{this.state.firstName}</h1>
        </div>
      )
    }
}
export default Forms;