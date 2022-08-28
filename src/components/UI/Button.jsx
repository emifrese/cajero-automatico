import React from "react";

const Button = ({
  text,
  value,
  type,
  valueHandler,
  disabled,
  disabledClass,
}) => {
  let buttonClass = "text-white text-2xl";

  switch (type) {
    case "number":
      buttonClass += " w-1/4 bg-orange-400 hover:bg-orange-500";
      break;
    case "operations":
      buttonClass += " w-1/5 my-4 mx-20 py-2 bg-slate-400 hover:bg-slate-600";
      break;
    case 'footer':
      buttonClass += ' w-1/6 mx-4 bg-orange-400 hover:bg-orange-500'
      break;
  }

  if (disabledClass) {
    buttonClass = disabledClass;
  }

  return (
    <button
      className={buttonClass}
      onClick={() => valueHandler(value)}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
