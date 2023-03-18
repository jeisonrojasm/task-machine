import { useEffect, useState } from 'react';

import './App.css';

import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Iniciar proyecto de React', done: true },
//   { text: 'Utilizar git y GitHub', done: true },
//   { text: 'Aprender Typescript', done: false },
//   { text: 'Aprender Typescript2', done: false },
// ];

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  // Estado todos

  const [item, setItem] = useState(parsedItem);

  // Guardar dones y deletes en localStorage

  const saveItem = (newItem) => {
    const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {

  const [item, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');

  const completedTodos = item.filter(todo => todo.done === true).length;
  const totalTodos = item.length;

  let searchedTodos = item;

  if (searchValue.length < 1) {
    searchedTodos = [...item];
  } else {
    searchedTodos = item.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchedText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchedText);
    });
  }



  // Marcar tareas como completas

  const onDoneToDo = (text) => {
    const auxTodos = [...item];
    const doneTodoIndex = auxTodos.findIndex(todo => todo.text === text);
    auxTodos[doneTodoIndex].done = !auxTodos[doneTodoIndex].done;
    saveTodos(auxTodos);
  };

  // Eliminar una tarea

  const onDeleteToDo = (text) => {
    const auxTodos = [...item];
    const deleteTodoIndex = auxTodos.findIndex(todo => todo.text === text);
    auxTodos.splice(deleteTodoIndex, 1);
    saveTodos(auxTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      onDoneToDo={onDoneToDo}
      onDeleteToDo={onDeleteToDo}
    />
  );
}

export default App;
