import React from 'react'
import './CountrySelector.css'
class CountrySelector extends React.Component{
    render() {
      const style={
         width:'500px',
         height:'500px',
         boxShadow:'5px 5px 10px 10px #D3D3D3'
      }
      const maindiv={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'60px'
      }
      return (
        <div style={maindiv}>
           <div style={style}>
              <div>
              <img src='https://cdn.pixabay.com/photo/2020/07/27/17/40/flag-5443011_640.jpg' alt=''></img>
              </div>
           </div>
           <button></button>
        </div>
      )
    }
}
export default CountrySelector;