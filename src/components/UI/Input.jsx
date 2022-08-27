import React from "react";

const Input = ({
  type,
  placeholder,
  width,
  focusHandler,
  refCurrent
}) => {

  let inputClass = `w-${width} text-center border-2 border-slate-400 bg-slate-200 cursor-pointer placeholder:text-black placeholder:font-medium outline-none hover:border-slate-600 focus:border-slate-600`

  return (
    <input
      type={type}
      className={inputClass}
      placeholder={placeholder}
      onFocus={() => focusHandler(placeholder)}
      // value={''}
      ref={refCurrent}
      readOnly
      // onChange={() => validationHandler(placeholder)}
    />
  );
};

export default Input;
