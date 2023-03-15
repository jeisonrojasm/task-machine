import './App.css';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const todos = [
  { text: 'Iniciar proyecto de React', done: false },
  { text: 'Utilizar git y GitHub', done: false },
  { text: 'Aprender Typescript', done: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => <TodoItem key={todo.text} text={todo.text} />)}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
