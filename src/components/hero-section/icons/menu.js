import React from 'react'
import styles from '../../../styles/hero-section/call-to-action.module.css'

const Menu = ({ onClick }) => (
  <button className={styles.menu} onClick={onClick}>
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
  </button>
)

export default Menu
