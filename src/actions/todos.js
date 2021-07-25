/*
 * action types
 */

export const TODOS_SET = 'TODOS_SET'
export const TODOS_UPDATE = 'TODOS_UPDATE'
export const TODOS_REMOVE = 'TODOS_REMOVE'
export const TODOS_CREATE = 'TODOS_CREATE'


/*
 * action creators
 */

export function setTodos(todos) {
    return { type: TODOS_SET, todos }
}

export function updateTodo(todo) {
    return {type: TODOS_UPDATE, todo};
}

export function removeTodo(todo) {
    return {type: TODOS_REMOVE, todo}
}