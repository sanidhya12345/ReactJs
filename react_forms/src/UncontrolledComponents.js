import React, { Component } from "react";
let array=Array();
class UncontrolledComponents extends Component {
  firstname = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();
  };
  showArray=()=>{
    array.push(this.firstname.current.value);
    console.log(array);
  }
  render() {
    return (
      <div>
        <label htmlFor="firstname">First Name</label>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              ref={this.firstname}
            />
          </div>
          <button type="submit" onClick={this.showArray}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledComponents;
