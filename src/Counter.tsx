import React from "react";
import { useCounterState } from "./counterStore";

const Counter: React.FC = () => {
    const {count,increment,decrement,reset} = useCounterState();

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Zustand Counter</h1>
            <p className="text-3xl font-semibold mb-6">{count}</p>
            <div className="flex gap-4 justify-center"><button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">+</button>
            <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">-</button>
            <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">Reset</button>
        </div>
        </div>
    );
};

export default Counter;
