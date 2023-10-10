import React from 'react'

const tasks=[
    {
        do:'eating',
        id:'10'
    },
    {
        do:'drinking',
        id:'11'
    },
    {
        do:'writing',
        id:'12'
    },
    {
        do:'reading',
        id:'13'
    },
]
const Task=(props)=>{
    const style={
        backgroundColor:'#FFF234',
        color:'#000000',
        width:'400px',
        height:'100px'
    }
    return(
        <div style={style}>
            <h1>{props.do}</h1>
        </div>
        )
}
class App extends React.Component{
    state={
        tasks,
    }
    removeTask=()=>{
        let remove=this.state.tasks.shift();
        this.setState({tasks:this.state.tasks});
    }
    render() {
     const listTasks=this.state.tasks.map((task)=>
        <Task do={task.do}></Task>
     )
      return (
        <div>
            <div>
            {listTasks}
            </div>
            <button onClick={this.removeTask}>Delete Task</button>
        </div>
      )
    }
}
export default App;