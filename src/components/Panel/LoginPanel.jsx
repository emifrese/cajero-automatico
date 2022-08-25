import React from "react";
import Input from "../UI/Input";

const LoginPanel = ({
  focusHandler,
  validationHandler,
  dniRef,
  claveRef,
}) => {
  return (
    <div className="flex flex-wrap">
      <h2 className="w-full text-left">Ingrese DNI y Clave</h2>
      <Input
        type="text"
        width="4/5"
        placeholder="DNI"
        focusHandler={focusHandler}
        validationHandler={validationHandler}
        refCurrent={dniRef}
      />
      <Input
        type="password"
        width="4/5"
        placeholder="Clave"
        focusHandler={focusHandler}
        validationHandler={validationHandler}
        refCurrent={claveRef}
      />
    </div>
  );
};

export default LoginPanel;
