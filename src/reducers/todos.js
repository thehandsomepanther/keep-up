const todo = (state, action) => {
  switch(action.type) {
    case 'REMOVE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text
      }
    default:
      return state
  }
}

const todos = (state=[], action) => {
  switch(action.type) {
    case 'REMOVE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

export default todos
