"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const NameInput = () => {
  const [nameInput, setNameInput] = useState('');

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input
      type="text"
      className="border border-black p-3 text-xl text-black rounded"
      placeholder="Digite Seu Nome"
      value={nameInput}
      onChange={e => setNameInput(e.target.value)}
      />
      <p>seu nome é: {nameInput}</p>
    </div>
  );
};

export default NameInput;