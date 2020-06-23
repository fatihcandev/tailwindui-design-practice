import React from 'react'
import styles from '../../../styles/hero-section/menu.module.css'
import Button from '../../button'

const Menu = ({ onClick }) => (
  <Button
    className={styles.menu}
    onClick={onClick}
    aria-label="open mobile navbar"
  >
    <svg
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h8m-8 6h16"></path>
    </svg>
  </Button>
)

export default Menu
