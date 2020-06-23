import React from 'react'
import Logo from './icons/logo'
import styles from '../../styles/hero-section/call-to-action.module.css'
import Menu from './icons/menu'

const Navbar = () => (
  <nav className={styles.navbar}>
    <Logo />
    <Menu />
  </nav>
)

export default Navbar
