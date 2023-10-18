import React from 'react'
const Button=({onClick ,text,style})=>{
    return(
        <button style={style} onClick={onClick}>{text}</button>
    )
}


