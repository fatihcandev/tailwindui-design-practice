import React from 'react'
import styles from '../../styles/dashboard/navbar.module.css'
import NavbarSearch from './navbar-search'
import Avatar from './avatar'
import Bell from './icons/bell'
import Menu from './icons/menu'

const Navbar = ({ onClick }) => (
  <nav className={styles.navbar}>
    <Menu onClick={onClick} />
    <NavbarSearch />
    <div className={styles.right}>
      <Bell />
      <Avatar />
    </div>
  </nav>
)

export default Navbar
