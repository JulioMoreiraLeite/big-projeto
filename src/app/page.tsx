/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { listReducer } from "@/reducer/listReducer";
import { Item } from "@/types/Item";
import { log } from "console";
import { useState, useEffect, useReducer } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState("");

  const handleAddButtom = () => {
    if (addField.trim() === "") return false;

    dispatch({
      type: "add",
      payload: {
        text: addField.trim(),
      },
    });
  };
  const handleDelButtom = (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir?')) return false;

    dispatch({
      type: "remove",
      payload: { id },
    });
  };
  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id },
    });
  };
  const handleEdit = (id: number) => {

    const item = list.find(it => it.id === id);
    if(!item) return false;

    const newText = window.prompt('Editar Tarefa', item.text);
    if(!newText || newText?.trim() === '') return false;

    dispatch({
      type: "editText",
      payload: {
        id,
        newText
      }
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Lista de Tarefas:</h1>
      <div className="max-w-2xl mx-auto flex border border-gray-400 p-4 my-4 rounded-md bg-gray-800">
        <input
          placeholder="Digite um item"
          type="text"
          className="flex-1 border border-white p-3 bg-transparent text-white rounded-md"
          value={addField}
          onChange={(e) => setAddField(e.target.value)}
        />
        <button
          className="p-4 mx-4 bg-green-600 rounded-md border-2 border-green-800 hover:bg-green-900"
          onClick={handleAddButtom}
        >
          ADD
        </button>
      </div>
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            className="flex p-3 my-3 border-b border-gray-500 items-center"
          >
            <input
              type="checkbox"
              className="w-6 h-6 mr-4"
              checked={item.done}
              onClick={() => handleDoneCheckbox(item.id)}
            />
            <p className="flex-1 text-lg hover:underline">{item.text}</p>
            <button
              className="mx-2 bg-blue-600 p-3 rounded-md hover:bg-blue-950"
              onClick={() => handleEdit(item.id)}
            >
              Editar
            </button>
            <button
              className="mx-2 bg-red-600 p-3 rounded-md hover:bg-red-950"
              onClick={() => handleDelButtom(item.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
