/** @format */

import React from "react";
import "./todo.css";
const listOftasks=['running']
class Todo extends React.Component {
  state = {
    task:'',
    listOftasks
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({task:value});
  };
  handleSubmit=(e)=>{
    e.preventDefault();
    this.state.listOftasks.push(this.state.task);
    console.log(this.state.listOftasks);
  }
  handleClick=()=>{
    return 
  }
  render() {
    const { task } = this.state;
    const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    const list=listOftasks.map((task)=><div><h1>{task}</h1></div>)
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
            <button type="submit">+</button>
          </form>
        </div>
        <div style={style}>
          {list}
        </div>
      </div>
    );
  }
}
export default Todo;
