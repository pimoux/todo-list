import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { updateTodo, removeTodo } from '../actions/todos'

const mapDispatchToProps = dispatch => ({
    updateTodo: todo => {dispatch(updateTodo(todo))},
    removeTodo: todo => {dispatch(removeTodo(todo))}
})

export default connect(null, mapDispatchToProps)(Todo)