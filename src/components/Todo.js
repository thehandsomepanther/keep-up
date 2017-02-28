import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Todo = ({ onClick, text }) => (
  <form className={css(styles.todo)}>
    <div className={css(styles.button)} onClick={ onClick }>
      <svg className={css(styles.checkmark)} fill="#ffffff" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    </div>
    <label className={css(styles.label)}>{ text }</label>
  </form>
)

export default Todo

const styles = StyleSheet.create({
  todo: {
    width: '90%',
    marginLeft: '5%',
    marginBottom: '10px',
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
    }
  },
  checkmark: {
    transition: '.1s all linear',
    padding: '2px'
  },
  label: {
    margin: '16px 0',
    fontSize: '14px',
    borderRadius: '4px',
    lineHeight: '32px',
    display: 'inline-block',
    fontFamily: 'Helvetica, sans-serif'
  }
})
