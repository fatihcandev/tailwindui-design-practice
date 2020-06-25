import React from 'react'
import Button from '../button'
import styles from '../../styles/sign-in-page/sign-in-button.module.css'

const SignInButton = ({ label, children }) => (
  <Button className={styles.signInButton} aria-label={label}>
    {children}
  </Button>
)

export default SignInButton
