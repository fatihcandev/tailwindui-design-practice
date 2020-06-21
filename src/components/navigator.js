import React from 'react'
import TextBody from './text-body'
import { Link } from 'gatsby'
import styles from '../styles/navigator.module.css'
import ArrowRight from './arrow'

const Navigator = ({ to, children }) => (
  <div className={styles.navigator}>
    <ArrowRight />
    <Link to={to}>
      <TextBody>{children}</TextBody>
    </Link>
  </div>
)

export default Navigator
