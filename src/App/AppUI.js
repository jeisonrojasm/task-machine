import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { Modal } from '../Modal';

import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { TodoForm } from '../TodoForm';

import './App.css';

export const AppUI = () => {

    const { error, loading, searchedTodos, onDoneToDo, onDeleteToDo, openModal, setOpenModal } = useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch /><TodoList>
                {error && <p className='inicio'>Hubo un error</p>}
                {loading && <p className='inicio'>Estamos cargando</p>}
                {(!loading && !searchedTodos.length) && <p className='inicio'>Crea tu primer tarea</p>}
                {searchedTodos.map(todo => <TodoItem key={todo.text} text={todo.text} done={todo.done} onDoneToDo={() => onDoneToDo(todo.text)} onDeleteToDo={() => onDeleteToDo(todo.text)} />)}
            </TodoList>

            {
                openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }

            <CreateTodoButton setOpenModal={setOpenModal} />
        </>
    )
}
