function TodoItem({ todo, deleteTodo, completeTodo }) {
    return (
        <li>
            <span
                onClick={() => completeTodo(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                }}
            >
                {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
        </li>
    );
}

export default TodoItem;