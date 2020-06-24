import React from 'react'
import TextBody from '../text-body'
import styles from '../../styles/sign-in-page/divider.module.css'

const Divider = () => (
  <div className={styles.divider}>
    <span />
    <TextBody>Or continue with</TextBody>
    <span />
  </div>
)

export default Divider
