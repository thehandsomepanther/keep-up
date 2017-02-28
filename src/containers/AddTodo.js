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
        <button className={css(styles.button)} type="submit">
          <svg className={css(styles.plus)} fill="#ffffff" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
        <input
          className={css(styles.input)}
          type='text'
          placeholder='Add new'
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
  form: {
    width: '90%',
    marginLeft: '5%',
    borderRadius: '8px',
    boxShadow: '0 0 4px 2px rgba(0, 0, 0, 0.14)',
    backgroundColor: '#f5f5f5',
    height: '64px'
  },
  button: {
    display: 'inline-block',
    color: 'white',
    backgroundColor: '#ffffff',
    width: '32px',
    height: '32px',
    margin: '16px',
    border: '1px solid #DADADA',
    borderRadius: '100%',
    padding: '0',
    fontWeight: '100',
    lineHeight: '32px',
    verticalAlign: 'top',
    ':hover svg': {
      cursor: 'pointer',
      fill: '#A8A8A8'
    },
    ':focus': {
      outline: 'none'
    }
  },
  plus: {
    transition: '.1s all linear'
  },
  input: {
    border: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    margin: '16px 0',
    fontSize: '14px',
    borderRadius: '4px',
    lineHeight: '32px',
    display: 'inline-block',
    fontFamily: 'Helvetica, sans-serif',
    ':focus': {
      outline: 'none'
    },
    display: 'inline-block',
    width: '250px'
  }
})
