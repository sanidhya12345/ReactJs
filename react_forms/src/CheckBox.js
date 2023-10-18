/** @format */
import React from "react";
import "./CheckBox.css";
let array = [];
class CheckBox extends React.Component {
  state = {
    plus: false,
    minus: false,
    mul: true,
    divide: true,
  };
  plus = (e) => {
    let plus = this.state.plus === false ? true : false;
    this.setState({ plus: plus });
  };
  minus = (e) => {
    let minus = this.state.minus === false ? true : false;
    this.setState({ minus: minus });
  };
  mul = (e) => {
    let mul = this.state.mul === false ? true : false;
    this.setState({ mul: mul });
  };
  divide = (e) => {
    let divide = this.state.divide === false ? true : false;
    this.setState({ divide: divide });
  };
  showOutput=()=>{
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <label htmlFor="">Plus</label>
        <input type="checkbox" name="plus" onChange={this.plus}></input>
        <label htmlFor="">Minus</label>
        <input type="checkbox" name="minus" onChange={this.minus}></input>
        <label htmlFor="">Multiply</label>
        <input type="checkbox" name="mul" onChange={this.mul}></input>
        <label htmlFor="">Divide</label>
        <input type="checkbox" name="divide" onChange={this.divide}></input>
      </div>
    );
  }
}
export default CheckBox;
