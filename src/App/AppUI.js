import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';

export const AppUI = ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    onDoneToDo,
    onDeleteToDo,
}) => {
    return (
        <>
            <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <TodoList>
                {searchedTodos.map(todo => <TodoItem key={todo.text} text={todo.text} done={todo.done} onDoneToDo={() => onDoneToDo(todo.text)} onDeleteToDo={() => onDeleteToDo(todo.text)} />)}
            </TodoList>

            <CreateTodoButton />
        </>
    )
}
