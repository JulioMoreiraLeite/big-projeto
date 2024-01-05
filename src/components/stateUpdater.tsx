"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const StateUpdater = () => {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    setCount(count + 2);
    setCount(c => c + 2);
    setCount(c => c + 2);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
    <p>{count}</p>
    <button onClick={handleClickButton} className="bg-blue-700 text-white p-3 rounded-md">+2</button>
    </div>
  );
};

export default StateUpdater;
