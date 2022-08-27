import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import LoginPanel from "../components/Panel/LoginPanel";
import NumberPanel from "../components/Panel/NumberPanel";
import MainScreenWrapper from "../components/UI/MainScreenWrapper";

const Login = () => {
  const [inputFocus, setInputFocus] = useState();
  const [validInputs, setValidInputs] = useState([false, false]);

  const dniRef = useRef("");
  const claveRef = useRef("");

  useEffect(() => {
    let timer = setTimeout(() => {
      dniRef.current.value = "";
      claveRef.current.value = "";
    }, 20000);

    return () => {
      clearTimeout(timer)
    };
  }, [dniRef.current.value, claveRef.current.value, inputFocus]);

  const loginHandler = () => {
    console.log([`DNI: ${dniRef.current.value}`, `Clave: ${claveRef.current.value}`])
  }

  const valueHandler = (value) => {
    if (inputFocus === "DNI") {
      if (dniRef.current.value !== "" && value === -1) {
        dniRef.current.value = "";
      } else if (dniRef.current.value.length < 8 && value !== -1) {
        dniRef.current.value += value;
      }
    } else if (inputFocus === "Clave") {
      if (value === -1 && claveRef.current.value.length > 0) {
        claveRef.current.value = "";
      } else if (claveRef.current.value.length < 4 && value !== -1) {
        claveRef.current.value += value;
      }
    }
    if (dniRef.current.value.length >= 7) {
      if (!validInputs[0]) {
        setValidInputs((prevState) => [!prevState[0], prevState[1]]);
      }
    } else if (dniRef.current.value.length < 7) {
      if (validInputs[0]) {
        setValidInputs((prevState) => [!prevState[0], prevState[1]]);
      }
    }

    if (claveRef.current.value.length === 4) {
      if (!validInputs[1]) {
        setValidInputs((prevState) => [prevState[0], !prevState[1]]);
      }
    } else if (claveRef.current.value.length < 4) {
      if (validInputs[1]) {
        setValidInputs((prevState) => [prevState[0], !prevState[1]]);
      }
    }
  };

  const focusHandler = (focus) => {
    setInputFocus(focus);
  };

  return (
    <MainScreenWrapper>
      <LoginPanel
        focusHandler={focusHandler}
        dniRef={dniRef}
        claveRef={claveRef}
        inputFocus={inputFocus}
      />
      <NumberPanel valueHandler={valueHandler} validInputs={validInputs} loginHandler={loginHandler}/>
    </MainScreenWrapper>
  );
};

export default Login;
