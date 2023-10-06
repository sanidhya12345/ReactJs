import React from 'react'
class ComponentDidMount extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstname:'sanidhya',
            lastname:'varshney'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                firstname:'vanshika',
                lastname:'gupta'
            })
        },3000);
    }
    render() {
      return (
        <div>
           <h1>FirstName:{this.state.firstname}</h1>
           <h1>LastName:{this.state.lastname}</h1>
        </div>
      )
    }
}

export default ComponentDidMount;