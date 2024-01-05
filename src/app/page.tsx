/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { listReducer } from "@/reducer/listReducer";
import { Item } from "@/types/Item";
import { useState, useEffect, useReducer } from "react";
import { text } from "stream/consumers";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  const handleAddClick = () => {
    dispatch({
      type: "add",
      payload: {
        text: "Novo Item",
      },
    });
  };

  dispatch({
    type: "editText",
    payload: {
      id: 2,
      newText: 'BLA'
    }
  })

  dispatch({
    type: "remove",
    payload: {
      id: 2
    }
  })

  dispatch({
    type: "toggleDone",
    payload: {
      id: 2
    }
  })

  return (
    <div>
      <button onClick={handleAddClick}>Adicionar</button>
    </div>
  );
};

export default Page;
