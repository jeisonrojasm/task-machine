import './TodoItem.css';

export const TodoItem = ({ text, done, onDoneToDo, onDeleteToDo }) => {
    return (
        <li className='todo-item'>
            <span className={`todo-item__check ${done ? 'todo-item__check--done' : 'todo-item__check--undone'}`} onClick={onDoneToDo}>✓</span>
            <div className={`todo-item__text-container ${done ? 'todo-item__text-container--done' : 'todo-item__text-container--undone'}`}>
                <p className={`todo-item__text ${done ? 'todo-item__text--done' : 'todo-item__text--undone'}`}>
                    {text}
                </p>
                <span className='todo-item__close-btn' onClick={onDeleteToDo}>X</span>
            </div>
        </li>
    )
}
