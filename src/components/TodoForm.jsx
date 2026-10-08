function TodoForm({ task, setTask, addTodo }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default TodoForm;