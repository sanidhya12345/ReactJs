/** @format */

import React, { useState } from "react";

export const MultipleInputData = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    age: "",
    country: "",
  };
  const [formData, setData] = useState(initialState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };
  const onSubmit=(e)=>{
     e.preventDefault();
     console.log(formData);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">First Name </label>
          <input type="text" name="firstname" onChange={onChange}></input>
        </div>
        <div>
          <label htmlFor="">Last Name </label>
          <input type="text" name="lastname" onChange={onChange}></input>
        </div>
        <div>
          <label htmlFor="">Age </label>
          <input type="text" name="age" onChange={onChange}></input>
        </div>
        <div>
          <label htmlFor="">Country</label>
          <input type="text" name="country" onChange={onChange}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
