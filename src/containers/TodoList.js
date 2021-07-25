import TodoList from '../components/TodoList'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    todos: state.data,
})

export default connect(mapStateToProps)(TodoList)