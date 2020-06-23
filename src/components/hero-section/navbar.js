import React from 'react'
import Logo from './icons/logo'
import styles from '../../styles/hero-section/navbar.module.css'
import Menu from './icons/menu'
import DesktopNav from './desktop-navbar'

const Navbar = ({ onClick }) => (
  <nav className={styles.navbar}>
    <Logo />
    <DesktopNav />
    <Menu onClick={onClick} />
  </nav>
)

export default Navbar
