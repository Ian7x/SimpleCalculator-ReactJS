import React from "react";

const Display = ({ result, calc }) => {
  return (
    <div className="display">
      <span>{result ? "(" + result + ")" : ""}</span> {calc || 0}
    </div>
  );
};

export default Display;
