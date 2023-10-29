/** @format */

import React, { useState } from "react";

export const FormUsingHooks = () => {
  const [firstName, setName] = useState("");
  const onChange = (e) => {
    const value = e.target.value;
    setName(value);
  };
  return (
    <div>
      <form>
        <label htmlFor="">First Name </label>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={onChange}></input>
      </form>
      <h1>{firstName}</h1>
    </div>
  );
};
