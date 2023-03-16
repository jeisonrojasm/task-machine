import '../styles/TodoItem.css';

export const TodoItem = ({ text, done }) => {
    return (
        <li className='todo-item'>
            <span className={`todo-item__check ${done ? 'todo-item__check--done' : 'todo-item__check--undone'}`}>✓</span>
            <div className={`todo-item__text-container ${done ? 'todo-item__text-container--done' : 'todo-item__text-container--undone'}`}>
                <p className={`todo-item__text ${done ? 'todo-item__text--done' : 'todo-item__text--undone'}`}>
                    {text}
                </p>
                <span className='todo-item__close-btn'>X</span>
            </div>
        </li>
    )
}
