import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../UI/Button";

const InsuficienteModal = () => {
  const navigate = useNavigate();
  const { modalHandler } = useAuth();

  const cancelOperation = () => {
    modalHandler();
    navigate('/account/cancel')
  };

  return (
    <div>
      <h2></h2>
      <div>
        <Button text={"Cancelar"} type={"operations"} valueHandler={() => cancelOperation()} />
        <Button
          text={"Consultar saldo"}
          type={"operations"}
          valueHandler={() => {}}
        />
        <Button
          text={"Otro monto"}
          type={"operations"}
          valueHandler={() => {}}
        />
      </div>
    </div>
  );
};

export default InsuficienteModal;
