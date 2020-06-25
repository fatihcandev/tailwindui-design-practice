import React from 'react'
import styles from '../../styles/sign-in-page/input.module.css'

const Input = ({ ph, type, label }) => (
  <input
    type={type}
    className={styles.input}
    placeholder={ph}
    aria-label={label}
  />
)

export default Input
