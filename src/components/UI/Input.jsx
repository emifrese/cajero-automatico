import React from "react";

const Input = ({type, placeholder, width, focusHandler, input, validationHandler}) => {
  return <input type={type} className={'w-'+ width + ' ' +'text-center'} placeholder={placeholder} onFocus={() => focusHandler(placeholder)} value={parseInt(input)} onChange={() => validationHandler(placeholder)}/>;
};

export default Input;
