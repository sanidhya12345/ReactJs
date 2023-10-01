import React from 'react'

class Validation extends React.Component{
    state={
        firstname:'',
        touched: {
            firstname: false,
          }
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    handleBlur = (e) => {
        const { name, value } = e.target
        this.setState({ touched: {...this.state.touched, [name]: true } })
      }
    validate=()=>{
        const errors={
            firstname:''
        }
        if((this.state.touched.firstname && this.state.firstname.length<3) || (this.state.touched.firstname && this.state.firstname.length>12)){
            errors.firstname='First Name must be between 3 and 12';
        }
        return errors;
    }
    render() {
      const {firstname}=this.validate();
      return (
        <div>
          <form onSubmit={this.handleSubmit} noValidate>
            <div>
            <input type='text' name='firstname' value={this.state.firstname} placeholder='First Name' onBlur={this.handleBlur} onChange={this.handleChange}></input>
            </div>
            <small>{firstname}</small>
            <button>Submit</button>
          </form>
        </div>
      )
    }
}
export default Validation;