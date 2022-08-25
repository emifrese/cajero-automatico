import React from "react";
import Button from "../UI/Button";

const NumberPanel = ({ valueHandler, validInputs }) => {
  let displayButtons = [];

  for (let i = 1; i < 13; i++) {
    if (i < 10) {
      displayButtons.push(
        <Button key={i} text={i} value={i} valueHandler={valueHandler} />
      );
    } else {
      let text;
      let value = i;
      let click = valueHandler;
      let disabled = false;
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
          click = () => {};
          if (!validInputs[0] || !validInputs[1]) {
            disabled = true;
          }
          break;
      }
      displayButtons.push(
        <Button
          key={i}
          text={text}
          value={value}
          valueHandler={click}
          disabled={disabled}
        />
      );
    }
  }

  return <div className="flex flex-wrap w-5/12 border-2">{displayButtons}</div>;
};

export default NumberPanel;
