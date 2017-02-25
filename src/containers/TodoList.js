import { connect } from 'react-redux'
import { removeTodo } from '../actions'
import TodoList from '../components/TodoList'

const getActiveTodos = (todos) => {
  return todos.filter(t => t.active)
}

const mapStateToProps = (state) => ({
  todos: getActiveTodos(state.todos)
})

const mapDispatchToProps = {
  onTodoClick: removeTodo
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoContainer
