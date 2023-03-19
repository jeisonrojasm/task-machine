import './CreateTodoButton.css';


export const CreateTodoButton = ({ setOpenModal }) => {
    const onClickCreateTodoButton = () => {
        setOpenModal(true);
    };
    return (
        <div className='create-todo-button' onClick={onClickCreateTodoButton}>
            <button className="create-todo-button__container">
                <span className="create-todo-button__text">+</span>
            </button>
        </div>
    )
}
