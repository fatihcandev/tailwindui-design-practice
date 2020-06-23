import React from 'react'
import TextBody from '../text-body'
import styles from '../../styles/hero-section/dekstop-nav.module.css'

const DesktopNav = () => (
  <div className={styles.desktopNav}>
    <TextBody>Product</TextBody>
    <TextBody>Features</TextBody>
    <TextBody>Marketplace</TextBody>
    <TextBody>Company</TextBody>
    <TextBody>Login</TextBody>
  </div>
)

export default DesktopNav
