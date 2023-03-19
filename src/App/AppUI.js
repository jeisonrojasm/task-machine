import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';

import { TodoContext } from '../TodoContext';
import { useContext } from 'react';

export const AppUI = () => {

    const { error, loading, searchedTodos, onDoneToDo, onDeleteToDo } = useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch /><TodoList>
                {error && <p>Hubo un error</p>}
                {loading && <p>Estamos cargando</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
                {searchedTodos.map(todo => <TodoItem key={todo.text} text={todo.text} done={todo.done} onDoneToDo={() => onDoneToDo(todo.text)} onDeleteToDo={() => onDeleteToDo(todo.text)} />)}
            </TodoList>
            <CreateTodoButton />
        </>
    )
}
