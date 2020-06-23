import React from 'react'
import styles from '../../styles/hero-section/call-to-action.module.css'

const CallToAction = ({ children }) => (
  <div className={styles.callToAction}>{children}</div>
)

export default CallToAction
