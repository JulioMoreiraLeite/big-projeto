/* eslint-disable react/jsx-key */
"use client";
import TodoList from "@/components/todoList";
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

const useEffecta
 = () => {

  const [name, setName] = useState('ju');

  useEffect(() =>{
    console.log('Mudou o nome')
  },[name])
  const handleMudaNome = () =>{
    setName('JULIO')
  }
  const handleMudaNome2 = () =>{
    setName('JULIO2')
  }
  return(
     <>
     <p>Meu nome é {name}</p>
     <button onClick={handleMudaNome}>Mudar a porra do nome</button>
     <button onClick={handleMudaNome2}>Mudar a porra do nome</button>
     </>
  )
};

export default useEffecta
;
