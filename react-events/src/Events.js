import React,{Component} from 'react'

class Events extends Component{
    greetPeople=()=>{
        alert('hello this is sanidhya');
    }    
    render() {
      return (
        <div>
          <button type="" onClick={this.greetPeople}>Greeting People</button>
          <a href='#' onClick={this.greetPeople} >greet people</a>
        </div>
      )
    }
}
export default Events;