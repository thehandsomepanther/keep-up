import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { StyleSheet, css } from 'aphrodite'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        className={css(styles.form)}
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <button
          className={css([styles.inlineBox, styles.button])}
          type="submit">
          +
        </button>
        <input
          className={css([styles.inlineBox, styles.input])}
          type='text'
          ref={(node) => {
          input = node
        }} />
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo

const styles = StyleSheet.create({
  inlineBox: {
    boxSizing: 'border-box',
    display: 'inline-block'
  },
  form: {
    opacity: .8,
    backgroundColor: '#E5EAF9',
    transition: '.2s opacity linear',
    ':hover': {
      opacity: 1
    },
    height: '60px'
  },
  button: {
    color: 'white',
    backgroundColor: '#0033CC',
    width: '40px',
    height: '40px',
    margin: '10px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '24px',
    padding: '0',
    fontWeight: '100',
    lineHeight: '32px',
    verticalAlign: 'top',
    ':hover': {
      cursor: 'pointer'
    }
  },
  input: {
    backgroundColor: '#ffffff',
    border: '0',
    margin: '10px 0',
    paddingLeft: '10px',
    fontSize: '24px',
    borderRadius: '4px',
    lineHeight: '40px'
  }
})
