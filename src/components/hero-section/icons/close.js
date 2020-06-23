import React from 'react'
import styles from '../../../styles/hero-section/mobile-nav.module.css'

const Close = ({ onClick }) => (
  <button onClick={onClick}>
    <svg
      className={styles.close}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>
)

export default Close
