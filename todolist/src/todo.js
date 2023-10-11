/** @format */

import React from "react";
import "./todo.css";
const listOftasks=[]
class Todo extends React.Component {
  state = {
    task:''
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]:value});
    listOftasks.push(this.state.task);
  };
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(listOftasks);
  }
  render() {
    const { task } = this.state;
    const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    //const list=this.state.task.map((task)=><div><h1>{task}</h1></div>)
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
        </div>
      </div>
    );
  }
}
export default Todo;
