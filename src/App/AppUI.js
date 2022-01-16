import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

/* cargas */
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmpyTodos } from '../EmptyTodos';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completedTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
        <TodoList>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}        
            {(!loading && !searchedTodos.length) && <EmpyTodos />}
    
            { searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => completedTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>

        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    );
}

export { AppUI };