import React,{Component} from 'react'
let array=[];
for(let i=100;i<=700;i++){
    let dim=i+'px';
    array.push(dim);
}
class OnMouseEnterEvent extends Component{
    state={
        div:{
            width:'700px',
            height:'60px',
            backgroundColor:'#FF0000',
            display:'flex',
            margin:'200px'
        }
    }
    handleEvent=()=>{
        let index=parseInt(Math.floor(Math.random()*array.length));
        this.setState({
            div:{
                width:'700px',
            height:'60px',
            backgroundColor:'#FF0000',
            display:'flex',
            position:'absolute',
            margin:array[index]
            }
        })
    }
    render() {
      return (
        <div>
           <div style={this.state.div} onMouseEnter={this.handleEvent}>
             <h1>30 days of react</h1>
           </div>
        </div>
      )
    }
}
export default OnMouseEnterEvent;