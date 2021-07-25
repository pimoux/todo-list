import {
    TODOS_SET, TODOS_UPDATE, TODOS_REMOVE, TODOS_CREATE
} from '../actions/todos';

const initialValues = {
    data: []
}

function reducers(state = initialValues, action) {
    switch (action.type) {
        case TODOS_SET:
            return {...state, data: action.todos}
        case TODOS_UPDATE:
            console.log('je passe dans todos update');
            break;
        case TODOS_REMOVE:
            console.log('je passe dans delete')
            break;
        default:
            return state
    }
}

export default reducers