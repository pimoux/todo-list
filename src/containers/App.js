import App from '../App'
import { connect } from 'react-redux'
import { setTodos } from '../actions/todos'

const mapDispatchToProps = dispatch => ({
    setTodos: todos => {dispatch(setTodos(todos))},
})

export default connect(null, mapDispatchToProps)(App)