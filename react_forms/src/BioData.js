/** @format */

import React from "react";

const BioData = ({ onChange, onSubmit }) => {
  const style = {
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={style}>Personal Details</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">First Name: </label>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={onChange}></input>
        </div>
        <div>
          <label htmlFor="">Last Name: </label>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={onChange}></input>
        </div>
        <div>
          <label htmlFor="">Gender: </label>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            onChange={onChange}></input>
        </div>
        <div>
          <label htmlFor="">Country: </label>
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={onChange}></input>
        </div>
        <div>
          <label htmlFor="">Age: </label>
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={onChange}></input>
        </div>
        <button type=""> Submit</button>
      </form>
    </div>
  );
};
const Print = ({ firstname, lastname, gender, country, age }) => {
  return (
    <div >
      <h1>Bio Data</h1>
      <div>
        <h1>First Name: {firstname}</h1>
        <h1>Last Name: {lastname}</h1>
        <h1> Gender: {gender}</h1>
        <h1>Country: {country}</h1>
        <h1>Age: {age}</h1>
      </div>
    </div>
  );
};
class PrintBioData extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    gender: "",
    country: "",
    age: "",
    print: "false",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({print: true });
  };
  render() {
    let comp = "";
    if (this.state.print===true) {
      comp = (
        <Print
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          gender={this.state.gender}
          country={this.state.country}
          age={this.state.age}></Print>
      );
    }
    return (
      <div>
        <BioData
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}></BioData>
        <hr></hr>
        {comp}
      </div>
    );
  }
}
export default PrintBioData;
