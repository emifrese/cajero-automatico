import React from "react";
import Button from "../UI/Button";

const NumberPanel = ({ valueHandler, validInputs, loginHandler }) => {
  let displayButtons = [];

  for (let i = 1; i < 13; i++) {
    if (i < 10) {
      displayButtons.push(
        <Button key={i} text={i} value={i} type={'number'} valueHandler={valueHandler} />
      );
    } else {
      let text;
      let value = i;
      let click = valueHandler;
      let disabled = false;
      let disabledClass = "";
      switch (i) {
        case 10:
          text = "Borrar";
          value = -1;
          break;
        case 11:
          value = i - i;
          text = value;
          break;
        case 12:
          text = "Continuar";
          click = loginHandler;
          if (!validInputs[0] || !validInputs[1]) {
            disabled = true;
            disabledClass = "w-1/4 text-white text-xl bg-slate-400 hover:bg-slate-400"
          }
          break;
      }
      displayButtons.push(
        <Button
          key={i}
          text={text}
          type={'number'}
          value={value}
          valueHandler={click}
          disabled={disabled}
          disabledClass={disabledClass}
        />
      );
    }
  }

  return <div className="flex flex-wrap w-5/12 border-2 h-80 gap-4 justify-center py-4">{displayButtons}</div>;
};

export default NumberPanel;
