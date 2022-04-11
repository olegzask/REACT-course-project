import React from "react";
import { useState, useEffect } from "react";

const Hueta = () => {
  const [number, setNumber] = useState(0);

  const counter = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={counter}>Increase number</button>
    </div>
  );
};

export default Hueta;
