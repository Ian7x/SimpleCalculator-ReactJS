import React from "react";
import Operators from "./components/Operators";
import Display from "./components/Display";
import Digits from "./components/Digits";
import { useState, useEffect } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["+", "-", "*", "/", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (!isNaN(key) || key === "." || ops.includes(key)) {
        event.preventDefault();
        updateCalc(key);
      } else if (key === "Enter") {
        event.preventDefault();
        calculate();
      } else if (key === "Backspace") {
        event.preventDefault();
        deleteLast();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="App">
      <div className="calculator">
        <Display result={result} calc={calc} />
        <Operators updateCalc={updateCalc} deleteLast={deleteLast} />
        <Digits updateCalc={updateCalc} calculate={calculate} />
      </div>
    </div>
  );
}

export default App;
