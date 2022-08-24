import React from "react";

const Button = ({text, value, valueHandler}) => {
  return <button className="w-1/3" onClick={() => valueHandler(value)}>{text}</button>;
};

export default Button;
