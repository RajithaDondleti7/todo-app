import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodo() {
        if (task.trim() === "") {
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: task,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setTask("");
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function completeTodo(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }

    return (
        <div className="container">
            <h1>TODO Application</h1>

            <TodoForm
                task={task}
                setTask={setTask}
                addTodo={addTodo}
            />

            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
            />
        </div>
    );
}

export default App;