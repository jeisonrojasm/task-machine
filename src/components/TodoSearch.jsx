import '../styles/TodoSearch.css';

export const TodoSearch = () => {
    return (
        <div className="todo-search">
            <input type="text" placeholder="Ingresa tu próxima tarea" className='todo-search__input' />
            <i className="bi bi-search todo-search__icon"></i>
        </div>
    )
}
