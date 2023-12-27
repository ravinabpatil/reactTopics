import React from "react";

const InputField = ({ type, onchange, className , name , value}) => {
  return (
    <input
      type={type}
      onChange={onchange}
      className={className}
      name={name}
      value={value}
    />
  );
};

export default InputField;
