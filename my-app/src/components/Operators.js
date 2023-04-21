import React from "react";

const Operators = ({ updateCalc, deleteLast }) => {
  return (
    <div className="operators">
      <button onClick={() => updateCalc("+")}>+</button>
      <button onClick={() => updateCalc("-")}>-</button>
      <button onClick={() => updateCalc("*")}>x</button>
      <button onClick={() => updateCalc("/")}>/</button>

      <button onClick={deleteLast}>
        <span className="del">&#8629;</span>
      </button>
    </div>
  );
};

export default Operators;
