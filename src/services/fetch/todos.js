const POST = 'POST';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

const jsonFetch = (method, url, data = {}) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
}

module.exports = {
    getAll: () => {
        return fetch(`${process.env.REACT_APP_API_URL}/todos`)
            .then(res => res.json())
    },

    append: (text, date, done = false) => {
        let todo = {
            text: text,
            done: done,
            date: date
        }
        return jsonFetch(POST, `${process.env.REACT_APP_API_URL}/todos`, todo);
    },

    update: (todo) => {
        return jsonFetch(PATCH, `${process.env.REACT_APP_API_URL}/todos/${todo.id}`, todo)
    },

    remove: (todo) => {
        return jsonFetch(DELETE, `${process.env.REACT_APP_API_URL}/todos/${todo.id}`);
    }
}