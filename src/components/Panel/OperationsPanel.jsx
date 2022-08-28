import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const OperationsPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap w-full justify-around gap-4">
      <Button
        key={1}
        text={"Extracción"}
        type={"operations"}
        valueHandler={() => navigate("/account/extraction")}
        // disabled={disabled}
        // disabledClass={disabledClass}
      />
      <Button
        key={2}
        text={"Deposito"}
        type={"operations"}
        valueHandler={() => navigate("/account/deposit")}
      />
      <Button
        key={3}
        text={"Consulta de saldo"}
        type={"operations"}
        valueHandler={() => navigate("/account/salary")}
      />
    </div>
  );
};

export default OperationsPanel;
