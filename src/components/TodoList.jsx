import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, completeTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;