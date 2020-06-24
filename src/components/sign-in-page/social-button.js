import React from 'react'
import Button from '../button'
import styles from '../../styles/sign-in-page/social-button.module.scss'

const SocialButton = ({ children }) => (
  <Button className={styles.socialButton}>{children}</Button>
)

export default SocialButton
