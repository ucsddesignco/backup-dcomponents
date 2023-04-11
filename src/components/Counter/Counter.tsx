import React, { useState } from "react";

export interface CounterProps {
  initialCount: number;
}

const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Counter;
