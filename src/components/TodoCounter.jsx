import '../styles/TodoCounter.css';

export const TodoCounter = ({ totalTodos, completedTodos }) => {
    return (
        <div className='todo-counter'>
            <div className='todo-counter__heading'>
                <h2 className='todo-container__title'>
                    To-Do <br />
                    <span className='todo-container__title-span'>APP</span>
                </h2>
                <span className='todo-container__icon'>📑</span>
            </div>

            <h3 className='todo-counter__completed-tasks'>
                Has completado {completedTodos} de {totalTodos} tareas
            </h3>
        </div>
    )
}
