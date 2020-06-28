import React from 'react'
import Logo from '../hero-section/icons/logo'
import Close from './icons/close'
import styles from '../../styles/hero-section-2/mobile-nav.module.css'
import TextBody from '../text-body'

const MobileNav = ({ onNavClose }) => (
  <div className={styles.wrapper}>
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>
        <div className={styles.menuTop}>
          <Logo />
          <Close onClick={onNavClose} />
        </div>
        <TextBody>Product</TextBody>
        <TextBody>Features</TextBody>
        <TextBody>Marketplace</TextBody>
        <TextBody>Company</TextBody>
      </div>
      <div className={styles.logo}>
        <TextBody>Login</TextBody>
      </div>
    </div>
  </div>
)

export default MobileNav
