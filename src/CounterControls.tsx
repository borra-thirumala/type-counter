import React from "react";
import { useCounterStore } from "./store";

const CounterControls: React.FC = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
   <>
   <h1>Component 2</h1>
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <button
        onClick={increment}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#28a745",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>
      <button
        onClick={decrement}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#28a745",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>
    </div>
    </>
  );
};

export default CounterControls;
