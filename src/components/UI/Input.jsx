import React from "react";

const Input = ({
  type,
  placeholder,
  width,
  focusHandler,
  validationHandler,
  refCurrent
}) => {

  return (
    <input
      type={type}
      className={"w-" + width + " " + "text-center"}
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
