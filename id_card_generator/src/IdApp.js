/** @format */

import React from "react";
import "./IdApp.css";
import id from './id.png'
import boy from './boy.png'
import girl from './girl.png'
const Id = ({ fullname, dob, gender, issued, phone,photo }) => {
  return (
    <div>
      <div className="id">
        <div className="head">
          <h1 className="heading">Id Card</h1>
          <hr></hr>
        </div>
        <div className="img">
          <img src={photo} alt="" className="photo"></img>
        </div>
        <br></br>
        <div className="details">
          <h3>Full Name:{fullname}</h3>
          <h3>D.O.B:{dob}</h3>
          <h3>Gender:{gender}</h3>
          <h3>Issued:{issued}</h3>
          <h3>Phone:{phone}</h3>
        </div>
      </div>
    </div>
  );
};
class IdApp extends React.Component {
  state = {
    fullname: "",
    dob: "",
    gender: "",
    issued: "",
    phone: "",
    print:false
  };
  handleChange=(e)=>{
    const {name,value}=e.target;
    this.setState({[name]:value});
  }
  handleSubmit=(e)=>{
    e.preventDefault();
     console.log(this.state);
     this.setState({print:true});
  }
  render() {
    let id="";
    if(this.state.print && this.state.gender==='male'){
        id=<Id
        fullname={this.state.fullname}
        dob={this.state.dob}
        gender={this.state.gender}
        issued={this.state.issued}
        phone={this.state.phone}
        photo={boy}></Id>
    }
    else if(this.state.print && this.state.gender==='female'){
        id=<Id
        fullname={this.state.fullname}
        dob={this.state.dob}
        gender={this.state.gender}
        issued={this.state.issued}
        phone={this.state.phone}
        photo={girl}></Id>
    }
    else if(this.state.print){
        id=<Id
        fullname={this.state.fullname}
        dob={this.state.dob}
        gender={this.state.gender}
        issued={this.state.issued}
        phone={this.state.phone}
        photo={id}></Id>
    }
    return (
      <div>
        <div>
          <h1 className="heading">ID Card Generator</h1>
        </div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="">Full Name </label>
            <div>
              <input type="text" name="fullname" onChange={this.handleChange}></input>
            </div>
            <label htmlFor="">D.O.B </label>
            <div>
              <input type="date" name="dob" onChange={this.handleChange}></input>
            </div>
            <label htmlFor="">Gender </label>
            <div>
              <input type="text" name="gender" onChange={this.handleChange}></input>
            </div>
            <label htmlFor="">Issued</label>
            <div>
              <input type="date" name="issued" onChange={this.handleChange}></input>
            </div>
            <label htmlFor="">Phone</label>
            <div>
              <input type="text" name="phone" onChange={this.handleChange}></input>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <hr className="hr"></hr>
        <div className="idContainer">
          {id}
        </div>
      </div>
    );
  }
}
export default IdApp;
