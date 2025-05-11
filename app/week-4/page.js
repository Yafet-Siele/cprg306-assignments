"use client"

import { useState } from "react";

export default function CounterPage() {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    if (counter <= 19) {
      setCounter(counter + 1);
    }
  };

  const oppositeCounter = () => {
    if (counter >= 2) {
      setCounter(counter - 1);
    }
  };

  // button styles
  let buttonStyles = "bg-blue-400 hover:bg-blue-700 rounded text-white mt-5 px-4 py-2";
  let buttonStyle = "bg-blue-400 hover:bg-blue-700 rounded text-white mt-5 px-4 py-2";

  if (counter >= 20) {
    buttonStyles = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
  }
  if (counter <= 1) {
    buttonStyle = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
  }

  return (
    <main>
      <div className="flex flex-row justify-center space-x-4">
        <p className="mt-5 px-4 py-2">{counter}</p>
        <p>
          <button className={buttonStyle} onClick={oppositeCounter}> - </button>
        </p>
        <p>
          <button className={buttonStyles} onClick={incrementCounter}> + </button>
        </p>
      </div>
    </main>
  );
}
