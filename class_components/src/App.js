import React from 'react'
import MethodsInClass from './MethodsInClass';
//import DestructuringProps from './DestructuringProps';
//import PropsInClass from './PropsInClass';
class App extends React.Component {
    render(){
        const data={
            welcome:'30 Days of React',
            title:'Getting Started With React',
            subtitle:'JavaScript Library',
            firstName:'Sanidhya',
            lastName:'Varshney',
            date:'Sep 23,2023'
        }
        return (
          // <PropsInClass data={data}></PropsInClass>
          //<DestructuringProps data={data}></DestructuringProps>
          <MethodsInClass></MethodsInClass>
        )
    }
}

export default App;