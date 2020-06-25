import React from 'react'
import Button from '../button'
import styles from '../../styles/sign-in-page/social-button.module.scss'

const SocialButton = ({ label, children }) => (
  <Button className={styles.socialButton} aria-label={label}>
    {children}
  </Button>
)

export default SocialButton
