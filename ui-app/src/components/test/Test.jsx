import { useState } from "react";

export function Test() {
  const [number, setNumber] = useState(0);

  const update = (n) => {
    setNumber(prev => prev + n);
  };

  return (
    <div>
      <h1>Hello world: {number}</h1>
      <button onClick={() => update(1)}>+1</button>
      <button onClick={() => update(-1)}>-1</button>
    </div>
  );
}