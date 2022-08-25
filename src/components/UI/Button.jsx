import React from "react";

const Button = ({text, value, valueHandler, disabled}) => {
  return <button className="w-1/3" onClick={() => valueHandler(value)} disabled={disabled}>{text}</button>;
};

export default Button;
