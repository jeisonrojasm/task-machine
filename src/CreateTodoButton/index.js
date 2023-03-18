import './CreateTodoButton.css';

const onClickCreateTodoButton = () => {
    alert('onClickCreateTodoButton');
};

export const CreateTodoButton = () => {
    return (
        <div className='create-todo-button' onClick={onClickCreateTodoButton}>
            <button className="create-todo-button__container">
                <span className="create-todo-button__text">+</span>
            </button>
        </div>
    )
}
