import React from 'react'
import styles from '../../styles/sign-in-page/input.module.css'

const Input = ({ ph, type }) => (
  <input type={type} className={styles.input} placeholder={ph} />
)

export default Input
