import React, { memo } from "react";

const Input = ({ name, placeholder, id, OnBlurHandler }) => {
  console.log("Input Component Rendered");
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}   
      onBlur={OnBlurHandler} 
    />
  );
};

export default memo(Input);
