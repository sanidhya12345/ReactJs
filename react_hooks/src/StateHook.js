import { useState } from "react"
import React from 'react'

export const App=()=>{
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Add One</button>
        </div>
    )
}