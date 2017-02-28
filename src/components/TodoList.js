import React from 'react'
import Todo from './Todo'
import { StyleSheet, css } from 'aphrodite'

const TodoList = ({ todos=[], onTodoClick }) => (
  <ul className={css(styles.ul)}>
    { todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList

const styles = StyleSheet.create({
  ul: {
    padding: 0,
    marginBottom: 0
  }
})
