import '../styles/TodoSearch.css';


export const TodoSearch = ({ searchValue, setSearchValue }) => {

    const onInputChange = ({ target }) => {
        console.log(target.value);
        setSearchValue(target.value);
    };

    return (
        <div className="todo-search">
            <input type="text" placeholder="Buscar tareas..." className='todo-search__input' onChange={onInputChange} />
            <i className="bi bi-search todo-search__icon"></i>
        </div>
    )
}
