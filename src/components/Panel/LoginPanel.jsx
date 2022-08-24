import React from "react";
import Input from "../UI/Input";

const LoginPanel = ({ focusHandler, dniInput, claveInput, validationHandler }) => {
  return (
    <div className="flex flex-wrap">
      <h2 className="w-full text-left">Ingrese DNI y Clave</h2>
      <Input
        type="number"
        width="4/5"
        placeholder="DNI"
        focusHandler={focusHandler}
        input={dniInput}
        validationHandler={validationHandler}
      />
      <Input
        type="number"
        width="4/5"
        placeholder="Clave"
        focusHandler={focusHandler}
        input={claveInput}
        validationHandler={validationHandler}
      />
    </div>
  );
};

export default LoginPanel;
