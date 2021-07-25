import React from "react";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Check from "./Check";

export default function Todo({todo, className, onDelete, onChange}) {
    return (
        <div className={className}>
            <div className="todo-check-text">
                <Check checked={todo.done} onChange={() => onChange(todo)}/>
                {todo.done ?
                    <div className="todo-text-container">
                        <p className='todo-text isDone underline'>{todo.text}</p>
                        <p className='todo-text isDone'>{todo.date}</p>
                    </div> :
                    <div className="todo-text-container">
                        <p className='todo-text underline'>{todo.text}</p>
                        <p className='todo-text'>{todo.date}</p>
                    </div>
                }
            </div>
            <FontAwesomeIcon className="todo-trash" icon={faTrash} onClick={() => onDelete(todo)}/>
        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.object,
    className: PropTypes.string,
    onDelete: PropTypes.func,
    onChange: PropTypes.func
}

Todo.defaultProps = {
    className: 'Todo'
}