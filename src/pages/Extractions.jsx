import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExtractionsPanel from "../components/Panel/ExtractionsPanel";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import Button from "../components/UI/Button";
import useAuth from "../hooks/useAuth";
import Modal from "../components/UI/Modal";
import InsuficienteModal from "../components/ModalOptions/InsuficienteModal";

const Extractions = () => {
  const navigate = useNavigate();

  const [option, setOption] = useState();

  const { modal, modalHandler, extractMoney } = useAuth();

  const optionHandler = (opt) => {
    setOption(opt);
  };

  return (
    <>
      {modal && <Modal Toggle={modalHandler}><InsuficienteModal/></Modal>}
      <Header title={"Extracción"} />
      <ExtractionsPanel option={option} optionHandler={optionHandler} />
      <Footer>
        <Button
          text={"Cancelar"}
          type={"footer"}
          valueHandler={() => navigate("/account")}
        />
        <Button text={"Continuar"} type={"footer"} valueHandler={() => extractMoney(option)} />
      </Footer>
    </>
  );
};

export default Extractions;
