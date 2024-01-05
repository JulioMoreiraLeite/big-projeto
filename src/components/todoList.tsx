/* eslint-disable react/jsx-key */
"use client";
import { TodoItem } from "@/types/TodoItem";
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const TodoList = () => {
  // state do input
  const [itemInput, setItemInput] = useState("");
  // state da list
  const [list, setList] = useState<TodoItem[]>([
    // padrões que aparecem no todo
    { id: 1, label: "Fazer café da manhã", checked: true },
    { id: 2, label: "Fazer almoço", checked: false },
    { id: 3, label: "Tomar banho", checked: false },
  ]);

  // btn de add
  const handleAddButton = () => {
    // se escrever algo no input sai aqui
    if (itemInput !== "") {
      // pega a lista existente e cria uma nova colocando um novo item
      setList([
        ...list,
        { id: list.length + 1, label: itemInput, checked: false },
      ]);
      // deixa o input vazio
      setItemInput("");
      // se a pessoa não escrever nada cai no else
    } else {
      alert("Campo Vazio, Adicione Algo !");
    }
  };

  // btn de delete
  const deleteItem = (id: number) => {
    // filter para deletar o item que estamos clicando localizando pelo index do array dele
    setList(list.filter((item) => item.id !== id));
  };

  // check e uncheck toggle
  const toggleItem = (id: number) => {
    let newList = [...list];
    // loop para criar novo array mudando para o oposto dele
    for (let i in newList) {
      // verifica se o index é igual ao i(index é a posição do array)
      if (newList[i].id === id) {
        // lista vira o oposto de lista
        newList[i].checked = !newList[i].checked;
      }
    }
    // setList no novo array criado
    setList(newList);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      <p className="my-4">{list.length} - Itens na Lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {/* Map para buscar todos os lists existentes lá em cima */}
        {list.map((item) => (
          <li key={item.id}>
            <input
              onClick={() => toggleItem(item.id)}
              type="checkbox"
              checked={item.checked}
              className="w-6 h-6 mr-3"
            />
            {item.label} -
            <button
              onClick={() => deleteItem(item.id)}
              className="hover:underline"
            >
              [ deletar ]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
