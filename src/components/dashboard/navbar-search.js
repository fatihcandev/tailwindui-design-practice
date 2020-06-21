import React from 'react'
import Search from './icons/search'
import TextBody from './text-body'
import styles from '../../styles/dashboard/navbar.module.css'

const NavbarSearch = () => (
  <div className={styles.navbarSearch}>
    <Search />
    <TextBody>Search</TextBody>
  </div>
)

export default NavbarSearch
