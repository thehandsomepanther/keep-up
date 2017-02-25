import { connect } from 'react-redux'
import { removeTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(removeTodo(id))
    }
  }
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoContainer
