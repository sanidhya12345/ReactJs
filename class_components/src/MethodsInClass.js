import React from 'react';

class MethodsInClass extends React.Component{
    render(){
        const greeting=()=>alert('hello everyone this is sanidhya varshney');
        return(
            <div>
               <button type="" onClick={greeting}>Greet</button>
            </div>
        )
    }
}
export default MethodsInClass;