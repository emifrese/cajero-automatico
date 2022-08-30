import React from "react";

const ExtractionsPanel = ({optionHandler}) => {


    return (
    <div className="w-2/3 flex border-2 border-blue-400">
      <div className="w-1/2 p-10 flex flex-wrap border-2 border-blue-200">
        <label className="w-full my-4 text-2xl text-left" onClick={(e) => optionHandler(parseInt(e.target.value))}>
          <input
            className="w-1/12"
            type="radio"
            value={500}
            name="extraction"
          />
          $500
        </label>
        <label className="w-full my-4 text-2xl text-left" onClick={(e) => optionHandler(parseInt(e.target.value))}>
          <input
            className="w-1/12"
            type="radio"
            value={2000}
            name="extraction"
          />
          $2.000
        </label>
        <label className="w-full my-4 text-2xl text-left" onClick={(e) => optionHandler(parseInt(e.target.value))}>
          <input
            className="w-1/12"
            type="radio"
            value={3000}
            name="extraction"
          />
          $3.000
        </label>
      </div>
      <div className="w-1/2 p-10 flex flex-wrap border-2 border-blue-200">
        <label className="w-full my-4 text-2xl text-left" onClick={(e) => optionHandler(parseInt(e.target.value))}>
          <input
            className="w-1/12"
            type="radio"
            value={5000}
            name="extraction"
          />
          $5.000
        </label>
        <label className="w-full my-4 text-2xl text-left" onClick={(e) => optionHandler(parseInt(e.target.value))}>
          <input
            className="w-1/12"
            type="radio"
            value={6000}
            name="extraction"
          />
          $6.000
        </label>
        <label className="w-full my-4 text-2xl text-left" onClick={(e) => optionHandler(e.target.value)}>
          <input
            className="w-1/12"
            type="radio"
            value={"Otro monto"}
            name="extraction"
          />
          Otro monto
        </label>
      </div>
    </div>
  );
};

export default ExtractionsPanel;
