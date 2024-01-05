"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const ShowSecret = () => {
  const [showSecret, setShowSecret] = useState(false);

  const handleClickButton = () => {
    setShowSecret(!showSecret)
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <button onClick={handleClickButton} className="bg-blue-500 p-3">
        {showSecret ? 'Ocultar Area Secreta' : 'Mostrar Area Secreta'}
      </button>

      {showSecret && <div className="p-3 bg-blue-300 rounded-md mt-3">AREA SECRETA S2</div>}
    </div>
  );
};

export default ShowSecret;
