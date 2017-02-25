import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Todo = ({ onClick, text }) => (
  <form>
    <input className={css(styles.button)} type="button" onClick={ onClick } />
    <label className={css(styles.label)}>{ text }</label>
  </form>
)

export default Todo

const styles = StyleSheet.create({
  button: {
    color: 'white',
    backgroundColor: '#ffffff',
    width: '40px',
    height: '40px',
    margin: '10px',
    border: '2px solid #0033CC',
    borderRadius: '4px',
    fontSize: '24px',
    padding: '0',
    fontWeight: '100',
    lineHeight: '32px',
    verticalAlign: 'top',
    transition: '.2s all linear',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: '#0033CC'
    }
  },
  label: {
    backgroundColor: '#ffffff',
    border: '0',
    margin: '10px 0',
    paddingLeft: '10px',
    fontSize: '24px',
    borderRadius: '4px',
    lineHeight: '40px'
  }
})
