import React from 'react'
import Logo from '../hero-section/icons/logo'
import styles from '../../styles/hero-section-2/navbar.module.css'
import Menu from './icons/menu'
import TextBody from '../text-body'
import Button from '../button'

const Navbar = ({ onNavOpen }) => (
  <nav className={styles.navbar}>
    <Logo className={styles.logo} />
    <Menu className={styles.menuIcon} onClick={onNavOpen} />
    <div className={styles.menu}>
      <TextBody>Product</TextBody>
      <TextBody>Features</TextBody>
      <TextBody>Marketplace</TextBody>
      <TextBody>Company</TextBody>
    </div>
    <Button className={styles.login}>Log in</Button>
  </nav>
)

export default Navbar
