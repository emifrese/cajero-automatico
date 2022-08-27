import React from "react";

const Button = ({text, value, valueHandler, disabled, disabledClass}) => {
  return <button className={"w-1/4 text-white text-xl bg-orange-400 hover:bg-orange-500" + " " + disabledClass} onClick={() => valueHandler(value)} disabled={disabled}>{text}</button>;
};

export default Button;
