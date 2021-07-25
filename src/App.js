import React from "react";
import './App.css';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import useTodos from "./services/hooks/useTodos";
import ProgressRing from "./components/ProgressRing";

export default function App() {
    const [todos, onCreate, onChange, onDelete, error, progress] = useTodos([]);
    return (
        <div className='App'>
            <Header/>
            {error && <p className='error'>{error}</p>}
            <p id='error' className="hidden error">Vous ne pouvez pas créer une tâche vide</p>
            <ProgressRing radius={60} stroke={4} progress={progress}/>
            <div id="todo-container">
                <CreateTodo onCreate={onCreate}/>
                <TodoList todos={todos} onChange={onChange} onDelete={onDelete}/>
            </div>
        </div>
    )
}