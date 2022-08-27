import React from "react";
import Input from "../UI/Input";

const LoginPanel = ({ focusHandler, validationHandler, dniRef, claveRef }) => {
  return (
    <div className="flex flex-wrap border-2 h-80 p-4">
      <div className="w-full flex items-start">
        <h2 className="w-full text-left m-0 pl-2">
          Ingrese DNI y Clave
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-2 w-full">
        <Input
          type="text"
          width="3/5"
          placeholder="DNI"
          focusHandler={focusHandler}
          validationHandler={validationHandler}
          refCurrent={dniRef}
        />
        <Input
          type="password"
          width="3/5"
          placeholder="Clave"
          focusHandler={focusHandler}
          validationHandler={validationHandler}
          refCurrent={claveRef}
        />
      </div>
    </div>
  );
};

export default LoginPanel;
