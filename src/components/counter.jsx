import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const addNumber = () => {
    return setCounter(counter + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addNumber}>Add Number!</button>
    </div>
  );
};

export default Counter;
