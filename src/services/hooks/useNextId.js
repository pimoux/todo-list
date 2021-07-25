export default function useNextId(todos) {
    return todos.length < 1 ? 1 : Math.max(...todos.map(todo => todo.id)) + 1;
}