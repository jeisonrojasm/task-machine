import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext';

import './TodoForm.css';

export const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = useState('');

    const { onAddTodo, setOpenModal } = useContext(TodoContext);

    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event) => {
        event.preventDefault();
        onAddTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onAdd} className="todo-form">
            <label>

            </label>
            <textarea placeholder="Escribe aquí tu tarea..." onChange={onWrite} className="todo-form___input" />

            <div>
                <button onClick={onCancel} type="button" className='todo-form__button todo-form__button--cancel'>
                    Cancelar
                </button>
                <button onClick={onAdd} type="submit" className='todo-form__button todo-form__button--add'>
                    Añadir
                </button>
            </div>
        </form>
    )
}
