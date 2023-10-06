import React from 'react'
class Constructor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            age:''
        }
    }
    render() {
      return (
        <div>
          <h1>30 days of react</h1>
          <h2>{this.state.firstname}{this.state.lastname}</h2>
          <h3>{this.state.age}</h3>
        </div>
      )
    }
}
export default Constructor;