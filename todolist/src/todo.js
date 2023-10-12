/** @format */

import React from "react";
import "./todo.css";

const listOftasks = ["running"];

const Button = (props) => {
  return (<button className="done">done</button>);
};
class Todo extends React.Component {
  state = {
    task: "",
    listOftasks,
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ task: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.listOftasks.push(this.state.task);
    // console.log(this.state.listOftasks);
  };
  handleClick = () => {
    return;
  };
  render() {
    const { task } = this.state;
    const style = {
      display: "flex",
      justifyContent: "left",
      alignItems: "left",
      textAlign: "left",
      backgroundColor: "#FF0",
      width: "300px",
      height: "100px",
      marginRight: "10px",
      float: "left",
      marginTop: "40px",
    };
    const list = listOftasks.map((task) => (
      <div style={style}>
        <h1>{task}</h1>
        <Button state={this.state}></Button>
      </div>
    ));
    return (
      <div>
        <div>
          <h1>Todo List</h1>
        </div>
        <div className="inputContainer">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="task"
              value={task}
              placeholder="Task"
              onChange={this.handleChange}></input>
            <button type="submit" className="submit">
              +
            </button>
          </form>
        </div>
        <div>{list}</div>
      </div>
    );
  }
}
export default Todo;
