let nextTodoId = 0

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
})

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  active: true,
  text
})
