import React from 'react';

class Div extends React.Component{
    render(){
        const hexaColor = () => {
            let str = '0123456789abcdef'
            let color = ''
            for (let i = 0; i < 6; i++) {
              let index = Math.floor(Math.random() * str.length)
              color += str[index]
            }
            return '#' + color;
          }
          const style={
            width:'75%',
            height: '100px',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            fontFamily: 'Montserrat',
            margin: '2px auto',
            borderRadius: '5px',
            border: '2px solid black',
            backgroundColor:hexaColor(),
            color:'#FFFFFF'
          }
        return(
            <div style={style}>
                <h1>{hexaColor()}</h1>
            </div>
        )
    }
}
class HexcolorGenerator extends React.Component{
    render(){
        return(
            <div className='hexcolor'>
                    <Div></Div>
                    <Div></Div>
                    <Div></Div>
                    <Div></Div>
                    <Div></Div>
            </div>
        )
    }
}
export default HexcolorGenerator;