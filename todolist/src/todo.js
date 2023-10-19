/** @format */

import React from "react";
let tasks = [];
const Task = ({ text }) => {
  const style = {
    backgroundColor: "#FF0123",
    width: "400px",
    height: "100px",
    color:'#FFFFFF',
    display:'flex',
    marginTop:'30px'
  };
  const button={
    marginLeft:'45%',
    padding:'10px 10px 10px 10px',
    fontSize:'40px',
    borderRadius:'50%',
    border:'none'
  }
  const remove=()=>{
    return tasks.shift();
  }
  return (
    <div style={style}>
      <h1>{text}</h1>
      <button style={button} onClick={remove}>-</button>
    </div>
  );
};
let task;
class Todo extends React.Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    let text = e.target.value;
    this.setState({ text: text });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    tasks.push(this.state);
    console.log(tasks);
    task = tasks.map((text) => <Task text={text.text}></Task>);
  };
  render() {
    const h1 = {
      textAlign: "center",
    };
    const input = {
      fontSize: "40px",
    };
    const divInput = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    const styleButton = {
      fontSize: "40px",
      marginLeft: "20px",
      backgroundColor: "#FF0",
      borderRadius: "50%",
      border: "none",
      padding: "5px 5px 5px 5px",
    };
    const div = {
      display: "grid",
      backgroundColor: "#FF0012",
    };
    return (
      <div>
        <div>
          <h1 style={h1}>Todo List</h1>
          <div style={divInput}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="task"
                placeholder="Task"
                style={input}
                onChange={this.handleChange}></input>
              <button type="" style={styleButton}>
                +
              </button>
            </form>
          </div>
          {task}
        </div>
      </div>
    );
  }
}
export default Todo;
