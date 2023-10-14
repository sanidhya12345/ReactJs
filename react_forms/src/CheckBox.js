import React from 'react'
import './CheckBox.css';
let array=[];
class CheckBox extends React.Component{
    state={
        plus:false,
        minus:false,
        mul:false,
        divide:false,
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        name==='plus'?this.setState({plus:true}):this.setState({plus:false});
    }
    render() {
      if(this.state.plus===true){
        array.push('plus');
      }
    //   else if(this.state.minus===true){
    //     array.push('minus');
    //   }
    //   else if(this.state.mul===true){
    //     array.push('multiply');
    //   }
    //   else if(this.state.divide===true){
    //     array.push('divide');
    //   }
      console.log(array);
      return (
        <div>
           <label htmlFor=''>Plus</label>
           <input type='checkbox' name='plus' onChange={this.handleChange}></input>
           <label htmlFor=''>Minus</label>
           <input type='checkbox' name='minus' onChange={this.handleChange}></input>
           <label htmlFor=''>Multiply</label>
           <input type='checkbox' name='mul' onChange={this.handleChange}></input>
           <label htmlFor=''>Divide</label>
           <input type='checkbox' name='divide'onChange={this.handleChange}></input>
        </div>
      )
    }
}
export default CheckBox;