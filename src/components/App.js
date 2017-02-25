import React from 'react'
import TodoContainer from '../containers/TodoList'
import AddTodo from '../containers/AddTodo'
import { StyleSheet, css } from 'aphrodite'

const App = () => (
  <div className={css(styles.app)}>
    <TodoContainer />
    <AddTodo />
  </div>
)

export default App

const styles = StyleSheet.create({
  app: {

  }
})
