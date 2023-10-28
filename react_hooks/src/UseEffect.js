import { useState, useEffect } from 'react';
export const UseEffect=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        },1000)
    })
    return(
        <h1>Count: {count}</h1>
    )
}