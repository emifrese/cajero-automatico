import React from "react";
import { useState } from "react";
import LoginPanel from "../components/Panel/LoginPanel";
import NumberPanel from "../components/Panel/NumberPanel";
import MainScreenWrapper from "../components/UI/MainScreenWrapper";

const Login = () => {

    const [inputFocus, setInputFocus] = useState();
    const [dniInput, setDniInput] = useState("");
    const [claveInput, setClaveInput] = useState("");
    const [validInputs, setValidInputs] = useState([false, false])


    const valueHandler = (value) => {
        if(inputFocus === 'DNI'){
            if(dniInput !== "" && value === -1){
                setDniInput(prevState => prevState.slice(0, -1))
            } else if(dniInput.length < 8 && value !== -1){
                setDniInput(prevState => prevState + value.toString())
            }
        } else if(inputFocus === 'Clave'){
            if(value === -1 && claveInput.length > 0){
                setClaveInput(prevState => prevState.slice(0, -1))
            } else if(claveInput.length < 4  && value !== -1){
                setClaveInput(prevState => prevState + value.toString())
            }
        }
    }

    const focusHandler = (focus) => {
        setInputFocus(focus)
    }

    const validationHandler = (type) => {
        switch(type){
            case "DNI":
                if(dniInput.length > 6 && dniInput.length < 9){
                    console.log('Valid DNI')
                } else {
                    console.log('Invalid DNI')
                }
                break;
            case "Clave":
                if(claveInput.length === 4){
                    console.log('Valid Clave')
                } else {
                    console.log('Invalid Clave')
                }
        }
    }

  return (
    <MainScreenWrapper>
      <LoginPanel focusHandler={focusHandler} dniInput={dniInput} claveInput={claveInput} validationHandler={validationHandler}/>
      <NumberPanel valueHandler={valueHandler} />
    </MainScreenWrapper>
  );
};

export default Login;
