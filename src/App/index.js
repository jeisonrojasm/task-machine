import './App.css';

import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   { text: 'Iniciar proyecto de React', done: true },
//   { text: 'Utilizar git y GitHub', done: true },
//   { text: 'Aprender Typescript', done: false },
//   { text: 'Aprender Typescript2', done: false },
// ];


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
