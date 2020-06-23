import React from 'react'
import TextBody from './text-body'
import { Link } from 'gatsby'
import styles from '../styles/navigator.module.css'
import ArrowRight from './arrow'

const Navigator = ({ to, title, children }) => (
  <div className={styles.navigator}>
    <ArrowRight />
    <Link to={to} title={title}>
      <TextBody>{children}</TextBody>
    </Link>
  </div>
)

export default Navigator
