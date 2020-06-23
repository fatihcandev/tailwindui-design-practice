import React from 'react'
import TextBody from '../text-body'
import Logo from './icons/logo'
import styles from '../../styles/hero-section/mobile-nav.module.css'
import Close from './icons/close'

const MobileNav = ({ navOpen, onClick }) => (
  <div className={navOpen ? styles.mobileNavContainer : styles.mobileNav}>
    <div className={styles.mobileNavOpen}>
      <div className={styles.mobileNavHeader}>
        <Logo />
        <Close onClick={onClick} />
      </div>
      <TextBody>Product</TextBody>
      <TextBody>Features</TextBody>
      <TextBody>Marketplace</TextBody>
      <TextBody>Company</TextBody>
      <TextBody className={styles.loginText}>Login</TextBody>
    </div>
  </div>
)

export default MobileNav
