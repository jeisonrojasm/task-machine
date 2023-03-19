import React, { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const { item, saveItem, loading, error } = useLocalStorage('TODOS_V1', []);

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
        saveItem(auxTodos);
    };

    // Eliminar una tarea

    const onDeleteToDo = (text) => {
        const auxTodos = [...item];
        const deleteTodoIndex = auxTodos.findIndex(todo => todo.text === text);
        auxTodos.splice(deleteTodoIndex, 1);
        saveItem(auxTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            onDoneToDo,
            onDeleteToDo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};