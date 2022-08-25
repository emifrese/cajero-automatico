import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import LoginPanel from "../components/Panel/LoginPanel";
import NumberPanel from "../components/Panel/NumberPanel";
import MainScreenWrapper from "../components/UI/MainScreenWrapper";

const Login = () => {
  const [inputFocus, setInputFocus] = useState();
  const [dniInput, setDniInput] = useState("");
  const [claveInput, setClaveInput] = useState("");
  const [validInputs, setValidInputs] = useState([false, false]);

  const dniRef = useRef("");
  const claveRef = useRef("");

  
//   const firstRender = useRef(true);

//   useEffect(() => {
//     if (firstRender.current) {
//       console.log("first render");
//       firstRender.current = false;
//       return;
//     }
//   }, []);

  const valueHandler = (value) => {
    if (inputFocus === "DNI") {
      if (dniRef.current.value !== "" && value === -1) {
        dniRef.current.value = dniRef.current.value.slice(0, -1);
      } else if (dniRef.current.value.length < 8 && value !== -1) {
        dniRef.current.value += value;
      }
    } else if (inputFocus === "Clave") {
      if (value === -1 && claveRef.current.value.length > 0) {
        claveRef.current.value = claveRef.current.value.slice(0, -1);
      } else if (claveRef.current.value.length < 4 && value !== -1) {
        claveRef.current.value += value;
      }
    }
    if (dniRef.current.value.length >= 7) {
      if (!validInputs[0]) {
        setValidInputs((prevState) => [!prevState[0], prevState[1]]);
      }
    } else if (dniRef.current.value.length < 7) {
        if(validInputs[0]){
            setValidInputs((prevState) => [!prevState[0], prevState[1]]);
        }
    }

    if (claveRef.current.value.length === 4) {
        if (!validInputs[1]) {
          setValidInputs((prevState) => [prevState[0], !prevState[1]]);
        }
      } else if (claveRef.current.value.length < 4) {
          if(validInputs[1]){
              setValidInputs((prevState) => [prevState[0], !prevState[1]]);
          }
      }
  };

  const focusHandler = (focus) => {
    setInputFocus(focus);
  };

  const validationHandler = (type) => {
    switch (type) {
      case "DNI":
        if (dniInput.length > 6 && dniInput.length < 9) {
          console.log("Valid DNI");
        } else {
          console.log("Invalid DNI");
        }
        break;
      case "Clave":
        if (claveInput.length === 4) {
          console.log("Valid Clave");
        } else {
          console.log("Invalid Clave");
        }
    }
  };

  return (
    <MainScreenWrapper>
      <LoginPanel
        focusHandler={focusHandler}
        validationHandler={validationHandler}
        dniRef={dniRef}
        claveRef={claveRef}
      />
      <NumberPanel valueHandler={valueHandler} validInputs={validInputs}/>
    </MainScreenWrapper>
  );
};

export default Login;
