import {useEffect, useState} from "react";
import useNextId from "./useNextId";
import request from '../fetch/todos';
import $ from 'jquery';
require('jquery-ui/ui/widgets/sortable');

export default function useTodos(todoList) {
    const [todos, setTodos] = useState(todoList)
    const nextId = useNextId(todos);
    const [abortController] = useState(new AbortController());
    const [error, setError] = useState('');
    const progress = isNaN(todos.filter(todo => todo.done).length * 100 / todos.length) ? 0 :
        (todos.filter(todo => todo.done).length * 100 / todos.length).toFixed(2);

    useEffect(() => {
        $('.Todos').sortable();
        request.getAll(abortController.signal)
            .then(res => {
                setTodos(res)
                setError('')
            })
            .catch(() => setError("les todos n'ont pas pu être récupéré"));
        return () => {
            abortController.abort();
        }
    }, [abortController])

    const append = (e, text, date) => {
        e.preventDefault();
        if (text !== '') {
            let todo = {
                id: nextId,
                text: text,
                date: date
            }
            document.getElementById("form").reset();
            document.querySelector('#error').classList.add('hidden');
            request.append(text, date, false, abortController.signal)
                .then(() => {
                    setTodos(todos.concat(todo));
                    setError('')
                })
                .catch(() => setError("le todo n'a pas pu être crée"))
        } else {
            document.querySelector('#error').classList.remove('hidden');
        }
    }

    const remove = (todo) => {
        request.remove(todo, abortController.signal)
            .then(() => {
                setTodos(todos.filter(currentTodo => currentTodo !== todo));
                setError('')
            })
            .catch(() => setError("le todo n'a pas pu être supprimé"))
    }

    const update = (todo) => {
        let currentTodos = [...todos];
        let i = currentTodos.indexOf(todo);
        currentTodos[i].done = !currentTodos[i].done;
        request.update(currentTodos[i], abortController.signal)
            .then(() => {
                setTodos(currentTodos);
                setError('')
            })
            .catch(() => setError("le todo n'a pas pu être modifié"))
    }

    return [todos, append, update, remove, error, progress]
}