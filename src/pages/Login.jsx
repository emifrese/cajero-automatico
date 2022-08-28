import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginPanel from "../components/Panel/LoginPanel";
import NumberPanel from "../components/Panel/NumberPanel";
import { checkClient } from "../helpers/checkClient";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [inputFocus, setInputFocus] = useState();
  const [validInputs, setValidInputs] = useState([false, false]);
  const {setAuth} = useAuth();

  const navigate = useNavigate()

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

  const loginHandler =  async () => {
    const [account] = await checkClient(dniRef.current.value, claveRef.current.value)
    
    setAuth(account);
    navigate('/account')
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
    <>
      <LoginPanel
        focusHandler={focusHandler}
        dniRef={dniRef}
        claveRef={claveRef}
        inputFocus={inputFocus}
      />
      <NumberPanel valueHandler={valueHandler} validInputs={validInputs} loginHandler={loginHandler}/>
    </>
  );
};

export default Login;
