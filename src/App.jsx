import { useState } from 'react';

import './App.css';

import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const defaultTodos = [
  { text: 'Iniciar proyecto de React', done: true },
  { text: 'Utilizar git y GitHub', done: true },
  { text: 'Aprender Typescript', done: false },
  { text: 'Aprender Typescript2', done: false },
];

function App() {

  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => todo.done === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length < 1) {
    searchedTodos = [...todos];
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchedText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchedText);
    });
  }

  return (
    <>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo => <TodoItem key={todo.text} text={todo.text} done={todo.done} />)}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
