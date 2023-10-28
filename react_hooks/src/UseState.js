import React, { useState } from 'react';

export const UseState=()=>{
    const [color,setColor]=useState("red");
    return(
        <div>
            <h1>My Favourite Color is {color}</h1>
            <button type="button" onClick={()=>setColor("blue")}>Blue</button>
            <button type="button" onClick={()=>setColor("green")}>Green</button>
            <button type="button" onClick={()=>setColor("red")}>Red</button>
            <button type="button" onClick={()=>setColor("violet")}>Violet</button>
        </div>
    )
}