import React, { useState } from 'react';
var obj={

}
export const SimpleCalculator=()=>{
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        if(name==='num1'){
            setNum1(parseInt(value));
        }
        if(name==='num2'){
            setNum2(parseInt(value));
        }
    }
    const addtion=()=>{
        obj['addition']=num1+num2;
    }
    const subtracttion=()=>{
        obj['subtraction']=num1-num2;
    }
    const multiplication=()=>{
        obj['multiplication']=num1*num2;
    }
    const division=()=>{
        obj['division']=num1/num2;
    }
    const showResults=()=>{
        console.log(obj);
    }
    return(
        <div>
            <label htmlFor="">Number 1</label>
            <div>
                <input type='number' name='num1' onChange={handleChange}></input>
            </div>
            <label htmlFor="">Number 2</label>
            <div>
                <input type='number' name='num2' onChange={handleChange}></input>
            </div>
            <button onClick={addtion}>Addition</button>
            <button onClick={subtracttion}>Subtracttion</button>
            <button onClick={multiplication}>Multiplication</button>
            <button onClick={division}>Division</button>
            <div>
                <button onClick={showResults}>showResults</button>
            </div>
        </div>
    )
}