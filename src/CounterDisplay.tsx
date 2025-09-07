import React from "react";
import { useCounterStore } from "./store";

const CounterDisplay: React.FC = () => {
    const count = useCounterStore((state)=>state.count);

      return (
    <>
    <h1>Component 1</h1>
    <div
   
      style={{
        width: "200px",
        margin: "30px auto",
        padding: "20px",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#ffffff",
        backgroundColor: "#4c8cff",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        transition: "transform 0.3s ease",
      }}
      
    >
      Current Count: <strong>{count}</strong>
    </div></>
      )
}

export default CounterDisplay;