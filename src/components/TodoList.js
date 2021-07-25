import React from "react";
import PropTypes from 'prop-types';
import Todo from "../components/Todo";

export default function TodoList({todos, className, onChange, onDelete}) {
    return (
        <div className={className}>
            {todos.map((todo, index) => <Todo todo={todo} key={index} onDelete={onDelete} onChange={onChange}/>)}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    className: PropTypes.string,
    onDelete: PropTypes.func,
    onChange: PropTypes.func
}

TodoList.defaultProps = {
    className: 'Todos'
}