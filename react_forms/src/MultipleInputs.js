import React from 'react'

class MultipleInputs extends React.Component{
    state={
        firstName:'',
        lastName:'',
        country:''
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
      const {firstName,lastName,country}=this.state;
      return (
        <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={country}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
      )
    }
}
export default MultipleInputs;